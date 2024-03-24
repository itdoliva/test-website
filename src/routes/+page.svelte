<script>
    import CoverSection from '@sections/home/CoverSection.svelte';
    import DescriptionSection from '@sections/home/DescriptionSection.svelte';
    import BranchesSection from '@sections/home/BranchesSection.svelte';
    import ClientsSection from '@sections/home/ClientsSection.svelte';
    import ValuesSection from '@sections/home/ValuesSection.svelte';
    import Subscription from '@components/Subscription.svelte';
    import Footer from '@components/Footer.svelte';

    export let data;
</script>

<CoverSection />
<DescriptionSection />
<BranchesSection cases={data.cases} />
<ClientsSection />
<ValuesSection />
<Subscription pattern="studio" />
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
