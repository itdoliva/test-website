<script>
    import Container from '@components/Container.svelte';
    import SectionTitle from '@components/SectionTitle.svelte';
</script>

<section>
    <Container>
        <SectionTitle pattern="studio">Who we are</SectionTitle>
        <div class="header-wrapper">
            <p>
                We are <span class="text-highlight"
                    >passionate thinkers and makers</span
                > who love to push new ways to interact, think and show information.
            </p>
            <p>
                Some imagine what data can become.
                <span class="text-bold">We make it happen.</span>
            </p>
        </div>
        <div class="values-wrapper">
            <div><span>We are a women-led and women-owned company</span></div>
            <div>
                <span>We are a proud company of the LGBTQIAP+ community</span>
            </div>
            <div><span>We work with socially impactful projects</span></div>
            <div>
                <span>
                    We are a remote and distributed team in Latin America and
                    Europe
                </span>
            </div>
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

    .header-wrapper .text-bold {
        font-weight: 600;
    }

    .values-wrapper {
        display: -ms-grid;
        display: grid;
    }

    .values-wrapper div {
        background-color: var(--odd-purple-medium);
        background-repeat: no-repeat;
        border-radius: 0.75rem;
    }

    .values-wrapper div:nth-child(1) {
        background-image: url('/icons/value-women.svg');
    }

    .values-wrapper div:nth-child(2) {
        background-image: url('/icons/value-lgbtqia.svg');
    }

    .values-wrapper div:nth-child(3) {
        background-image: url('/icons/value-social.svg');
    }

    .values-wrapper div:nth-child(4) {
        background-image: url('/icons/value-worldwide.svg');
    }

    .values-wrapper span {
        color: var(--odd-gray-light);
        display: block;
        font-family: 'Switzer', sans-serif;
        letter-spacing: -0.02rem;
        line-height: 110%;
        text-transform: lowercase;
    }

    @media only screen and (max-width: 600px) {
        section {
            padding: 2.5rem 0 5rem 0;
        }

        .header-wrapper p {
            font-size: 2rem;
            line-height: 120%;
            margin-bottom: 1.5rem;
        }

        .header-wrapper .text-highlight {
            font-size: 2.25rem;
        }

        .values-wrapper {
            gap: 0.5rem;
            -ms-grid-columns: 1fr 0.5rem 1fr;
            grid-template-columns: repeat(2, 1fr);
            -ms-grid-rows: 1fr 0.5rem 1fr;
            grid-template-rows: repeat(2, 1fr);
            margin: 3rem 0 0 0;
        }

        .values-wrapper > *:nth-child(1) {
            -ms-grid-row: 1;
            -ms-grid-column: 1;
        }

        .values-wrapper > *:nth-child(2) {
            -ms-grid-row: 1;
            -ms-grid-column: 3;
        }

        .values-wrapper > *:nth-child(3) {
            -ms-grid-row: 3;
            -ms-grid-column: 1;
        }

        .values-wrapper > *:nth-child(4) {
            -ms-grid-row: 3;
            -ms-grid-column: 3;
        }

        .values-wrapper div {
            aspect-ratio: 1 / 1;
            background-position: 125% 125%;
            background-size: 60%;
            padding: 0.75rem;
        }

        .values-wrapper span {
            font-size: 1rem;
            max-width: 7.5rem;
            text-wrap: wrap;
        }
    }

    @media only screen and (min-width: 600px) {
        section {
            padding: 2.5rem 0 5rem 0;
        }

        .header-wrapper p {
            font-size: 2.75rem;
            line-height: 120%;
            margin-bottom: 1.5rem;
        }

        .header-wrapper .text-highlight {
            font-size: 2.875rem;
        }

        .values-wrapper {
            gap: 0.75rem;
            -ms-grid-columns: 1fr 0.75rem 1fr;
            grid-template-columns: repeat(2, 1fr);
            -ms-grid-rows: 1fr 0.75rem 1fr;
            grid-template-rows: repeat(2, 1fr);
            margin: 3rem 0 0 0;
        }

        .values-wrapper > *:nth-child(1) {
            -ms-grid-row: 1;
            -ms-grid-column: 1;
        }

        .values-wrapper > *:nth-child(2) {
            -ms-grid-row: 1;
            -ms-grid-column: 3;
        }

        .values-wrapper > *:nth-child(3) {
            -ms-grid-row: 3;
            -ms-grid-column: 1;
        }

        .values-wrapper > *:nth-child(4) {
            -ms-grid-row: 3;
            -ms-grid-column: 3;
        }

        .values-wrapper div {
            aspect-ratio: 1 / 1;
            background-position: 125% 125%;
            background-size: 60%;
            padding: 0.75rem;
        }

        .values-wrapper span {
            font-size: 1.375rem;
            max-width: 10rem;
            text-wrap: balance;
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

        .values-wrapper {
            gap: 1rem;
        }

        .values-wrapper div {
            background-size: 62.5%;
            padding: 1rem;
        }

        .values-wrapper span {
            font-size: 1.5rem;
            max-width: 12.5rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        .values-wrapper div {
            background-size: 65%;
        }

        .values-wrapper span {
            max-width: 13.25rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        section {
            padding: 3.75rem 0 7.5rem 0;
        }

        .header-wrapper p {
            font-size: 3.75rem;
            line-height: 110%;
            margin-bottom: 2rem;
        }

        .header-wrapper .text-highlight {
            font-size: 3.875rem;
        }

        .values-wrapper {
            gap: 1.25rem;
            -ms-grid-columns: 1fr 1.25rem 1fr 1.25rem 1fr 1.25rem 1fr;
            grid-template-columns: repeat(4, 1fr);
            -ms-grid-rows: 1fr;
            grid-template-rows: 1fr;
            margin: 4.5rem -10rem 0 -10rem;
        }

        .values-wrapper > *:nth-child(1) {
            -ms-grid-row: 1;
            -ms-grid-column: 1;
        }

        .values-wrapper > *:nth-child(2) {
            -ms-grid-row: 1;
            -ms-grid-column: 3;
        }

        .values-wrapper > *:nth-child(3) {
            -ms-grid-row: 1;
            -ms-grid-column: 5;
        }

        .values-wrapper > *:nth-child(4) {
            -ms-grid-row: 1;
            -ms-grid-column: 7;
        }

        .values-wrapper div {
            background-size: 60%;
        }

        .values-wrapper span {
            max-width: 11rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        .values-wrapper {
            margin: 4.5rem -7.5rem 0 -7.5rem;
        }

        .values-wrapper span {
            font-size: 1.75rem;
            max-width: 12.5rem;
        }
    }
</style>
