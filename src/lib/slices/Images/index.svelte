<script>
    import { PrismicImage } from '@prismicio/svelte';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import { imageSlider } from '@utils/splide.js';

    export let slice;
</script>

{#if slice.items.length > 0}
    <div
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
    >
        {#if slice.items.length === 1}
            <PrismicImage field={slice.items[0].image} />
        {:else}
            <Splide options={imageSlider}>
                {#each slice.items as item}
                    <SplideSlide>
                        <PrismicImage field={item.image} />
                    </SplideSlide>
                {/each}
            </Splide>
        {/if}
        {#if slice.primary.caption}
            <span>{slice.primary.caption}</span>
        {/if}
    </div>
{/if}

<style>
    @import url('@splidejs/svelte-splide/css');

    div {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    div :global(img) {
        border-radius: 0.625rem;
        height: auto;
        width: 100%;
    }

    div :global(.splide__pagination) {
        position: unset;
    }

    div :global(.splide__pagination__page) {
        background-color: var(--odd-gray-medium);
        margin: 0.25rem;
    }

    div :global(.splide__pagination__page.is-active) {
        background-color: var(--odd-purple-medium);
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

        div :global(.splide__pagination) {
            margin-top: 0.625rem;
        }

        div :global(.splide__pagination__page) {
            height: 0.625rem;
            width: 0.625rem;
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

        div :global(.splide__pagination) {
            margin-top: 0.625rem;
        }

        div :global(.splide__pagination__page) {
            height: 0.625rem;
            width: 0.625rem;
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

        div :global(.splide__pagination) {
            margin-top: 0.625rem;
        }

        div :global(.splide__pagination__page) {
            height: 0.625rem;
            width: 0.625rem;
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

        div :global(.splide__pagination) {
            margin-top: 0.625rem;
        }

        div :global(.splide__pagination__page) {
            height: 0.625rem;
            width: 0.625rem;
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

        div :global(.splide__pagination) {
            margin-top: 1rem;
        }

        div :global(.splide__pagination__page) {
            height: 0.75rem;
            width: 0.75rem;
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

        div :global(.splide__pagination) {
            margin-top: 1rem;
        }

        div :global(.splide__pagination__page) {
            height: 0.75rem;
            width: 0.75rem;
        }

        span {
            font-size: 1rem;
            margin-top: 1rem;
        }
    }
</style>
