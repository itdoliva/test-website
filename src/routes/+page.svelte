<script>
	import { t } from '$stores/language';

	export let data;

	console.log(data);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>Not yet!</h1>
<h1>{$t('default')}</h1>

<style>
</style>
