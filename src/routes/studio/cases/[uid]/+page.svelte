<script>
    import { SliceZone } from '@prismicio/svelte';
    import { components } from '@slices';

    import Container from '@components/Container.svelte';
    import CaseIntro from '@components/cases/CaseIntro.svelte';
    import Subscription from '@components/Subscription.svelte';
    import Footer from '@components/Footer.svelte';

    export let data;
</script>

<Container padding={true}>
    <CaseIntro content={data.page.data} />
    <SliceZone slices={data.page.data.slices} {components} />
</Container>
<Subscription />
<Footer pattern="studio" />

<style>
    @media only screen and (max-width: 600px) {
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
