<script>
    export let pattern = null;

    let email = '';
    let buttonText = 'subscribe';
    let buttonState = 'disabled';

    const updateButton = (email) => {
        if (buttonState !== 'sent' && buttonState !== 'sending') {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            buttonState = regex.test(email) ? 'active' : 'disabled';
        }
    };

    const subscribe = async () => {
        buttonText = 'just a moment...';
        buttonState = 'sending';

        try {
            await fetch('https://substackapi.com/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    domain: 'https://oddstudio.substack.com/',
                }),
            });
        } catch (e) {
            console.error(e);
        }

        buttonText = 'confirmation e-mail sent ✨';
        buttonState = 'sent';
    };

    $: updateButton(email);
</script>

<div class={pattern ? `odd-${pattern}` : ''}>
    <h3>Subscribe to our</h3>
    <h3>newsletter</h3>
    <p>
        Join our community and receive updates on our projects, available
        courses, and job opportunities.
    </p>
    <input type="text" bind:value={email} placeholder={'EMAIL HERE'} />
    <button
        class={buttonState}
        on:click={buttonState === 'active' ? subscribe : () => {}}
    >
        <span>{buttonText}</span>
    </button>
</div>

<style>
    div {
        background-color: var(--odd-purple-medium);
    }

    div.odd-studio {
        background-color: var(--odd-purple-medium);
    }

    div.odd-experiments {
        background-color: var(--odd-turquoise-medium);
    }

    div.odd-education {
        background-color: var(--odd-blue-medium);
    }

    h3:nth-of-type(1) {
        color: var(--odd-white);
        font-family: 'Newsreader', serif;
        font-style: italic;
        font-weight: 400;
        letter-spacing: -0.05rem;
    }

    h3:nth-of-type(2) {
        color: var(--odd-turquoise-light);
        font-family: 'Switzer', sans-serif;
        font-weight: 600;
        letter-spacing: -0.04rem;
        text-transform: uppercase;
    }

    .odd-studio h3:nth-of-type(2) {
        color: var(--odd-turquoise-light);
    }

    .odd-experiments h3:nth-of-type(2) {
        color: var(--odd-yellow-medium);
    }

    .odd-education h3:nth-of-type(2) {
        color: var(--odd-pink-light);
    }

    p {
        color: var(--odd-white);
        font-family: 'Switzer', sans-serif;
        letter-spacing: -0.04rem;
        text-wrap: balance;
    }

    input {
        appearance: none;
        background: transparent;
        border-bottom: 1px solid var(--odd-gray-light);
        color: var(--odd-gray-light);
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.04rem;
        outline: none;
        width: 100%;
    }

    input::placeholder {
        color: var(--odd-gray-light);
        opacity: 0.5;
    }

    button {
        align-items: center;
        background-color: var(--odd-gray-light);
        border: 1px solid var(--odd-gray-dark);
        color: var(--odd-gray-dark);
        cursor: pointer;
        display: flex;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.04rem;
        justify-content: center;
        margin: 0 auto;
    }

    button span {
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        div {
            border-radius: 0.5rem 0.5rem 0 0;
            padding: 2rem 7.5vw;
        }

        h3:nth-of-type(1) {
            font-size: 2rem;
        }

        h3:nth-of-type(2) {
            font-size: 2rem;
            margin: -0.5rem 0 0.5rem 0;
        }

        p {
            font-size: 1rem;
            margin-bottom: 1.25rem;
            width: 90%;
        }

        input {
            font-size: 1rem;
            margin-bottom: 1.25rem;
            padding: 0.25rem;
        }

        button {
            border-radius: 3.375rem;
            font-size: 1rem;
            min-width: 8.5rem;
            padding: 0.375rem 1rem;
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
