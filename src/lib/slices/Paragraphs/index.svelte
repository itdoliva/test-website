<script>
    import { PrismicRichText } from '@prismicio/svelte';

    export let slice;
</script>

{#if slice.items}
    <div
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
    >
        {#each slice.items as item}
            <PrismicRichText field={item.paragraph} />
        {/each}
    </div>
{/if}

<style>
    div {
        background-color: var(--odd-gray-light);
    }

    div :global(p) {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.02rem;
    }

    div :global(p:last-child) {
        margin-bottom: 0;
    }

    div :global(p strong) {
        font-weight: 600;
    }

    div :global(p em) {
        font-style: italic;
    }

    div :global(p a) {
        color: var(--odd-gray-dark);
        cursor: pointer;
        font-weight: 500;
        text-decoration: underline;
    }

    :global(.odd-studio) div :global(p a) {
        color: var(--odd-purple-medium);
    }

    :global(.odd-education) div :global(p a) {
        color: var(--odd-blue-medium);
    }

    :global(.odd-experiments) div :global(p a) {
        color: var(--odd-turquoise-medium);
    }

    @media only screen and (max-width: 600px) {
        div {
            margin: 1.25rem 0;
        }

        div :global(p) {
            font-size: 1rem;
            line-height: 120%;
            margin-bottom: 1.25rem;
        }
    }

    @media only screen and (min-width: 600px) {
        div {
            margin: 1.25rem 0;
        }

        div :global(p) {
            font-size: 1rem;
            line-height: 120%;
            margin-bottom: 1.25rem;
        }
    }

    @media only screen and (min-width: 768px) {
        div {
            margin: 1.5rem 0;
        }

        div :global(p) {
            font-size: 1.125rem;
            line-height: 125%;
            margin-bottom: 1.5rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        div {
            margin: 1.75rem 0;
        }

        div :global(p) {
            font-size: 1.125rem;
            line-height: 125%;
            margin-bottom: 1.75rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        div {
            margin: 2rem 0;
        }

        div :global(p) {
            font-size: 1.25rem;
            line-height: 130%;
            margin-bottom: 2rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div {
            margin: 2.5rem 0;
        }

        div :global(p) {
            margin-bottom: 2.5rem;
        }
    }
</style>
