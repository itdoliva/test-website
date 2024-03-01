<script>
    import Subscription from '@components/Subscription.svelte';
    import Footer from '@components/Footer.svelte';
    import CoverSection from '@sections/home/CoverSection.svelte';
    import DescriptionSection from '@sections/home/DescriptionSection.svelte';
    import BranchesSection from '@sections/home/BranchesSection.svelte';
    import ClientsSection from '@sections/home/ClientsSection.svelte';
    import ValuesSection from '@sections/home/ValuesSection.svelte';
</script>

<svelte:head>
    <title>Odd Data & Design Studio</title>
</svelte:head>

<CoverSection />
<DescriptionSection />
<BranchesSection />
<ClientsSection />
<ValuesSection />
<Subscription />
<Footer pattern="studio" />

<style>
    :global(#odd-cookie-consent) {
        display: none;
    }
</style>
