<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	function goBack() {
		if (history.length > 1) history.back();
		else window.location.href = `${base}/`;
	}
</script>

<svelte:head>
	<title>{($page.status || 404) + ' • Erreur'}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<section class="container mx-auto px-6 md:px-10 lg:px-0 text-center text-white">
		<div class="mb-6">
			<span
				class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase border border-white/15"
				>Erreur</span
			>
		</div>

		<h1
			class="text-7xl md:text-9xl font-extrabold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white/85 to-white/60 drop-shadow-xl"
		>
			{$page.status || 404}
		</h1>

		<h2 class="mt-4 text-2xl md:text-3xl font-semibold">
			{$page.status === 404 ? 'Page non trouvée' : 'Une erreur est survenue'}
		</h2>

		{#if $page.error?.message}
			<p class="mt-2 text-gray-300 max-w-2xl mx-auto">
				{$page.error.message}
			</p>
		{/if}

		<div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
			<a
				href={`${base}/`}
				class="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-white text-black hover:bg-white/90 transition-colors shadow-md"
			>
				Retour à l'accueil
			</a>
			<button
				on:click={goBack}
				class="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-white/20 text-white hover:bg-white/10 transition-colors"
			>
				Page précédente
			</button>
		</div>
	</section>
</main>

<style>
	h1,
	h2 {
		font-family: 'Montserrat', sans-serif;
	}
	p,
	a,
	button,
	span {
		font-family: 'Manrope', sans-serif;
	}

	button {
		cursor: pointer;
	}
</style>
