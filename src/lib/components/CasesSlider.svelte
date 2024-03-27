<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import { casesSlider } from '@utils/splide.js';

    export let branch;
    export let cases;
</script>

{#if cases}
    <div class={`odd-${branch}`}>
        <Splide options={casesSlider}>
            {#each cases as content}
                <SplideSlide>
                    {#if content.ready}
                        <a href={`/${branch}/cases/${content.uid}`}>
                            <div
                                class="case-slider-cover"
                                style={`background-image: url(${content.display_image.url});`}
                            />
                            <h4>{content.title}</h4>
                        </a>
                    {:else}
                        <div class="not-ready">
                            <div
                                class="case-slider-cover"
                                style={`background-image: url(${content.display_image.url});`}
                            />
                            <h4>{content.title}</h4>
                        </div>
                    {/if}
                </SplideSlide>
            {/each}
        </Splide>
    </div>
{/if}

<style>
    @import url('@splidejs/svelte-splide/css');

    div {
        margin: 0 auto;
    }

    div a,
    div div.not-ready {
        cursor: pointer;
        display: block;
        text-decoration: none;
    }

    div div.not-ready {
        cursor: not-allowed !important;
        opacity: 0.5;
        width: 100%;
    }

    div div.not-ready * {
        cursor: not-allowed !important;
    }

    div a div,
    div div.not-ready div {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 1.25rem;
        cursor: pointer;
    }

    div a h4,
    div div.not-ready h4 {
        color: var(--odd-gray-dark);
        cursor: pointer;
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.04rem;
        text-align: center;
        text-wrap: balance;
    }

    div.odd-studio a:hover h4 {
        color: var(--odd-purple-medium);
    }

    div.odd-education a:hover h4 {
        color: var(--odd-blue-medium);
    }

    div.odd-experiments a:hover h4 {
        color: var(--odd-turquoise-medium);
    }

    div :global(.splide__pagination) {
        margin-top: 1.25rem;
        position: unset;
    }

    div :global(.splide__pagination__page) {
        background-color: var(--odd-gray-medium);
        margin: 0.25rem;
    }

    div.odd-studio :global(.splide__pagination__page.is-active) {
        background-color: var(--odd-purple-medium);
    }

    div.odd-education :global(.splide__pagination__page.is-active) {
        background-color: var(--odd-blue-medium);
    }

    div.odd-experiments :global(.splide__pagination__page.is-active) {
        background-color: var(--odd-turquoise-medium);
    }

    @media only screen and (max-width: 600px) {
        div {
            width: 100%;
        }

        div a div,
        div div.not-ready div {
            height: 30rem;
            margin-bottom: 1.25rem;
            width: 100%;
        }

        div a h4,
        div div.not-ready h4 {
            font-size: 1.75rem;
            line-height: 120%;
        }

        div :global(.splide__pagination__page) {
            height: 0.625rem;
            width: 0.625rem;
        }
    }

    @media only screen and (min-width: 600px) {
        div {
            width: 80%;
        }

        div a div,
        div div.not-ready div {
            height: 30rem;
            margin-bottom: 1.25rem;
            width: 100%;
        }

        div a h4,
        div div.not-ready h4 {
            font-size: 1.75rem;
            line-height: 120%;
        }

        div :global(.splide__pagination__page) {
            height: 0.625rem;
            width: 0.625rem;
        }
    }

    @media only screen and (min-width: 768px) {
        div {
            width: 75%;
        }

        div a div,
        div div.not-ready div {
            height: 32.5rem;
            margin-bottom: 1.5rem;
        }

        div a h4,
        div div.not-ready h4 {
            font-size: 2.25rem;
            line-height: 110%;
        }
    }

    @media only screen and (min-width: 1024px) {
        div {
            width: 70%;
        }

        div a div,
        div div.not-ready div {
            height: 35rem;
            margin-bottom: 1.75rem;
        }
    }

    @media only screen and (min-width: 1280px) {
    }

    @media only screen and (min-width: 1536px) {
    }
</style>
