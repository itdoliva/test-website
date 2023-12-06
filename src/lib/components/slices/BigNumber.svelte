<script>
	export let slice;

	const bigNumbers = slice.items.slice(0, 2);
	const sliceType = bigNumbers.length === 1 ? 'single' : 'double';
</script>

<div class={`odd-big-number-slice ${sliceType}-big-number`}>
	{#each bigNumbers as bn}
		<div>
			<h3>{bn.big_number}</h3>
			<span>{bn.big_number_text}</span>
		</div>
	{/each}
</div>

<style>
	.odd-big-number-slice {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.single-big-number {
		align-items: center;
	}

	.double-big-number {
		align-items: space-between;
	}

	.odd-big-number-slice :global(h3) {
		color: var(--odd-purple-dark);
		display: block;
		font-family: 'Newsreader', serif;
		font-weight: 400;
		line-height: 100%;
		text-align: center;
	}

	.odd-big-number-slice :global(span) {
		color: var(--odd-purple-dark);
		display: block;
		font-family: 'Newsreader', serif;
		font-weight: 200;
		text-align: center;
		text-wrap: balance;
	}

	@media only screen and (max-width: 640px) {
		.odd-big-number-slice {
			margin: 2rem 0;
		}

		.double-big-number {
			gap: 1rem;
		}

		.double-big-number div {
			max-width: calc(50% - 1rem);
		}

		.single-big-number :global(h3) {
			font-size: 4rem;
			margin-bottom: -0.5rem;
		}

		.double-big-number :global(h3) {
			font-size: 3.375rem;
			margin-bottom: -0.25rem;
		}

		.odd-big-number-slice :global(span) {
			font-size: 1rem;
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
