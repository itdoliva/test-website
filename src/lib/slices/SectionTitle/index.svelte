<script>
    export let slice;
</script>

{#if slice.primary.text}
    <h4
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
    >
        {slice.primary.text}
    </h4>
{/if}

<style>
    h4 {
        color: var(--odd-purple-medium);
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.025rem;
        text-transform: uppercase;
        text-wrap: balance;
    }

    @media only screen and (max-width: 600px) {
        h4 {
            font-size: 1.25rem;
            line-height: 120%;
            margin: 1.5rem 0 1.25rem 0;
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
