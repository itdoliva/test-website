<script>
    export let background = null;
    export let pattern = null;

    const backgroundClass = background ? `background-${background}` : '';
    const patternClass = background ? `odd-${pattern}` : '';
</script>

<div class={`${backgroundClass} ${patternClass}`}>
    <slot />
</div>

<style>
    div {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.04rem;
        line-height: 120%;
        text-align: center;
    }

    div.background-dark {
        color: var(--odd-gray-light);
    }

    div.background-light {
        color: var(--odd-gray-dark);
    }

    div :global(p) {
        text-wrap: balance;
    }

    div :global(.fade-color) {
        color: var(--odd-gray-medium);
    }

    div :global(.highlight-font) {
        font-family: 'Newsreader', serif;
        font-style: italic;
        letter-spacing: -0.1rem;
        line-height: 100%;
    }

    div :global(.highlight-weight) {
        font-weight: 600;
    }

    div.odd-studio :global(.highlight-color) {
        color: var(--odd-purple-medium);
    }

    div.odd-experiments :global(.highlight-color) {
        color: var(--odd-turquoise-medium);
    }

    div.odd-education :global(.highlight-color) {
        color: var(--odd-blue-medium);
    }

    @media only screen and (max-width: 600px) {
        div {
            font-size: 2rem;
        }

        div :global(p) {
            margin-bottom: 1.5rem;
        }

        div :global(.highlight-font) {
            font-size: 2.25rem;
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
