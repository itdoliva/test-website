<script>
    import Container from '@components/Container.svelte';
    import SectionTitle from '@components/SectionTitle.svelte';
    import HeaderText from '@components/HeaderText.svelte';
</script>

<section>
    <Container>
        <SectionTitle pattern="studio">Who we are</SectionTitle>
        <HeaderText background="light" pattern="studio">
            <p>
                We are <span class="highlight-font highlight-color">
                    passionate thinkers and makers</span
                >
                who love to push new ways to interact, think and show information.
            </p>
            <p>
                Some imagine what data can become.<br /><span
                    class="highlight-weight"
                    >We make it happen.
                </span>
            </p>
        </HeaderText>
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

    .values-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .values-wrapper div {
        background-color: var(--odd-purple-medium);
        background-repeat: no-repeat;
    }

    .values-wrapper div:nth-child(1) {
        background-image: url('icons/value-women.svg');
    }

    .values-wrapper div:nth-child(2) {
        background-image: url('icons/value-lgbtqia.svg');
    }

    .values-wrapper div:nth-child(3) {
        background-image: url('icons/value-social.svg');
    }

    .values-wrapper div:nth-child(4) {
        background-image: url('icons/value-worldwide.svg');
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

        .values-wrapper {
            gap: 0.75rem;
            margin-top: 3.75rem;
        }

        .values-wrapper div {
            background-position: 125% 125%;
            background-size: 75%;
            border-radius: 0.75rem;
            padding: 0.75rem;
            height: 12.5rem;
        }

        .values-wrapper span {
            font-size: 1rem;
            max-width: 7.5rem;
            text-wrap: balance;
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
