<script>
    import Subscription from '@components/Subscription.svelte';

    export let pattern = null;
</script>

<footer class={pattern ? `odd-${pattern}` : ''}>
    <Subscription {pattern} />
    <div id="footer-social-media">
        <a href="/">
            <img src="/brand/full-logo.svg" alt="Odd Data & Design Studio" />
        </a>
        <div>
            <a
                href="https://www.linkedin.com/company/oddstudio/"
                rel="external noopener noreferrer"
                target="_blank"
            >
                <img src="/brand/linkedin.svg" alt="Linkedin" />
            </a>
            <a
                href="https://www.instagram.com/weareoddstudio/"
                rel="external noopener noreferrer"
                target="_blank"
            >
                <img src="/brand/instagram.svg" alt="Instagram" />
            </a>
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: var(--odd-purple-medium);
        border-top-left-radius: 0.625rem;
        border-top-right-radius: 0.625rem;
        display: flex;
    }

    footer.odd-studio {
        background-color: var(--odd-purple-medium);
    }

    footer.odd-experiments {
        background-color: var(--odd-turquoise-medium);
    }

    footer.odd-education {
        background-color: var(--odd-blue-medium);
    }

    a,
    img {
        cursor: pointer;
    }

    #footer-social-media {
        align-items: flex-end;
        display: flex;
    }

    #footer-social-media div {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    @media only screen and (max-width: 600px) {
        footer {
            align-items: center;
            border-bottom: 0;
            flex-direction: column;
            gap: 0;
            justify-content: center;
            padding: 0;
        }

        #footer-social-media {
            background-color: var(--odd-purple-dark);
            gap: 0;
            justify-content: space-between;
            padding: 2rem 7.5vw;
            width: 100%;
        }

        #footer-social-media div {
            gap: 1rem;
        }

        #footer-social-media a,
        #footer-social-media a img {
            height: 1.5rem;
            width: 1.5rem;
        }

        #footer-social-media > a,
        #footer-social-media > a img {
            height: 3rem;
            width: calc(3rem * 2.35);
        }
    }

    @media only screen and (min-width: 600px) {
        footer {
            align-items: center;
            border-bottom: 0;
            flex-direction: column;
            gap: 0;
            justify-content: center;
            padding: 0;
        }

        #footer-social-media {
            background-color: var(--odd-purple-dark);
            gap: 0;
            justify-content: space-between;
            padding: 2rem 12.5vw;
            width: 100%;
        }

        #footer-social-media div {
            gap: 1rem;
        }

        #footer-social-media a,
        #footer-social-media a img {
            height: 1.5rem;
            width: 1.5rem;
        }

        #footer-social-media > a,
        #footer-social-media > a img {
            height: 3rem;
            width: calc(3rem * 2.35);
        }
    }

    @media only screen and (min-width: 768px) {
        footer {
            align-items: center;
            border-bottom: 0;
            flex-direction: column;
            gap: 0;
            justify-content: center;
            padding: 0;
        }

        #footer-social-media {
            background-color: var(--odd-purple-dark);
            gap: 0;
            justify-content: space-between;
            padding: 2rem 15vw;
            width: 100%;
        }

        #footer-social-media div {
            gap: 1.5rem;
        }

        #footer-social-media a,
        #footer-social-media a img {
            height: 1.75rem;
            width: 1.75rem;
        }

        #footer-social-media > a,
        #footer-social-media > a img {
            height: 3.5rem;
            width: calc(3.5rem * 2.35);
        }
    }

    @media only screen and (min-width: 1024px) {
        footer {
            align-items: center;
            border-bottom: 0;
            flex-direction: column;
            gap: 0;
            justify-content: center;
            padding: 0;
        }

        #footer-social-media {
            background-color: var(--odd-purple-dark);
            gap: 0;
            justify-content: space-between;
            padding: 2rem 20vw;
            width: 100%;
        }

        #footer-social-media div {
            gap: 1.5rem;
        }

        #footer-social-media a,
        #footer-social-media a img {
            height: 2rem;
            width: 2rem;
        }

        #footer-social-media > a,
        #footer-social-media > a img {
            height: 4rem;
            width: calc(4rem * 2.35);
        }
    }

    @media only screen and (min-width: 1280px) {
        footer {
            align-items: flex-end;
            border-bottom: 3rem solid var(--odd-purple-dark);
            flex-direction: row;
            gap: 7.5rem;
            justify-content: space-between;
            padding: 3.75rem 5rem 2.5rem 5rem;
        }

        #footer-social-media {
            background-color: transparent;
            gap: 5rem;
            justify-content: flex-end;
            padding: 0;
            width: 50%;
        }

        #footer-social-media div {
            gap: 1.5rem;
        }

        #footer-social-media a,
        #footer-social-media a img {
            height: 2.25rem;
            width: 2.25rem;
        }

        #footer-social-media > a,
        #footer-social-media > a img {
            height: 4.5rem;
            width: calc(4.5rem * 2.35);
        }
    }

    @media only screen and (min-width: 1536px) {
        footer {
            align-items: flex-end;
            border-bottom: 3.5rem solid var(--odd-purple-dark);
            flex-direction: row;
            gap: 10rem;
            justify-content: space-between;
            padding: 5rem 7.5rem 3.75rem 7.5rem;
        }

        #footer-social-media {
            background-color: transparent;
            gap: 7.5rem;
            justify-content: flex-end;
            padding: 0;
            width: 50%;
        }

        #footer-social-media div {
            gap: 1.5rem;
        }

        #footer-social-media a,
        #footer-social-media a img {
            height: 2.25rem;
            width: 2.25rem;
        }

        #footer-social-media > a,
        #footer-social-media > a img {
            height: 4.5rem;
            width: calc(4.5rem * 2.35);
        }
    }
</style>
