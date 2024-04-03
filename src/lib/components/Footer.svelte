<script>
    export let pattern = null;
</script>

<footer class={pattern ? `odd-${pattern}` : ''}>
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
</footer>

<style>
    footer {
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        background-color: var(--odd-purple-dark);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    footer a,
    footer img {
        cursor: pointer;
    }

    footer div {
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

    @media only screen and (max-width: 600px) {
        footer {
            gap: 0;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            padding: 1.25rem 7.5vw;
        }

        footer > a,
        footer > a img {
            height: 3rem !important;
            width: calc(3rem * 2.35) !important;
        }

        footer div {
            gap: 1rem;
        }

        footer a,
        footer a img {
            height: 1.5rem;
            width: 1.5rem;
        }
    }

    @media only screen and (min-width: 600px) {
        footer {
            gap: 0;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            padding: 1.75rem 2.5rem 1.25rem 2.5rem;
        }

        footer > a,
        footer > a img {
            height: 3rem !important;
            width: calc(3rem * 2.35) !important;
        }

        footer div {
            gap: 1rem;
        }

        footer a,
        footer a img {
            height: 1.5rem;
            width: 1.5rem;
        }
    }

    @media only screen and (min-width: 768px) {
        footer {
            padding: 2rem 3rem 1.5rem 3rem;
        }

        footer > a,
        footer > a img {
            height: 3.5rem !important;
            width: calc(3.5rem * 2.35) !important;
        }

        footer div {
            gap: 1.5rem;
        }

        footer a,
        footer a img {
            height: 1.75rem;
            width: 1.75rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        footer {
            padding: 2.25rem 3.5rem 1.75rem 3.5rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        footer {
            gap: 4rem;
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            padding: 1.5rem 4rem 1rem 4rem;
        }

        footer > a,
        footer > a img {
            height: 4rem !important;
            width: calc(4rem * 2.35) !important;
        }

        footer a,
        footer a img {
            height: 2rem;
            width: 2rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        footer {
            gap: 5rem;
            padding: 1.75rem 5rem 1.25rem 5rem;
        }
    }
</style>
