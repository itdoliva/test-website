<script>
	import { locale, locales } from '$stores/language';

	import AnalyticsModal from '$components/AnalyticsModal.svelte';

	import '../app.css';
	import '../text.css';
</script>

<slot />
<AnalyticsModal />
<select bind:value={$locale}>
	{#each locales as l}
		<option value={l}>{l}</option>
	{/each}
</select>

<style>
</style>
