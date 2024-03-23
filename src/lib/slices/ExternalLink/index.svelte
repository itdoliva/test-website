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
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 3.75rem;
        color: var(--odd-gray-dark);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-family: 'Switzer', sans-serif;
        font-weight: 500;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        letter-spacing: -0.02rem;
        line-height: 120%;
        text-transform: lowercase;
        width: -webkit-max-content;
        width: -moz-max-content;
        width: max-content;
    }

    :global(.odd-studio) div:hover {
        background-color: var(--odd-turquoise-light);
    }

    :global(.odd-education) div:hover {
        background-color: var(--odd-pink-light);
    }

    :global(.odd-experiments) div:hover {
        background-color: var(--odd-yellow-medium);
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
            border: 1px solid var(--odd-gray-dark);
            font-size: 1.125rem;
            gap: 0.625rem;
            margin: 1.25rem auto;
            padding: 0.5rem 1.25rem;
        }

        span:nth-child(2) {
            height: 1.125rem;
            width: 1.125rem;
        }
    }

    @media only screen and (min-width: 600px) {
        div {
            border: 1px solid var(--odd-gray-dark);
            font-size: 1.125rem;
            gap: 0.625rem;
            margin: 1.25rem auto;
            padding: 0.5rem 1.25rem;
        }

        span:nth-child(2) {
            height: 1.125rem;
            width: 1.125rem;
        }
    }

    @media only screen and (min-width: 768px) {
        div {
            font-size: 1.25rem;
            gap: 0.75rem;
            margin: 1.5rem auto;
            padding: 0.625rem 1.375rem;
        }

        span:nth-child(2) {
            height: 1.25rem;
            width: 1.25rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        div {
            margin: 1.75rem auto;
        }
    }

    @media only screen and (min-width: 1280px) {
        div {
            border: 2px solid var(--odd-gray-dark);
            font-size: 1.5rem;
            margin: 2rem auto;
            padding: 0.75rem 1.5rem;
        }

        span:nth-child(2) {
            height: 1.5rem;
            width: 1.5rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div {
            margin: 2.5rem auto;
        }
    }
</style>
