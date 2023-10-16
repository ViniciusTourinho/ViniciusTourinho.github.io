<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div
	class="hero min-h-screen"
	style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content ">
		<div class="max-w-5xl">
			<h1 class="mb-5 text-5xl md:text-6xl font-bold">Vinicius Tourinho</h1>
			<h2 class="mb-5 text-3xl md:text-4xl font-bold">Desenvolvedor de Software</h2>
			<h1 class="mb-5 text-5xl md:text-5xl font-bold mt-14 md:mt-32">Sobre Mim</h1>
			<p class="mb-5 text-2xl md:text-3xl font-bold">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt magnam obcaecati
				deleniti necessitatibus minima dolorum tempore natus! Obcaecati consectetur voluptates earum
				soluta, fugit nostrum corporis vero repellendus explicabo reprehenderit?
			</p>
			<a class="btn btn-primary" href="/skills">Conhecimentos</a>
		</div>
	</div>
</div>
