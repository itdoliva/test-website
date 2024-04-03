<script>
    import AnalyticsModal from '@components/AnalyticsModal.svelte';
    import CoverSection from '@sections/education/CoverSection.svelte';
    import StickyMenu from '@components/StickyMenu.svelte';
    import WorkSection from '@sections/education/WorkSection.svelte';
    import Subscription from '@components/Subscription.svelte';
    import Footer from '@components/Footer.svelte';

    export let data;
</script>

<AnalyticsModal pattern="education" />
<CoverSection />
<StickyMenu pattern="education" delayed={false} />
<WorkSection cases={data.cases} />
<Subscription pattern="education" />
<Footer pattern="education" />

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
