<script lang="ts">
	import { gsap } from 'gsap';
	import type { Project } from '$lib/types/project';

	export let projects: Project[] = [];
	export let isLoading: boolean = false;
	export let error: string | null = null;

	let openedId: string | number | null = null;
	let outsideClickListener: ((e: MouseEvent) => void) | null = null;

	function toggleDescription(id: string | number) {
		const desc = document.getElementById(`desc-${id}`);
		if (!desc) return;

		// Si déjà ouvert, referme
		if (openedId === id && desc.style.display === 'block') {
			desc.style.display = 'none';
			openedId = null;
			removeOutsideListener();
			animateDescription(id, false);
			return;
		}

		// Ferme l'ancienne si besoin
		if (openedId !== null && openedId !== id) {
			const prev = document.getElementById(`desc-${openedId}`);
			if (prev) prev.style.display = 'none';
			animateDescription(openedId, false);
		}

		desc.style.display = 'block';
		animateDescription(id, true);
		openedId = id;
		addOutsideListener(id);
	}

	function addOutsideListener(id: string | number) {
		removeOutsideListener();
		outsideClickListener = (e: MouseEvent) => {
			const card = document.getElementById(`desc-${id}`);
			const moreBtn = document.getElementById(`more-${id}`);
			if (!card || !moreBtn) return;
			// Si le clic n'est pas dans la description ni le bouton
			if (!card.contains(e.target as Node) && !moreBtn.contains(e.target as Node)) {
				card.style.display = 'none';
				openedId = null;
				animateDescription(id, false);
				removeOutsideListener();
			}
		};
		document.addEventListener('mousedown', outsideClickListener);
	}

	function removeOutsideListener() {
		if (outsideClickListener) {
			document.removeEventListener('mousedown', outsideClickListener);
			outsideClickListener = null;
		}
	}

	const animateDescription = (id: string | number, isOpen: boolean) => {
		const blockMore = document.getElementById(`more-${id}`);
		if (blockMore && isOpen) {
			gsap.to(blockMore, { scale: 15, y: -200, duration: 0.5 });
		} else if (blockMore && !isOpen) {
			gsap.to(blockMore, { scale: 1, y: 0, duration: 0.3 });
		}

		const btnMore = document.getElementById(`more-btn-${id}`);

		if (btnMore && isOpen) {
			gsap.to(btnMore, { opacity: 0, duration: 0.05 });
		} else if (btnMore && !isOpen) {
			gsap.to(btnMore, { opacity: 1, duration: 0.1, delay: 0.2 });
		}

		const desc = document.getElementById(`desc-${id}`);

		if (desc && isOpen) {
			gsap.fromTo(desc, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.3 });
		} else if (desc && !isOpen) {
			gsap.to(desc, { opacity: 0, y: 30, duration: 0.3 });
		}
	};

	// Suppression du chargement local, les données sont passées en props
</script>

