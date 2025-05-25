<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';

	import { Autoplay, EffectCoverflow, EffectCards, EffectCreative } from 'swiper/modules';

	import 'swiper/css';

	interface Project {
		videoUrl: string;
		title: string;
		iconUrl: string;
	}

	let swiperContainer: HTMLElement;
	let projects: Project[] = [];
	let isLoading = true;
	let error: string | null = null;

	// Chargement des projets depuis le fichier JSON
	async function loadProjects() {
		try {
			const response = await fetch('/data/projects.json');
			if (!response.ok) {
				throw new Error(`Erreur HTTP! Statut: ${response.status}`);
			}
			projects = await response.json();
			isLoading = false;
		} catch (err) {
			console.error('Erreur lors du chargement des projets:', err);
			error = err instanceof Error ? err.message : String(err);
			isLoading = false;
		}
	}

	onMount(() => {
		let swiper: Swiper | null = null;

		loadProjects().then(() => {
			if (projects.length > 0) {
				swiper = new Swiper(swiperContainer, {
					// modules: [Autoplay],
					modules: [EffectCoverflow, EffectCards, EffectCreative],
					slidesPerView: 1.2,
					centeredSlides: true,
					spaceBetween: 130,
					// autoplay: {
					// 	delay: 5000,
					// 	disableOnInteraction: false
					// }
					grabCursor: true,
					effect: 'coverflow',
					coverflowEffect: {
						rotate: 50,
						// rotate: 90,
						stretch: 0,
						depth: 500,
						// depth: 100,
						modifier: 1,
						slideShadows: true
						// scale: 1.5
					}
				});
			}
		});

		return () => {
			if (swiper) swiper.destroy();
		};
	});
</script>

<section class="Showcase container mx-auto flex flex-col py-12.5 px-3 md:px-15 lg:px-0 gap-y-10.5">
	<div class="Showcase-head flex flex-col justify-center items-center gap-y-6 md:gap-y-4">
		<h2 class="text-center text-white">Les dernières réalisations <br /> Faites avec amour</h2>
		<p class="text-center text-white">
			Découvrez comment nous transformons des idées ambitieuses en sites à fort impact.
		</p>
	</div>

	{#if isLoading}
		<div class="loading-indicator text-center text-white">
			<p>Chargement des projets...</p>
		</div>
	{:else if error}
		<div class="error-message text-center text-red-500">
			<p>Erreur: {error}</p>
		</div>
	{:else}
		<div class="swiper" bind:this={swiperContainer}>
			<div class="swiper-wrapper">
				{#each projects as project}
					<div class="swiper-slide">
						<div class="project-card flex flex-col text-white rounded-lg gap-y-4">
							<iframe
								class="rounded-lg project-video"
								src={project.videoUrl}
								title="{project.title} video"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
							></iframe>
							<div class="project-card-subtitle flex gap-x-2">
								<img class="w-10 h-10" src={project.iconUrl} alt="{project.title} Icon" />
								<p class="text-white font-bold text-3xl">{project.title}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="swiper-pagination"></div>
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
	{/if}
</section>

<style>
	section {
		height: 100vh;
		border: 1px solid black;
	}

	h2 {
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		font-size: 2.5rem;
		line-height: 1.3;
	}

	.Showcase-head p {
		font-family: 'Manrope', sans-serif;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.swiper {
		width: 100%;
		height: 100%;
		border: 1px solid blue;
		overflow: visible !important;
	}

	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.project-card {
		width: 50vw;
		height: 60vh;
		transition: transform 0.2s ease-out;
	}

	.project-card:hover {
		transform: scale(1.03);
		transition: transform 0.3s ease-in-out;
	}

	.project-video {
		width: 100%;
		height: 92%;
		object-fit: cover;
	}

	.project-card-subtitle {
		height: 8%;
	}
</style>
