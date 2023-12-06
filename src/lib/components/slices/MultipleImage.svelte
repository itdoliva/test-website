<script>
	import { PrismicImage } from '@prismicio/svelte';
	import { onMount } from 'svelte';
	import Siema from 'siema';

	export let slice;

	let images = slice.items.map((img) => ({
		data: img.multiple_image_item,
		caption: img.multiple_image_caption
	}));

	let carousel;
	let currentIndex = 0;
	let currentCaption = '';
	let goToImage = () => {};

	onMount(() => {
		carousel = new Siema({
			selector: '.siema-carousel',
			duration: 250,
			loop: true,
			onChange: () => {
				currentIndex = carousel.currentSlide;
				currentCaption = images[carousel.currentSlide].caption;
			}
		});

		goToImage = (index) => carousel.goTo(index);
	});
</script>

<div class="odd-multiple-image-slice">
	<div class="siema-carousel">
		{#each images as image}
			<PrismicImage field={image.data} />
		{/each}
	</div>
	<div class="siema-dots">
		<!-- eslint-disable no-unused-vars -->
		{#each images as _, i}
			<button class={i === currentIndex ? 'active' : ''} on:click={goToImage(i)} />
		{/each}
	</div>
	<span>{currentCaption || ''}</span>
</div>

<style>
	.odd-multiple-image-slice span {
		color: var(--odd-grey-medium);
		display: block;
		font-family: 'Archivo', sans-serif;
		font-weight: 200;
		text-align: center;
		text-transform: uppercase;
		text-wrap: balance;
	}

	.odd-multiple-image-slice :global(img) {
		cursor: grab;
	}

	.odd-multiple-image-slice .siema-dots {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.odd-multiple-image-slice .siema-dots button {
		background-color: var(--odd-grey-light);
		border: 1px solid var(--odd-grey-semilight);
		border-radius: 100%;
		cursor: pointer;
	}

	.odd-multiple-image-slice .siema-dots button.active {
		background-color: var(--odd-purple-medium);
		border: 1px solid var(--odd-purple-medium);
	}

	@media only screen and (max-width: 640px) {
		.odd-multiple-image-slice {
			margin: 2rem 0;
			min-height: calc(100% * (16 / 9));
			width: 100%;
		}

		.odd-multiple-image-slice :global(img) {
			height: calc(100% * (16 / 9));
			width: 100%;
		}

		.odd-multiple-image-slice span {
			font-size: 0.6rem;
			line-height: 120%;
			margin: 0 auto 0 auto;
			width: 95%;
		}

		.odd-multiple-image-slice .siema-dots {
			gap: 0.5rem;
			margin-bottom: 0.5rem;
		}

		.odd-multiple-image-slice .siema-dots button {
			height: 0.5rem;
			width: 0.5rem;
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
