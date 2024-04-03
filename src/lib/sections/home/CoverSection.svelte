<script>
    import { onMount } from 'svelte';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import { coverSlider } from '@utils/splide.js';

    import Container from '@components/Container.svelte';

    const branches = [
        {
            name: 'experiments',
            header: '<h1>we reimagine new ways to interact with <span class="highlighted-text">data</span> through</h1>',
            items: [
                'exploratory data tools',
                'bespoke data tools',
                'playful data prototypes',
                'phygital artifacts',
            ],
        },
        {
            name: 'studio',
            header: '<h1>we reimagine <span class="highlighted-text">data</span> into</h1>',
            items: [
                'meaningful narratives',
                'crafted data stories',
                'data illustrations',
                'actionable information',
                'data-driven solutions',
                'scientific translation',
                'engaging visuals',
            ],
        },
        {
            name: 'education',
            header: '<h1>we teach how to reimagine <span class="highlighted-text">data</span> with</h1>',
            items: [
                'learning opportunities',
                'insightful analytics ',
                'conversations',
            ],
        },
    ];

    let currentBranch = 1;
    let currentItem = -1;
    let interval = 5000 / branches[currentBranch].items.length;

    const updateBranch = () => {
        currentBranch = (currentBranch + 1) % branches.length;
        interval = 5000 / branches[currentBranch].items.length;
        currentItem = 0;
    };

    const updateItem = () => {
        currentItem = (currentItem + 1) % branches[currentBranch].items.length;
        setTimeout(updateItem, interval);
    };

    onMount(() => updateItem());
</script>

<section class={`odd-${branches[currentBranch].name}`}>
    <Container>
        <Splide options={coverSlider} on:moved={() => updateBranch()}>
            {#each branches as branch}
                <SplideSlide>
                    <div class="odd-branch-name">
                        <span>odd</span>
                        <span>{branch.name}</span>
                    </div>
                </SplideSlide>
            {/each}
        </Splide>
        <!-- eslint-disable svelte/no-at-html-tags -->
        {@html branches[currentBranch].header}
        <div class="odd-branch-items">
            {#each branches[currentBranch].items as item, index}
                <span class={currentItem === index ? 'active' : ''}>
                    {item}
                </span>
            {/each}
        </div>
    </Container>
</section>

<style>
    @import url('@splidejs/svelte-splide/css');

    section {
        align-items: flex-start;
        display: flex;
        justify-content: center;
        min-height: 100svh;
    }

    section.odd-studio {
        background-image: linear-gradient(
            180deg,
            var(--odd-purple-dark) 0%,
            var(--odd-purple-medium) 75%,
            var(--odd-gray-light) 100%
        );
    }

    section.odd-education {
        background-image: linear-gradient(
            180deg,
            var(--odd-blue-dark) 0%,
            var(--odd-blue-medium) 75%,
            var(--odd-gray-light) 100%
        );
    }

    section.odd-experiments {
        background-image: linear-gradient(
            180deg,
            var(--odd-turquoise-dark) 0%,
            var(--odd-turquoise-medium) 75%,
            var(--odd-gray-light) 100%
        );
    }

    section div.odd-branch-name {
        align-items: flex-end;
        color: var(--odd-gray-light);
        display: flex;
        justify-content: center;
        font-weight: 400;
        opacity: 0.5;
    }

    section div.odd-branch-name > span:first-child {
        font-family: 'Switzer', sans-serif;
        letter-spacing: -0.03rem;
    }

    section div.odd-branch-name > span:last-child {
        font-family: 'Newsreader', serif;
        font-style: italic;
        letter-spacing: -0.09rem;
    }

    section :global(li.is-active div.odd-branch-name) {
        opacity: 1 !important;
    }

    section :global(h1) {
        color: var(--odd-gray-light);
        font-family: 'Newsreader', serif;
        font-weight: 300;
        letter-spacing: -0.2rem;
        text-align: center;
        text-wrap: balance;
    }

    section :global(h1 .highlighted-text) {
        font-style: italic;
        font-weight: 400;
    }

    section div.odd-branch-items {
        display: flex;
        flex-direction: column;
    }

    section div.odd-branch-items span {
        color: var(--odd-gray-light);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.03rem;
        text-align: center;
        text-transform: lowercase;
        opacity: 0.5;
    }

    section div.odd-branch-items span.active {
        font-weight: 700;
        opacity: 1;
    }

    section :global(button) {
        bottom: 2rem;
        left: 0;
        position: absolute;
        width: 100%;
        z-index: 1;
    }

    @media only screen and (max-width: 600px) {
        section {
            padding: 5rem 0;
        }

        section div.odd-branch-name > span:first-child {
            font-size: 1.75rem;
            padding-right: 0.375rem;
        }

        section div.odd-branch-name > span:last-child {
            font-size: 2rem;
        }

        section :global(h1) {
            font-size: 3.75rem;
            line-height: 95%;
            margin: 3.75rem 0;
        }

        section div.odd-branch-items {
            gap: 1rem;
        }

        section div.odd-branch-items span {
            font-size: 1.625rem;
        }
    }

    @media only screen and (min-width: 600px) {
        section {
            padding: 5rem 0;
        }

        section div.odd-branch-name > span:first-child {
            font-size: 1.75rem;
            padding-right: 0.375rem;
        }

        section div.odd-branch-name > span:last-child {
            font-size: 2rem;
        }

        section :global(h1) {
            font-size: 4.5rem;
            line-height: 95%;
            margin: 5rem 0;
        }

        section div.odd-branch-items {
            gap: 1.125rem;
        }

        section div.odd-branch-items span {
            font-size: 2rem;
        }
    }

    @media only screen and (min-width: 768px) {
        section div.odd-branch-name > span:first-child {
            font-size: 2.25rem;
            padding-right: 0.5rem;
        }

        section div.odd-branch-name > span:last-child {
            font-size: 2.5rem;
        }

        section :global(h1) {
            font-size: 5rem;
        }

        section div.odd-branch-items {
            gap: 1.25rem;
        }

        section div.odd-branch-items span {
            font-size: 2rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        section div.odd-branch-name > span:first-child {
            font-size: 2.75rem;
            padding-right: 0.5rem;
        }

        section div.odd-branch-name > span:last-child {
            font-size: 3rem;
        }

        section :global(h1) {
            font-size: 6.75rem;
        }

        section div.odd-branch-items {
            gap: 1.75rem;
        }

        section div.odd-branch-items span {
            font-size: 3rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        section {
            padding: 3.75rem 0 7.5rem 0;
        }

        section div.odd-branch-name > span:first-child {
            font-size: 2.25rem;
            padding-right: 0.5rem;
        }

        section div.odd-branch-name > span:last-child {
            font-size: 2.5rem;
        }

        section :global(h1) {
            font-size: 6.25rem;
            line-height: 90%;
            margin: 3.75rem 0;
        }

        section div.odd-branch-items {
            gap: 1.25rem;
        }

        section div.odd-branch-items span {
            font-size: 2rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        section :global(h1) {
            font-size: 7.5rem;
        }
    }
</style>
