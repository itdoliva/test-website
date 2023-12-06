<script>
	import { PrismicRichText } from '@prismicio/svelte';

	import Container from '@components/Container.svelte';

	export let content;

	const caseInfo = {
		title: content.title,
		cover: content.cover_image.url,
		client: content.client,
		type: content.type_of_work,
		year: content.year
	};
</script>

<div id="odd-case-intro">
	<div id="odd-case-cover" style={`background-image: url(${caseInfo.cover});`} />
	<Container>
		<h1>{caseInfo.title}</h1>
		<PrismicRichText field={content.summary} />
		<div id="odd-case-details">
			<div>
				<h6>Client</h6>
				<span>{caseInfo.client}</span>
			</div>
			<div>
				<h6>Type of Work</h6>
				<span>{caseInfo.type}</span>
			</div>
			<div>
				<h6>Year</h6>
				<span>{caseInfo.year}</span>
			</div>
		</div>
	</Container>
</div>

<style>
	#odd-case-intro {
		background-color: var(--odd-white);
	}

	#odd-case-cover {
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	#odd-case-intro h1 {
		color: var(--odd-purple-dark);
		font-family: 'Newsreader', serif;
		font-weight: 500;
		text-wrap: balance;
	}

	#odd-case-intro :global(p) {
		color: var(--odd-black);
		font-family: 'Newsreader', serif;
		font-weight: 200;
		text-wrap: balance;
	}

	#odd-case-intro :global(p strong) {
		font-weight: 500;
	}

	#odd-case-intro :global(p em) {
		font-style: italic;
	}

	#odd-case-intro :global(p a) {
		color: var(--odd-pink-medium);
		cursor: pointer;
		font-weight: 500;
		text-decoration: underline;
	}

	#odd-case-details {
		align-items: flex-start;
		border-top: 1px solid var(--odd-grey-semilight);
		display: flex;
		justify-content: space-between;
	}

	#odd-case-details h6 {
		color: var(--odd-purple-dark);
		font-family: 'Archivo', sans-serif;
		font-weight: 700;
		text-transform: uppercase;
	}

	#odd-case-details span {
		color: var(--odd-black);
		font-family: 'Newsreader', sans-serif;
		font-weight: 200;
	}

	@media only screen and (max-width: 640px) {
		#odd-case-intro {
			padding-bottom: 2rem;
		}

		#odd-case-cover {
			height: calc(100vw * 0.875);
			margin-bottom: 2rem;
			width: 100vw;
		}

		#odd-case-intro h1 {
			font-size: 2.25rem;
			letter-spacing: -0.05rem;
			line-height: 120%;
			margin-bottom: 0.75rem;
		}

		#odd-case-intro :global(p) {
			font-size: 1rem;
			line-height: 120%;
		}

		#odd-case-details {
			gap: 1.5rem;
			margin-top: 1.5rem;
			padding-top: 1.5rem;
		}

		#odd-case-details h6 {
			font-size: 0.75rem;
			line-height: 120%;
			margin-bottom: 0.375rem;
		}

		#odd-case-details span {
			font-size: 0.875rem;
			line-height: 120%;
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
