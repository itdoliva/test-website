<script>
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
