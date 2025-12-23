<script lang="ts">
	import BoxPricing from '$lib/components/boxPricing.svelte';
	import type { Offer } from '$lib/types/offer';

	export let offers: Offer[] = [];
	export let isLoading = true;
	export let error: string | null = null;
</script>

<section
	id="tarifs"
	class="Pricing container mx-auto flex flex-col py-25 lg:py-20 px-3 md:px-15 lg:px-0 gap-y-20"
>
	<div class="Pricing-head flex flex-col justify-center items-center gap-y-6 md:gap-y-4">
		<div class="relative z-10 text-black text-center">
			<p class="relative pricing-title z-15">
				Des tarifs clairs <br /> pour des résultats concrets
			</p>
			<span class="princing-title-effect"
				>Des tarifs clairs <br /> pour des résultats concrets
			</span>
		</div>
		<p class="text-center princing-subtitle text-lg">
			Deux formules pensées pour répondre aux besoins spécifiques de votre projet web.
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
	.Pricing {
		min-height: 100vh;
		/* border: 3px solid green; */
		/* background-color: #fcfbfa; */
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

	.pricing-title {
		color: white;
	}

	.pricing-title,
	.princing-title-effect {
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		font-size: 2.1rem;
		line-height: 1.3;
	}

	.princing-title-effect {
		color: transparent;
		/* -webkit-text-stroke: 1px #000000; */
		-webkit-text-stroke: 1px var(--paper);
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
