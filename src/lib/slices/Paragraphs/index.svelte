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
        background-color: var(--odd-white);
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    }

    div :global(p) {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.02rem;
        text-wrap: balance;
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
        color: var(--odd-purple-medium);
        cursor: pointer;
        font-weight: 500;
        text-decoration: underline;
    }

    @media only screen and (max-width: 600px) {
        div {
            border-radius: 0.625rem;
            margin: 1.25rem 0;
            padding: 0.75rem 1rem;
        }

        div :global(p) {
            font-size: 1rem;
            line-height: 110%;
            margin-bottom: 0.75rem;
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
