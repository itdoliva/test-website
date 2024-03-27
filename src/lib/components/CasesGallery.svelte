<script>
    export let branch;
    export let cases;

    const getPreviewText = (caseContent) => {
        if (!caseContent.preview) return '';

        return caseContent.preview.length < 500
            ? caseContent.preview
            : caseContent.preview.slice(0, 497) + '...';
    };
</script>

{#if cases}
    <div class={`cases-gallery odd-${branch}`}>
        <!-- eslint-disable no-unused-vars -->
        {#each Array(3) as _, column}
            <div class={`column-${column}`}>
                {#each cases as content, index}
                    {#if index % 3 === column}
                        {#if content.ready}
                            <a href={`/${branch}/cases/${content.uid}`}>
                                <div
                                    style={`background-image: url(${content.display_image.url});`}
                                >
                                    <div class="overlay">
                                        {getPreviewText(content)}
                                    </div>
                                </div>
                                <h4>{content.title}</h4>
                            </a>
                        {:else}
                            <div class="not-ready">
                                <div
                                    style={`background-image: url(${content.display_image.url});`}
                                />
                                <h4>{content.title}</h4>
                            </div>
                        {/if}
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
{/if}

<style>
    div.cases-gallery {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        display: -ms-grid;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
    }

    div.cases-gallery > div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    div.cases-gallery a,
    div.cases-gallery div.not-ready {
        cursor: pointer;
        display: block;
        text-decoration: none;
        width: 100%;
    }

    div.cases-gallery div.not-ready,
    div.cases-gallery div.not-ready * {
        cursor: not-allowed !important;
    }

    div.cases-gallery div.not-ready {
        opacity: 0.25;
    }

    div.cases-gallery a > div,
    div.cases-gallery div.not-ready > div {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 1.25rem;
        cursor: pointer;
        width: 100%;
    }

    div.cases-gallery a div.overlay {
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: inherit;
        color: var(--odd-gray-light);
        cursor: pointer;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        height: inherit;
        letter-spacing: -0.09rem;
        line-height: 120%;
        opacity: 0;
        -webkit-transition: opacity 0.3s ease-in-out;
        -o-transition: opacity 0.3s ease-in-out;
        transition: opacity 0.3s ease-in-out;
        width: 100%;
    }

    div.cases-gallery a:hover div.overlay {
        opacity: 1;
    }

    div.cases-gallery a h4,
    div.cases-gallery div.not-ready h4 {
        color: var(--odd-gray-dark);
        cursor: pointer;
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.04rem;
        line-height: 110%;
        text-align: center;
        text-wrap: balance;
    }

    div.cases-gallery.odd-studio a:hover h4 {
        color: var(--odd-purple-medium);
    }

    div.cases-gallery.odd-education a:hover h4 {
        color: var(--odd-blue-medium);
    }

    div.cases-gallery.odd-experiments a:hover h4 {
        color: var(--odd-turquoise-medium);
    }

    div.column-0 > a:nth-child(odd) div,
    div.column-2 > a:nth-child(odd) div,
    div.column-0 > div.not-ready:nth-child(odd) div,
    div.column-2 > div.not-ready:nth-child(odd) div {
        height: 30rem;
    }

    div.column-1 > a:nth-child(even) div,
    div.column-1 > a:nth-child(odd) div,
    div.column-1 > div.not-ready:nth-child(even) div,
    div.column-1 > div.not-ready:nth-child(odd) div {
        height: 37.5rem;
    }

    div.column-0 > a:nth-child(even) div,
    div.column-2 > a:nth-child(even) div,
    div.column-0 > div.not-ready:nth-child(even) div,
    div.column-2 > div.not-ready:nth-child(even) div {
        height: 35rem;
    }

    @media only screen and (max-width: 600px) {
    }

    @media only screen and (min-width: 600px) {
    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1024px) {
    }

    @media only screen and (min-width: 1280px) {
        div.cases-gallery {
            gap: 2rem;
        }

        div.cases-gallery > div {
            gap: 3rem;
        }

        div.cases-gallery a div.overlay {
            font-size: 1.25rem;
            padding: 2rem 2rem;
        }

        div.cases-gallery a h4,
        div.cases-gallery div.not-ready h4 {
            font-size: 1.75rem;
            margin-top: 1rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div.cases-gallery {
            gap: 2.5rem;
        }

        div.cases-gallery > div {
            gap: 3.75rem;
        }

        div.cases-gallery a div.overlay {
            font-size: 1.375rem;
            padding: 2.5rem 2.5rem;
        }

        div.cases-gallery a h4,
        div.cases-gallery div.not-ready h4 {
            font-size: 2rem;
            margin-top: 1.25rem;
        }
    }
</style>
