<script>
    import { PrismicImage, PrismicRichText } from '@prismicio/svelte';

    export let content;
</script>

<div class="title-wrapper">
    <button type="button" on:click={() => history.back()} />
    <div>
        <h1>{content.title || ''}</h1>
        <h2>{content.type || ''}</h2>
    </div>
</div>
<div class="summary-wrapper">
    <PrismicImage field={content.cover_image} />
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
        <span>Link</span>
        <span>
            {#if content.link}
                See the project
                <a href={content.link} rel="noopener noreferrer">here</a>
            {/if}
        </span>
    </div>
    <div>
        <span>Tools</span>
        <span>{content.tools || ''}</span>
    </div>
</div>

<style>
    .title-wrapper {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .title-wrapper button {
        background-color: transparent;
        background-image: url('/icons/left-arrow-dark.svg');
        background-position: center center;
        background-repeat: no-repeat;
        border: 2px solid var(--odd-gray-dark);
        cursor: pointer;
        display: block;
    }

    .title-wrapper button:hover {
        background-color: var(--odd-turquoise-light);
    }

    .title-wrapper div {
        background-color: var(--odd-purple-medium);
        width: 100%;
    }

    .title-wrapper h1 {
        color: var(--odd-gray-light);
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.02rem;
        line-height: 95%;
    }

    .title-wrapper h2 {
        color: var(--odd-gray-light);
        font-family: 'Switzer', sans-serif;
        font-weight: 500;
        letter-spacing: -0.01rem;
        text-transform: uppercase;
    }

    .summary-wrapper {
        background-color: var(--odd-white);
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    }

    .summary-wrapper :global(img) {
        display: block;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        height: auto;
        width: 100%;
    }

    .summary-wrapper :global(p) {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.02rem;
        width: 100%;
    }

    .summary-wrapper :global(p strong) {
        font-weight: 600;
    }

    .summary-wrapper :global(p em) {
        font-style: italic;
    }

    .summary-wrapper :global(p a) {
        color: var(--odd-purple-medium);
        cursor: pointer;
        font-weight: 500;
        text-decoration: underline;
    }

    .details-wrapper {
        display: grid;
        background-color: var(--odd-white);
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
        grid-template-columns: 1fr 1fr 1fr;
    }

    .details-wrapper span:nth-child(1) {
        color: var(--odd-purple-medium);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 700;
        letter-spacing: -0.0125rem;
        text-transform: uppercase;
    }

    .details-wrapper span:nth-child(2) {
        color: var(--odd-gray-dark);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.015rem;
        text-wrap: balance;
    }

    .details-wrapper span:nth-child(2) a {
        color: var(--odd-purple-medium);
        cursor: pointer;
        font-weight: 500;
        text-decoration: underline;
    }

    @media only screen and (max-width: 600px) {
        .title-wrapper {
            gap: 0.75rem;
            margin-bottom: 1.25rem;
        }

        .title-wrapper button {
            background-size: 60%;
            border-radius: 2rem;
            height: 2rem;
            width: 2.125rem;
        }

        .title-wrapper div {
            border-radius: 0.625rem;
            padding: 1.25rem 0.75rem 1rem 0.75rem;
        }

        .title-wrapper h1 {
            font-size: 1.375rem;
            line-height: 95%;
            margin-bottom: 0.5rem;
        }

        .title-wrapper h2 {
            font-size: 0.75rem;
            letter-spacing: -0.0125rem;
            line-height: 120%;
        }

        .summary-wrapper {
            border-radius: 0.625rem;
            margin-bottom: 1.25rem;
        }

        .summary-wrapper :global(p) {
            font-size: 1rem;
            line-height: 110%;
            padding: 1.25rem 1rem;
        }

        .details-wrapper {
            border-radius: 0.625rem;
            gap: 1.25rem 1.5rem;
            margin-bottom: 1.25rem;
            padding: 1rem 1rem;
        }

        .details-wrapper span:nth-child(1) {
            font-size: 0.75rem;
            line-height: 120%;
            margin-bottom: 0.25rem;
        }

        .details-wrapper span:nth-child(2) {
            font-size: 0.75rem;
            line-height: 125%;
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
