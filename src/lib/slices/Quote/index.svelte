<script>
    export let slice;
</script>

{#if slice.primary.text}
    <div
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
    >
        <p>“ {slice.primary.text} ”</p>
        <span class="quote-author">{slice.primary.author}</span>
        {#if slice.primary.details}
            <span class="quote-details">{slice.primary.details}</span>
        {/if}
    </div>
{/if}

<style>
    div {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: var(--odd-gray-light);
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    p {
        color: var(--odd-gray-dark);
        font-family: 'Newsreader', serif;
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.1rem;
        line-height: 100%;
        text-align: center;
        text-wrap: balance;
    }

    :global(.odd-studio) p {
        color: var(--odd-purple-medium);
    }

    :global(.odd-education) p {
        color: var(--odd-blue-medium);
    }

    :global(.odd-experiments) p {
        color: var(--odd-turquoise-medium);
    }

    span.quote-author {
        color: var(--odd-gray-dark);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.02rem;
        line-height: 120%;
        text-align: center;
        text-wrap: balance;
        width: 100%;
    }

    span.quote-details {
        color: var(--odd-gray-dark);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.01rem;
        line-height: 120%;
        text-align: center;
        text-transform: uppercase;
        text-wrap: balance;
    }

    @media only screen and (max-width: 600px) {
        div {
            margin: 1.25rem 0;
            padding: 1.25rem 1.25rem;
        }

        p {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        span.quote-author {
            font-size: 1rem;
            width: 100%;
        }

        span.quote-details {
            font-size: 0.75rem;
            margin-top: 0.25rem;
        }
    }

    @media only screen and (min-width: 600px) {
        div {
            margin: 1.25rem 0;
            padding: 1.25rem 1.25rem;
        }

        p {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        span.quote-author {
            font-size: 1rem;
        }

        span.quote-details {
            font-size: 0.75rem;
            margin-top: 0.25rem;
            width: 100%;
        }
    }

    @media only screen and (min-width: 768px) {
        div {
            margin: 1.5rem 0;
            padding: 1.5rem 1.5rem;
        }

        p {
            font-size: 3rem;
            margin-bottom: 1.25rem;
        }

        span.quote-author {
            font-size: 1.5rem;
        }

        span.quote-details {
            font-size: 0.875rem;
            margin-top: 0.375rem;
            width: 80%;
        }
    }

    @media only screen and (min-width: 1024px) {
        div {
            margin: 1.75rem 0;
            padding: 1.75rem 1.75rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        div {
            margin: 2rem 0;
            padding: 2rem 2rem;
        }

        p {
            font-size: 4rem;
            margin-bottom: 1.5rem;
        }

        span.quote-author {
            font-size: 1.75rem;
        }

        span.quote-details {
            font-size: 1rem;
            margin-top: 0.5rem;
            width: 75%;
        }
    }

    @media only screen and (min-width: 1536px) {
        div {
            margin: 2.5rem 0;
            padding: 2.5rem 2.5rem;
        }
    }
</style>
