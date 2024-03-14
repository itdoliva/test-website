<script>
    export let slice;
</script>

{#if slice.primary.iframe}
    <div
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
    >
        <!-- eslint-disable svelte/no-at-html-tags -->
        {@html slice.primary.iframe}
        {#if slice.primary.caption}
            <span>{slice.primary.caption}</span>
        {/if}
    </div>
{/if}

<style>
    div {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    div :global(iframe) {
        border-radius: 0.625rem;
        width: 100%;
    }

    span {
        color: var(--odd-purple-medium);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.015rem;
        line-height: 120%;
        text-align: center;
        text-wrap: balance;
        width: 90%;
    }

    @media only screen and (max-width: 600px) {
        div {
            margin: 1.25rem 0;
        }

        div :global(iframe) {
            min-height: calc(85vw * (9 / 16));
        }

        span {
            font-size: 0.875rem;
            margin-top: 0.5rem;
        }
    }

    @media only screen and (min-width: 600px) {
        div {
            margin: 1.25rem 0;
        }

        div :global(iframe) {
            min-height: calc(75vw * (9 / 16));
        }

        span {
            font-size: 0.875rem;
            margin-top: 0.5rem;
        }
    }

    @media only screen and (min-width: 768px) {
        div {
            margin: 1.5rem 0;
        }

        div :global(iframe) {
            min-height: calc(70vw * (9 / 16));
        }

        span {
            font-size: 1rem;
            margin-top: 1rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        div {
            margin: 1.75rem 0;
        }

        div :global(iframe) {
            min-height: calc(60vw * (9 / 16));
        }

        span {
            font-size: 1rem;
            margin-top: 1rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        div {
            margin: 2rem 0;
        }

        div :global(iframe) {
            min-height: calc(45rem * (9 / 16));
        }

        span {
            font-size: 1rem;
            margin-top: 1rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div {
            margin: 2.5rem 0;
        }

        div :global(iframe) {
            min-height: calc(60rem * (9 / 16));
        }

        span {
            font-size: 1rem;
            margin-top: 1rem;
        }
    }
</style>
