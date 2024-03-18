<script>
    export let branch;
    export let cases;
</script>

<div class={`cases-gallery odd-${branch}`}>
    <!-- eslint-disable no-unused-vars -->
    {#each Array(3) as _, column}
        <div class={`column-${column}`}>
            {#each cases as content, index}
                {#if index % 3 === column}
                    <a href={`/${branch}/cases/${content.uid}`}>
                        <div
                            class="case-slider-cover"
                            style={`background-image: url(${content.display_image.url});`}
                        />
                        <h4>{content.title}</h4>
                    </a>
                {/if}
            {/each}
        </div>
    {/each}
</div>

<style>
    div.cases-gallery {
        align-items: flex-start;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
    }

    div.cases-gallery > div {
        display: flex;
        flex-direction: column;
    }

    a {
        cursor: pointer;
        display: block;
        text-decoration: none;
        width: 100%;
    }

    a div {
        background: linear-gradient(
            180deg,
            var(--odd-purple-medium) 0%,
            var(--odd-white) 100%
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 1.25rem;
        cursor: pointer;
        width: 100%;
    }

    a h4 {
        color: var(--odd-gray-dark);
        cursor: pointer;
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.04rem;
        line-height: 110%;
        text-align: center;
        text-wrap: balance;
    }

    a:hover h4 {
        color: var(--odd-purple-medium);
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

        a h4 {
            color: var(--odd-gray-dark);
            font-size: 1.75rem;
            margin-top: 1rem;
        }

        div.column-0 > a:nth-child(odd) div,
        div.column-2 > a:nth-child(odd) div {
            height: 30rem;
        }

        div.column-1 > a:nth-child(even) div,
        div.column-1 > a:nth-child(odd) div {
            height: 37.5rem;
        }

        div.column-0 > a:nth-child(even) div,
        div.column-2 > a:nth-child(even) div {
            height: 35rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div.cases-gallery {
            gap: 2.5rem;
        }

        div.cases-gallery > div {
            gap: 3.75rem;
        }

        a h4 {
            color: var(--odd-gray-dark);
            font-size: 2rem;
            margin-top: 1.25rem;
        }

        div.column-0 > a:nth-child(odd) div,
        div.column-2 > a:nth-child(odd) div {
            height: 30rem;
        }

        div.column-1 > a:nth-child(even) div,
        div.column-1 > a:nth-child(odd) div {
            height: 37.5rem;
        }

        div.column-0 > a:nth-child(even) div,
        div.column-2 > a:nth-child(even) div {
            height: 35rem;
        }
    }
</style>
