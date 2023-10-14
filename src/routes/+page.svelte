<script lang="ts">
	import Navbar from './Navbar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>


<div class="hero min-h-screen" style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-5xl">
			<h1 class="mb-5 text-7xl font-bold">Vinicius Tourinho</h1>
			<h2 class="mb-5 text-5xl font-bold">Desenvolvedor de Software</h2>
			<a class="btn btn-primary" href="/about">Sobre</a>			
		</div>
	</div>
</div>