<script>
    import Container from '@components/Container.svelte';
    import SectionTitle from '@components/SectionTitle.svelte';
    import BranchContent from '@components/home/BranchContent.svelte';
</script>

<section>
    <Container>
        <SectionTitle pattern="studio">how can we help?</SectionTitle>
        <BranchContent pattern="studio">
            <svelte:fragment slot="branch">Odd Studio</svelte:fragment>
            <svelte:fragment slot="title"
                >I want to make data relevant to my audience</svelte:fragment
            >
            <svelte:fragment slot="subtitle"
                >With data visualizations and data stories.</svelte:fragment
            >
            <svelte:fragment slot="audience"
                >For organizations and researchers</svelte:fragment
            >
        </BranchContent>
        <BranchContent pattern="experiments">
            <svelte:fragment slot="branch">Odd Education</svelte:fragment>
            <svelte:fragment slot="title"
                >I want/my team to learn to represent data</svelte:fragment
            >
            <svelte:fragment slot="subtitle"
                >Visualizing and telling better data stories, improving our
                skills.</svelte:fragment
            >
            <svelte:fragment slot="audience"
                >For individuals and organizations</svelte:fragment
            >
        </BranchContent>
        <BranchContent pattern="education">
            <svelte:fragment slot="branch">Odd Experiments</svelte:fragment>
            <svelte:fragment slot="title"
                >I want to creatively explore data</svelte:fragment
            >
            <svelte:fragment slot="subtitle"
                >playing and prototyping with design and tech.</svelte:fragment
            >
            <svelte:fragment slot="audience"
                >For artists, organizations, and creative studios</svelte:fragment
            >
        </BranchContent>
    </Container>
</section>

<style>
    section {
        background-color: var(--odd-gray-light);
    }

    @media only screen and (max-width: 600px) {
        section {
            padding: 2.5rem 0;
        }
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
