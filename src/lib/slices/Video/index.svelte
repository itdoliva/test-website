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

    span {
        color: var(--odd-purple-medium);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.015rem;
        text-align: center;
        text-wrap: balance;
    }

    @media only screen and (max-width: 600px) {
        div {
            margin: 1.25rem 0;
        }

        div :global(iframe) {
            border-radius: 0.625rem;
            min-height: calc(100% * (16 / 9));
            width: 100%;
        }

        span {
            font-size: 0.75rem;
            line-height: 120%;
            margin-top: 0.5rem;
            width: 90%;
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
