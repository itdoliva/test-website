<script>
    export let content;

    let currentIndex = 0;

    const getPreviewText = (caseContent) => {
        if (!caseContent.preview) return '';

        return caseContent.preview.length < 500
            ? caseContent.preview
            : caseContent.preview.slice(0, 497) + '...';
    };
</script>

<div class="branch-gallery-menu">
    <div>
        {#each content as branchContent, index}
            <button
                type="button"
                class={`odd-${branchContent.pattern}
                       ${currentIndex === index ? 'active' : 'disabled'}`}
                on:click={() => (currentIndex = index)}
            >
                <h3>{branchContent.branch}</h3>
                <h4>{branchContent.title}</h4>
            </button>
        {/each}
    </div>
    <div class={`odd-${content[currentIndex].pattern}`}>
        <h4>
            {content[currentIndex].subtitle}
        </h4>
        <p>{content[currentIndex].audience}</p>
    </div>
</div>
<div class={`branch-gallery-content odd-${content[currentIndex].pattern}`}>
    <!-- eslint-disable no-unused-vars -->
    {#each Array(3) as _, column}
        <div class={`column-${column}`}>
            {#each content[currentIndex].cases.slice(0, 3) as caseContent, i}
                {#if i % 3 === column}
                    <a
                        href={`/${content[currentIndex].pattern}/cases/${caseContent.uid}`}
                    >
                        <div
                            style={`background-image: url(${caseContent.display_image.url});`}
                        >
                            <div class="branch-gallery-overlay">
                                {getPreviewText(caseContent)}
                            </div>
                        </div>
                        <h4>{caseContent.title}</h4>
                    </a>
                {/if}
            {/each}
            {#if content[currentIndex].cases.length < 3 && column >= content[currentIndex].cases.length % 3}
                <a href={`/${content[currentIndex].pattern}`}>
                    <div class="case-placeholder" />
                </a>
            {/if}
            <a href={`/${content[currentIndex].pattern}`}>
                <div class="case-placeholder last-placeholder" />
            </a>
        </div>
    {/each}
</div>
<a
    class={`branch-gallery-link odd-${content[currentIndex].pattern}`}
    href={`/${content[currentIndex].pattern}`}
>
    <span>See all projects</span><span />
</a>

<style>
    div.branch-gallery-menu {
        margin: 0 -10rem;
    }

    div.branch-gallery-menu > div:nth-child(1) {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    div.branch-gallery-menu button {
        border-radius: 0.625rem;
        -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        text-align: left;
        width: 100%;
    }

    div.branch-gallery-menu button.odd-studio.active {
        background-color: var(--odd-purple-medium);
        color: var(--odd-gray-light);
    }

    div.branch-gallery-menu button.odd-education.active {
        background-color: var(--odd-blue-medium);
        color: var(--odd-gray-light);
    }

    div.branch-gallery-menu button.odd-experiments.active {
        background-color: var(--odd-turquoise-medium);
        color: var(--odd-gray-light);
    }

    div.branch-gallery-menu button.odd-studio.disabled {
        background-color: var(--odd-gray-light);
        color: var(--odd-purple-medium);
    }

    div.branch-gallery-menu button.odd-education.disabled {
        background-color: var(--odd-gray-light);
        color: var(--odd-blue-medium);
    }

    div.branch-gallery-menu button.odd-experiments.disabled {
        background-color: var(--odd-gray-light);
        color: var(--odd-turquoise-medium);
    }

    div.branch-gallery-menu button.odd-studio.disabled:hover {
        -webkit-box-shadow: 4px 4px 10px rgba(111, 2, 253, 0.5);
        box-shadow: 4px 4px 10px rgba(111, 2, 253, 0.5);
    }

    div.branch-gallery-menu button.odd-education.disabled:hover {
        -webkit-box-shadow: 4px 4px 10px rgba(53, 112, 223, 0.5);
        box-shadow: 4px 4px 10px rgba(53, 112, 223, 0.5);
    }

    div.branch-gallery-menu button.odd-experiments.disabled:hover {
        -webkit-box-shadow: 4px 4px 10px rgba(10, 194, 200, 0.5);
        box-shadow: 4px 4px 10px rgba(10, 194, 200, 0.5);
    }

    div.branch-gallery-menu button h3 {
        cursor: pointer;
        font-family: 'Switzer', sans-serif;
        font-weight: 500;
        letter-spacing: -0.01rem;
        text-transform: uppercase;
    }

    div.branch-gallery-menu button h4 {
        cursor: pointer;
        font-family: 'Newsreader', serif;
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.08rem;
        line-height: 95%;
        text-wrap: balance;
    }

    div.branch-gallery-menu div.odd-studio:nth-child(2) {
        color: var(--odd-purple-medium);
        margin: 0 auto 0 0;
        text-align: left;
    }

    div.branch-gallery-menu div.odd-education:nth-child(2) {
        color: var(--odd-blue-medium);
        margin: 0 auto 0 auto;
        text-align: center;
    }

    div.branch-gallery-menu div.odd-experiments:nth-child(2) {
        color: var(--odd-turquoise-medium);
        margin: 0 0 0 auto;
        text-align: right;
    }

    div.branch-gallery-menu div:nth-child(2) h4 {
        font-family: 'Switzer', sans-serif;
        font-weight: 500;
        letter-spacing: -0.03rem;
        line-height: 95%;
        text-transform: lowercase;
        text-wrap: balance;
    }

    div.branch-gallery-menu div:nth-child(2) p {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.01rem;
        line-height: 95%;
        text-transform: uppercase;
        text-wrap: balance;
    }

    div.branch-gallery-content {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        display: -ms-grid;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 0 -10rem;
        width: calc(100% + 20rem);
    }

    div.branch-gallery-content > div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    div.branch-gallery-content a {
        cursor: pointer;
        display: block;
        text-decoration: none;
        width: 100%;
    }

    div.branch-gallery-content a > div {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 1.25rem;
        cursor: pointer;
        width: 100%;
    }

    div.branch-gallery-content.odd-studio a > div {
        background-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(var(--odd-purple-medium)),
            to(var(--odd-white))
        );
        background-image: -o-linear-gradient(
            top,
            var(--odd-purple-medium) 0%,
            var(--odd-white) 100%
        );
        background-image: linear-gradient(
            180deg,
            var(--odd-purple-medium) 0%,
            var(--odd-white) 100%
        );
    }

    div.branch-gallery-content.odd-education a > div {
        background-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(var(--odd-blue-medium)),
            to(var(--odd-white))
        );
        background-image: -o-linear-gradient(
            top,
            var(--odd-blue-medium) 0%,
            var(--odd-white) 100%
        );
        background-image: linear-gradient(
            180deg,
            var(--odd-blue-medium) 0%,
            var(--odd-white) 100%
        );
    }

    div.branch-gallery-content.odd-experiments a > div {
        background-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(var(--odd-turquoise-medium)),
            to(var(--odd-white))
        );
        background-image: -o-linear-gradient(
            top,
            var(--odd-turquoise-medium) 0%,
            var(--odd-white) 100%
        );
        background-image: linear-gradient(
            180deg,
            var(--odd-turquoise-medium) 0%,
            var(--odd-white) 100%
        );
    }

    div.branch-gallery-content div.branch-gallery-overlay {
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: inherit;
        color: var(--odd-gray-light);
        cursor: pointer;
        font-family: 'Switzer', sans-serif;
        font-size: 1.25rem;
        font-weight: 400;
        height: inherit;
        letter-spacing: -0.09rem;
        line-height: 120%;
        opacity: 0;
        padding: 2rem 2rem;
        -webkit-transition: opacity 0.3s ease-in-out;
        -o-transition: opacity 0.3s ease-in-out;
        transition: opacity 0.3s ease-in-out;
        width: 100%;
    }

    div.branch-gallery-content a:hover div.branch-gallery-overlay {
        opacity: 1;
    }

    div.branch-gallery-content h4 {
        color: var(--odd-gray-dark);
        cursor: pointer;
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.04rem;
        line-height: 110%;
        text-align: center;
        text-wrap: balance;
    }

    div.branch-gallery-content.odd-studio a:hover h4 {
        color: var(--odd-purple-medium);
    }

    div.branch-gallery-content.odd-education a:hover h4 {
        color: var(--odd-blue-medium);
    }

    div.branch-gallery-content.odd-experiments a:hover h4 {
        color: var(--odd-turquoise-medium);
    }

    div.branch-gallery-content div.column-0 > a:nth-child(odd) div,
    div.branch-gallery-content div.column-2 > a:nth-child(odd) div {
        height: 30rem;
    }

    div.branch-gallery-content div.column-1 > a:nth-child(even) div,
    div.branch-gallery-content div.column-1 > a:nth-child(odd) div {
        height: 37.5rem;
    }

    div.branch-gallery-content div.column-0 > a:nth-child(even) div,
    div.branch-gallery-content div.column-2 > a:nth-child(even) div {
        height: 35rem;
    }

    div.branch-gallery-content div.case-placeholder {
        background-image: -o-linear-gradient(
            295deg,
            #e7e7e7 5%,
            #faf9fa 95%
        ) !important;
        background-image: linear-gradient(
            155deg,
            #e7e7e7 5%,
            #faf9fa 95%
        ) !important;
    }

    div.branch-gallery-content div.case-placeholder {
        background-image: -o-linear-gradient(
            295deg,
            #e7e7e7 5%,
            #faf9fa 95%
        ) !important;
        background-image: linear-gradient(
            155deg,
            #e7e7e7 5%,
            #faf9fa 95%
        ) !important;
    }

    div.branch-gallery-content div.case-placeholder.last-placeholder {
        height: 20rem !important;
    }

    a.branch-gallery-link {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border: 2px solid var(--odd-gray-dark);
        border-radius: 3.75rem;
        color: var(--odd-gray-dark);
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
        text-transform: lowercase;
    }

    a.branch-gallery-link,
    a.branch-gallery-link:hover span {
        cursor: pointer;
        text-decoration: none;
    }

    a.branch-gallery-link.odd-studio:hover {
        color: var(--odd-gray-light);
        background-color: var(--odd-purple-medium);
        border-color: var(--odd-purple-medium);
    }

    a.branch-gallery-link.odd-education:hover {
        color: var(--odd-gray-light);
        background-color: var(--odd-blue-medium);
        border-color: var(--odd-blue-medium);
    }

    a.branch-gallery-link.odd-experiments:hover {
        color: var(--odd-gray-light);
        background-color: var(--odd-turquoise-medium);
        border-color: var(--odd-turquoise-medium);
    }

    a.branch-gallery-link span {
        display: inline-block;
    }

    a.branch-gallery-link span:nth-child(2) {
        background-image: url('/icons/right-arrow-dark.svg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    a.branch-gallery-link:hover span:nth-child(2) {
        background-image: url('/icons/right-arrow-light.svg');
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
        div.branch-gallery-menu > div:nth-child(1) {
            gap: 1.25rem;
            margin: 2rem 0 1.5rem 0;
        }

        div.branch-gallery-menu button {
            padding: 1.25rem;
        }

        div.branch-gallery-menu button h3 {
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        div.branch-gallery-menu button h4 {
            font-size: 2rem;
        }

        div.branch-gallery-menu div:nth-child(2) {
            width: 42.5%;
        }

        div.branch-gallery-menu div:nth-child(2) h4 {
            font-size: 1.875rem;
            margin-bottom: 1rem;
        }

        div.branch-gallery-menu div:nth-child(2) p {
            font-size: 1rem;
            margin-bottom: 3rem;
        }

        div.branch-gallery-content {
            gap: 2rem;
        }

        div.branch-gallery-content > div {
            gap: 3rem;
        }

        div.branch-gallery-content h4 {
            font-size: 1.75rem;
            margin-top: 1rem;
        }

        a.branch-gallery-link {
            font-size: 1.5rem;
            gap: 0.75rem;
            margin: 3rem auto 2rem auto;
            padding: 0.75rem 1.5rem;
            width: 24rem;
        }

        a.branch-gallery-link span:nth-child(2) {
            height: 1.5rem;
            width: 1.5rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div.branch-gallery-menu > div:nth-child(1) {
            gap: 1.5rem;
            margin: 2.5rem 0 1.5rem 0;
        }

        div.branch-gallery-menu button {
            padding: 1.25rem;
        }

        div.branch-gallery-menu button h4 {
            font-size: 2.25rem;
        }

        div.branch-gallery-menu div:nth-child(2) {
            width: 37.5%;
        }

        div.branch-gallery-menu div:nth-child(2) h4 {
            font-size: 2rem;
        }

        div.branch-gallery-menu div:nth-child(2) p {
            margin-bottom: 3.75rem;
        }

        a.branch-gallery-link {
            margin: 3.75rem auto 2.5rem auto;
            width: 29rem;
        }
    }
</style>
