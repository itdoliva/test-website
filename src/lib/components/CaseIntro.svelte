<script>
    import { PrismicRichText } from '@prismicio/svelte';

    export let content;
</script>

<section>
    <div class="title-wrapper">
        <button type="button" on:click={() => history.back()} />
        <div>
            <h1>{content.title || ''}</h1>
            <h2>{content.category || ''}</h2>
        </div>
    </div>
    <div class="content-wrapper">
        <div class="summary-wrapper">
            <div style={`background-image: url(${content.cover_image.url});`} />
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
            <div>
                <span>Tools</span>
                <span>{content.tools || ''}</span>
            </div>
        </div>
    </div>
</section>

<style>
    .title-wrapper {
        background-color: var(--odd-gray-light);
        display: flex;
        justify-content: center;
    }

    .title-wrapper button {
        background-color: transparent;
        background-image: url('/icons/left-arrow-dark.svg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 55%;
        border-radius: 100%;
        cursor: pointer;
        display: block;
    }

    .title-wrapper button:hover {
        background-color: var(--odd-turquoise-light);
    }

    .title-wrapper div {
        border-radius: 0.625rem;
        width: 100%;
    }

    .title-wrapper h1 {
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.0275rem;
        line-height: 95%;
    }

    .title-wrapper h2 {
        font-family: 'Switzer', sans-serif;
        font-weight: 500;
        letter-spacing: -0.0125rem;
        line-height: 120%;
        text-transform: uppercase;
    }

    .content-wrapper {
        display: grid;
    }

    .summary-wrapper {
        background-color: var(--odd-gray-light);
        border-radius: 0.625rem;
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
        display: block;
    }

    .summary-wrapper div {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
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
        background-color: var(--odd-gray-light);
        border-radius: 0.625rem;
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
        display: grid;
    }

    .details-wrapper span:nth-child(1) {
        color: var(--odd-purple-medium);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 700;
        letter-spacing: -0.0125rem;
        line-height: 100%;
        text-transform: uppercase;
    }

    .details-wrapper span:nth-child(2) {
        color: var(--odd-gray-dark);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.015rem;
        line-height: 110%;
        text-wrap: balance;
    }

    .details-wrapper span:nth-child(2) a {
        color: var(--odd-purple-medium);
        cursor: pointer;
        font-weight: 500;
        text-decoration: underline;
    }

    @media only screen and (max-width: 600px) {
        section {
            margin: 3.75rem auto 1.25rem auto;
            width: 85vw;
        }

        .title-wrapper {
            align-items: center;
            gap: 1.75rem;
            margin-bottom: 1.25rem;
        }

        .title-wrapper button {
            border: 1px solid var(--odd-gray-dark);
            height: 2rem;
            margin-top: 0;
            width: 2.125rem;
        }

        .title-wrapper div {
            background-color: var(--odd-purple-medium);
            padding: 1.25rem 0.75rem 1rem 0.75rem;
        }

        .title-wrapper h1 {
            color: var(--odd-gray-light);
            font-size: 1.375rem;
            margin-bottom: 0.375rem;
        }

        .title-wrapper h2 {
            color: var(--odd-gray-light);
            font-size: 0.75rem;
        }

        .content-wrapper {
            gap: 0;
            grid-template-columns: 1fr;
            margin-bottom: 0;
        }

        .summary-wrapper {
            margin: 0 0 1.25rem 0;
        }

        .summary-wrapper div {
            height: 12.5rem;
        }

        .summary-wrapper :global(p) {
            font-size: 1rem;
            line-height: 120%;
            padding: 1.25rem 1rem;
        }

        .details-wrapper {
            gap: 1.25rem 1.25rem;
            grid-template-columns: 1fr 1fr 1fr;
            padding: 1rem 1rem;
        }

        .details-wrapper span:nth-child(1) {
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
        }

        .details-wrapper span:nth-child(2) {
            font-size: 0.875rem;
        }
    }

    @media only screen and (min-width: 600px) {
        section {
            margin: 3.75rem auto 1.25rem auto;
            width: 75vw;
        }

        .title-wrapper {
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
        }

        .title-wrapper button {
            border: 1px solid var(--odd-gray-dark);
            height: 2rem;
            margin-top: 0;
            width: 2.125rem;
        }

        .title-wrapper div {
            background-color: var(--odd-purple-medium);
            padding: 1.25rem 1.25rem 1rem 1.25rem;
        }

        .title-wrapper h1 {
            color: var(--odd-gray-light);
            font-size: 1.375rem;
            margin-bottom: 0.375rem;
        }

        .title-wrapper h2 {
            color: var(--odd-gray-light);
            font-size: 0.75rem;
        }

        .content-wrapper {
            gap: 0;
            grid-template-columns: 1fr;
            margin-bottom: 0;
        }

        .summary-wrapper {
            margin-bottom: 1.25rem;
        }

        .summary-wrapper div {
            height: 12.5rem;
        }

        .summary-wrapper :global(p) {
            font-size: 1rem;
            line-height: 120%;
            padding: 1.25rem 1rem;
        }

        .details-wrapper {
            gap: 1.25rem 1.25rem;
            grid-template-columns: 1fr 1fr 1fr;
            padding: 1rem 1rem;
        }

        .details-wrapper span:nth-child(1) {
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
        }

        .details-wrapper span:nth-child(2) {
            font-size: 0.875rem;
        }
    }

    @media only screen and (min-width: 768px) {
        section {
            margin: 3.75rem auto 1.5rem auto;
            width: 70vw;
        }

        .title-wrapper {
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .title-wrapper button {
            border: 1px solid var(--odd-gray-dark);
            height: 2.25rem;
            margin-top: 0;
            width: 2.5rem;
        }

        .title-wrapper div {
            background-color: var(--odd-purple-medium);
            padding: 1.25rem 1.5rem 1rem 1.5rem;
        }

        .title-wrapper h1 {
            color: var(--odd-gray-light);
            font-size: 1.875rem;
            margin-bottom: 0.5rem;
        }

        .title-wrapper h2 {
            color: var(--odd-gray-light);
            font-size: 0.875rem;
        }

        .content-wrapper {
            gap: 0;
            grid-template-columns: 1fr;
            margin-bottom: 0;
        }

        .summary-wrapper {
            margin-bottom: 1.5rem;
        }

        .summary-wrapper div {
            height: 15rem;
        }

        .summary-wrapper :global(p) {
            font-size: 1.125rem;
            line-height: 125%;
            padding: 1.5rem 1.5rem;
        }

        .details-wrapper {
            gap: 1.5rem 1.5rem;
            grid-template-columns: 1fr 1fr 1fr;
            padding: 1.5rem 1.5rem;
        }

        .details-wrapper span:nth-child(1) {
            font-size: 1rem;
            margin-bottom: 0.375rem;
        }

        .details-wrapper span:nth-child(2) {
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        section {
            margin: 3.75rem auto 1.75rem auto;
            width: 60vw;
        }

        .title-wrapper {
            align-items: center;
            gap: 1.75rem;
            margin-bottom: 1.75rem;
        }

        .title-wrapper button {
            border: 1px solid var(--odd-gray-dark);
            height: 2.25rem;
            margin-top: 0;
            width: 2.5rem;
        }

        .title-wrapper div {
            background-color: var(--odd-purple-medium);
            padding: 1.5rem 1.75rem 1.25rem 1.75rem;
        }

        .title-wrapper h1 {
            color: var(--odd-gray-light);
            font-size: 1.875rem;
            margin-bottom: 0.5rem;
        }

        .title-wrapper h2 {
            color: var(--odd-gray-light);
            font-size: 0.875rem;
        }

        .content-wrapper {
            gap: 0;
            grid-template-columns: 1fr;
            margin-bottom: 0;
        }

        .summary-wrapper {
            margin-bottom: 1.75rem;
        }

        .summary-wrapper div {
            height: 15rem;
        }

        .summary-wrapper :global(p) {
            font-size: 1.125rem;
            line-height: 125%;
            padding: 1.75rem 1.75rem;
        }

        .details-wrapper {
            gap: 1.75rem 1.75rem;
            grid-template-columns: 1fr 1fr 1fr;
            padding: 1.75rem 1.75rem;
        }

        .details-wrapper span:nth-child(1) {
            font-size: 1rem;
            margin-bottom: 0.375rem;
        }

        .details-wrapper span:nth-child(2) {
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        section {
            margin: 5rem auto;
            width: 60rem;
        }

        .title-wrapper {
            align-items: flex-start;
            gap: 3rem;
            margin-bottom: 3rem;
        }

        .title-wrapper button {
            border: 2px solid var(--odd-gray-dark);
            height: 3rem;
            margin-top: 0.25rem;
            width: 3.25rem;
        }

        .title-wrapper div {
            background-color: var(--odd-gray-light);
            padding: 0;
        }

        .title-wrapper h1 {
            color: var(--odd-purple-medium);
            font-size: 3.5rem;
            margin-bottom: 0.75rem;
        }

        .title-wrapper h2 {
            color: var(--odd-purple-medium);
            font-size: 1.25rem;
        }

        .content-wrapper {
            gap: 1.25rem;
            grid-template-columns: 3fr 1fr;
            margin-bottom: 5rem;
        }

        .summary-wrapper {
            margin-bottom: 0;
        }

        .summary-wrapper div {
            height: 20rem;
        }

        .summary-wrapper :global(p) {
            font-size: 1.25rem;
            line-height: 130%;
            padding: 2rem 2rem;
        }

        .details-wrapper {
            align-content: start;
            gap: 2rem;
            grid-template-columns: 1fr;
            height: 100%;
            margin-bottom: 0;
            padding: 2rem 2rem;
        }

        .details-wrapper span:nth-child(1) {
            font-size: 1.125rem;
            margin-bottom: 0.375rem;
        }

        .details-wrapper span:nth-child(2) {
            font-size: 1.125rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        section {
            margin: 5rem auto;
            width: 80rem;
        }

        .title-wrapper {
            align-items: flex-start;
            gap: 3rem;
            margin-bottom: 3rem;
        }

        .title-wrapper button {
            border: 2px solid var(--odd-gray-dark);
            height: 3rem;
            margin-top: 0.25rem;
            width: 3.25rem;
        }

        .title-wrapper div {
            background-color: var(--odd-gray-light);
            padding: 0;
        }

        .title-wrapper h1 {
            color: var(--odd-purple-medium);
            font-size: 3.5rem;
            margin-bottom: 0.75rem;
        }

        .title-wrapper h2 {
            color: var(--odd-purple-medium);
            font-size: 1.25rem;
        }

        .content-wrapper {
            gap: 1.25rem;
            grid-template-columns: 3fr 1fr;
            margin-bottom: 5rem;
        }

        .summary-wrapper {
            margin-bottom: 0;
        }

        .summary-wrapper div {
            height: 20rem;
        }

        .summary-wrapper :global(p) {
            font-size: 1.25rem;
            line-height: 130%;
            padding: 2.5rem 2.5rem;
        }

        .details-wrapper {
            align-content: start;
            gap: 2rem;
            grid-template-columns: 1fr;
            height: 100%;
            margin-bottom: 0;
            padding: 2.5rem 2.5rem;
        }

        .details-wrapper span:nth-child(1) {
            font-size: 1.125rem;
            margin-bottom: 0.375rem;
        }

        .details-wrapper span:nth-child(2) {
            font-size: 1.125rem;
        }
    }
</style>
