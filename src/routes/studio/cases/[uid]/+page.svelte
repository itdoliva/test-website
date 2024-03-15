<script>
    import { SliceZone } from '@prismicio/svelte';
    import { components } from '@slices';

    import Container from '@components/Container.svelte';
    import CaseIntro from '@components/CaseIntro.svelte';
    import Footer from '@components/Footer.svelte';

    export let data;
</script>

<svelte:head>
    <title>Odd Data & Design Studio</title>
</svelte:head>

<CaseIntro content={data.page.data} />
<section>
    <Container>
        <SliceZone slices={data.page.data.slices} {components} />
    </Container>
</section>
<Footer pattern="studio" />

<style>
    @media only screen and (max-width: 600px) {
        section {
            margin-bottom: 3.75rem;
        }
    }

    @media only screen and (min-width: 600px) {
        section {
            margin-bottom: 3.75rem;
        }
    }

    @media only screen and (min-width: 768px) {
        section {
            margin-bottom: 3.75rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        section {
            margin-bottom: 3.75rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        section {
            margin-bottom: 5rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        section {
            margin-bottom: 5rem;
        }
    }
</style>
