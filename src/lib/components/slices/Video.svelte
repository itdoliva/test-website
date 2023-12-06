<script>
	export let slice;

	const video = {
		iframe: slice.primary.video_iframe_html,
		caption: slice.primary.video_caption
	};
</script>

<div class="odd-video-slice">
	<!-- eslint-disable svelte/no-at-html-tags -->
	{@html video.iframe}
	{#if video.caption}
		<span>{video.caption}</span>
	{/if}
</div>

<style>
	.odd-video-slice span {
		color: var(--odd-grey-medium);
		display: block;
		font-family: 'Archivo', sans-serif;
		font-weight: 200;
		text-align: center;
		text-transform: uppercase;
		text-wrap: balance;
	}

	@media only screen and (max-width: 640px) {
		.odd-video-slice {
			margin: 2rem 0;
			min-height: calc(100% * (16 / 9));
			width: 100%;
		}

		.odd-video-slice :global(iframe) {
			width: 100%;
		}

		.odd-video-slice span {
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
