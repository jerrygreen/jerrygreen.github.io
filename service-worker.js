'use strict'
self.importScripts('localforage.min.js')
const localForage = localforage
const locales = ['ru', 'en'] // TODO: read locales dynamically, too!
const UPDATE_INTERVAL = 600000
const API_URL = 'https://jerrygreen.deno.dev'
let langP = Promise.resolve('en')
let pagesP = Promise.resolve([])
let settingsP = Promise.resolve(null)
let lang = ''
let pages = []
let settings = null
let subscriberCount = null
let settingsCachedAt = 0
async function getSettings() {
	const res = await fetch(`${API_URL}/settings`)
	if (!res.ok) throw new Error('Server unavailable!')
	const json = await res.json()
	return json
}
async function updateSettings() {
	if (!settings || (settings && Date.now() - settingsCachedAt > UPDATE_INTERVAL)) {
		const serverSettings = await getSettings()
		const staticSettings = await fetch('/settings.json').then((res) => res.json())
		// TODO: store server settings under sub-key, or separate file (info.json..?)
		const newSettings = { ...staticSettings, ...settings, ...serverSettings }
		settings = newSettings
		localForage.setItem('settings', newSettings)
		return newSettings
	} else return settings
}
const makePromise = () => {
	langP = localForage.getItem('lang')
	pagesP = localForage.getItem('pages')
	settingsP = localForage.getItem('settings').then((v) => {
		if (v) return v
		return updateSettings()
	})
	return new Promise((resolve, reject) =>
		Promise.all([langP, pagesP, settingsP]).then((params) => {
			const [nextLang, nextPages, nextSettings] = params
			lang = nextLang
			pages = nextPages
			settings = nextSettings
			return resolve([nextLang, nextPages, nextSettings])
		})
	)
}
let promise = makePromise()

self.addEventListener('install', async (event) => {
	self.skipWaiting()
	event.waitUntil(makePromise())
})

self.addEventListener('fetch', (event) => {
	// console.info('[ServiceWorker] Fetch', event.request, 'v6')
	const promise2 = promise.then((params) => {
		// const [lang, pages, settings] = params
		// const lang = settings.lang
		const urlObj = new URL(event.request.url)
		const pathname = urlObj.pathname
		if (pathname == '/settings.json') {
			return Promise.resolve(new Response(JSON.stringify(settings), event.request))
		}
		if (urlObj.origin == location.origin && pages.includes(pathname)) {
			// TODO: cannot be unknown anymore (?)
			const append = lang && lang != 'unknown' ? lang : ''
			if (append) makePromise()
			/** @type {Promise<Response>} */
			const responseP = new Promise((resolve, reject) => {
				const path = (pathname == '/' ? `/${append}` : `/${append}${pathname}`).replace('//', '/')
				const req = new Request(path, { ...event.request, credentials: 'include' })
				let response
				fetch(req)
					.then((res) => {
						response = res
						return res.text()
					})
					.then((txt) => {
						const count = settings.subscriberCount
						const body = txt.replace(/(<subscribers.*>)\d+(.*<\/subscribers>)/, '$1' + count + '$2')
						resolve(new Response(body, response))
					})
				// .catch((error) => reject(error))
			})
			return responseP
		}
		return fetch(event.request)
	})
	event.respondWith(promise2)
})

self.addEventListener('message', function (event) {
	const data = event.data
	switch (data.type) {
		// CHANGE_LANG useful later, when service-worker gets more complex
		case 'CHANGE_LANG': {
			lang = data.lang
			return
		}
		case 'SKIP_WAITING': {
			self.skipWaiting()
			return
		}
	}
})
