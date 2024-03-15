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

        buttonText = 'subscribed!';
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
    <div>
        <input type="text" bind:value={email} placeholder={'EMAIL HERE'} />
        <button
            class={buttonState}
            type="button"
            on:click={buttonState === 'active' ? subscribe : () => {}}
        >
            <span>{buttonText}</span>
            <span />
        </button>
    </div>
</div>

<style>
    div {
        background-color: var(--odd-purple-medium);
    }

    div.odd-studio {
        background-color: var(--odd-purple-medium);
        border-radius: inherit;
    }

    div.odd-experiments {
        background-color: var(--odd-turquoise-medium);
        border-radius: inherit;
    }

    div.odd-education {
        background-color: var(--odd-blue-medium);
        border-radius: inherit;
    }

    h3:nth-of-type(1) {
        color: var(--odd-gray-light);
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
        color: var(--odd-gray-light);
        font-family: 'Switzer', sans-serif;
        letter-spacing: -0.04rem;
        width: 90%;
    }

    div > div {
        background-color: transparent;
        display: flex;
        justify-content: flex-end;
        padding: 0;
    }

    input {
        appearance: none;
        background: transparent;
        color: var(--odd-gray-light);
        cursor: text;
        display: block;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.04rem;
        opacity: 0.75;
        outline: none;
        width: 100%;
    }

    input::placeholder {
        color: var(--odd-gray-light);
    }

    button {
        align-items: center;
        background-color: var(--odd-gray-light);
        border: 1px solid var(--odd-gray-dark);
        border-radius: 3.75rem;
        color: var(--odd-gray-dark);
        cursor: pointer;
        display: flex;
        font-family: 'Switzer', sans-serif;
        font-weight: 400;
        letter-spacing: -0.04rem;
        justify-content: center;
        margin: 0 auto;
    }

    button,
    button * {
        cursor: pointer;
    }

    button.disabled,
    button.disabled * {
        opacity: 0.4;
        cursor: not-allowed;
    }

    button.sending,
    button.sending * {
        cursor: wait;
    }

    button.sent,
    button.sent * {
        cursor: auto;
    }

    .odd-studio button.sent {
        background-color: var(--odd-turquoise-light);
    }

    .odd-experiments button.sent {
        background-color: var(--odd-yellow-medium);
    }

    .odd-education button.sent {
        background-color: var(--odd-pink-light);
    }

    button.sending span:nth-child(2),
    button.sent span:nth-child(2) {
        display: none;
    }

    button span:nth-child(2) {
        display: inline-block;
        background-image: url('/icons/right-arrow-dark.svg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    @media only screen and (max-width: 600px) {
        div {
            padding: 2.5rem 7.5vw 1.5rem 7.5vw;
        }

        h3:nth-of-type(1) {
            font-size: 2rem;
            line-height: 75%;
        }

        h3:nth-of-type(2) {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 1rem;
            margin-bottom: 1.25rem;
        }

        div > div {
            align-items: flex-start;
            border-bottom: none;
            flex-direction: column;
            gap: 0;
            padding: 0;
        }

        input {
            border-bottom: 1px solid var(--odd-gray-light);
            font-size: 1rem;
            margin-bottom: 1.25rem;
            padding: 0.25rem;
        }

        button {
            font-size: 1rem;
            gap: 0.5rem;
            padding: 0.375rem 1.25rem;
            width: 10rem;
        }

        button span:nth-child(2) {
            height: 1rem;
            width: 1rem;
        }
    }

    @media only screen and (min-width: 600px) {
        div {
            padding: 2.5rem 12.5vw 1.5rem 12.5vw;
        }

        h3:nth-of-type(1) {
            font-size: 2rem;
            line-height: 75%;
        }

        h3:nth-of-type(2) {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 1rem;
            margin-bottom: 1.25rem;
        }

        div > div {
            align-items: flex-start;
            border-bottom: none;
            flex-direction: column;
            gap: 0;
            padding: 0;
        }

        input {
            border-bottom: 1px solid var(--odd-gray-light);
            font-size: 1rem;
            margin-bottom: 1.25rem;
            padding: 0.25rem;
        }

        button {
            font-size: 1rem;
            gap: 0.5rem;
            padding: 0.375rem 1.25rem;
            width: 10rem;
        }

        button span:nth-child(2) {
            height: 1rem;
            width: 1rem;
        }
    }

    @media only screen and (min-width: 768px) {
        div {
            padding: 2.5rem 15vw 1.5rem 15vw;
        }

        h3:nth-of-type(1) {
            font-size: 2.25rem;
            line-height: 60%;
        }

        h3:nth-of-type(2) {
            font-size: 2.25rem;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 1.125rem;
            margin-bottom: 1.25rem;
        }

        div > div {
            align-items: flex-start;
            border-bottom: none;
            flex-direction: column;
            gap: 0;
            padding: 0;
        }

        input {
            border-bottom: 1px solid var(--odd-gray-light);
            font-size: 1.125rem;
            margin-bottom: 1.25rem;
            padding: 0.5rem;
        }

        button {
            font-size: 1.125rem;
            gap: 0.75rem;
            padding: 0.375rem 1.25rem;
            width: 11rem;
        }

        button span:nth-child(2) {
            height: 1.125rem;
            width: 1.125rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        div {
            padding: 2.5rem 20vw 1.5rem 20vw;
        }

        h3:nth-of-type(1) {
            font-size: 2.25rem;
            line-height: 60%;
        }

        h3:nth-of-type(2) {
            font-size: 2.25rem;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 1.125rem;
            margin-bottom: 1.25rem;
        }

        div > div {
            align-items: flex-start;
            border-bottom: none;
            flex-direction: column;
            gap: 0;
            padding: 0;
        }

        input {
            border-bottom: 1px solid var(--odd-gray-light);
            font-size: 1.125rem;
            margin-bottom: 1.25rem;
            padding: 0.5rem;
        }

        button {
            font-size: 1.125rem;
            gap: 0.75rem;
            padding: 0.375rem 1.25rem;
            width: 11rem;
        }

        button span:nth-child(2) {
            height: 1.125rem;
            width: 1.125rem;
        }
    }

    @media only screen and (min-width: 1280px) {
        div {
            padding: 0;
        }

        h3:nth-of-type(1) {
            font-size: 2.75rem;
            line-height: 50%;
        }

        h3:nth-of-type(2) {
            font-size: 2.75rem;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
        }

        div > div {
            align-items: flex-end;
            border-bottom: 1px solid var(--odd-gray-light);
            flex-direction: row;
            gap: 1.5rem;
            padding: 0 0 0.375rem 0;
        }

        input {
            border-bottom: none;
            font-size: 1.25rem;
            margin-bottom: 0;
            padding: 0;
            width: 100%;
        }

        button {
            font-size: 1.25rem;
            gap: 0.75rem;
            padding: 0.375rem 1.25rem;
            width: 16rem;
        }

        button span:nth-child(2) {
            height: 1.25rem;
            width: 1.25rem;
        }
    }

    @media only screen and (min-width: 1536px) {
        div {
            padding: 0;
        }

        h3:nth-of-type(1) {
            font-size: 2.75rem;
            line-height: 50%;
        }

        h3:nth-of-type(2) {
            font-size: 2.75rem;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
        }

        div > div {
            align-items: flex-end;
            border-bottom: 1px solid var(--odd-gray-light);
            flex-direction: row;
            gap: 1.5rem;
            padding: 0 0 0.375rem 0;
        }

        input {
            border-bottom: none;
            font-size: 1.25rem;
            margin-bottom: 0;
            padding: 0;
            width: 100%;
        }

        button {
            font-size: 1.25rem;
            gap: 0.75rem;
            padding: 0.375rem 1.25rem;
            width: 16rem;
        }

        button span:nth-child(2) {
            height: 1.25rem;
            width: 1.25rem;
        }
    }
</style>
