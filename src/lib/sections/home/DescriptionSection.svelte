<script>
    import Container from '@components/Container.svelte';
    import SectionTitle from '@components/SectionTitle.svelte';
</script>

<section>
    <Container>
        <SectionTitle pattern="studio">What we do</SectionTitle>
        <div class="header-wrapper">
            <p>
                Odd Data & Design is a <span class="text-highlight"
                    >data reimagination</span
                >
                company specializing in
                <span class="text-highlight">data representation</span>.
            </p>
        </div>
        <div class="description-wrapper">
            <p>
                We strategize, analyze, explore, visualize, and transform your
            </p>
            <p>
                data, research, discoveries, information, ideas, and complex
                concepts
            </p>
            <p>to drive action, decisions, inspiration, and conversations.</p>
        </div>
    </Container>
</section>

<style>
    section {
        background-color: var(--odd-gray-light);
    }

    .header-wrapper p {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.04rem;
        text-align: center;
        text-wrap: balance;
    }

    .header-wrapper .text-highlight {
        color: var(--odd-purple-medium);
        font-family: 'Newsreader', serif;
        font-style: italic;
        letter-spacing: -0.1rem;
        line-height: 100%;
    }

    .description-wrapper p {
        background-position: left center;
        background-repeat: no-repeat;
        color: var(--odd-gray-dark);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.03rem;
        text-wrap: balance;
    }

    .description-wrapper p:nth-child(1) {
        background-image: url('/icons/description-one.svg');
    }

    .description-wrapper p:nth-child(2) {
        background-image: url('/icons/description-two.svg');
    }

    .description-wrapper p:nth-child(3) {
        background-image: url('/icons/description-three.svg');
    }

    @media only screen and (max-width: 600px) {
        section {
            padding: 5rem 0 2.5rem 0;
        }

        .header-wrapper {
            margin-bottom: 5rem;
        }

        .header-wrapper p {
            font-size: 2rem;
            line-height: 120%;
        }

        .header-wrapper .text-highlight {
            font-size: 2.25rem;
        }

        .description-wrapper p {
            background-size: auto 3rem;
            font-size: 1.5rem;
            line-height: 120%;
            margin-bottom: 1rem;
            padding-left: 1.75rem;
        }
    }

    @media only screen and (min-width: 600px) {
        section {
            padding: 5rem 0 2.5rem 0;
        }

        .header-wrapper {
            margin-bottom: 5rem;
        }

        .header-wrapper p {
            font-size: 2.75rem;
            line-height: 120%;
        }

        .header-wrapper .text-highlight {
            font-size: 2.875rem;
        }

        .description-wrapper p {
            background-size: auto 3rem;
            font-size: 1.5rem;
            line-height: 120%;
            margin-bottom: 1rem;
            padding-left: 1.75rem;
        }
    }

    @media only screen and (min-width: 768px) {
        .header-wrapper p {
            font-size: 3.25rem;
            line-height: 115%;
        }

        .header-wrapper .text-highlight {
            font-size: 3.375rem;
        }

        .description-wrapper p {
            background-size: auto 4rem;
            font-size: 1.75rem;
            line-height: 115%;
            margin-bottom: 1.5rem;
            padding-left: 2.25rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        .header-wrapper p {
            font-size: 3.75rem;
            line-height: 110%;
        }

        .header-wrapper .text-highlight {
            font-size: 3.875rem;
        }

        .description-wrapper p {
            background-size: auto 4.5rem;
            font-size: 2rem;
            margin-bottom: 1.75rem;
            padding-left: 2.75rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        section {
            padding: 7.5rem 0 3.75rem 0;
        }

        .header-wrapper {
            margin-bottom: 7.5rem;
        }

        .description-wrapper p {
            font-size: 2.5rem;
            line-height: 110%;
            margin-bottom: 2rem;
            padding-left: 6.5rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        .header-wrapper p {
            font-size: 4.125rem;
        }

        .header-wrapper .text-highlight {
            font-size: 4.25rem;
        }

        .description-wrapper p {
            background-size: auto 5.5rem;
            font-size: 2.875rem;
            margin-bottom: 2.5rem;
            padding-left: 8.5rem;
        }
    }
</style>
