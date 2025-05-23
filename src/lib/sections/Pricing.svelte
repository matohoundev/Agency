<script>
	import BoxPricing from '$lib/components/boxPricing.svelte';
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
		<p class="text-center princing-subtitle">Obtenez un site web qui tient ses promesses.</p>
		<!-- <p class="text-center princing-subtitle">3 offres pour tous les gouverner</p> -->
	</div>
	<div
		class="Offers flex flex-col lg:flex-row justify-center items-center gap-x-8 gap-y-10 lg:gap-y-0 sm:gap-x-12"
	>
		<BoxPricing />
		<BoxPricing />
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		border: 3px solid green;
	}

	.pricing-title,
	.princing-title-effect {
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		font-size: 2rem;
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
		font-weight: bold;
		font-size: 1.1rem;
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

	@media screen and (min-width: 1024px) {
		.pricing-title,
		.princing-title-effect {
			font-size: 3.5rem;
		}

		.princing-subtitle {
			font-size: 1.3rem;
		}
	}
</style>
