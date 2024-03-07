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
        background-color: var(--odd-purple-medium);
    }

    p {
        color: var(--odd-turquoise-light);
        font-family: 'Newsreader', serif;
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.1rem;
        text-align: center;
        text-wrap: balance;
    }

    span.quote-author {
        color: var(--odd-gray-light);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.02rem;
        text-wrap: balance;
    }

    span.quote-details {
        color: var(--odd-gray-light);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.01rem;
        text-transform: uppercase;
        text-wrap: balance;
    }

    @media only screen and (max-width: 600px) {
        div {
            border-radius: 0.625rem;
            margin: 1.25rem 0;
            padding: 1.5rem 1rem 0.75rem 1rem;
        }

        p {
            font-size: 2rem;
            line-height: 100%;
            margin-bottom: 1rem;
        }

        span.quote-author {
            font-size: 1rem;
            line-height: 120%;
        }

        span.quote-details {
            font-size: 0.5rem;
            line-height: 120%;
            margin-top: 0.25rem;
            width: 75%;
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
