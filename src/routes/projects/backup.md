<script lang="ts">
	import type { PageData } from '../experience/$types';

	export let data: PageData;
</script>

<div class="text-white">
	<div class="px-5 md:px-10">
		<div class="mx-auto w-full max-w-7xl">
			<div class="py-12 md:py-4 lg:py-3">
				<div class="flex-col flex items-center">
					<div class="max-w-[800px] text-center mb-8 md:mb-12 lg:mb-16">
						<h1 class="text-4xl md:text-5xl mt-10">Projetos</h1>
					</div>
					<div
						class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-12 md:mb-16 lg:mb-20"
					>
						<button>
							<div
								class="flex-col flex grid-cols-1 gap-4 bg-[#161d59e9] p-5 text-white max-[991px]:text-left max-[767px]:items-center max-[767px]:px-4 max-[767px]:py-8 max-[479px]:w-full rounded-xl hover:cursor-pointer hover:border"
							>
								<div class="relative h-full w-full projeto">
									<!-- svelte-ignore a11y-img-redundant-alt -->
									<img
										src="https://i.imgur.com/GzaX0fS.jpeg"
										alt="Testimonial Image"
										class="inline-block w-full max-w-full object-cover rounded-md h-60"
										style:--projeto={'proj-statmed'}
									/>
								</div>
								<h5 class="text-xl font-bold">Statmed</h5>
								<div class="flex-col flex w-full items-start gap-5 p-0">
									<div>
										Uma aplicação de exercício que fiz com meu colega Diego Gomez baseado em um
										gerenciamento de PEP com funções de SAME para hospitais com funções de Login,
										SQL, CRUD funcional, Cookie-Parser.
									</div>
									<div class="mt-6 flex-wrap flex self-center gap-2 mb-5 md:mb-6 lg:mb-8">
										<div
											class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#474747] rounded-sm"
										>
											<div>JAVASCRIPT</div>
										</div>
										<div
											class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#474747] rounded-sm"
										>
											<div>EXPRESS</div>
										</div>
										<div
											class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#474747] rounded-sm"
										>
											<div>REACT</div>
										</div>
									</div>
								</div>
							</div>
						</button>

						<button>
							<div
								class="flex-col flex grid-cols-1 gap-4 bg-[#161d59e9] p-5 text-white max-[991px]:text-left max-[767px]:items-center max-[767px]:px-4 max-[767px]:py-8 max-[479px]:w-full rounded-xl hover:cursor-pointer hover:border"
							>
								<div class="relative h-full w-full projeto">
									<!-- svelte-ignore a11y-img-redundant-alt -->
									<img
										src="https://i.imgur.com/GzaX0fS.jpeg"
										alt="Testimonial Image"
										class="inline-block w-full max-w-full object-cover rounded-md h-60"
										style:--projeto={'proj-lousa'}
									/>
								</div>
								<h5 class="text-xl font-bold">Lousa Kanban</h5>
								<div class="flex-col flex w-full items-start gap-5 p-0">
									<div>
										Uma aplicação de exercício que fiz com meu colega Diego Gomez para treinar
										conhecimentos com Javascript Drag and Drop.
									</div>
									<div class="mt-6 flex-wrap flex gap-2 mb-5 md:mb-6 lg:mb-8 self-center">
										<div
											class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#474747] rounded-sm"
										>
											<div>JAVASCRIPT</div>
										</div>
										<div
											class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#474747] rounded-sm"
										>
											<div>HTML</div>
										</div>
										<div
											class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#474747] rounded-sm"
										>
											<div>CSS</div>
										</div>
									</div>
								</div>
							</div>
						</button>

						<div
							class="flex-col flex grid-cols-1 gap-4 bg-[#161d59e9] p-5 text-white max-[991px]:text-left max-[767px]:items-center max-[767px]:px-4 max-[767px]:py-8 max-[479px]:w-full rounded-xl hover:cursor-pointer hover:border"
						>
							<div class="relative h-full w-full projeto">
								<!-- svelte-ignore a11y-img-redundant-alt -->
								<img
									src="https://i.imgur.com/GzaX0fS.jpeg"
									alt="Testimonial Image"
									class="inline-block w-full max-w-full object-cover rounded-md h-60"
									style:--projeto={'proj-website_portfolio'}
								/>
							</div>
							<h5 class="text-xl font-bold">Website Portfolio</h5>
							<div class="flex-col flex w-full items-start gap-5 p-0">
								<div>
									Esse website portfolio foi feito com Sveltekit, um framework para Javascript com
									foco em performance. Estilos com Skeleton UI e PostCSS
								</div>
								<div class="mt-6 flex-wrap flex gap-2 mb-5 md:mb-6 lg:mb-8 self-center">
									<div
										class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#474747] rounded-sm"
									>
										<div>JAVASCRIPT</div>
									</div>
									<div
										class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#474747] rounded-sm"
									>
										<div>HTML</div>
									</div>
									<div
										class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#474747] rounded-sm"
									>
										<div>CSS</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
