<script lang="ts">
	import type { PageData } from '../about/$types';
	import About from './About.svelte';
	import Projects from './Projects.svelte';

	export let data: PageData;
</script>

<About />
<Projects />
