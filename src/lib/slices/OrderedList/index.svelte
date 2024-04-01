<script>
    import { PrismicRichText } from '@prismicio/svelte';

    export let slice;
</script>

{#if slice.items}
    {#if slice.title}
        <h5>{slice.title}</h5>
    {/if}
    <ol
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
    >
        {#each slice.items as item}
            <li>
                <PrismicRichText field={item.item} />
            </li>
        {/each}
    </ol>
{/if}

<style>
    h5 {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        letter-spacing: -0.02rem;
    }

    h5 + ol {
        margin-top: 0;
    }

    ol {
        background-color: var(--odd-gray-light);
    }

    li {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.02rem;
    }

    li:last-child {
        margin-bottom: 0;
    }

    li::marker {
        color: var(--odd-gray-dark);
        content: counter(list-item);
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.02rem;
    }

    :global(.odd-studio) li::marker {
        color: var(--odd-purple-medium);
    }

    :global(.odd-education) li::marker {
        color: var(--odd-blue-medium);
    }

    :global(.odd-experiments) li::marker {
        color: var(--odd-turquoise-medium);
    }

    li :global(strong) {
        font-weight: 600;
    }

    li :global(em) {
        font-style: italic;
    }

    li :global(a) {
        color: var(--odd-gray-dark);
        cursor: pointer;
        font-weight: 500;
        text-decoration: underline;
    }

    :global(.odd-studio) li :global(a) {
        color: var(--odd-purple-medium);
    }

    :global(.odd-education) li :global(a) {
        color: var(--odd-blue-medium);
    }

    :global(.odd-experiments) li :global(a) {
        color: var(--odd-turquoise-medium);
    }

    @media only screen and (max-width: 600px) {
        h5 {
            font-size: 1rem;
            line-height: 120%;
            margin: 2.5rem 0 1.25rem 0;
        }

        ol {
            margin: 2.5rem 0;
        }

        li {
            font-size: 1rem;
            line-height: 120%;
            margin: 0 0 0.875rem 0.75rem;
            padding-left: 1rem;
        }
    }

    @media only screen and (min-width: 600px) {
        h5 {
            font-size: 1rem;
            line-height: 120%;
            margin: 2.5rem 0 1.25rem 0;
        }

        ol {
            margin: 2.5rem 0;
        }

        li {
            font-size: 1rem;
            line-height: 120%;
            margin: 0 0 0.875rem 0.75rem;
            padding-left: 1rem;
        }
    }

    @media only screen and (min-width: 768px) {
        h5 {
            font-size: 1.125rem;
            line-height: 125%;
            margin: 3rem 0 1.5rem 0;
        }

        ol {
            margin: 3rem 0;
        }

        li {
            font-size: 1.125rem;
            line-height: 125%;
            margin: 0 0 1rem 0.75rem;
            padding-left: 1.25rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        h5 {
            margin: 3.5rem 0 1.75rem 0;
        }

        ol {
            margin: 3.5rem 0;
        }
    }

    @media only screen and (min-width: 1280px) {
        h5 {
            font-size: 1.25rem;
            line-height: 130%;
            margin: 4rem 0 2rem 0;
        }

        ol {
            margin: 4rem 0;
        }

        li {
            font-size: 1.25rem;
            line-height: 130%;
            margin: 0 0 1rem 1rem;
            padding-left: 1.75rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        h5 {
            margin: 5rem 0 2.5rem 0;
        }

        ol {
            margin: 5rem 0;
        }
    }
</style>