<section id="projects" class="Projects">
	<div class="container mx-auto flex flex-col py-12.5 px-3 md:px-15 lg:px-0 gap-y-10.5">
		<div class="projects-head flex flex-col justify-center items-center gap-y-6 md:gap-y-4">
			<h2 class="text-center text-white text-4xl">Les dernières réalisations</h2>
			<p class="text-center text-white text-lg">
				Quand nous travaillons ensemble, voici ce que nous pouvons accomplir
			</p>
		</div>

		<div class="projects-content grid grid-cols-1 sm:grid-cols-2 justify-items-center">
			{#each projects as project}
				<div class="projects-card">
					<img src={project.url} alt={project.title} class="w-full h-auto rounded-lg shadow-lg" />
					<div class="projects-logo">
						<img src={project.iconUrl} alt="Project Icon" class="w-8 h-8" />
						<p>{project.title}</p>
					</div>
					<div class="projects-more" id={'more-' + project.id}>
						<button on:click={() => toggleDescription(project.id)} id={'more-btn-' + project.id}
							>En savoir +</button
						>
					</div>
					<div class="projects-description" id={'desc-' + project.id} style="display: none;">
						<p>{project.description}</p>
						<hr class="my-4 border-gray-700" />
						<p class="text-gray-400 text-sm">{project.technologies.join(', ')}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.Projects {
		background-color: #1a202c; /* Couleur de fond sombre */
		color: white;
		border-radius: 1rem 1rem 0 0; /* Coins arrondis en haut */
		transform: translateY(150px) scale(0.8);
		width: 100%;
		/* temporaire aussi */
		/* min-height: 1800px; */
	}
	/* temporaire de la*/
	/* @media (max-width: 640px) {
        .Projects { min-height: 1400px; }
    }
    @media (min-width: 641px) and (max-width: 1023px) {
        .Projects { min-height: 1600px; }
    }
    @media (min-width: 1024px) {
        .Projects { min-height: 1800px; }
    } */
	/* temporaire a la */

	.projects-content {
		/* padding-inline: 1rem; */
		gap: 1.5rem;
	}

	@media (min-width: 640px) {
		.projects-content {
			padding-inline: 1rem;
		}
	}

	@media (min-width: 1024px) {
		.projects-content {
			padding-inline: 3rem;
		}
	}

	@media (min-width: 1280px) {
		.projects-content {
			padding-inline: 5rem;
			gap: 2.5rem;
		}
	}

	.projects-head h2 {
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		line-height: 1.3;
	}

	.projects-head p {
		font-family: 'Manrope', sans-serif;
	}

	@media (min-width: 768px) {
		.projects-head h2 {
			font-size: 2.7rem; /* 48px */
		}
	}

	@media (min-width: 1920px) {
		.projects-head h2 {
			font-size: 3rem;
		}

		.projects-head p {
			font-size: 1.3rem;
		}
	}

	.projects-card {
		position: relative;
		transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
		/* display: inline-block; */
		/* margin: 1rem; */
		overflow: hidden;
	}

	.projects-card:hover {
		transform: scale(1.03);
		cursor: pointer;
	}

	.projects-logo {
		position: absolute;
		bottom: 0.5rem;
		left: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: fit-content;
		/* background: white; */
		background: rgb(0, 0, 0, 0.7);
		border-radius: 2.5rem;
		padding: 0.5rem 1rem 0.5rem 0.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
		color: white;
		/* color: black; */
		font-family: 'Manrope', sans-serif;
		font-weight: bold;
		z-index: 10;
	}
	.projects-more {
		position: absolute;
		/* background-color: rgba(255, 255, 255, 0.85); */
		background-color: rgba(255, 255, 255, 0.35);
		backdrop-filter: blur(0.3px);
		bottom: 0.7rem;
		right: 0.5rem;
		/* width: 41.5%; */
		border-radius: 2.5rem;
		display: flex;
		justify-content: end;
		/* justify-content: center; */
		align-items: center;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.projects-more:hover {
		background-color: rgba(255, 255, 255, 0.45);
		transform: scale(1.05);
	}

	.projects-more button {
		font-family: 'Montserrat', sans-serif;
		font-size: 0.8rem;
		cursor: pointer;
		padding-inline: 1.2rem;
		padding-block: 0.5rem;
	}

	@media (min-width: 1280px) {
		.projects-more button {
			font-size: 1rem;
		}
	}

	.projects-description {
		/* display: none; */
		/* opacity: 0; */
		position: absolute;
		width: 100%;
		height: 100%;
		/* background: rgba(0, 0, 0, 0.7); */
		top: 0;
		left: 0;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}

	@media (max-width: 376px) {
		.projects-description {
			padding: 1.58rem;
		}
	}

	@media (min-width: 1280px) {
		.projects-description {
			padding: 3rem;
		}
	}

	.projects-description p {
		font-family: 'Manrope', sans-serif;
		color: black;
		font-weight: bold;
		text-align: center;
		font-size: 1.1rem;
	}

	@media (max-width: 325px) {
		.projects-description p {
			font-size: 0.9rem !important;
		}
	}

	@media (max-width: 376px) {
		.projects-description p {
			font-size: 1rem;
		}
	}

	@media (min-width: 1280px) {
		.projects-description p {
			font-size: 1.5rem;
		}
	}
</style>
