<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';

	import {
		Autoplay,
		EffectCoverflow,
		EffectCards,
		EffectCreative,
		Navigation
	} from 'swiper/modules';

	import 'swiper/css';
	import 'swiper/css/navigation';

	interface Project {
		url: string;
		title: string;
		iconUrl: string;
		mediaType: 'video' | 'image';
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
					modules: [EffectCoverflow, EffectCards, EffectCreative, Navigation, Autoplay],
					slidesPerView: 1.2,
					centeredSlides: true,
					spaceBetween: 130,
					// autoplay: {
					// 	delay: 5000,
					// 	disableOnInteraction: false
					// },
					grabCursor: true,
					effect: 'coverflow',
					coverflowEffect: {
						// rotate: 0,
						// rotate: 50,
						rotate: 90,
						stretch: 0,
						// stretch: -170,
						depth: 500,
						// depth: 100,
						modifier: 1,
						slideShadows: false
						// scale: 1.5,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				});
			}
		});

		return () => {
			if (swiper) swiper.destroy();
		};
	});
</script>

<section id="realisations" class="Showcase container mx-auto flex flex-col py-12.5 px-3 md:px-15 lg:px-0 gap-y-10.5">
	<div class="Showcase-head flex flex-col justify-center items-center gap-y-6 md:gap-y-4">
		<h2 class="text-center text-white text-4xl">Les dernières réalisations</h2>
		<p class="text-center text-white text-lg">
			Découvrez comment nous transformons des idées ambitieuses en sites à fort impact.
		</p>
	</div>

	<!-- Conteneur avec hauteur fixe pour éviter les changements de layout -->
	<div class="showcase-content">
		{#if isLoading}
			<div class="loading-skeleton">
				<div class="swiper">
					<div class="swiper-wrapper">
						<!-- Skeleton slides -->
						{#each Array(3) as _, index}
							<div class="swiper-slide">
								<div class="project-card flex flex-col text-white rounded-lg gap-y-4">
									<div class="video-container skeleton-media">
										<div class="skeleton-shimmer"></div>
									</div>
									<div class="project-card-subtitle flex gap-x-2 items-center">
										<div class="skeleton-icon"></div>
										<div class="skeleton-title"></div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
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
								<div class="video-container">
									{#if project.mediaType === 'video'}
										<iframe
											class="rounded-lg project-media"
											src={project.url}
											title="{project.title} video"
											frameborder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											referrerpolicy="strict-origin-when-cross-origin"
											allowfullscreen
										></iframe>
									{:else if project.mediaType === 'image'}
										<img
											class="rounded-lg project-media"
											src={project.url}
											alt="{project.title} image"
											loading="lazy"
										/>
									{/if}
								</div>
								<div class="project-card-subtitle flex gap-x-2 items-center">
									<img src={project.iconUrl} alt="{project.title} Icon" />
									<p class="text-white font-bold text-3xl">{project.title}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
				<!-- Navigation buttons -->
				<div class="swiper-button-next"></div>
				<div class="swiper-button-prev"></div>
			</div>
		{/if}
	</div>
</section>

<style>
	section {
		/* min-height: 100vh; */
		/* border: 1px solid black; */
	}

	/* Conteneur principal avec hauteur fixe */
	.showcase-content {
		min-height: 60vh; /* Hauteur minimale pour éviter les changements de layout */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* États de chargement et d'erreur avec hauteur fixe */
	.loading-skeleton {
		width: 100%;
		height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.error-message {
		height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Skeleton Loading Styles */
	.skeleton-media {
		background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
		background-size: 200% 100%;
		animation: skeleton-loading 1.5s infinite;
		border-radius: 0.5rem;
		position: relative;
		overflow: hidden;
	}

	.skeleton-shimmer {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(255, 255, 255, 0.1) 50%,
			transparent 100%
		);
		animation: shimmer 2s infinite;
	}

	.skeleton-icon {
		width: 2rem;
		height: 2rem;
		background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
		background-size: 200% 100%;
		animation: skeleton-loading 1.5s infinite;
		border-radius: 0.25rem;
		flex-shrink: 0;
	}

	.skeleton-title {
		height: 1.5rem;
		width: 60%;
		background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
		background-size: 200% 100%;
		animation: skeleton-loading 1.5s infinite;
		border-radius: 0.25rem;
	}

	@keyframes skeleton-loading {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}

	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	h2 {
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		line-height: 1.3;
	}

	.Showcase-head p {
		font-family: 'Manrope', sans-serif;
	}

	@media screen and (min-width: 768px) {
		h2 {
			font-size: 2.7rem;
		}
	}

	@media screen and (min-width: 1920px) {
		h2 {
			font-size: 3rem;
		}

		.Showcase-head p {
			font-size: 1.3rem;
		}
	}

	.swiper {
		width: 100%;
		height: 100%;
		overflow: visible !important;
	}

	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.project-card {
		width: 100%;
		height: 100%;
		max-width: 600px; /* Largeur maximale pour maintenir le ratio */
		transition: transform 0.2s ease-out;
	}

	/* Conteneur vidéo/image avec aspect ratio 16:9 fixe */
	.video-container {
		width: 100%;
		aspect-ratio: 16 / 9; /* Ratio 16:9 pour tous les médias */
		position: relative;
		overflow: hidden;
		border-radius: 0.5rem;
	}

	.project-media {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover; /* Maintient le ratio sans déformation pour les images ET vidéos */
		border-radius: 0.5rem;
		transition: transform 0.3s ease-in-out;
	}

	/* Style spécifique pour les images avec effet hover */
	.project-media[alt*="image"] {
		cursor: pointer;
	}

	.project-card:hover .project-media {
		transform: scale(1.02);
	}

	.project-card:hover {
		transform: scale(1.03);
		transition: transform 0.3s ease-in-out;
	}

	.project-card-subtitle {
		margin-top: 1rem;
		flex-shrink: 0; /* Évite que le titre soit compressé */
	}

	.project-card-subtitle img {
		width: 2rem;
		height: 2rem;
		object-fit: contain;
	}


</style>
