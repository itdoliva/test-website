<script>
    import CasesSlider from '@components/CasesSlider.svelte';

    export let content;
</script>

<article class={`odd-${content.pattern}`}>
    <a href={`/${content.pattern}/`}>
        <header>
            <div>
                <h3>{content.branch}</h3>
                <h4>{content.title}</h4>
            </div>
            <span />
        </header>
    </a>
    <div>
        <h4>{content.subtitle}</h4>
        <p>{content.audience}</p>
    </div>
    <CasesSlider branch={content.pattern} cases={content.cases} />
    <a href={`/${content.pattern}/`}><span>See all projects</span><span /></a>
</article>

<style>
    article {
        background-color: var(--odd-gray-light);
        border-radius: 0.625rem;
        -webkit-box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    }

    article.odd-studio header {
        background-color: var(--odd-purple-medium);
    }

    article.odd-education header {
        background-color: var(--odd-blue-medium);
    }

    article.odd-experiments header {
        background-color: var(--odd-turquoise-medium);
    }

    article a:nth-of-type(1) {
        border-radius: inherit;
        text-decoration: none;
    }

    article header {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        border-radius: inherit;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
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

    article header span {
        background-image: url('icons/right-arrow-light.svg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        display: block;
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

    article.odd-education > div h4 {
        color: var(--odd-blue-medium);
    }

    article.odd-experiments > div h4 {
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

    article > a:last-of-type {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: var(--odd-gray-light);
        border: 1px solid var(--odd-gray-dark);
        border-radius: 3.75rem;
        color: var(--odd-gray-dark);
        cursor: pointer;
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
        text-decoration: none;
        text-transform: lowercase;
        width: -webkit-max-content;
        width: -moz-max-content;
        width: max-content;
    }

    article.odd-studio > a:last-of-type:hover {
        background-color: var(--odd-purple-medium);
        border: 1px solid var(--odd-purple-medium);
        color: var(--odd-gray-light);
    }

    article.odd-education > a:last-of-type:hover {
        background-color: var(--odd-blue-medium);
        border: 1px solid var(--odd-blue-medium);
        color: var(--odd-gray-light);
    }

    article.odd-experiments > a:last-of-type:hover {
        background-color: var(--odd-turquoise-medium);
        border: 1px solid var(--odd-turquoise-medium);
        color: var(--odd-gray-light);
    }

    article > a:last-of-type span {
        cursor: pointer;
    }

    article > a:last-of-type span:nth-child(2) {
        background-image: url('/icons/right-arrow-dark.svg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    article > a:last-of-type:hover span:nth-child(2) {
        background-image: url('/icons/right-arrow-light.svg');
    }

    @media only screen and (max-width: 600px) {
        article {
            margin: 1.25rem 0 2.5rem 0;
            padding-bottom: 0.5rem;
        }

        article header {
            gap: 0.75rem;
            padding: 0.875rem 1.125rem;
        }

        article header div {
            max-width: 85%;
        }

        article header h3 {
            font-size: 0.75rem;
            margin-bottom: 0.75rem;
        }

        article header h4 {
            font-size: 1.625rem;
        }

        article header span {
            height: 1.125rem;
            width: 1.125rem;
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

        article > :global(div:nth-child(3)) {
            margin: 0rem auto 2rem auto;
            width: calc(100% - 2.5rem);
        }

        article > a:last-of-type {
            font-size: 1.125rem;
            gap: 0.625rem;
            margin: 1.25rem auto;
            padding: 0.5rem 1.25rem;
        }

        article > a:last-of-type span:nth-child(2) {
            height: 1.125rem;
            width: 1.125rem;
        }
    }

    @media only screen and (min-width: 600px) {
        article {
            margin: 1.25rem 0 2.5rem 0;
            padding-bottom: 0.5rem;
        }

        article header {
            gap: 0.75rem;
            padding: 0.875rem 1.125rem;
        }

        article header div {
            max-width: 85%;
        }

        article header h3 {
            font-size: 0.75rem;
            margin-bottom: 0.75rem;
        }

        article header h4 {
            font-size: 1.625rem;
        }

        article header span {
            height: 1.125rem;
            width: 1.125rem;
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

        article > :global(div:nth-child(3)) {
            margin: 0rem auto 2rem auto;
            width: calc(100% - 2.5rem);
        }

        article > a:last-of-type {
            font-size: 1.125rem;
            gap: 0.625rem;
            margin: 1.25rem auto;
            padding: 0.5rem 1.25rem;
        }

        article > a:last-of-type span:nth-child(2) {
            height: 1.125rem;
            width: 1.125rem;
        }
    }

    @media only screen and (min-width: 768px) {
        article {
            margin: 1.5rem 0 3rem 0;
            padding-bottom: 0.5rem;
        }

        article header {
            gap: 1rem;
            padding: 1rem 1.5rem;
        }

        article header div {
            max-width: 90%;
        }

        article header h3 {
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        article header h4 {
            font-size: 2.25rem;
        }

        article header span {
            height: 1.25rem;
            width: 1.25rem;
        }

        article > div {
            padding: 1.5rem;
        }

        article > div h4 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        article > div p {
            font-size: 1rem;
        }

        article > :global(div:nth-child(3)) {
            margin: 0rem auto 2rem auto;
            width: calc(100% - 3rem);
        }

        article > a:last-of-type {
            font-size: 1.25rem;
            gap: 0.75rem;
            margin: 1.5rem auto;
            padding: 0.625rem 1.5rem;
        }

        article > a:last-of-type span:nth-child(2) {
            height: 1.25rem;
            width: 1.25rem;
        }
    }

    @media only screen and (min-width: 1024px) {
    }

    @media only screen and (min-width: 1280px) {
    }

    @media only screen and (min-width: 1536px) {
    }
</style>
