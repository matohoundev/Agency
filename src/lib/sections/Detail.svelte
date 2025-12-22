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
	class="Detail mx-auto flex flex-col pt-25 pb-20 lg:py-20 xl:pt-20 xl:pb-40 px-3 md:px-15 lg:px-0 gap-y-20 bg-detail"
>
	<div class="Detail-head flex flex-col justify-center items-center gap-y-6 md:gap-y-4">
		<div class="detail-title-content relative z-10 text-center">
			<p class="relative detail-title z-15">Votre site web, de A à Z</p>
			<span class="detail-title-effect">Votre site web, de A à Z</span>
		</div>
		<p class="text-center detail-subtitle text-lg">
			Chaque étape de votre projet web, maîtrisée pour un résultat exceptionnel.
		</p>
	</div>
	<div
		class="Detail-content flex flex-col justify-center items-center gap-y-16 sm:gap-y-12 xl:gap-y-28"
	>
		{#each detailCards as card}
			<div class="detail-card detail-card-{card.id} relative border-1 bg-detail rounded-lg">
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
						<span class="detail-card-title-return bg-detail text-2xl font-bold absolute"
							>{card.title}</span
						>
					</div>
				{:else}
					<span class="detail-card-title bg-detail text-2xl font-bold absolute">{card.title}</span>
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
	.Detail {
		background:
			radial-gradient(
				circle at 10% -100%,
				color-mix(in srgb, var(--orange) 50%, transparent) 0,
				transparent 45%
			),
			radial-gradient(
				circle at 90% -100%,
				color-mix(in srgb, var(--lavender) 50%, transparent) 0,
				transparent 45%
			),
			linear-gradient(180deg, var(--paper-variant) 0%, var(--paper) 10%, var(--paper) 100%);
		color: var(--ink);
		border-radius: 0 0 3rem 3rem;
	}

	.bg-detail {
		background-color: var(--paper);
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
		color: black;
	}

	@media screen and (min-width: 1024px) {
		.Detail {
			border-radius: 0 0 5rem 5rem;
		}
		.detail-title-effect {
			top: 2.5px;
			left: 2px;
		}
	}

	@media screen and (min-width: 1920px) {
		.detail-title,
		.detail-title-effect {
			font-size: 3.5rem;
		}

		.detail-subtitle {
			font-size: 1.3rem;
		}
	}

	.detail-card {
		width: 95%;
		opacity: 0;
		will-change: transform, opacity;
	}

	@media screen and (min-width: 1024px) {
		.detail-card {
			width: 85%;
			max-width: 1000px;
		}
	}

	@media screen and (min-width: 1280px) {
		.detail-card {
			width: 85%;
			max-width: 1000px;
		}

		.detail-card-1 {
			transform: translateX(-20%);
		}

		.detail-card-2 {
			transform: translateX(25%);
		}

		.detail-card-3 {
			transform: translateX(-20%);
		}
	}

	@media screen and (min-width: 1920px) {
		.detail-card {
			width: 60%;
		}

		/* .detail-card-1,
		.detail-card-3 {
			transform: translateX(-20%);
		}

		.detail-card-2 {
			transform: translateX(20%);
		} */
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
		opacity: 0;
		will-change: transform, opacity;
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
		/* color: #000; */
		color: var(--white);
		/* color: var(--pink); */
		color: var(--ink);
		top: -32px;
		right: -5px;
		/* border: 1px solid red; */
		padding: 0.5rem 0 0.5rem 1rem;
		/* border-radius: 0 0.5rem 0.5rem 0; */
		opacity: 0;
		will-change: transform, opacity;
	}

	.detail-card-title-return {
		font-family: 'Montserrat', sans-serif;
		font-weight: bold;
		font-size: 2.2rem;
		/* color: #000; */
		color: var(--ink);
		bottom: -30px;
		left: -5px;
		padding: 0.5rem 1rem 0.5rem 0;
		opacity: 0;
		will-change: transform, opacity;
	}

	.detail-highlight {
		font-family: 'Manrope', sans-serif;
		font-weight: bold;
		font-size: 1.2rem;
		/* color: #000000; */
		color: var(--ink);
		opacity: 0;
		will-change: transform, opacity;
	}

	.detail-features {
		font-family: 'Manrope', sans-serif;
		font-size: 1rem;
		/* color: #555; */
		color: var(--ink);
	}

	.detail-features p {
		opacity: 0;
		will-change: transform, opacity;
	}
</style>
