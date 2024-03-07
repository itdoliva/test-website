<script>
    import { PrismicLink } from '@prismicio/svelte';

    export let slice;
</script>

{#if slice.primary.address}
    <PrismicLink field={slice.primary.address}>
        <div
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <span>
                {slice.primary.text}
            </span>
            <span />
        </div>
    </PrismicLink>
{/if}

<style>
    :global(a),
    :global(a) * {
        cursor: pointer;
        text-decoration: none;
    }

    div {
        align-items: center;
        border: 1px solid var(--odd-gray-dark);
        color: var(--odd-gray-dark);
        display: flex;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        justify-content: center;
        letter-spacing: -0.02rem;
        text-transform: lowercase;
        width: max-content;
    }

    div:hover {
        background-color: var(--odd-turquoise-light);
    }

    span {
        display: inline-block;
    }

    span:nth-child(2) {
        background-image: url('/icons/right-arrow-dark.svg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    @media only screen and (max-width: 600px) {
        div {
            border-radius: 3.375rem;
            font-size: 1.125rem;
            gap: 0.625rem;
            line-height: 120%;
            margin: 1.25rem auto;
            padding: 0.5rem 1.25rem;
        }

        span:nth-child(2) {
            height: 1.125rem;
            width: 1.125rem;
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
