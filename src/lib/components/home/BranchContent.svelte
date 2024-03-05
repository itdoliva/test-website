<script>
    export let pattern = null;
</script>

<article class={pattern ? `odd-${pattern}` : ''}>
    <a href={pattern ? `/${pattern}` : '/'}>
        <header>
            <div>
                <h3><slot name="branch" /></h3>
                <h4><slot name="title" /></h4>
            </div>
            <img src="icons/right-arrow-light.svg" alt="Show/Hide" />
        </header>
    </a>
    <div>
        <h4><slot name="subtitle" /></h4>
        <p><slot name="audience" /></p>
    </div>
</article>

<style>
    article {
        background-color: var(--odd-gray-light);
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    }

    article.odd-studio header {
        background-color: var(--odd-purple-medium);
    }

    article.odd-experiments header {
        background-color: var(--odd-blue-medium);
    }

    article.odd-education header {
        background-color: var(--odd-turquoise-medium);
    }

    article a {
        border-radius: inherit;
        text-decoration: none;
    }

    article header {
        align-items: flex-start;
        border-radius: inherit;
        display: flex;
        justify-content: space-between;
    }

    article header h3 {
        color: var(--odd-gray-light);
        font-family: 'Switzer', sans-serif;
        font-weight: 500;
        letter-spacing: -0.01rem;
        text-transform: uppercase;
    }

    article header h4 {
        color: var(--odd-gray-light);
        font-family: 'Newsreader', serif;
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.08rem;
        line-height: 95%;
        text-wrap: balance;
    }

    article header img {
        display: block;
        height: auto;
    }

    article > div {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    article > div h4 {
        font-family: 'Switzer', sans-serif;
        font-weight: 500;
        letter-spacing: -0.03rem;
        line-height: 95%;
        text-transform: lowercase;
        text-wrap: balance;
    }

    article.odd-studio > div h4 {
        color: var(--odd-purple-medium);
    }

    article.odd-experiments > div h4 {
        color: var(--odd-blue-medium);
    }

    article.odd-education > div h4 {
        color: var(--odd-turquoise-medium);
    }

    article > div p {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.01rem;
        line-height: 95%;
        text-transform: uppercase;
        text-wrap: balance;
    }

    @media only screen and (max-width: 600px) {
        article {
            border-radius: 0.625rem;
            margin: 1.25rem 0 2.5rem 0;
        }

        article header {
            gap: 0.75rem;
            padding: 0.875rem 1.125rem;
        }

        article header h3 {
            font-size: 0.75rem;
            margin-bottom: 0.75rem;
        }

        article header h4 {
            font-size: 1.625rem;
        }

        article header img {
            margin-top: 0.25rem;
            width: 1.25rem;
        }

        article > div {
            padding: 1.25rem;
        }

        article > div h4 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        article > div p {
            font-size: 0.75rem;
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
