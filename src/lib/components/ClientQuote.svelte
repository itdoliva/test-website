<script>
</script>

<div>
    <p>“<slot name="quote" />”</p>
    <span><slot name="author" /></span>
</div>

<style>
    div {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        background-color: var(--odd-gray-light);
        border-radius: 0.75rem;
        -webkit-box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        height: 100%;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    p {
        color: var(--odd-gray-dark);
        font-family: 'Newsreader', serif;
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.08rem;
        line-height: 100%;
        text-wrap: balance;
    }

    span {
        color: var(--odd-purple-medium);
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.01rem;
        line-height: 100%;
        text-transform: uppercase;
        text-wrap: balance;
    }

    @media only screen and (max-width: 600px) {
        div {
            padding: 1.25rem;
            width: 17rem;
        }

        p {
            font-size: 1.75rem;
        }

        span {
            font-size: 0.75rem;
            margin-top: 1.25rem;
        }
    }

    @media only screen and (min-width: 600px) {
        div {
            padding: 1.25rem;
            width: 22.5rem;
        }

        p {
            font-size: 1.75rem;
        }

        span {
            font-size: 0.75rem;
            margin-top: 1.25rem;
        }
    }

    @media only screen and (min-width: 768px) {
        div {
            padding: 1.5rem;
            width: 25rem;
        }

        p {
            font-size: 2.25rem;
        }

        span {
            font-size: 1rem;
            margin-top: 1.5rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        div {
            padding: 1.75rem;
            width: 25rem;
        }

        span {
            margin-top: 1.75rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        div {
            padding: 2rem;
            width: 27.5rem;
        }

        p {
            font-size: 2.5rem;
        }

        span {
            font-size: 1.125rem;
            margin-top: 2rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div {
            padding: 2.5rem;
            width: 27.5rem;
        }

        span {
            margin-top: 2.5rem;
        }
    }
</style>
