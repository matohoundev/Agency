<script lang="ts">
	import Home from '$lib/sections/Home.svelte';
	import About from '$lib/sections/About.svelte';
	import Pricing from '$lib/sections/Pricing.svelte';
	import Faq from '$lib/sections/Faq.svelte';
	import Detail from '$lib/sections/Detail.svelte';
	import Panel from '$lib/sections/Panel.svelte';
	import Project from '$lib/sections/Project.svelte';

	// Lecture des données globales depuis le store rempli par le layout
	import { appData } from '$lib/stores/appData';
</script>

<svelte:head>
	<title>Mon Portfolio - Accueil</title>
	<meta name="description" content="Portfolio de développeur FullStack" />
</svelte:head>

<Home />
<Panel />
<About />
<Project projects={$appData.projects} isLoading={$appData.isLoading} error={$appData.error} />
<Detail />
<Pricing offers={$appData.offers} isLoading={$appData.isLoading} error={$appData.error} />
<Faq />
