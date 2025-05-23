<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/nav.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import Background3d from '$lib/components/Background3d.svelte';

	let { children } = $props();
</script>

<Nav />

<main class="relative z-5">
	{@render children()}
</main>

<Footer />

<Background3d />
