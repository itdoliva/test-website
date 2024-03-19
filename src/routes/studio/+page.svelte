<script>
    import Footer from '@components/Footer.svelte';
    import CoverSection from '@sections/studio/CoverSection.svelte';
    import WorkSection from '@sections/studio/WorkSection.svelte';

    export let data;
</script>

<svelte:head>
    <title>Odd Data & Design Studio</title>
</svelte:head>

<CoverSection />
<WorkSection cases={data.cases} />
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
