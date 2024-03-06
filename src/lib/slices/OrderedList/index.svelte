<script>
    import { PrismicRichText } from '@prismicio/svelte';

    export let slice;
</script>

{#if slice.items}
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
    ol {
        background: var(--odd-white);
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
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
        color: var(--odd-purple-medium);
        content: counter(list-item);
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.02rem;
    }

    li :global(strong) {
        font-weight: 600;
    }

    li :global(em) {
        font-style: italic;
    }

    li :global(a) {
        color: var(--odd-purple-medium);
        cursor: pointer;
        font-weight: 500;
        text-decoration: underline;
    }

    @media only screen and (max-width: 600px) {
        ol {
            border-radius: 0.625rem;
            margin: 1rem 0;
            padding: 1rem 1rem;
        }

        li {
            font-size: 1rem;
            line-height: 110%;
            margin: 0 0 0.75rem 0.5rem;
            padding-left: 0.75rem;
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
