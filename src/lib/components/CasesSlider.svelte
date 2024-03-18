<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import { casesSlider } from '@utils/splide.js';

    export let branch;
    export let cases;
</script>

<div class={`odd-${branch}`}>
    <Splide options={casesSlider}>
        {#each cases as content}
            <SplideSlide>
                <a href={`/${branch}/cases/${content.uid}`}>
                    <div
                        class="case-slider-cover"
                        style={`background-image: url(${content.display_image.url});`}
                    />
                    <h4>{content.title}</h4>
                </a>
            </SplideSlide>
        {/each}
    </Splide>
</div>

<style>
    @import url('@splidejs/svelte-splide/css');

    div {
        margin: 0 auto;
    }

    a {
        cursor: pointer;
        display: block;
        text-decoration: none;
    }

    a div {
        background: linear-gradient(
            180deg,
            var(--odd-purple-medium) 0%,
            var(--odd-white) 100%
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 1.25rem;
        cursor: pointer;
    }

    a h4 {
        color: var(--odd-gray-dark);
        cursor: pointer;
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.04rem;
        text-align: center;
        text-wrap: balance;
    }

    a:hover h4 {
        color: var(--odd-purple-medium);
    }

    div :global(.splide__pagination) {
        position: unset;
    }

    div:last-of-type :global(.splide__pagination) {
        margin-bottom: 0;
    }

    div :global(.splide__pagination__page) {
        background-color: var(--odd-gray-medium);
        margin: 0.25rem;
    }

    div :global(.splide__pagination__page.is-active) {
        background-color: var(--odd-purple-medium);
    }

    @media only screen and (max-width: 600px) {
        div {
            width: 100%;
        }

        a div {
            height: 30rem;
            margin-bottom: 1.25rem;
            width: 100%;
        }

        a h4 {
            font-size: 1.75rem;
            line-height: 120%;
        }

        div :global(.splide__pagination) {
            margin: 1.25rem 0 3.75rem 0;
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

        a div {
            height: 30rem;
            margin-bottom: 1.25rem;
            width: 100%;
        }

        a h4 {
            font-size: 1.75rem;
            line-height: 120%;
        }

        div :global(.splide__pagination) {
            margin: 1.25rem 0 3.75rem 0;
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

        a div {
            height: 32.5rem;
            margin-bottom: 1.5rem;
            width: 100%;
        }

        a h4 {
            font-size: 2.25rem;
            line-height: 110%;
        }

        div :global(.splide__pagination) {
            margin: 1.25rem 0 3.75rem 0;
        }

        div :global(.splide__pagination__page) {
            height: 0.625rem;
            width: 0.625rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        div {
            width: 70%;
        }

        a div {
            height: 35rem;
            margin-bottom: 1.75rem;
            width: 100%;
        }

        a h4 {
            font-size: 2.25rem;
            line-height: 110%;
        }

        div :global(.splide__pagination) {
            margin: 1.25rem 0 3.75rem 0;
        }

        div :global(.splide__pagination__page) {
            height: 0.625rem;
            width: 0.625rem;
        }
    }

    @media only screen and (min-width: 1280px) {
    }

    @media only screen and (min-width: 1536px) {
    }
</style>
