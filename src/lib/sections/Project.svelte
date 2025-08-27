<script lang="ts">
    import { onMount } from 'svelte';

    	interface Project {
		url: string;
		title: string;
		iconUrl: string;
	}

    let projects: Project[] = [];
	let isLoading = true;
	let error: string | null = null;

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
        loadProjects();
    });
</script>

<section id="projects" class="Projects container mx-auto flex flex-col py-12.5 px-3 md:px-15 lg:px-0 gap-y-10.5">
    <div class="projects-head flex flex-col justify-center items-center gap-y-6 md:gap-y-4">
		<h2 class="text-center text-white text-4xl">Les dernières réalisations</h2>
		<p class="text-center text-white text-lg">
			Découvrez comment nous transformons des idées ambitieuses en sites à fort impact.
		</p>
	</div>

    <div class="projects-content grid grid-cols-1 sm:grid-cols-2 justify-items-center">
       {#each projects as project}
       <div class="projects-card">
           <img src={project.url} alt={project.title} class="w-full h-auto rounded-lg shadow-lg" />
           <div class="projects-logo">
               <img src={project.iconUrl} alt="Project Icon" class="w-8 h-8" />
           </div>
       </div>
       {/each}
    </div>
</section>

<style>
    .Projects {
        background-color: #1a202c; /* Couleur de fond sombre */
        color: white;
        border-radius: 1rem 1rem 0 0; /* Coins arrondis en haut */
        transform: translateY(150px) scale(0.8);
    }
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
             padding-inline: 4rem;
             gap: 2.5rem;
        }
    }

    .projects-card {
        position: relative;
        /* display: inline-block; */
        /* margin: 1rem; */
    }

    .projects-logo {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: white;
        border-radius: 50%;
        padding: 0.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
    

</style>