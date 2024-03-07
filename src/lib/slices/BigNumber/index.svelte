<script>
    export let slice;

    const items = slice.items.slice(0, 2);
</script>

{#if items}
    <div
        class={`big-number-wrapper items-${items.length}`}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
    >
        {#each items as item}
            <div>
                <span>{item.value}</span>
                <span>{item.text}</span>
            </div>
        {/each}
    </div>
{/if}

<style>
    .big-number-wrapper {
        align-items: flex-start;
        background-color: var(--odd-purple-medium);
        display: flex;
    }

    .big-number-wrapper.items-1 {
        justify-content: center;
    }

    .big-number-wrapper.items-2 {
        justify-content: space-between;
    }

    .big-number-wrapper span:nth-child(1) {
        color: var(--odd-turquoise-light);
        display: block;
        font-family: 'Newsreader', serif;
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.1rem;
        text-align: center;
    }

    .big-number-wrapper span:nth-child(2) {
        color: var(--odd-gray-light);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.02rem;
        text-align: center;
        text-wrap: balance;
    }

    @media only screen and (max-width: 600px) {
        .big-number-wrapper {
            border-radius: 0.625rem;
            column-gap: 1.5rem;
            margin: 1.25rem 0;
            padding: 1.25rem 0.75rem 1rem 0.75rem;
        }

        .big-number-wrapper span:nth-child(1) {
            font-size: 3.5rem;
            line-height: 100%;
        }

        .big-number-wrapper span:nth-child(2) {
            font-size: 1rem;
            line-height: 120%;
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
