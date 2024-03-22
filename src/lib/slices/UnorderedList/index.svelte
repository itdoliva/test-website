<script>
    import { PrismicRichText } from '@prismicio/svelte';

    export let slice;
</script>

{#if slice.items}
    <ul
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
    >
        {#each slice.items as item}
            <li>
                <PrismicRichText field={item.item} />
            </li>
        {/each}
    </ul>
{/if}

<style>
    ul {
        background-color: var(--odd-gray-light);
    }

    li {
        background-image: url('/icons/right-arrow-dark.svg');
        background-repeat: no-repeat;
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.02rem;
        list-style-type: none;
    }

    :global(.odd-studio) li {
        background-image: url('/icons/right-arrow-purple.svg');
    }

    :global(.odd-education) li {
        background-image: url('/icons/right-arrow-blue.svg');
    }

    :global(.odd-experiments) li {
        background-image: url('/icons/right-arrow-turquoise.svg');
    }

    li:last-child {
        margin-bottom: 0;
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
        ul {
            margin: 2.5rem 0;
        }

        li {
            background-position: left 5%;
            background-size: 1.125rem;
            font-size: 1rem;
            line-height: 120%;
            margin-bottom: 0.875rem;
            padding-left: 1.75rem;
        }
    }

    @media only screen and (min-width: 600px) {
        ul {
            margin: 2.5rem 0;
        }

        li {
            background-position: left 5%;
            background-size: 1.125rem;
            font-size: 1rem;
            line-height: 120%;
            margin-bottom: 1rem;
            padding-left: 1.75rem;
        }
    }

    @media only screen and (min-width: 768px) {
        ul {
            margin: 3rem 0;
        }

        li {
            background-position: left 10%;
            background-size: 1.25rem;
            font-size: 1.125rem;
            line-height: 125%;
            padding-left: 2rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        ul {
            margin: 3.5rem 0;
        }
    }

    @media only screen and (min-width: 1280px) {
        ul {
            margin: 4rem 0;
        }

        li {
            background-position: left 15%;
            background-size: 1.5rem;
            font-size: 1.25rem;
            line-height: 130%;
            padding-left: 3rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        ul {
            margin: 5rem 0;
        }
    }
</style>
