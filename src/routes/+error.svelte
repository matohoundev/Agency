<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}: {$page.error.message}</title>
</svelte:head>

<div class="error-container">
	<h1>{$page.status}</h1>
	<h2>Page non trouvée</h2>
	<p>Désolé, la page que vous recherchez n'existe pas.</p>
	<a href="/">Retour à l'accueil</a>
</div>

<style>
	.error-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;
	}

	h1 {
		font-size: 8rem;
		margin-bottom: 0;
	}
</style>
