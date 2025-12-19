<script>
	import Button from '$lib/components/button3d.svelte';
</script>

<section class="Home container mx-auto flex flex-col justify-center items-center gap-y-12">
	<div class="relative hero-title-section">
		<img src="/icons/logo-white-35-opacity.svg" alt="Logo" class="logo absolute" />
		<div class="title-content">
			<div class="relative text-center">
				<p class="title relative z-10">
					Augmentez votre impact <br /> grâce à une expérience <br /> visuelle sur-mesure
				</p>
				<span class="title-effect">
					Augmentez votre impact <br /> grâce à une expérience <br /> visuelle sur-mesure
				</span>
			</div>
		</div>
		<div class="subtitle-content mt-6">
			<p class="text-center subtitle text-lg md:text-xl lg:text-2xl px-3 md:px-0">
				Alliez design 3D immersif et performance web pour une présence en ligne inoubliable.
			</p>
		</div>
	</div>
	<div class="button-home">
		<Button />
	</div>
</section>

<style>
	/* base */
	.Home {
		height: 100vh;
	}

	.hero-title-section {
		opacity: 0;
		scale: 0.8;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	/* custom */

	img {
		height: 80%;
		top: 5%;
		/* left: 3%; */
		object-fit: cover;
		overflow: visible;
		opacity: 0.35;
	}

	.title-content {
		/* color: black; */
		color: var(--paper);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title,
	.title-effect {
		font-size: 2.1rem;
		font-family: 'Manrope', sans-serif;
		font-weight: bold;
	}

	@media screen and (min-width: 768px) {
		.title,
		.title-effect {
			font-size: 3.2rem;
		}
	}

	@media screen and (min-width: 1280px) {
		.title,
		.title-effect {
			font-size: 3.5rem;
		}
	}

	@media screen and (min-width: 1440px) {
		.title,
		.title-effect {
			font-size: 4rem;
		}
	}

	@media screen and (min-width: 1920px) {
		.title,
		.title-effect {
			font-size: 5.8rem;
		}
	}

	.title-effect {
		position: absolute;
		text-wrap: nowrap;
		color: transparent;
		/* -webkit-text-stroke: 1px #000000; */
		-webkit-text-stroke: 1px var(--paper);
		top: 2.5px;
		left: 4px;
		/* top: 0;
		left: 0;
		opacity: 0.5; */
		/* transform: translate(4px, 2.5px); */
	}

	.subtitle {
		font-family: 'Manrope', Courier, monospace;
		color: var(--paper);
	}
</style>
