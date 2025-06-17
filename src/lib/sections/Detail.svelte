<script></script>

<section class="Detail container mx-auto flex flex-col py-12.5 px-3 md:px-15 lg:px-0 gap-y-10.5">
	<div class="Detail-head flex flex-col justify-center items-center gap-y-6 md:gap-y-4">
		<div class="relative z-10 text-black text-center">
			<p class="relative detail-title z-15">Un site sur-mesure, beau et rapide</p>
			<span class="detail-title-effect">Un site sur-mesure, beau et rapide</span>
		</div>
		<p class="text-center detail-subtitle text-lg">
			Avec un design impactant, une structure stratégique et un copywriting affûté.
		</p>
	</div>
	<div
		class="Detail-content flex flex-col md:flex-row justify-center items-center gap-y-6 md:gap-x-12"
	>
		<div class=" relative border-1 bg-white rounded-lg">
			<span class="detail-card-title text-2xl font-bold absolute">UX/UI DESIGN</span>
			<div class="flex gap-x-10 items-center py-3 px-3">
				<img
					src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="UX/UI Design"
					class="z-10 rounded-lg shadow-lg w-[300px] h-auto object-cover"
				/>
				<div class="flex flex-col gap-y-3">
					<p class="detail-highlight">
						Arrêtez de passer inaperçu. <br /> Faites partie de ceux qu'on retient.
					</p>
					<div class="detail-features flex flex-col gap-y-2">
						<p class="">Design premium-sur-mesure, adieu les templates génériques</p>
						<p class="">Parcours utilisateur naturel et orienté conversion</p>
						<p class="">Chaque élément est pensé pour guider, engager et pousser à l'action</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		height: 100vh;
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

	@media screen and (min-width: 768px) {
		.detail-title-effect {
			top: 2.5px;
			left: 2px;
		}
	}

	@media screen and (min-width: 1920px) {
		.detail-title {
			font-size: 3rem;
		}

		.detail-subtitle {
			font-size: 1.3rem;
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
