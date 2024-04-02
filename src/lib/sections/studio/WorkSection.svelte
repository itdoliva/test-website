<script>
    import Container from '@components/Container.svelte';
    import SectionTitle from '@components/SectionTitle.svelte';
    import CasesSlider from '@components/CasesSlider.svelte';
    import CasesGallery from '@components/CasesGallery.svelte';

    export let cases;
</script>

<section>
    <Container>
        <SectionTitle pattern="studio">Our work</SectionTitle>
        <div class="mobile-content">
            <CasesSlider branch="studio" {cases} />
        </div>
        <div class="desktop-content">
            <CasesGallery branch="studio" {cases} />
        </div>
    </Container>
</section>

<style>
    section {
        background-color: var(--odd-gray-light);
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

    @media only screen and (max-width: 600px) {
        section {
            padding: 5rem 0;
        }

        section div.mobile-content {
            display: block;
            margin-top: 1.25rem;
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

        section div.desktop-content {
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        section div.mobile-content {
            margin-top: 1.5rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        section div.mobile-content {
            margin-top: 1.75rem;
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
    }

    @media only screen and (min-width: 1536px) {
    }
</style>
