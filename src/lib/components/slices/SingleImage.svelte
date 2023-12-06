<script>
	import { PrismicImage } from '@prismicio/svelte';

	export let slice;

	const image = {
		data: slice.primary.single_image,
		caption: slice.primary.single_image_label
	};
</script>

<div class="odd-single-image-slice">
	<PrismicImage field={image.data} />
	{#if image.caption}
		<span>{image.caption}</span>
	{/if}
</div>

<style>
	.odd-single-image-slice span {
		color: var(--odd-grey-medium);
		display: block;
		font-family: 'Archivo', sans-serif;
		font-weight: 200;
		text-align: center;
		text-transform: uppercase;
		text-wrap: balance;
	}

	@media only screen and (max-width: 640px) {
		.odd-single-image-slice {
			margin: 2rem 0;
			min-height: calc(100% * (16 / 9));
			width: 100%;
		}

		.odd-single-image-slice :global(img) {
			height: calc(100% * (16 / 9));
			width: 100%;
		}

		.odd-single-image-slice span {
			font-size: 0.6rem;
			line-height: 120%;
			margin: 0 auto 0 auto;
			width: 95%;
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
