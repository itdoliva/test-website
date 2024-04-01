<script>
    import { SliceZone } from '@prismicio/svelte';
    import { components } from '@slices';

    import AnalyticsModal from '@components/AnalyticsModal.svelte';
    import StickyMenu from '@components/StickyMenu.svelte';
    import CaseIntro from '@components/CaseIntro.svelte';
    import Container from '@components/Container.svelte';
    import Subscription from '@components/Subscription.svelte';
    import Footer from '@components/Footer.svelte';

    export let data;
</script>

<AnalyticsModal pattern="experiments" />
<StickyMenu pattern="experiments" delayed={true} />
<CaseIntro pattern="experiments" content={data.page.data} />
<section class="odd-experiments">
    <Container>
        <SliceZone slices={data.page.data.slices} {components} />
    </Container>
</section>
<Subscription pattern="experiments" />
<Footer pattern="experiments" />

<style>
    @media only screen and (max-width: 600px) {
        section {
            margin-bottom: 5rem;
        }
    }

    @media only screen and (min-width: 600px) {
        section {
            margin-bottom: 5rem;
        }
    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1024px) {
    }

    @media only screen and (min-width: 1280px) {
        section {
            margin-bottom: 7.5rem;
        }
    }

    @media only screen and (min-width: 1536px) {
    }
</style>
