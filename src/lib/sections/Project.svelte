<script lang="ts">
    import { onMount } from 'svelte';

    	interface Project {
		url: string;
		title: string;
		iconUrl: string;
		mediaType: 'video' | 'image';
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
    <div class="Projects-head flex flex-col justify-center items-center gap-y-6 md:gap-y-4">
		<h2 class="text-center text-white text-4xl">Les dernières réalisations</h2>
		<p class="text-center text-white text-lg">
			Découvrez comment nous transformons des idées ambitieuses en sites à fort impact.
		</p>
	</div>

    <div class="projects-content">
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
    .Projects-head h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        line-height: 1.3;
    }

    .Projects-head p {
        font-family: 'Manrope', sans-serif;
    }

    @media (min-width: 768px) {
        .Projects-head h2 {
            font-size: 2.7rem; /* 48px */
        }
    }

    @media (min-width: 1920px) {
        .Projects-head h2 {
            font-size: 3rem; 
        }

        .Projects-head p {
            font-size: 1.3rem; 
        }
    }
    

</style>