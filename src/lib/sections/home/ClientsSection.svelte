<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';

    import Container from '@components/Container.svelte';
    import SectionTitle from '@components/SectionTitle.svelte';
    import ClientQuote from '@components/home/ClientQuote.svelte';
    import { quotesSliderConfig } from '@utils/splide.js';

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
    ];
</script>

<section>
    <Container>
        <SectionTitle pattern="studio">What our clients say</SectionTitle>
        <Splide options={quotesSliderConfig}>
            {#each quotes as quote}
                <SplideSlide>
                    <ClientQuote>
                        <svelte:fragment slot="quote"
                            >{quote.text}</svelte:fragment
                        >
                        <svelte:fragment slot="author"
                            >{quote.author}</svelte:fragment
                        >
                    </ClientQuote>
                </SplideSlide>
            {/each}
        </Splide>
    </Container>
</section>

<style>
    @import url('@splidejs/svelte-splide/css');

    section {
        background-color: var(--odd-gray-light);
    }

    section :global(.splide__pagination) {
        position: unset;
    }

    section :global(.splide__pagination__page) {
        background: var(--odd-gray-medium);
    }

    section :global(.splide__pagination__page.is-active) {
        background: var(--odd-purple-medium);
    }

    @media only screen and (max-width: 600px) {
        section {
            padding: 2.5rem 0;
        }

        section :global(.splide__list) {
            gap: 0.75rem !important;
            padding-bottom: 1.25rem !important;
            padding-top: 1.25rem !important;
        }

        section :global(.splide__pagination__page) {
            border-radius: 0.5rem;
            height: 0.625rem;
            margin-left: 0.25rem;
            margin-right: 0.25rem;
            width: 0.625rem;
        }

        section :global(.splide__pagination__page.is-active) {
            height: 0.5rem;
            margin-left: 0.375rem;
            margin-right: 0.375rem;
            width: 1.25rem;
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
