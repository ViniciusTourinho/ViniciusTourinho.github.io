<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';
	import '../app.postcss';

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};

	const themes = ['dark', 'aqua'];
</script>

<div class="navbar bg-neutral text-neutral-content">
	<div class="navbar-start">
		<a class="btn btn-ghost normal-case text-2xl content-center" href="/">VINICIUS TOURINHO</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 gap-2">
			<li class="btn btn-outline rounded-lg">
				<a class=" hover:text-inherit" href="/">Home</a>
			</li>
			<li class="btn btn-outline rounded-lg">
				<a class=" hover:text-inherit" href="/about">Sobre</a>
			</li>
			<li class="btn btn-outline rounded-lg">
				<a class=" hover:text-inherit" href="/skills">Conhecimento</a>
			</li>
			<li class="btn btn-outline rounded-lg">
				<a class=" hover:text-inherit" href="/experience">Experiência</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end lg:flex">
		<ul>
			<li>
				<ul>
					<form method="POST" use:enhance={submitUpdateTheme}>
						<li>
							<button formaction="/?/setTheme&theme=dark">🌞</button>
						</li>
						<li>
							<button formaction="/?/setTheme&theme=aqua">🌜</button>
						</li>
					</form>
				</ul>
			</li>
		</ul>
	</div>
</div>

<style>
	a {
		padding: 2em;
		margin: -2em;
	}
</style>
