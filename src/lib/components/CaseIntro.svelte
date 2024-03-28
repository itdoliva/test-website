<script>
    import Container from '@components/Container.svelte';
    import { PrismicRichText } from '@prismicio/svelte';

    export let pattern;
    export let content;
</script>

<div
    class="desktop-cover-image"
    style={`background-image: url(${content.cover_image.url});`}
/>
<section class={pattern ? `odd-${pattern}` : ''}>
    <Container>
        <div class="title-wrapper">
            <button type="button" on:click={() => history.back()} />
            <div>
                <h1>{content.title || ''}</h1>
                <h2>{content.type || ''}</h2>
            </div>
        </div>
        <div class="summary-wrapper">
            <div
                class="mobile-cover-image"
                style={`background-image: url(${content.cover_image.url});`}
            />
            <PrismicRichText field={content.summary} />
        </div>
        <div class="details-wrapper">
            <div>
                <span>Before</span>
                <span>{content.before || ''}</span>
            </div>
            <div>
                <span>Delivery</span>
                <span>{content.delivery || ''}</span>
            </div>
            <div>
                <span>Client</span>
                <span>
                    {content.client || ''}
                    {content.year ? `(${content.year})` : ''}
                </span>
            </div>
            <div>
                <span>Tools</span>
                <span>{content.tools || ''}</span>
            </div>
            <div>
                <span>Link</span>
                <span>
                    {#if content.link.url}
                        See the project
                        <a
                            href={content.link.url}
                            rel="external noopener noreferrer"
                            target="_blank"
                        >
                            here
                        </a>
                    {/if}
                </span>
            </div>
        </div>
    </Container>
</section>

<style>
    div.desktop-cover-image {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
    }

    div.title-wrapper {
        background-color: var(--odd-gray-light);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    div.title-wrapper button {
        aspect-ratio: 1/1;
        background-color: transparent;
        background-image: url('/icons/left-arrow-dark.svg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 50%;
        border-radius: 100%;
        cursor: pointer;
        display: block;
    }

    .odd-studio div.title-wrapper button:hover {
        background-color: var(--odd-turquoise-light);
    }

    .odd-education div.title-wrapper button:hover {
        background-color: var(--odd-pink-light);
    }

    .odd-experiments div.title-wrapper button:hover {
        background-color: var(--odd-yellow-medium);
    }

    div.title-wrapper div {
        border-radius: 0.625rem;
        width: 100%;
    }

    div.title-wrapper h1 {
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.0275rem;
        line-height: 95%;
    }

    div.title-wrapper h2 {
        font-family: 'Switzer', sans-serif;
        font-weight: 500;
        letter-spacing: -0.0125rem;
        line-height: 120%;
        text-transform: uppercase;
    }

    div.summary-wrapper {
        background-color: var(--odd-gray-light);
        border-radius: 0.625rem;
        display: block;
    }

    div.summary-wrapper div.mobile-cover-image {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        width: 100%;
    }

    div.summary-wrapper :global(p) {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.02rem;
        width: 100%;
    }

    div.summary-wrapper :global(p strong) {
        font-weight: 600;
    }

    div.summary-wrapper :global(p em) {
        font-style: italic;
    }

    div.summary-wrapper :global(p a) {
        cursor: pointer;
        font-weight: 500;
        text-decoration: underline;
    }

    .odd-studio .summary-wrapper :global(p a) {
        color: var(--odd-purple-medium);
    }

    .odd-education .summary-wrapper :global(p a) {
        color: var(--odd-blue-medium);
    }

    .odd-experiments .summary-wrapper :global(p a) {
        color: var(--odd-turquoise-medium);
    }

    div.details-wrapper {
        background-color: var(--odd-gray-light);
        border-radius: 0.625rem;
        -webkit-box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
        display: -ms-grid;
        display: grid;
    }

    div.details-wrapper span:nth-child(1) {
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 700;
        letter-spacing: -0.0125rem;
        line-height: 100%;
        text-transform: uppercase;
    }

    .odd-studio div.details-wrapper span:nth-child(1) {
        color: var(--odd-purple-medium);
    }

    .odd-education div.details-wrapper span:nth-child(1) {
        color: var(--odd-blue-medium);
    }

    .odd-experiments div.details-wrapper span:nth-child(1) {
        color: var(--odd-turquoise-medium);
    }

    div.details-wrapper span:nth-child(2) {
        color: var(--odd-gray-dark);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.015rem;
        line-height: 110%;
        text-wrap: balance;
    }

    div.details-wrapper span:nth-child(2) a {
        cursor: pointer;
        font-weight: 500;
        text-decoration: underline;
    }

    .odd-studio div.details-wrapper span:nth-child(2) a {
        color: var(--odd-purple-medium);
    }

    .odd-education div.details-wrapper span:nth-child(2) a {
        color: var(--odd-blue-medium);
    }

    .odd-experiments div.details-wrapper span:nth-child(2) a {
        color: var(--odd-turquoise-medium);
    }

    @media only screen and (max-width: 600px) {
        div.desktop-cover-image {
            display: none;
        }

        section {
            margin: 5rem 0 1.25rem 0;
        }

        div.title-wrapper {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            gap: 1.25rem;
            margin-bottom: 1.25rem;
        }

        div.title-wrapper button {
            border: 1px solid var(--odd-gray-dark);
            height: 2rem;
            margin-top: 0;
        }

        div.title-wrapper div {
            padding: 1.25rem 0.75rem 1rem 0.75rem;
        }

        .odd-studio div.title-wrapper div {
            background-color: var(--odd-purple-medium);
        }

        .odd-education div.title-wrapper div {
            background-color: var(--odd-blue-medium);
        }

        .odd-experiments div.title-wrapper div {
            background-color: var(--odd-turquoise-medium);
        }

        div.title-wrapper h1 {
            color: var(--odd-gray-light);
            font-size: 1.375rem;
            margin-bottom: 0.375rem;
        }

        div.title-wrapper h2 {
            color: var(--odd-gray-light);
            font-size: 0.75rem;
            padding-left: 0.25rem;
        }

        div.summary-wrapper {
            -webkit-box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
            box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
            margin: 0 0 1.25rem 0;
        }

        div.summary-wrapper div.mobile-cover-image {
            display: block;
            height: calc(85vw * (9 / 16));
        }

        div.summary-wrapper :global(p) {
            font-size: 1rem;
            line-height: 120%;
            padding: 1.25rem 1rem;
        }

        div.details-wrapper {
            gap: 1.25rem 1.25rem;
            -ms-grid-columns: 1fr 1.25rem 1fr 1.25rem 1fr;
            grid-template-columns: repeat(3, 1fr);
            padding: 1rem 1rem;
        }

        div.details-wrapper span:nth-child(1) {
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
        }

        div.details-wrapper span:nth-child(2) {
            font-size: 0.875rem;
        }
    }

    @media only screen and (min-width: 600px) {
        div.desktop-cover-image {
            display: none;
        }

        section {
            margin: 5rem 0 1.25rem 0;
        }

        div.title-wrapper {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            gap: 1.25rem;
            margin-bottom: 1.25rem;
        }

        div.title-wrapper button {
            border: 1px solid var(--odd-gray-dark);
            height: 2rem;
            margin-top: 0;
        }

        div.title-wrapper div {
            padding: 1.25rem 0.75rem 1rem 0.75rem;
        }

        .odd-studio div.title-wrapper div {
            background-color: var(--odd-purple-medium);
        }

        .odd-education div.title-wrapper div {
            background-color: var(--odd-blue-medium);
        }

        .odd-experiments div.title-wrapper div {
            background-color: var(--odd-turquoise-medium);
        }

        div.title-wrapper h1 {
            color: var(--odd-gray-light);
            font-size: 1.375rem;
            margin-bottom: 0.375rem;
        }

        div.title-wrapper h2 {
            color: var(--odd-gray-light);
            font-size: 0.75rem;
            padding-left: 0.25rem;
        }

        div.summary-wrapper {
            -webkit-box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
            box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
            margin-bottom: 0 0 1.25rem 0;
        }

        div.summary-wrapper div.mobile-cover-image {
            display: block;
            height: calc(75vw * (9 / 16));
        }

        div.summary-wrapper :global(p) {
            font-size: 1rem;
            line-height: 120%;
            padding: 1.25rem 1rem;
        }

        div.details-wrapper {
            gap: 1.25rem 1.25rem;
            -ms-grid-columns: 1fr 1.25rem 1fr 1.25rem 1fr;
            grid-template-columns: repeat(3, 1fr);
            padding: 1rem 1rem;
        }

        div.details-wrapper span:nth-child(1) {
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
        }

        div.details-wrapper span:nth-child(2) {
            font-size: 0.875rem;
        }
    }

    @media only screen and (min-width: 768px) {
        div.title-wrapper {
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }

        div.title-wrapper button {
            height: 2.25rem;
        }

        div.title-wrapper div {
            padding: 1.25rem 1.5rem 1rem 1.5rem;
        }

        div.title-wrapper h1 {
            font-size: 1.875rem;
            margin-bottom: 0.5rem;
        }

        div.title-wrapper h2 {
            font-size: 0.875rem;
        }

        div.summary-wrapper {
            margin-bottom: 1.5rem;
        }

        div.summary-wrapper div.mobile-cover-image {
            display: block;
            height: calc(70vw * (9 / 16));
        }

        div.summary-wrapper :global(p) {
            font-size: 1.125rem;
            line-height: 125%;
            padding: 1.5rem 1.5rem;
        }

        div.details-wrapper {
            gap: 1.5rem 1.5rem;
            padding: 1.5rem 1.5rem;
        }

        div.details-wrapper span:nth-child(1) {
            font-size: 1rem;
            margin-bottom: 0.375rem;
        }

        div.details-wrapper span:nth-child(2) {
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        div.title-wrapper {
            gap: 1.75rem;
            margin-bottom: 1.75rem;
        }

        div.title-wrapper div {
            padding: 1.5rem 1.75rem 1.25rem 1.75rem;
        }

        div.summary-wrapper {
            margin-bottom: 1.75rem;
        }

        div.summary-wrapper div.mobile-cover-image {
            display: block;
            height: calc(60vw * (9 / 16));
        }

        div.summary-wrapper :global(p) {
            padding: 1.75rem 1.75rem;
        }

        div.details-wrapper {
            gap: 1.75rem 1.75rem;
            padding: 1.75rem 1.75rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        div.desktop-cover-image {
            display: block;
            height: calc(100svh / 2);
        }

        section {
            margin: 5rem 0;
        }

        div.title-wrapper {
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            gap: 3rem;
            margin-bottom: 2rem;
        }

        div.title-wrapper button {
            border: 2px solid var(--odd-gray-dark);
            height: 3rem;
            margin-top: 0.5rem;
        }

        div.title-wrapper div {
            background-color: var(--odd-gray-light) !important;
            padding: 0;
        }

        div.title-wrapper h1 {
            font-size: 3.5rem;
            margin-bottom: 0.75rem;
        }

        div.title-wrapper h2 {
            font-size: 1.25rem;
            padding-left: 0.5rem;
        }

        .odd-studio div.title-wrapper h1,
        .odd-studio div.title-wrapper h2 {
            color: var(--odd-purple-medium);
        }

        .odd-education div.title-wrapper h1,
        .odd-education div.title-wrapper h2 {
            color: var(--odd-blue-medium);
        }

        .odd-experiments div.title-wrapper h1,
        .odd-experiments div.title-wrapper h2 {
            color: var(--odd-turquoise-medium);
        }

        div.summary-wrapper {
            -webkit-box-shadow: none;
            box-shadow: none;
            margin-bottom: 2rem;
        }

        div.summary-wrapper div.mobile-cover-image {
            display: none;
        }

        div.summary-wrapper :global(p) {
            font-size: 1.25rem;
            line-height: 130%;
            padding: 0;
        }

        div.details-wrapper {
            -ms-flex-line-pack: start;
            align-content: start;
            gap: 2rem;
            -ms-grid-columns: 1fr 2rem 1fr 2rem 1fr 2rem 1fr 2rem 1fr;
            grid-template-columns: repeat(5, 1fr);
            padding: 2rem 2rem;
        }

        div.details-wrapper span:nth-child(1) {
            font-size: 1.125rem;
            margin-bottom: 0.375rem;
        }

        div.details-wrapper span:nth-child(2) {
            font-size: 1.125rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        section {
            margin: 5rem 0;
        }

        div.title-wrapper {
            gap: 3.75rem;
            margin-bottom: 2.5rem;
        }

        div.summary-wrapper {
            margin-bottom: 2.5rem;
        }

        div.details-wrapper {
            gap: 2.5rem;
            padding: 2.5rem 2.5rem;
        }
    }
</style>
