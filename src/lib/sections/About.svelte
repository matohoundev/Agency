<script lang="ts">
	const titleLines: [string, string, string] = [
		'Déclenchez le',
		' "wow effect"',
		'chez vos clients'
	];
</script>

<section
	class="About mx-auto max-w-7xl px-6 lg:px-12 flex flex-col justify-center gap-y-12 sm:gap-y-24 2xl:gap-y-36"
>
	<div class="about-title font-bold text-center">
		<h2>{titleLines[0]}</h2>
		<h2 class="text-white">{titleLines[1]}</h2>
		<h2>{titleLines[2]}</h2>
	</div>
	<div class="about-content flex justify-center sm:justify-end sm:w-fit">
		<p>
			<span>"Votre projet est le mien"</span> c'est ainsi que j'envisage chaque mission. J'accompagne
			à chaque étape pour construire des expériences digitales sur‑mesure, mémorables et performantes.
			Creer et polir chaque détail avec toujours cette soif d'innover, ce sont mes valeurs. Avec plus
			de 6 ans d'expérience en conception d'interfaces, j'allie exigence visuelle et pragmatisme technique
			pour livrer des sites rapides, accessibles et pensés pour votre clientèle.
		</p>
	</div>
</section>

<style>
	/* base */
	section {
		min-height: 100vh;
		/* border: 1px solid blue; */
		padding-inline: 8%;
	}

	h2 {
		font-family: 'Montserrat', sans-serif;
		font-size: 2.5rem;
		line-height: 1.3;
		/* color: black; */
	}

	@media screen and (min-width: 768px) {
		h2 {
			font-size: 4.25rem;
		}
	}

	@media screen and (min-width: 1440px) {
		h2 {
			font-size: 4rem;
		}
	}

	@media screen and (min-width: 1920px) {
		h2 {
			font-size: 5.5rem;
		}
	}

	p {
		font-family: 'Manrope', sans-serif;
		font-weight: 400;
		color: white;
		font-size: 1.15rem;
		text-align: justify;
	}

	p span {
		font-weight: 900;
	}

	@media screen and (min-width: 400px) {
		p {
			font-size: 1.4rem;
		}
	}

	@media screen and (min-width: 768px) {
		p {
			font-size: 1.5rem;
		}
	}

	@media screen and (min-width: 1024px) {
		p {
			font-size: 1.75rem;
		}
	}

	@media screen and (min-width: 1440px) {
		p {
			/* width: 70%; */
			font-size: 1.4rem;
		}
	}

	@media screen and (min-width: 1920px) {
		p {
			font-size: 2rem;
		}
	}
</style>
