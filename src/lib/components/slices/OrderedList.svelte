<script>
	import { PrismicRichText } from '@prismicio/svelte';

	export let slice;

	const listItems = slice.primary.ordered_list;
</script>

<ol class="odd-ordered-list-slice">
	<PrismicRichText field={listItems} />
</ol>

<style>
	ol {
		background-color: var(--odd-white);
	}

	ol :global(li) {
		border-bottom: 1px solid var(--odd-grey-semilight);
		color: var(--odd-purple-dark);
		font-family: 'Newsreader', serif;
		font-weight: 200;
		list-style: none;
		text-wrap: balance;
	}

	ol :global(li:last-child) {
		border: none;
		padding-bottom: 0;
	}

	ol :global(li::marker) {
		color: var(--odd-purple-dark);
		content: counter(list-item) '\a0\a0';
		font-family: 'Archivo', sans-serif;
		font-weight: 700;
		text-align: right;
	}

	ol :global(li strong) {
		font-weight: 500;
	}

	ol :global(li em) {
		font-style: italic;
	}

	ol :global(li a) {
		color: var(--odd-pink-medium);
		cursor: pointer;
		font-weight: 500;
		text-decoration: underline;
	}

	@media only screen and (max-width: 640px) {
		ol {
			margin: 2rem -7.5vw;
			padding: 1.5rem 7.5vw;
			width: calc(100% + (2 * 7.5vw));
		}

		ol :global(li) {
			font-size: 1rem;
			line-height: 120%;
			margin: 0 0 0 1.75rem;
			padding: 1.25rem 0 1.25rem 0.25rem;
		}

		ol :global(li::marker) {
			font-size: 1.5rem;
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
