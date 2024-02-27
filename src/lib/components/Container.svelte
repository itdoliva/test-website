<script>
</script>

<div>
    <slot />
</div>

<style>
    div {
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
        div {
            margin: 0 auto;
            width: 85vw;
        }
    }

    @media only screen and (min-width: 600px) {
        div {
            margin: 0 auto;
            width: 80vw;
        }
    }

    @media only screen and (min-width: 768px) {
        div {
            margin: 0 auto;
            width: 75vw;
        }
    }

    @media only screen and (min-width: 1024px) {
        div {
            margin: 0 auto;
            width: 70vw;
        }
    }

    @media only screen and (min-width: 1280px) {
        div {
            margin: 0 auto;
            width: 65vw;
        }
    }

    @media only screen and (min-width: 1536px) {
        div {
            margin: 0 auto;
            width: 75rem;
        }
    }
</style>
