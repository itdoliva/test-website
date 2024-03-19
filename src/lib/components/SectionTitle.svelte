<script>
    export let pattern = null;
</script>

<h2 class={pattern ? `odd-${pattern}` : ''}>
    <slot />
</h2>

<style>
    h2 {
        color: var(--odd-purple-medium);
        font-family: 'Newsreader', serif;
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.07rem;
        line-height: 95%;
        text-align: center;
        text-transform: lowercase;
        text-wrap: balance;
    }

    h2.odd-studio {
        color: var(--odd-purple-medium);
    }

    h2.odd-experiments {
        color: var(--odd-turquoise-medium);
    }

    h2.odd-education {
        color: var(--odd-blue-medium);
    }

    @media only screen and (max-width: 600px) {
        h2 {
            font-size: 1.375rem;
            margin-bottom: 0.75rem;
        }
    }

    @media only screen and (min-width: 600px) {
        h2 {
            font-size: 1.375rem;
            margin-bottom: 0.75rem;
        }
    }

    @media only screen and (min-width: 768px) {
        h2 {
            font-size: 1.875rem;
            margin-bottom: 1.5rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        h2 {
            font-size: 1.875rem;
            margin-bottom: 1.5rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        h2 {
            font-size: 2.25rem;
            margin-bottom: 2rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        h2 {
            font-size: 2.25rem;
            margin-bottom: 2.5rem;
        }
    }
</style>
