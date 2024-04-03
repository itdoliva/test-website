<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import { clientsSlider } from '@utils/splide.js';

    import Container from '@components/Container.svelte';
    import SectionTitle from '@components/SectionTitle.svelte';
    /* import ClientQuote from '@components/ClientQuote.svelte';

     const quotes = [
        {
            author: 'Amanda - Talk Inc',
            text: 'Lorem ipsum dolor sit amet consectetur. Platea maecenas consequat consequat tellus laoreet malesuada.',
        },
        { author: 'Author 2', text: 'Lorem ipsum dolor sit amet consectetur.' },
        {
            author: 'Author 3',
            text: 'Platea maecenas consequat consequat tellus laoreet malesuada.',
        },
    ]; */
</script>

<section>
    <Container>
        <SectionTitle pattern="studio">Our clients</SectionTitle>
        <Splide options={clientsSlider}>
            <!-- eslint-disable no-unused-vars -->
            {#each Array(21) as _, i}
                <SplideSlide>
                    <div
                        style={`background-image: url(/clients/client-${i + 1}.svg);`}
                    />
                </SplideSlide>
            {/each}
        </Splide>
    </Container>
</section>

<!--
<section>
    <Container>
        <SectionTitle pattern="studio">What our clients say</SectionTitle>
        <Splide options={quotesSlider}>
            {#each quotes as quote}
                <SplideSlide>
                    <ClientQuote>
                        <svelte:fragment slot="quote">
                            {quote.text}
                        </svelte:fragment>
                        <svelte:fragment slot="author">
                            {quote.author}
                        </svelte:fragment>
                    </ClientQuote>
                </SplideSlide>
            {/each}
        </Splide>
    </Container>
</section>
-->

<style>
    @import url('@splidejs/svelte-splide/css');

    section {
        background-color: var(--odd-gray-light);
    }

    section :global(.splide__pagination) {
        position: unset;
    }

    section :global(.splide__pagination__page) {
        background-color: var(--odd-gray-medium);
        margin: 0.25rem;
    }

    section :global(.splide__pagination__page.is-active) {
        background-color: var(--odd-purple-medium);
    }

    div {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        border-radius: 0.625rem;
        -webkit-box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
        height: 15rem;
        width: 15rem;
    }

    @media only screen and (max-width: 600px) {
        section {
            padding: 2.5rem 0;
        }

        section :global(.splide) {
            margin: 0;
        }

        section :global(.splide__list) {
            gap: 0.75rem !important;
            padding-bottom: 1.25rem !important;
            padding-top: 0.75rem !important;
        }

        section :global(.splide__pagination__page) {
            height: 0.625rem;
            width: 0.625rem;
        }
    }

    @media only screen and (min-width: 600px) {
        section {
            padding: 2.5rem 0;
        }

        section :global(.splide) {
            margin: 0;
        }

        section :global(.splide__list) {
            gap: 0.75rem !important;
            padding-bottom: 1.25rem !important;
            padding-top: 0.75rem !important;
        }

        section :global(.splide__pagination__page) {
            height: 0.625rem;
            width: 0.625rem;
        }
    }

    @media only screen and (min-width: 768px) {
        section :global(.splide__list) {
            gap: 1rem !important;
            padding-bottom: 1.5rem !important;
            padding-top: 0.5rem !important;
        }
    }

    @media only screen and (min-width: 1024px) {
    }

    @media only screen and (min-width: 1280px) {
        section {
            padding: 3.75rem 0;
        }

        section :global(.splide) {
            margin: 0 -10rem;
        }

        section :global(.splide__list) {
            gap: 1.25rem !important;
            padding-bottom: 1.75rem !important;
            padding-top: 0.25rem !important;
        }

        section :global(.splide__pagination__page) {
            height: 0.75rem;
            width: 0.75rem;
        }
    }

    @media only screen and (min-width: 1536px) {
    }
</style>
