<script>
    import Container from '@components/Container.svelte';
    import ScrollSymbol from '@components/ScrollSymbol.svelte';
</script>

<section>
    <Container>
        <h1>we reimage <span class="highlighted-text">data</span> into</h1>
        <ScrollSymbol />
    </Container>
</section>

<style>
    section {
        background: linear-gradient(
            180deg,
            var(--odd-purple-dark) 0%,
            var(--odd-purple-medium) 75%,
            var(--odd-gray-light) 100%
        );
    }

    h1 {
        color: var(--odd-gray-light);
        font-family: 'Newsreader', serif;
        font-weight: 300;
        letter-spacing: -0.2rem;
        line-height: 95%;
        text-align: center;
    }

    h1 .highlighted-text {
        font-style: italic;
        font-weight: 400;
    }

    @media only screen and (max-width: 600px) {
        section {
            align-items: center;
            display: flex;
            justify-content: center;
            min-height: 100svh;
            padding: 2.5rem 0;
        }

        section :global(div) {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        h1 {
            font-size: 4rem;
            margin-bottom: 50svh;
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
