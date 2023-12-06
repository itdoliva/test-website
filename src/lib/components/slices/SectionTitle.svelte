<script>
	export let slice;

	const sectionTitle = slice.primary.section_title;
</script>

<h3 class="odd-section-title-slice">{sectionTitle}</h3>

<style>
	h3 {
		color: var(--odd-purple-dark);
		font-family: 'Archivo', sans-serif;
		font-weight: 700;
		letter-spacing: -0.025rem;
		text-transform: uppercase;
		text-wrap: balance;
	}

	@media only screen and (max-width: 640px) {
		h3 {
			font-size: 1.25rem;
			line-height: 120%;
			margin: 2rem 0 1.25rem 0;
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
