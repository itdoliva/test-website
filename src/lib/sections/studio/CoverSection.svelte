<script>
    import Container from '@components/Container.svelte';
</script>

<section>
    <Container>
        <h1>
            <span>odd <span class="highlight-text">studio</span></span> collaborates
            with data experts, researchers and organizations to make data fun, aesthetically
            pleasing, drive better actions and why not, change the world.
        </h1>
    </Container>
</section>

<style>
    section {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        min-height: 100svh;
    }

    h1 {
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.04rem;
        text-align: center;
        text-wrap: balance;
    }

    h1 .highlight-text {
        font-family: 'Newsreader', serif;
        font-size: 2.625rem;
        font-style: italic;
        letter-spacing: -0.15rem;
        line-height: 100%;
    }

    @media only screen and (max-width: 600px) {
        section {
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
            padding: 0 0 3.75rem 0;
        }

        h1 {
            color: var(--odd-gray-light);
            font-size: 2.25rem;
            line-height: 120%;
        }

        h1 .highlight-text {
            color: var(--odd-gray-light);
            font-size: 2.5rem;
        }
    }

    @media only screen and (min-width: 600px) {
        section {
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
            padding: 0 0 3.75rem 0;
        }

        h1 {
            color: var(--odd-gray-light);
            font-size: 2.75rem;
            line-height: 120%;
        }

        h1 .highlight-text {
            color: var(--odd-gray-light);
            font-size: 2.875rem;
        }
    }

    @media only screen and (min-width: 768px) {
        h1 {
            font-size: 3.25rem;
            line-height: 115%;
        }

        h1 .highlight-text {
            font-size: 3.375rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        h1 {
            font-size: 3.75rem;
        }

        h1 .highlight-text {
            font-size: 3.875rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        section {
            background: var(--odd-gray-light);
            padding: 0 0 7.5rem 0;
        }

        h1 {
            color: var(--odd-gray-dark);
            font-size: 3.75rem;
            line-height: 110%;
        }

        h1 > span {
            color: var(--odd-purple-medium);
        }

        h1 .highlight-text {
            color: var(--odd-purple-medium);
            font-size: 3.875rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        h1 {
            font-size: 4.125rem;
        }

        h1 .highlight-text {
            font-size: 4.25rem;
        }
    }
</style>
