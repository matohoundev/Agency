<script>
	import Button from '$lib/components/button3d.svelte';
</script>

<section class="Home container mx-auto flex flex-col justify-center items-center gap-y-12">
	<div class="relative">
		<img src="/icons/logo-white-35-opacity.svg" alt="Logo" class="logo absolute" />
		<div class="title-content">
			<p class="relative suptitle z-10 text-black">C'est promis</p>
			<div class="relative z-10 text-black">
				<p class="relative title z-15">Déclenchez <br /> Le wow effect <br /> À vos clients</p>
				<span class="title-effect">
					Déclenchez <br /> Le wow effect <br /> À vos clients
				</span>
			</div>
		</div>
	</div>
	<div>
		<Button />
	</div>
</section>

<style>
	/* base */
	section {
		height: 100vh;
		/* border: 1px solid green; */
	}

	/* custom */

	img {
		height: 80%;
		top: 10%;
		object-fit: cover;
		overflow: visible;
	}

	.title,
	.suptitle,
	.title-effect {
		font-family: 'Manrope', sans-serif;
		font-weight: bold;
	}

	.suptitle {
		font-size: 1.25rem;
	}
	.title,
	.title-effect {
		font-size: 3rem;
	}
	@media screen and (min-width: 768px) {
		.title,
		.title-effect {
			font-size: 3rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.suptitle {
			font-size: 1.5rem;
		}
	}

	@media screen and (min-width: 1280px) {
		.title,
		.title-effect {
			font-size: 3.7rem;
		}
	}

	@media screen and (min-width: 1440px) {
		.title,
		.title-effect {
			font-size: 4.5rem;
		}
	}

	@media screen and (min-width: 1920px) {
		.title,
		.title-effect {
			font-size: 5.8rem;
		}
	}

	.title-effect {
		color: transparent;
		-webkit-text-stroke: 1px #000000;
		top: 2.5px;
		left: 4px;
		position: absolute;
		text-wrap: nowrap;
	}
</style>
