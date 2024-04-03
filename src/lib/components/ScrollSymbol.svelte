<script>
    export let pattern = 'light';

    const scrollDown = () => {
        const screenHeight = document.documentElement.clientHeight;
        const offset = window.scrollY;

        window.scrollBy(0, screenHeight - offset);
    };
</script>

<button type="button" on:click|stopPropagation={scrollDown}>
    <svg viewBox="0 0 45 34" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            class={`pattern-${pattern}`}
            d="M0.996094 0.733887L22.4995 22.2372L44.0028 0.733887"
        />
        <path
            class={`pattern-${pattern}`}
            d="M0.996094 11.4854L22.4995 32.9886L44.0028 11.4854"
        />
    </svg>
</button>

<style>
    @-webkit-keyframes bounce {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        50% {
            -webkit-transform: translateY(-0.5rem);
            transform: translateY(-0.5rem);
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }

    @keyframes bounce {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        50% {
            -webkit-transform: translateY(-0.5rem);
            transform: translateY(-0.5rem);
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }

    button {
        -webkit-animation: bounce 2.5s infinite;
        animation: bounce 2.5s infinite;
        background: transparent;
        cursor: pointer;
    }

    button,
    button * {
        cursor: pointer;
    }

    svg {
        -webkit-filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
    }

    path {
        stroke-width: 1.5;
    }

    .pattern-dark {
        stroke: var(--odd-gray-dark);
    }

    .pattern-light {
        stroke: var(--odd-gray-light);
    }

    @media only screen and (max-width: 600px) {
        svg {
            height: 2rem;
            width: calc(2rem * 1.35);
        }
    }

    @media only screen and (min-width: 600px) {
        svg {
            height: 2.25rem;
            width: calc(2.25rem * 1.35);
        }
    }

    @media only screen and (min-width: 768px) {
        svg {
            height: 2.5rem;
            width: calc(2.5rem * 1.35);
        }
    }

    @media only screen and (min-width: 1024px) {
    }

    @media only screen and (min-width: 1280px) {
        svg {
            height: 2.75rem;
            width: calc(2.75rem * 1.35);
        }
    }

    @media only screen and (min-width: 1536px) {
    }
</style>
