<script>
	import Home from '$lib/sections/Home.svelte';
	import About from '$lib/sections/About.svelte';
	import Pricing from '$lib/sections/Pricing.svelte';
	import Faq from '$lib/sections/Faq.svelte';
	import Detail from '$lib/sections/Detail.svelte';
	import Showcase from '$lib/sections/Showcase.svelte';
</script>

<svelte:head>
	<title>Mon Portfolio - Accueil</title>
	<meta name="description" content="Portfolio de développeur FullStack" />
</svelte:head>

<Home />
<About />
<!-- <Showcase /> -->
<Detail />
<Pricing />
<Faq />
