<script>
    import CoverSection from '@sections/experiments/CoverSection.svelte';
    import StickyMenu from '@components/StickyMenu.svelte';
    import WorkSection from '@sections/experiments/WorkSection.svelte';
    import Subscription from '@components/Subscription.svelte';
    import Footer from '@components/Footer.svelte';

    export let data;
</script>

<CoverSection />
<StickyMenu pattern="experiments" delayed={false} />
<WorkSection cases={data.cases} />
<Subscription pattern="experiments" />
<Footer pattern="experiments" />

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
