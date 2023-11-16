<script>
	/* global gtag */
	import { PUBLIC_GOOGLE_ANALYTICS_TAG } from '$env/static/public';

	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let cookiesKey = '@odd-studio/cookie-consent';
	let showModal = false;

	if (typeof gtag !== 'undefined') {
		gtag('js', new Date());

		gtag('consent', 'default', {
			ad_storage: 'denied',
			analytics_storage: 'denied'
		});

		gtag('config', PUBLIC_GOOGLE_ANALYTICS_TAG, {
			page_title: browser ? document.title : 'Unknown',
			page_path: $page.url.pathname
		});
	}

	const checkCookiesConsent = () => localStorage.getItem(cookiesKey) === 'allow';

	const enableCookies = () => {
		gtag('consent', 'update', {
			ad_storage: 'granted',
			analytics_storage: 'granted'
		});

		localStorage.setItem(cookiesKey, 'allow');
		showModal = false;
	};

	const disableCookies = () => {
		localStorage.removeItem(cookiesKey);
		showModal = false;
	};

	onMount(() => (browser && checkCookiesConsent() ? enableCookies() : (showModal = true)));
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
	</script>
</svelte:head>

{#if showModal}
	<aside id="odd-cookie-consent">
		<button type="button" id="enable-cookies-button" on:click={enableCookies}>
			Sure, have a cookie!
		</button>
		<button type="button" id="disable-cookies-button" on:click={disableCookies}>
			No cookie today.
		</button>
	</aside>
{/if}

<style>
</style>
