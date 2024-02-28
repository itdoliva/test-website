<script>
</script>

<div>
    <p>“<slot name="quote" />”</p>
    <span><slot name="author" /></span>
</div>

<style>
    div {
        align-items: flex-start;
        background-color: var(--odd-gray-light);
        box-shadow: rgba(0, 0, 0, 0.1) 6px 6px 12px;
        display: flex;
        flex-direction: column;
        height: 100%;
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
            border-radius: 0.75rem;
            padding: 0.75rem;
            width: 16.5rem;
        }

        p {
            font-size: 1.75rem;
        }

        span {
            font-size: 0.75rem;
            margin-top: 1rem;
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
