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
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(var(--odd-purple-dark)),
            color-stop(75%, var(--odd-purple-medium)),
            to(var(--odd-gray-light))
        );
        background-image: -o-linear-gradient(
            top,
            var(--odd-purple-dark) 0%,
            var(--odd-purple-medium) 75%,
            var(--odd-gray-light) 100%
        );
        background-image: linear-gradient(
            180deg,
            var(--odd-purple-dark) 0%,
            var(--odd-purple-medium) 75%,
            var(--odd-gray-light) 100%
        );
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        min-height: 100svh;
    }

    section > :global(div) {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    h1 {
        color: var(--odd-gray-light);
        font-family: 'Newsreader', serif;
        font-weight: 300;
        letter-spacing: -0.2rem;
        line-height: 95%;
        text-align: center;
        text-wrap: balance;
    }

    h1 .highlighted-text {
        font-style: italic;
        font-weight: 400;
    }

    @media only screen and (max-width: 600px) {
        section {
            padding: 5rem 0;
        }

        h1 {
            font-size: 4rem;
            margin-bottom: 50svh;
        }
    }

    @media only screen and (min-width: 600px) {
        section {
            padding: 5rem 0;
        }

        h1 {
            font-size: 4rem;
            margin-bottom: 50svh;
        }
    }

    @media only screen and (min-width: 768px) {
        h1 {
            font-size: 4.5rem;
        }
    }

    @media only screen and (min-width: 1024px) {
    }

    @media only screen and (min-width: 1280px) {
        section {
            padding: 7.5rem 0;
        }

        h1 {
            font-size: 5rem;
        }
    }

    @media only screen and (min-width: 1536px) {
    }
</style>
