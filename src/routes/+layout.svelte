<script lang="ts">
	import '../app.css';
	import Nav from '$lib/sections/nav.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import Background3d from '$lib/components/Background3d.svelte';
	import { onMount } from 'svelte';
    import { initAllAnimations, cleanupAnimations } from '$lib/animations/gsapTimeline';

	let { children } = $props();

	onMount(() => {
        // UN SEUL onMount pour toute l'application
        initAllAnimations();

        // Nettoyage quand le composant est détruit
        return () => {
            cleanupAnimations();
        };
    });
</script>

<Nav />

<main class="relative z-5 overflow-hidden">
	{@render children()}
</main>

<Footer />

<Background3d />
