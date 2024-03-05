<script>
    import { inView } from '@utils/actions';

    import Container from '@components/Container.svelte';
    import HeaderText from '@components/HeaderText.svelte';
    import SectionTitle from '@components/SectionTitle.svelte';

    let showTexts = false;
</script>

<section>
    <Container>
        <SectionTitle pattern="studio">What we do</SectionTitle>
        <HeaderText background="light" pattern="studio">
            <p>
                Odd Data & Design is a <span
                    class="highlight-font highlight-color"
                    >data reimagination</span
                >
                company specializing in
                <span class="highlight-font highlight-color"
                    >data representation</span
                >.
            </p>
        </HeaderText>
        <div
            class={`description-wrapper ${showTexts ? 'reveal' : ''}`}
            use:inView
            on:enter={() => (showTexts = true)}
        >
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

    .description-wrapper p {
        background-position: left center;
        background-repeat: no-repeat;
        color: var(--odd-gray-dark);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.03rem;
        line-height: 120%;
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

        .description-wrapper {
            margin-top: 5rem;
        }

        .description-wrapper p {
            background-size: auto 3rem;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            padding-left: 1.75rem;
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
