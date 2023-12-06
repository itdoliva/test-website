<script>
	import { PrismicRichText } from '@prismicio/svelte';

	export let slice;

	const paragraphs = slice.items;
</script>

{#each paragraphs as p}
	<div class="odd-paragraph-slice">
		<PrismicRichText field={p.paragraph} />
	</div>
{/each}

<style>
	.odd-paragraph-slice :global(p) {
		color: var(--odd-black);
		font-family: 'Newsreader', serif;
		font-weight: 200;
		text-wrap: balance;
	}

	.odd-paragraph-slice :global(p strong) {
		font-weight: 500;
	}

	.odd-paragraph-slice :global(p em) {
		font-style: italic;
	}

	.odd-paragraph-slice :global(p a) {
		color: var(--odd-pink-medium);
		cursor: pointer;
		font-weight: 500;
		text-decoration: underline;
	}

	@media only screen and (max-width: 640px) {
		.odd-paragraph-slice :global(p) {
			font-size: 1rem;
			line-height: 120%;
			margin-bottom: 1rem;
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
