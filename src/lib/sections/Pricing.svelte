<script lang="ts">
	import { onMount, tick } from 'svelte';
	import BoxPricing from '$lib/components/boxPricing.svelte';
	import { pricingAnimations } from '$lib/animations/gsapTimeline';

	interface Offer {
		id: string | number;
		// Add other properties that exist in your offers
		title: string;
		price: string;
		priceNote: string;
		deliveryTime: string;
		description: string;
		isPopular: boolean;
		theme: string;
		features: string[];
	}

	let offers: Offer[] = [];
	let isLoading = true;
	let error: string | null = null;

	// Chargement des offres depuis le fichier JSON
	async function loadOffers() {
		try {
			const response = await fetch('/data/offers.json');
			if (!response.ok) {
				throw new Error(`Erreur HTTP! Statut: ${response.status}`);
			}
			offers = await response.json();
			isLoading = false;
			await tick(); // attendre le rendu des BoxPricing
			pricingAnimations.init(); // lancer l'animation pricing
		} catch (err) {
			console.error('Erreur lors du chargement des offres:', err);
			error = err instanceof Error ? err.message : String(err);
			isLoading = false;
		}
	}

	onMount(() => {
		loadOffers();
	});
</script>

<section
	class="Pricing container mx-auto flex flex-col py-12.5 px-3 md:px-15 lg:px-0 gap-y-10.5 bg-amber-200"
>
	<div class="Pricing-head flex flex-col justify-center items-center gap-y-6 md:gap-y-4">
		<div class="relative z-10 text-black text-center">
			<p class="relative pricing-title z-15">
				Des offres simples,<br /> adaptées à votre croissance
			</p>
			<span class="princing-title-effect"
				>Des offres simples,<br /> adaptées à votre croissance
			</span>
		</div>
		<p class="text-center princing-subtitle text-lg">
			Obtenez un site web qui tient ses promesses.
		</p>
		<!-- <p class="text-center princing-subtitle">3 offres pour tous les gouverner</p> -->
	</div>
	<div
		class="Offers flex flex-col sm:flex-row justify-center items-center gap-x-8 gap-y-10 lg:gap-y-0 sm:gap-x-12"
	>
		{#if isLoading}
			<div class="loading-offers text-center">
				<p>Chargement des offres...</p>
			</div>
		{:else if error}
			<div class="error-offers text-center text-red-500">
				<p>Erreur: {error}</p>
			</div>
		{:else}
			{#each offers as offer (offer.id)}
				<BoxPricing {offer} />
			{/each}
		{/if}
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		/* border: 3px solid green; */
	}

	.loading-offers,
	.error-offers {
		min-height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Manrope', sans-serif;
		font-size: 1.1rem;
	}

	.pricing-title,
	.princing-title-effect {
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		font-size: 2.25rem;
		line-height: 1.3;
	}

	.princing-title-effect {
		color: transparent;
		-webkit-text-stroke: 1px #000000;
		top: 2.5px;
		left: 2px;
		position: absolute;
		width: 100%;
	}

	.princing-subtitle {
		font-family: 'Manrope', sans-serif;
		/* font-weight: bold; */
		/* font-size: 1.1rem; */
		line-height: 1.4;
	}

	@media screen and (min-width: 768px) {
		.princing-title-effect {
			top: 2.5px;
			left: 4px;
		}

		.pricing-title,
		.princing-title-effect {
			font-size: 2.7rem;
		}

		.princing-subtitle {
			font-size: 1.25rem;
		}
	}

	@media screen and (min-width: 1920px) {
		.pricing-title,
		.princing-title-effect {
			font-size: 3.5rem;
		}

		.princing-subtitle {
			font-size: 1.3rem;
		}
	}
</style>
