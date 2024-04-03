<script>
    import { onMount } from 'svelte';
    import { cubicInOut } from 'svelte/easing';
    import { fade, slide } from 'svelte/transition';
    import { page } from '$app/stores';

    export let pattern;
    export let delayed;

    let showMenu = false;
    let stuck = false;
    let height = 0;

    const checkScroll = () => {
        const screenHeight = document.documentElement.clientHeight;
        const offset = window.scrollY + height;

        stuck = delayed ? screenHeight / 2 < offset : screenHeight < offset;
    };

    const checkCurrentPage = (link) =>
        $page.url.pathname === link.href ||
        $page.url.pathname + '/' === link.href;

    const getBackgroundImage = (pattern, imageType) =>
        `background-image: url(/brand/${imageType}-${pattern}-dark.svg);`;

    const content = [
        { text: 'home', href: '/' },
        { text: 'odd.studio', href: '/studio/' },
        { text: 'odd.education', href: '/education/' },
        { text: 'odd.experiments', href: '/experiments/' },
    ];

    onMount(() => {
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('touchmove', checkScroll);

        return () => {
            window.removeEventListener('resize', checkScroll);
            window.removeEventListener('touchmove', checkScroll);
        };
    });
</script>

{#if !delayed || stuck}
    <nav
        bind:clientHeight={height}
        class={`${stuck ? 'stuck' : ''} ${showMenu ? '' : 'with-shadow'}  ${pattern ? `odd-${pattern}` : ''}`}
    >
        <div class="mobile-content">
            <a href={pattern === 'home' ? '/' : `/${pattern}/`}>
                <div style={getBackgroundImage(pattern, 'logo-text')} />
            </a>
            <a href="/">
                <div style={getBackgroundImage(pattern, 'logo')} />
            </a>
            <button type="button" on:click={() => (showMenu = !showMenu)}>
                <span>menu</span>
            </button>
        </div>
        <div class="desktop-content">
            <div />
            <div class="nav-links-wrapper">
                {#each content as link}
                    <a
                        class={checkCurrentPage(link) ? 'active' : ''}
                        href={link.href}
                    >
                        {link.text}
                    </a>
                {/each}
            </div>
            <div />
        </div>
    </nav>
    {#if showMenu}
        <div class="mobile-menu-overlay" transition:fade={{ duration: 300 }} />
        <div
            class={`mobile-menu-content ${pattern ? `odd-${pattern}` : ''}`}
            transition:slide={{ duration: 300, easing: cubicInOut, axis: 'y' }}
        >
            <div class="mobile-menu-options">
                <a href={pattern === 'home' ? '/' : `/${pattern}/`}>
                    <div style={getBackgroundImage(pattern, 'logo-text')} />
                </a>
                <a href="/">
                    <div style={getBackgroundImage(pattern, 'logo')} />
                </a>
                <button type="button" on:click={() => (showMenu = !showMenu)}>
                    <span />
                </button>
            </div>
            <div class="mobile-menu-nav-links">
                {#each content as link}
                    <a
                        class={checkCurrentPage(link) ? 'active' : ''}
                        href={link.href}
                    >
                        {link.text}
                    </a>
                {/each}
            </div>
        </div>
    {/if}
{/if}

<style>
    nav {
        border: 1px solid transparent;
        background-color: transparent;
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 100;
    }

    nav.stuck {
        background-color: var(--odd-gray-light);
    }

    nav.stuck.with-shadow {
        -webkit-box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.2);
    }

    div.mobile-content,
    div.mobile-menu-options {
        display: -ms-grid;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
    }

    div.mobile-content > a,
    div.mobile-menu-options > a {
        height: inherit;
    }

    div.mobile-content > a div,
    div.mobile-menu-options > a div {
        background-repeat: no-repeat;
        cursor: pointer;
        height: inherit;
        width: 100%;
    }

    div.mobile-content > a:nth-child(1) div,
    div.mobile-menu-options > a:nth-child(1) div {
        background-position: 25% center;
    }

    div.mobile-content > a:nth-child(2) div,
    div.mobile-menu-options > a:nth-child(2) div {
        background-position: center center;
        background-size: 45% 75%;
    }

    div.mobile-content button {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: transparent;
        color: var(--odd-gray-light);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        letter-spacing: -0.05rem;
        line-height: 100%;
    }

    nav.odd-home div.mobile-content button,
    nav.odd-studio div.mobile-content button {
        color: var(--odd-purple-medium);
    }

    nav.odd-education div.mobile-content button {
        color: var(--odd-blue-medium);
    }

    nav.odd-experiments div.mobile-content button {
        color: var(--odd-turquoise-medium);
    }

    div.mobile-menu-nav-links {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    div.desktop-content div.nav-links-wrapper {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    div.desktop-content a {
        cursor: pointer;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.08rem;
        line-height: 100%;
        text-decoration: none;
    }

    div.desktop-content a:hover,
    div.desktop-content a.active {
        font-weight: 600;
    }

    nav.odd-home div.desktop-content a {
        color: var(--odd-gray-light);
    }

    nav.odd-studio div.desktop-content a,
    nav.odd-education div.desktop-content a,
    nav.odd-experiments div.desktop-content a {
        color: var(--odd-gray-dark);
    }

    nav.stuck.odd-home div.desktop-content a {
        color: var(--odd-gray-dark);
    }

    nav.stuck.odd-home div.desktop-content a.active,
    nav.odd-studio div.desktop-content a.active {
        color: var(--odd-purple-medium);
    }

    nav.odd-education div.desktop-content a.active {
        color: var(--odd-blue-medium);
    }

    nav.odd-experiments div.desktop-content a.active {
        color: var(--odd-turquoise-medium);
    }

    div.mobile-menu-overlay,
    div.mobile-menu-content {
        height: 100svh;
        position: fixed;
        right: 0;
        top: 0;
        width: 100%;
    }

    div.mobile-menu-overlay {
        background-color: rgb(0 0 0 / 0.5);
        z-index: 101;
    }

    div.mobile-menu-content {
        background-color: var(--odd-gray-light);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        z-index: 102;
    }

    div.mobile-menu-options button {
        background-color: transparent;
        cursor: pointer;
    }

    div.mobile-menu-options button span {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;
        display: block;
    }

    div.odd-home div.mobile-menu-options button span,
    div.odd-studio div.mobile-menu-options button span {
        background-image: url('/icons/close-button-purple.svg');
    }

    div.odd-education div.mobile-menu-options button span {
        background-image: url('/icons/close-button-blue.svg');
    }

    div.odd-experiments div.mobile-menu-options button span {
        background-image: url('/icons/close-button-turquoise.svg');
    }

    div.mobile-menu-nav-links a {
        border-top: 1px solid var(--odd-gray-dark);
        color: var(--odd-gray-dark);
        display: block;
        font-family: 'Newsreader', serif;
        font-weight: 300;
        letter-spacing: -0.12rem;
        line-height: 100%;
        text-align: center;
        text-decoration: none;
        width: 100%;
    }

    div.mobile-menu-nav-links a:last-child {
        border-bottom: 1px solid var(--odd-gray-dark);
    }

    div.mobile-menu-nav-links a:hover,
    div.mobile-menu-nav-links a.active {
        font-style: italic;
        font-weight: 400;
    }

    @media only screen and (max-width: 600px) {
        nav {
            height: 5.5rem;
            margin-top: -5.5rem;
        }

        div.mobile-content,
        div.mobile-menu-options {
            height: 4rem;
            margin: 0.75rem auto;
        }

        nav.odd-home div.mobile-content > a:nth-child(1) div,
        div.odd-home div.mobile-menu-options > a:nth-child(1) div {
            background-size: 75% 75%;
        }

        nav.odd-studio div.mobile-content > a:nth-child(1) div,
        div.odd-studio div.mobile-menu-options > a:nth-child(1) div {
            background-size: 75% 25%;
        }

        nav.odd-education div.mobile-content > a:nth-child(1) div,
        div.odd-education div.mobile-menu-options > a:nth-child(1) div {
            background-size: 75% 25%;
        }

        nav.odd-experiments div.mobile-content > a:nth-child(1) div,
        div.odd-experiments div.mobile-menu-options > a:nth-child(1) div {
            background-size: 75% 50%;
        }

        div.mobile-content button {
            font-size: 1.125rem;
            padding-right: 25%;
        }

        div.desktop-content {
            display: none;
        }

        div.mobile-menu-options button span {
            height: 1.25rem;
            margin: auto 25% auto auto;
            width: 1.25rem;
        }

        div.mobile-menu-nav-links {
            margin-top: 5rem;
        }

        div.mobile-menu-nav-links a {
            font-size: 2.375rem;
            padding: 2.5rem 0;
        }
    }

    @media only screen and (min-width: 600px) {
        nav {
            height: 5.5rem;
            margin-top: -5.5rem;
        }

        div.mobile-content,
        div.mobile-menu-options {
            height: 4rem;
            margin: 0.75rem auto;
        }

        nav.odd-home div.mobile-content > a:nth-child(1) div,
        div.odd-home div.mobile-menu-options > a:nth-child(1) div {
            background-size: 75% 75%;
        }

        nav.odd-studio div.mobile-content > a:nth-child(1) div,
        div.odd-studio div.mobile-menu-options > a:nth-child(1) div {
            background-size: 75% 25%;
        }

        nav.odd-education div.mobile-content > a:nth-child(1) div,
        div.odd-education div.mobile-menu-options > a:nth-child(1) div {
            background-size: 75% 25%;
        }

        nav.odd-experiments div.mobile-content > a:nth-child(1) div,
        div.odd-experiments div.mobile-menu-options > a:nth-child(1) div {
            background-size: 75% 30%;
        }

        div.mobile-content button {
            font-size: 1.125rem;
            padding-right: 25%;
        }

        div.desktop-content {
            display: none;
        }

        div.mobile-menu-nav-links {
            margin-top: 5rem;
        }

        div.mobile-menu-options button span {
            height: 1.5rem;
            margin: auto 25% auto auto;
            width: 1.5rem;
        }

        div.mobile-menu-nav-links a {
            font-size: 2.375rem;
            padding: 2.5rem 0;
        }
    }

    @media only screen and (min-width: 768px) {
        div.mobile-menu-nav-links {
            margin-top: 6rem;
        }

        div.mobile-menu-nav-links a {
            font-size: 2.5rem;
            padding: 3rem 0;
        }
    }

    @media only screen and (min-width: 1024px) {
        div.mobile-menu-nav-links {
            margin-top: 7rem;
        }

        div.mobile-menu-nav-links a {
            padding: 3.5rem 0;
        }
    }

    @media only screen and (min-width: 1280px) {
        nav {
            height: 5.625rem;
            margin-top: -5.625rem;
        }

        div.mobile-content,
        div.mobile-menu-overlay,
        div.mobile-menu-content {
            display: none;
        }

        div.desktop-content {
            display: -ms-grid;
            display: grid;
            -ms-grid-columns: 1fr 2fr 1fr;
            grid-template-columns: 1fr 2fr 1fr;
            height: inherit;
        }

        div.desktop-content div.nav-links-wrapper {
            gap: 5rem;
            margin: 0;
            max-width: unset;
        }

        div.desktop-content a {
            font-size: 1.625rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div.desktop-content div.nav-links-wrapper {
            margin: 0 auto;
            max-width: 60rem;
        }
    }
</style>
