<script>
    import Container from '@components/Container.svelte';
    import SectionTitle from '@components/SectionTitle.svelte';
    import CasesSlider from '@components/CasesSlider.svelte';
    import CasesGallery from '@components/CasesGallery.svelte';

    export let cases;

    let currentIndex = 0;
    const categories = [
        {
            name: 'Presentations and Reports',
            cases: [...Array(3).fill(cases[1])],
            description:
                'Whether it is <span>PPTs, keynote, Canva</span> we help you translate data discoveries into concise and easily digestible content that effectively engages <span>users</span> and supports <span>decision-makers</span>.',
        },
        {
            name: 'Storytelling and Microwebsites',
            cases: [...Array(4).fill(cases[1])],
            description:
                'Lorem ipsum dolor sit amet consectetur. In tristique lectus est tortor lorem neque. Elit sapien cras diam sem eget felis enim commodo volutpat. Vel malesuada faucibus sed dolor ut mi fringillaarcu.',
        },
        {
            name: 'Infographics and Dashboards',
            cases: [...Array(5).fill(cases[1])],
            description:
                'Lorem ipsum dolor sit amet consectetur. In tristique lectus est tortor lorem neque. Elit sapien cras diam sem eget felis enim commodo volutpat. Vel malesuada faucibus sed dolor ut mi fringillaarcu.',
        },
        {
            name: 'Data-Driven Design Systems',
            cases: [...Array(6).fill(cases[1])],
            description:
                'Lorem ipsum dolor sit amet consectetur. In tristique lectus est tortor lorem neque. Elit sapien cras diam sem eget felis enim commodo volutpat. Vel malesuada faucibus sed dolor ut mi fringillaarcu.',
        },
    ];
</script>

<section>
    <Container>
        <SectionTitle pattern="experiments">Our work</SectionTitle>
        <div class="mobile-content">
            {#each categories as category}
                <h3>{category.name}</h3>
                <p>
                    <!-- eslint-disable svelte/no-at-html-tags -->
                    {@html category.description}
                </p>
                <CasesSlider branch="experiments" cases={category.cases} />
            {/each}
        </div>
        <div class="desktop-content">
            <div>
                {#each categories as category, index}
                    <button
                        type="button"
                        class={currentIndex === index ? 'active' : ''}
                        on:click={() => (currentIndex = index)}
                    >
                        {category.name}
                    </button>
                {/each}
            </div>
            <p>
                <!-- eslint-disable svelte/no-at-html-tags -->
                {@html categories[currentIndex].description}
            </p>
            <CasesGallery
                branch="experiments"
                cases={categories[currentIndex].cases}
            />
        </div>
    </Container>
</section>

<style>
    section {
        background-color: var(--odd-gray-light);
    }

    div.mobile-content h3 {
        color: var(--odd-turquoise-medium);
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.03rem;
        text-align: center;
        text-transform: uppercase;
    }

    div.mobile-content p {
        color: var(--odd-gray-dark);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.02rem;
    }

    div.mobile-content p :global(span) {
        font-weight: 600;
    }

    div.mobile-content :global(.splide .splide__pagination) {
        margin-bottom: 5rem;
    }

    div.desktop-content {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    div.desktop-content div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    div.desktop-content button {
        background-color: var(--odd-gray-light);
        border: 1px solid var(--odd-gray-dark);
        border-radius: 3.5rem;
        color: var(--odd-gray-dark);
        cursor: pointer;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.04rem;
        text-align: center;
        text-transform: lowercase;
    }

    div.desktop-content button.active,
    div.desktop-content button:hover {
        background-color: var(--odd-turquoise-medium);
        border: 1px solid var(--odd-turquoise-medium);
        color: var(--odd-gray-light);
    }

    div.desktop-content p {
        color: var(--odd-turquoise-medium);
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.045rem;
        line-height: 115%;
        text-align: center;
    }

    div.desktop-content p :global(span) {
        font-weight: 600;
    }

    @media only screen and (max-width: 600px) {
        section {
            padding: 5rem 0 0 0;
        }

        section div.mobile-content {
            display: block;
            margin-top: 1.25rem;
        }

        div.mobile-content h3 {
            font-size: 1.25rem;
            line-height: 120%;
            margin-bottom: 0.75rem;
        }

        div.mobile-content p {
            font-size: 1rem;
            line-height: 120%;
            margin-bottom: 2rem;
        }

        section div.desktop-content {
            display: none;
        }
    }

    @media only screen and (min-width: 600px) {
        section {
            padding: 5rem 0 0 0;
        }

        section div.mobile-content {
            display: block;
            margin-top: 1.25rem;
        }

        div.mobile-content h3 {
            font-size: 1.25rem;
            line-height: 120%;
            margin-bottom: 0.75rem;
        }

        div.mobile-content p {
            font-size: 1rem;
            line-height: 120%;
            margin-bottom: 1.5rem;
        }

        section div.desktop-content {
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        section div.mobile-content {
            margin-top: 1.5rem;
        }

        div.mobile-content h3 {
            font-size: 1.5rem;
            line-height: 100%;
            margin-bottom: 1rem;
        }

        div.mobile-content p {
            font-size: 1.125rem;
            line-height: 125%;
            margin-bottom: 1.5rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        section div.mobile-content {
            margin-top: 1.75rem;
        }

        div.mobile-content h3 {
            margin-bottom: 1.25rem;
        }

        div.mobile-content p {
            margin-bottom: 1.75rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        section {
            padding: 7.5rem 0;
        }

        section div.mobile-content {
            display: none;
        }

        section div.desktop-content {
            display: block;
            margin: 0 -10rem;
        }

        div.desktop-content div {
            gap: 0.75rem;
            margin-bottom: 2rem;
        }

        div.desktop-content button {
            font-size: 1.125rem;
            padding: 0.375rem 1.125rem;
        }

        div.desktop-content p {
            font-size: 1.75rem;
            margin: 0 auto 4rem auto;
            width: 45rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div.desktop-content div {
            gap: 0.875rem;
            margin-bottom: 2.5rem;
        }

        div.desktop-content button {
            font-size: 1.375rem;
            padding: 0.375rem 1.375rem;
        }

        div.desktop-content p {
            margin: 0 auto 5rem auto;
            width: 60rem;
        }
    }
</style>
