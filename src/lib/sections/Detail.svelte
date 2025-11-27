<script lang="ts">
	const detailCards = [
		{
			id: 1,
			title: 'UX/UI DESIGN',
			highlight: 'Une interface qui séduit,<br />un parcours qui convertit.',
			features: [
				'Design sur-mesure aligné à votre identité de marque',
				'Expérience utilisateur fluide et intuitive',
				'Chaque clic compte : interface pensée pour maximiser vos conversions'
			],
			imageUrl:
				'https://images.unsplash.com/photo-1500522144261-ea64433bbe27?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			imageAlt: 'UX/UI Design',
			reversed: false
		},
		{
			id: 2,
			title: 'ONBOARDING',
			highlight: 'Du premier contact à la livraison finale.',
			features: [
				'Accompagnement personnalisé à chaque étape du projet',
				'Points de validation réguliers pour ajuster en temps réel',
				'Communication claire et transparente tout au long du processus'
			],
			imageUrl:
				'https://images.unsplash.com/photo-1500522144261-ea64433bbe27?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			imageAlt: 'Onboarding',
			reversed: true
		},
		{
			id: 3,
			title: 'DÉVELOPPEMENT',
			highlight: 'Du code propre,<br />des performances optimales.',
			features: [
				'Technologies modernes pour un site rapide et sécurisé',
				'Optimisation SEO intégrée dès la conception',
				'Responsive sur tous les appareils : mobile, tablette, desktop'
			],
			imageUrl:
				'https://images.unsplash.com/photo-1500522144261-ea64433bbe27?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			imageAlt: 'Développement',
			reversed: false
		},
		{
			id: 4,
			title: 'LANCEMENT',
			highlight: 'Votre site en ligne, prêt à performer.',
			features: [
				'Mise en ligne professionnelle et sécurisée',
				'Formation à la gestion de votre site',
				'Support technique inclus pour un démarrage serein'
			],
			imageUrl:
				'https://images.unsplash.com/photo-1500522144261-ea64433bbe27?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			imageAlt: 'Lancement',
			reversed: true
		}
	];
</script>

<section
	id="offre"
	class="Detail container mx-auto flex flex-col py-12.5 px-3 md:px-15 lg:px-0 gap-y-10.5"
>
	<div class="Detail-head flex flex-col justify-center items-center gap-y-6 md:gap-y-4">
		<div class="relative z-10 text-black text-center">
			<p class="relative detail-title z-15">Votre site web, de A à Z</p>
			<span class="detail-title-effect">Votre site web, de A à Z</span>
		</div>
		<p class="text-center detail-subtitle text-lg">
			Chaque étape de votre projet web, maîtrisée pour un résultat exceptionnel.
		</p>
	</div>
	<div class="Detail-content flex flex-col justify-center items-center gap-y-16 sm:gap-y-12">
		{#each detailCards as card}
			<div class="detail-card detail-card-{card.id} relative border-1 bg-white rounded-lg">
				{#if card.reversed}
					<div
						class="flex flex-col-reverse lg:flex-row justify-between gap-x-10 items-center px-5 pt-5 pb-7 lg:py-3 lg:pr-3 lg:pl-8"
					>
						<div class="flex flex-col gap-y-3 pt-5 lg:pt-0">
							<p class="detail-highlight">
								{@html card.highlight}
							</p>
							<div class="detail-features flex flex-col gap-y-2 z-10">
								{#each card.features as feature}
									<p class="">{feature}</p>
								{/each}
							</div>
						</div>
						<img src={card.imageUrl} alt={card.imageAlt} />
						<span class="detail-card-title-return text-2xl font-bold absolute">{card.title}</span>
					</div>
				{:else}
					<span class="detail-card-title text-2xl font-bold absolute">{card.title}</span>
					<div
						class="flex flex-col lg:flex-row gap-x-10 items-center pt-7 pb-5 px-5 lg:px-3 lg:py-3"
					>
						<img src={card.imageUrl} alt={card.imageAlt} />
						<div class="flex flex-col gap-y-3 pt-5 lg:pt-0">
							<p class="detail-highlight">
								{@html card.highlight}
							</p>
							<div class="detail-features flex flex-col gap-y-2 z-10">
								{#each card.features as feature}
									<p class="">{feature}</p>
								{/each}
							</div>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		border: 1px solid black;
		/* background-color: #fbf9f7; */
		background-color: #ffffff;
	}

	.detail-title,
	.detail-title-effect {
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		font-size: 2.25rem;
		line-height: 1.3;
	}

	.detail-title-effect {
		color: transparent;
		-webkit-text-stroke: 1px #000000;
		top: 2.5px;
		left: 2px;
		position: absolute;
		width: 100%;
	}

	.detail-subtitle {
		font-family: 'Manrope', sans-serif;
		line-height: 1.4;
	}

	@media screen and (min-width: 1024px) {
		.detail-title-effect {
			top: 2.5px;
			left: 2px;
		}
	}

	@media screen and (min-width: 1920px) {
		.detail-title {
			font-size: 3rem;
		}

		.detail-title-effect {
			font-size: 3rem;
		}

		.detail-subtitle {
			font-size: 1.3rem;
		}
	}

	.detail-card {
		width: 95%;
	}

	@media screen and (min-width: 1024px) {
		.detail-card {
			width: 85%;
			max-width: 1000px;
		}
	}

	@media screen and (min-width: 1920px) {
		.detail-card {
			width: 60%;
		}
	}

	img {
		z-index: 10;
		border-radius: 0.5rem;
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
		/* width: 300px; */
		height: auto;
		object-fit: cover;
	}

	@media screen and (min-width: 1024px) {
		img {
			max-width: 300px;
		}
	}

	.detail-card-title {
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		font-size: 2.2rem;
		color: #000;
		background-color: #fff;
		top: -32px;
		right: -5px;
		/* border: 1px solid red; */
		padding: 0.5rem 0 0.5rem 1rem;
		/* border-radius: 0 0.5rem 0.5rem 0; */
	}

	.detail-card-title-return {
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		font-size: 2.2rem;
		color: #000;
		background-color: #fff;
		bottom: -30px;
		left: -5px;
		padding: 0.5rem 1rem 0.5rem 0;
	}

	.detail-highlight {
		font-family: 'Manrope', sans-serif;
		font-weight: bold;
		font-size: 1.2rem;
		color: #000000;
	}

	.detail-features {
		font-family: 'Manrope', sans-serif;
		font-size: 1rem;
		color: #555;
	}
</style>
