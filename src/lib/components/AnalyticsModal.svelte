<script>
    /* global gtag */
    import { PUBLIC_GOOGLE_ANALYTICS_TAG } from '$env/static/public';
    import { browser } from '$app/environment';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    export let pattern;
    let cookiesKey = '@odd-studio/cookie-consent';
    let showModal = false;

    if (typeof gtag !== 'undefined') {
        gtag('js', new Date());

        gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
        });
    }

    const checkCookiesConsent = () =>
        localStorage.getItem(cookiesKey) === 'allow';

    const enableCookies = () => {
        gtag('consent', 'update', {
            ad_storage: 'granted',
            analytics_storage: 'granted',
        });

        gtag('config', PUBLIC_GOOGLE_ANALYTICS_TAG, {
            page_title: $page.url.pathname || 'Unknown',
            page_path: $page.url.pathname,
        });

        localStorage.setItem(cookiesKey, 'allow');
        showModal = false;
    };

    const disableCookies = () => {
        localStorage.setItem(cookiesKey, 'disable');
        showModal = false;
    };

    onMount(() =>
        browser && checkCookiesConsent() ? enableCookies() : (showModal = true)
    );
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

{#if showModal && PUBLIC_GOOGLE_ANALYTICS_TAG}
    <aside class={pattern ? `odd-${pattern}` : ''}>
        <h5>Guess what? Cookies! 🍪</h5>
        <p>
            Our website uses cookies to enhance your experience. By clicking on
            “accept”, you consent to our use of cookies. For more information,
            see our <a
                href="https://oddstudio.notion.site/Odd-Studio-s-Website-Privacy-Policy-29d04b6fc3e7438c89d491b2e9a04e43"
                rel="external noopener noreferrer"
                target="_blank">privacy policy</a
            >.
        </p>
        <div>
            <button
                type="button"
                id="enable-cookies-button"
                on:click={enableCookies}
            >
                Accept
            </button>
            <button
                type="button"
                id="disable-cookies-button"
                on:click={disableCookies}
            >
                Decline
            </button>
        </div>
    </aside>
{/if}

<style>
    aside {
        background-color: var(--odd-gray-light);
        border-radius: 1.25rem;
        -webkit-box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.2);
        display: block;
        position: fixed;
        z-index: 200;
    }

    aside h5 {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.04rem;
        line-height: 110%;
        text-align: center;
    }

    aside p {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.025rem;
        line-height: 125%;
    }

    aside p a {
        cursor: pointer;
        font-weight: 600;
        text-decoration: underline;
    }

    aside.odd-studio p a {
        color: var(--odd-purple-medium);
    }

    aside.odd-education p a {
        color: var(--odd-blue-medium);
    }

    aside.odd-experiments p a {
        color: var(--odd-turquoise-medium);
    }

    aside div {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    aside button {
        background-color: transparent;
        border: 1px solid var(--odd-gray-dark);
        border-radius: 3.25rem;
        color: var(--odd-gray-dark);
        cursor: pointer;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.025rem;
        text-transform: lowercase;
    }

    aside.odd-studio button:hover {
        background-color: var(--odd-purple-medium);
        border: var(--odd-purple-medium);
        color: var(--odd-gray-light);
    }

    aside.odd-education button:hover {
        background-color: var(--odd-blue-medium);
        border: var(--odd-blue-medium);
        color: var(--odd-gray-light);
    }

    aside.odd-experiments button:hover {
        background-color: var(--odd-turquoise-medium);
        border: var(--odd-turquoise-medium);
        color: var(--odd-gray-light);
    }

    @media only screen and (max-width: 600px) {
        aside {
            bottom: 1rem;
            padding: 1.5rem 1.25rem 1.25rem 1.25rem;
            right: calc(50vw - 10rem);
            width: 20rem;
        }

        aside h5 {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
        }

        aside p {
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        aside div {
            gap: 0.75rem;
        }

        aside button {
            font-size: 1.125rem;
            min-width: 8rem;
            padding: 0.5rem 1.25rem;
        }
    }

    @media only screen and (min-width: 600px) {
        aside {
            bottom: 1rem;
            padding: 1.5rem 1.25rem 1.25rem 1.25rem;
            right: 1rem;
            width: 20rem;
        }

        aside h5 {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
        }

        aside p {
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        aside div {
            gap: 0.75rem;
        }

        aside button {
            font-size: 1.125rem;
            min-width: 8rem;
            padding: 0.5rem 1.25rem;
        }
    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1024px) {
        aside {
            bottom: 1.5rem;
            padding: 1.5rem 1.5rem 1.25rem 1.5rem;
            right: 1.5rem;
            width: 27.5rem;
        }

        aside h5 {
            font-size: 1.75rem;
            margin-bottom: 0.5rem;
        }

        aside div {
            gap: 1.25rem;
        }

        aside button {
            min-width: 10rem;
        }
    }

    @media only screen and (min-width: 1280px) {
    }

    @media only screen and (min-width: 1536px) {
    }
</style>
