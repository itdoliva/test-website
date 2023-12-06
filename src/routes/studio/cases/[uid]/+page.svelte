<script>
	import { SliceZone } from '@prismicio/svelte';

	import Container from '@components/Container.svelte';
	import CaseIntro from '@components/CaseIntro.svelte';
	import UnorderedListSlice from '@components/slices/UnorderedList.svelte';
	import MultipleImageSlice from '@components/slices/MultipleImage.svelte';
	import SectionTitleSlice from '@components/slices/SectionTitle.svelte';
	import ExternalLinkSlice from '@components/slices/ExternalLink.svelte';
	import OrderedListSlice from '@components/slices/OrderedList.svelte';
	import SingleImageSlice from '@components/slices/SingleImage.svelte';
	import BigNumberSlice from '@components/slices/BigNumber.svelte';
	import ParagraphSlice from '@components/slices/Paragraph.svelte';
	import QuoteSlice from '@components/slices/Quote.svelte';
	import VideoSlice from '@components/slices/Video.svelte';

	export let data;

	const components = {
		unordered_list: UnorderedListSlice,
		multiple_image: MultipleImageSlice,
		section_title: SectionTitleSlice,
		external_link: ExternalLinkSlice,
		ordered_list: OrderedListSlice,
		single_image: SingleImageSlice,
		big_number: BigNumberSlice,
		paragraph: ParagraphSlice,
		quote: QuoteSlice,
		video: VideoSlice
	};
</script>

<main>
	<CaseIntro content={data.content} />
	<Container>
		<SliceZone slices={data.content.body} {components} />
	</Container>
</main>

<style>
	main {
		background-color: var(--odd-gray);
	}

	@media only screen and (max-width: 640px) {
		main > :global(.odd-content-container) {
			padding: 2rem 0;
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
