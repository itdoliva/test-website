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
            rel="noopener noreferrer"
        >
            <img src="/brand/linkedin.svg" alt="Linkedin" />
        </a>
        <a
            href="https://www.instagram.com/weareoddstudio/"
            rel="noopener noreferrer"
        >
            <img src="/brand/instagram.svg" alt="Instagram" />
        </a>
    </div>
</footer>

<style>
    footer {
        align-items: flex-end;
        background-color: var(--odd-purple-dark);
        display: flex;
        justify-content: space-between;
    }

    footer.odd-studio {
        background-color: var(--odd-purple-dark);
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

    div {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    @media only screen and (max-width: 600px) {
        footer {
            padding: 1.5rem 7.5vw 2rem 7.5vw;
        }

        footer > a,
        footer > a img {
            height: 3rem;
            width: calc(3rem * 2.35);
        }

        footer > div a,
        footer > div img {
            height: 1.5rem;
            width: 1.5rem;
        }

        div {
            gap: 1rem;
        }
    }

    @media only screen and (min-width: 600px) {
    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1024px) {
    }

    @media only screen and (min-width: 1280px) {
    }

    @media only screen and (min-width: 1536px) {
    }
</style>
