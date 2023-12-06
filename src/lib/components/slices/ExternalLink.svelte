<script>
	export let slice;

	const externalLink = {
		text: slice.primary.external_link_text,
		url: slice.primary.external_link_address.url
	};
</script>

<div class="odd-external-link-slice">
	<a href={externalLink.url} target="_blank" rel="noopener noreferrer">
		{externalLink.text}
	</a>
</div>

<style>
	.odd-external-link-slice {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.odd-external-link-slice a {
		background-color: var(--odd-purple-dark);
		color: var(--odd-white);
		cursor: pointer;
		font-family: 'Newsreader', serif;
		font-weight: 700;
		text-align: center;
		text-decoration: none;
		text-transform: lowercase;
	}

	@media only screen and (max-width: 640px) {
		.odd-external-link-slice {
			margin: 2rem auto;
		}

		.odd-external-link-slice a {
			border-radius: 12.5rem;
			font-size: 1rem;
			line-height: 120%;
			min-width: 15rem;
			padding: 1rem 1.25rem;
		}
	}

	@media only screen and (min-width: 640px) {
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
