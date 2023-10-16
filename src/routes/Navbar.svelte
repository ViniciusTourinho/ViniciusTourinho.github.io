<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};

	const themes = ['dark', 'aqua'];
</script>

<div class="navbar bg-neutral text-neutral-content">
	<div class="flex-none md:hidden">
		<button class="btn btn-square btn-ghost">
			<svg
				width="100"
				height="100"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-10 h-10 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="3"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
	</div>
	<div class="navbar-start">
		<a class="btn btn-ghost text-2xl content-center hidden md:flex" href="/">VINICIUS TOURINHO</a>
	</div>
	<div class="navbar-center lg:flex">
		<ul class="menu menu-horizontal gap-2 hidden md:flex">
			<li class="btn btn-outline rounded-lg">
				<a class="hover:text-inherit" href="/">Home</a>
			</li>
			<li class="btn btn-outline rounded-lg">
				<a class="hover:text-inherit" href="/skills">Conhecimento</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<ul class="flex mx-10 min-w-max md:min-w-0 gap-10 md:gap-4">
			<li
				class="border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:outline-blue-500 cursor-pointer active"
			>
				<a
					href="https://www.linkedin.com/in/vin%C3%ADcius-cruz-tourinho-dos-santos-258360224/"
					target="_blank"
					title="Link do meu Perfil no Github"
				>
					<img src="/src/lib/images/github.svg" width="50" height="50" alt="Github" />
				</a>
			</li>
			<li
				class=" border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:outline-blue-500 cursor-pointer active"
			>
				<a
					href="https://github.com/ViniciusTourinho"
					target="_blank"
					title="Link do meu Perfil no Linkedin"
				>
					<img src="/src/lib/images/linkedin.svg" width="50" height="50" alt="Linkedin" />
				</a>
			</li>
		</ul>
		<ul class="flex-none">
			<li>
				<form method="POST" use:enhance={submitUpdateTheme}>
					<button type="submit" formaction="/?/setTheme&theme=dark" class="btn btn-circle"
						>&#9728;</button
					>
					<button type="submit" formaction="/?/setTheme&theme=aqua" class="btn btn-circle"
						>&#127769;</button
					>
				</form>
			</li>
		</ul>
	</div>
</div>

<style>
	a {
		padding: 1.1em;
		margin: -1.1em;
	}
</style>
