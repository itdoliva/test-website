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
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: var(--odd-gray-light);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .big-number-wrapper span:nth-child(1) {
        display: block;
        font-family: 'Newsreader', serif;
        font-weight: 400;
        line-height: 75%;
        text-align: center;
        letter-spacing: -0.1rem;
    }

    :global(.odd-studio) .big-number-wrapper span:nth-child(1) {
        color: var(--odd-purple-medium);
    }

    :global(.odd-education) .big-number-wrapper span:nth-child(1) {
        color: var(--odd-blue-medium);
    }

    :global(.odd-experiments) .big-number-wrapper span:nth-child(1) {
        color: var(--odd-turquoise-medium);
    }

    .big-number-wrapper span:nth-child(2) {
        color: var(--odd-gray-dark);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.02rem;
        text-align: center;
        text-wrap: balance;
    }

    @media only screen and (max-width: 600px) {
        .big-number-wrapper {
            -webkit-column-gap: 2rem;
            -moz-column-gap: 2rem;
            column-gap: 2rem;
            margin: 1.25rem 0;
            padding: 1.25rem 1.25rem;
        }

        .big-number-wrapper span:nth-child(1) {
            font-size: 3.5rem;
        }

        .big-number-wrapper span:nth-child(2) {
            font-size: 1rem;
            line-height: 120%;
        }

        .big-number-wrapper.items-2 span:nth-child(2) {
            max-width: unset;
        }
    }

    @media only screen and (min-width: 600px) {
        .big-number-wrapper {
            -webkit-column-gap: 2rem;
            -moz-column-gap: 2rem;
            column-gap: 2rem;
            margin: 1.25rem 0;
            padding: 1.25rem 1.25rem;
        }

        .big-number-wrapper span:nth-child(1) {
            font-size: 3.5rem;
        }

        .big-number-wrapper span:nth-child(2) {
            font-size: 1rem;
            line-height: 120%;
        }

        .big-number-wrapper.items-2 span:nth-child(2) {
            max-width: 32.5vw;
        }
    }

    @media only screen and (min-width: 768px) {
        .big-number-wrapper {
            -webkit-column-gap: 3rem;
            -moz-column-gap: 3rem;
            column-gap: 3rem;
            margin: 1.5rem 0;
            padding: 1.5rem 1.5rem;
        }

        .big-number-wrapper span:nth-child(1) {
            font-size: 4.5rem;
        }

        .big-number-wrapper span:nth-child(2) {
            font-size: 1.125rem;
            line-height: 125%;
        }

        .big-number-wrapper.items-2 span:nth-child(2) {
            max-width: 30vw;
        }
    }

    @media only screen and (min-width: 1024px) {
        .big-number-wrapper {
            -webkit-column-gap: 3.5rem;
            -moz-column-gap: 3.5rem;
            column-gap: 3.5rem;
            margin: 1.75rem 0;
            padding: 1.75rem 1.75rem;
        }

        .big-number-wrapper span:nth-child(1) {
            font-size: 5rem;
        }

        .big-number-wrapper.items-2 span:nth-child(2) {
            max-width: 25vw;
        }
    }

    @media only screen and (min-width: 1280px) {
        .big-number-wrapper {
            -webkit-column-gap: 6rem;
            -moz-column-gap: 6rem;
            column-gap: 6rem;
            margin: 2rem 0;
            padding: 2rem 2rem;
        }

        .big-number-wrapper span:nth-child(1) {
            font-size: 7rem;
        }

        .big-number-wrapper span:nth-child(2) {
            font-size: 1.25rem;
            line-height: 135%;
        }

        .big-number-wrapper.items-2 span:nth-child(2) {
            max-width: 17.5rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        .big-number-wrapper {
            -webkit-column-gap: 10rem;
            -moz-column-gap: 10rem;
            column-gap: 10rem;
            margin: 2.5rem 0;
            padding: 2.5rem 2.5rem;
        }

        .big-number-wrapper.items-2 span:nth-child(2) {
            max-width: 20rem;
        }
    }
</style>
