<script>
    import Container from '@components/Container.svelte';
    import SectionTitle from '@components/SectionTitle.svelte';
    import CasesSlider from '@components/CasesSlider.svelte';
    import CasesGallery from '@components/CasesGallery.svelte';

    export let cases;
</script>

<section>
    <Container>
        <SectionTitle pattern="experiments">Our work</SectionTitle>
        <div class="mobile-content">
            <p>
                Lorem ipsum dolor sit amet consectetur. In tristique lectus est
                tortor lorem neque. Elit sapien cras diam sem eget felis enim
                commodo volutpat. Vel malesuada faucibus sed dolor ut mi
                fringillaarcu.
            </p>
            <CasesSlider branch="experiments" {cases} />
        </div>
        <div class="desktop-content">
            <p>
                Lorem ipsum dolor sit amet consectetur. In tristique lectus est
                tortor lorem neque. Elit sapien cras diam sem eget felis enim
                commodo volutpat. Vel malesuada faucibus sed dolor ut mi
                fringillaarcu.
            </p>
            <CasesGallery branch="experiments" {cases} />
        </div>
    </Container>
</section>

<style>
    section {
        background-color: var(--odd-gray-light);
    }

    div.mobile-content p {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.02rem;
    }

    div.mobile-content p :global(span) {
        font-weight: 600;
    }

    div.desktop-content {
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

    div.desktop-content p {
        color: var(--odd-turquoise-medium);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.045rem;
        line-height: 115%;
        text-align: center;
    }

    div.desktop-content p :global(span) {
        font-weight: 600;
    }

    @media only screen and (max-width: 600px) {
        section {
            padding: 5rem 0;
        }

        section div.mobile-content {
            display: block;
            margin-top: 1.25rem;
        }

        div.mobile-content p {
            font-size: 1rem;
            line-height: 120%;
            margin-bottom: 2rem;
        }

        section div.desktop-content {
            display: none;
        }
    }

    @media only screen and (min-width: 600px) {
        section {
            padding: 5rem 0;
        }

        section div.mobile-content {
            display: block;
            margin-top: 1.25rem;
        }

        div.mobile-content p {
            font-size: 1rem;
            line-height: 120%;
            margin-bottom: 1.5rem;
        }

        section div.desktop-content {
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        section div.mobile-content {
            margin-top: 1.5rem;
        }

        div.mobile-content p {
            font-size: 1.125rem;
            line-height: 125%;
            margin-bottom: 1.5rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        section div.mobile-content {
            margin-top: 1.75rem;
        }

        div.mobile-content p {
            margin-bottom: 1.75rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        section {
            padding: 7.5rem 0;
        }

        section div.mobile-content {
            display: none;
        }

        section div.desktop-content {
            display: block;
            margin: 0 -10rem;
        }

        div.desktop-content p {
            font-size: 1.75rem;
            margin: 0 auto 4rem auto;
            width: 45rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div.desktop-content p {
            margin: 0 auto 5rem auto;
            width: 60rem;
        }
    }
</style>
