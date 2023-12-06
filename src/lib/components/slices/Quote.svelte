<script>
	export let slice;

	const quote = {
		text: slice.primary.quote_text,
		author: slice.primary.quote_author,
		details: slice.primary.quote_author_details
	};
</script>

<div class="odd-quote-slice">
	<span class="quote-text">{quote.text}</span>
	{#if quote.details}
		<span class="quote-author">{quote.author}</span>
	{/if}
	{#if quote.details}
		<span class="quote-details">{quote.details}</span>
	{/if}
</div>

<style>
	.odd-quote-slice {
		background-image: url('/assets/quote-icon.svg');
		background-position: left top;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
	}

	.quote-text {
		color: var(--odd-purple-dark);
		font-family: 'Newsreader', serif;
		font-style: italic;
		font-weight: 400;
		text-wrap: balance;
	}

	.quote-author {
		color: var(--odd-purple-dark);
		font-family: 'Archivo', sans-serif;
		font-weight: 700;
		text-wrap: balance;
	}

	.quote-details {
		color: var(--odd-grey-medium);
		font-family: 'Archivo', sans-serif;
		font-weight: 200;
		text-transform: uppercase;
		text-wrap: balance;
	}

	@media only screen and (max-width: 640px) {
		.odd-quote-slice {
			background-size: 1.5rem;
			margin: 2rem 0;
			padding-left: 2.5rem;
		}

		.quote-text {
			font-size: 1.5rem;
			line-height: 120%;
			margin-bottom: 1rem;
		}

		.quote-author {
			font-size: 1rem;
			line-height: 120%;
		}

		.quote-details {
			font-size: 0.6rem;
			line-height: 120%;
			margin-top: 0.25rem;
			width: 85%;
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
