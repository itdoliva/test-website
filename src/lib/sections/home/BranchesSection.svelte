<script>
    import Container from '@components/Container.svelte';
    import SectionTitle from '@components/SectionTitle.svelte';
    import BranchDisplay from '@components/BranchDisplay.svelte';
    import BranchGallery from '@components/BranchGallery.svelte';

    export let cases;

    const content = [
        {
            pattern: 'studio',
            branch: 'Odd Studio',
            title: '  I want to make data relevant to my audience',
            subtitle: 'With data visualizations and data stories.',
            audience: 'For organizations and researchers',
            cases: cases.studio,
        },
        {
            pattern: 'education',
            branch: 'Odd Education',
            title: 'I want/my team to learn to represent data',
            subtitle:
                'Visualizing and telling better data stories, improving our skills.',
            audience: 'For individuals and organizations',
            cases: cases.education,
        },
        {
            pattern: 'experiments',
            branch: 'Odd Experiments',
            title: 'I want to creatively explore data',
            subtitle: 'Playing and prototyping with design and tech.',
            audience: 'For artists, organizations, and creative studios',
            cases: cases.experiments,
        },
    ];
</script>

<section>
    <Container>
        <SectionTitle pattern="studio">how can we help?</SectionTitle>
        <div class="mobile-content">
            {#each content as branchContent}
                <BranchDisplay content={branchContent} />
            {/each}
        </div>
        <div class="desktop-content">
            <BranchGallery {content} />
        </div>
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

        div.mobile-content {
            display: block;
        }

        div.desktop-content {
            display: none;
        }
    }

    @media only screen and (min-width: 600px) {
        section {
            padding: 2.5rem 0;
        }

        div.mobile-content {
            display: block;
        }

        div.desktop-content {
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1024px) {
    }

    @media only screen and (min-width: 1280px) {
        section {
            padding: 3.75rem 0;
        }

        div.mobile-content {
            display: none;
        }

        div.desktop-content {
            display: block;
        }
    }

    @media only screen and (min-width: 1536px) {
    }
</style>
