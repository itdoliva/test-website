<script>
    import { onMount } from 'svelte';
    import { PrismicImage } from '@prismicio/svelte';

    export let slice;
    let screenWidth = 0;

    const updateScreenWidth = () =>
        (screenWidth = document.documentElement.clientWidth);

    onMount(() => {
        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);

        return () => window.removeEventListener('resize', updateScreenWidth);
    });
</script>

{#if slice.primary.image}
    <div
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
    >
        <PrismicImage
            field={slice.primary.image}
            style={`width: ${screenWidth ? screenWidth + 'px' : '100%'};`}
        />

        {#if slice.primary.caption}
            <span>{slice.primary.caption}</span>
        {/if}
    </div>
{/if}

<style>
    div {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    div :global(img) {
        height: auto;
    }

    span {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.015rem;
        line-height: 120%;
        text-align: center;
        text-wrap: balance;
        width: 90%;
    }

    @media only screen and (max-width: 600px) {
        div {
            margin: 1.25rem 0;
        }

        span {
            font-size: 0.875rem;
            margin-top: 0.5rem;
        }
    }

    @media only screen and (min-width: 600px) {
        div {
            margin: 1.25rem 0;
        }

        span {
            font-size: 0.875rem;
            margin-top: 0.5rem;
        }
    }

    @media only screen and (min-width: 768px) {
        div {
            margin: 1.5rem 0;
        }

        span {
            font-size: 1rem;
            margin-top: 1rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        div {
            margin: 1.75rem 0;
        }
    }

    @media only screen and (min-width: 1280px) {
        div {
            margin: 2rem 0;
        }

        span {
            font-size: 1.125rem;
            margin-top: 1.125rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div {
            margin: 2.5rem 0;
        }
    }
</style>
