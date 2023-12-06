<script>
	import { PrismicRichText } from '@prismicio/svelte';

	export let slice;

	const listItems = slice.primary.unordered_list;
</script>

<ul class="odd-unordered-list-slice">
	<PrismicRichText field={listItems} />
</ul>

<style>
	ul {
		background-color: var(--odd-white);
	}

	ul :global(li) {
		background-image: url('/assets/unordered-list-icon.svg');
		background-repeat: no-repeat;
		border-bottom: 1px solid var(--odd-grey-semilight);
		color: var(--odd-purple-dark);
		font-family: 'Newsreader', serif;
		font-weight: 200;
		list-style: none;
		text-wrap: balance;
	}

	ul :global(li:last-child) {
		border: none;
		padding-bottom: 0;
	}

	ul :global(li strong) {
		font-weight: 500;
	}

	ul :global(li em) {
		font-style: italic;
	}

	ul :global(li a) {
		color: var(--odd-pink-medium);
		cursor: pointer;
		font-weight: 500;
		text-decoration: underline;
	}

	@media only screen and (max-width: 640px) {
		ul {
			margin: 2rem -7.5vw;
			padding: 1.5rem 7.5vw;
			width: calc(100% + (2 * 7.5vw));
		}

		ul :global(li) {
			background-position: left 1.25rem;
			background-size: 1.25rem;
			font-size: 1rem;
			line-height: 120%;
			padding: 1.25rem 0 1.25rem 2rem;
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
