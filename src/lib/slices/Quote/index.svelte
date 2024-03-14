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
        border-radius: 0.625rem;
        flex-direction: column;
        display: flex;
        justify-content: center;
    }

    p {
        font-family: 'Newsreader', serif;
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.1rem;
        line-height: 100%;
        text-align: center;
        text-wrap: balance;
    }

    span.quote-author {
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.02rem;
        line-height: 120%;
        text-wrap: balance;
    }

    span.quote-details {
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.01rem;
        line-height: 120%;
        text-transform: uppercase;
        text-wrap: balance;
    }

    @media only screen and (max-width: 600px) {
        div {
            align-items: flex-start;
            background-color: var(--odd-purple-medium);
            margin: 1.25rem 0;
            padding: 1.5rem 1rem 0.75rem 1rem;
        }

        p {
            color: var(--odd-turquoise-light);
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        span.quote-author {
            color: var(--odd-gray-light);
            font-size: 1rem;
            width: 100%;
        }

        span.quote-details {
            color: var(--odd-gray-light);
            font-size: 0.75rem;
            margin-top: 0.25rem;
            width: 100%;
        }
    }

    @media only screen and (min-width: 600px) {
        div {
            align-items: flex-start;
            background-color: var(--odd-purple-medium);
            margin: 1.25rem 0;
            padding: 1.5rem 1.25rem 0.75rem 1.25rem;
        }

        p {
            color: var(--odd-turquoise-light);
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        span.quote-author {
            color: var(--odd-gray-light);
            font-size: 1rem;
            text-align: left;
            width: 100%;
        }

        span.quote-details {
            color: var(--odd-gray-light);
            font-size: 0.75rem;
            margin-top: 0.25rem;
            text-align: left;
            width: 100%;
        }
    }

    @media only screen and (min-width: 768px) {
        div {
            align-items: flex-start;
            background-color: var(--odd-purple-medium);
            margin: 1.5rem 0;
            padding: 2rem 1.5rem 1.25rem 1.5rem;
        }

        p {
            color: var(--odd-turquoise-light);
            font-size: 3rem;
            margin-bottom: 1.25rem;
        }

        span.quote-author {
            color: var(--odd-gray-light);
            font-size: 1.5rem;
            text-align: left;
            width: 100%;
        }

        span.quote-details {
            color: var(--odd-gray-light);
            font-size: 0.875rem;
            margin-top: 0.375rem;
            text-align: left;
            width: 100%;
        }
    }

    @media only screen and (min-width: 1024px) {
        div {
            align-items: flex-start;
            background-color: var(--odd-purple-medium);
            margin: 1.75rem 0;
            padding: 2rem 1.75rem 1.25rem 1.75rem;
        }

        p {
            color: var(--odd-turquoise-light);
            font-size: 3rem;
            margin-bottom: 1.25rem;
        }

        span.quote-author {
            color: var(--odd-gray-light);
            font-size: 1.5rem;
            text-align: left;
            width: 100%;
        }

        span.quote-details {
            color: var(--odd-gray-light);
            font-size: 0.875rem;
            margin-top: 0.375rem;
            text-align: left;
            width: 100%;
        }
    }

    @media only screen and (min-width: 1280px) {
        div {
            align-items: center;
            background-color: var(--odd-gray-light);
            margin: 2rem 0;
            padding: 4rem 2rem 4rem 2rem;
        }

        p {
            color: var(--odd-purple-medium);
            font-size: 4rem;
            margin-bottom: 1.5rem;
        }

        span.quote-author {
            color: var(--odd-gray-dark);
            font-size: 1.75rem;
            text-align: center;
            width: 35rem;
        }

        span.quote-details {
            color: var(--odd-gray-dark);
            font-size: 1rem;
            margin-top: 0.5rem;
            text-align: center;
            width: 35rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div {
            align-items: center;
            background-color: var(--odd-gray-light);
            margin: 2.5rem 0;
            padding: 4rem 2.5rem 4rem 2.5rem;
        }

        p {
            color: var(--odd-purple-medium);
            font-size: 4rem;
            margin-bottom: 1.5rem;
        }

        span.quote-author {
            color: var(--odd-gray-dark);
            font-size: 1.75rem;
            text-align: center;
            width: 40rem;
        }

        span.quote-details {
            color: var(--odd-gray-dark);
            font-size: 1rem;
            margin-top: 0.5rem;
            text-align: center;
            width: 40rem;
        }
    }
</style>
