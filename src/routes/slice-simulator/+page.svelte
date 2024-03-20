<script>
    import { SliceSimulator } from '@slicemachine/adapter-sveltekit/simulator';
    import { SliceZone } from '@prismicio/svelte';
    import { components } from '@slices';
</script>

<SliceSimulator let:slices>
    <SliceZone {slices} {components} />
</SliceSimulator>
