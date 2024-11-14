<script>
  import "$lib/i18n";

  import { locale, isLoading } from 'svelte-i18n'
  
  import '../app.css';
  import '../text.css';
  import '../animation.css';

  export let data

  $: locale.set(data.locale)

</script>

{#if !$isLoading}
  <slot />
{/if}
