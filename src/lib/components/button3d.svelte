<div class="button3D">
	<button class="relative z-15 text-xl lg:text-2xl">
		<a href="https://atohoun-marvin.fr/" target="_blank" rel="noopener noreferrer"
			>Réserver un appel gratuit</a
		>
	</button>

	<div class="button-3d text-lg md:text-xl lg:text-2xl"></div>
</div>

<style>
	.button3D {
		position: relative;
		max-width: 420px;
		width: 100%;
	}

	button,
	.button-3d {
		width: 100%;
		border-radius: 50px;
		font-family: 'Manrope', sans-serif;
		font-weight: bold;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-wrap: nowrap;
	}
	a {
		width: 100%;
		/* border: 1px solid blue; */
		margin: 21px 40px;
	}
	button {
		background-color: #000000;
		position: relative;
		color: white;

		text-align: center;
		text-decoration: none;
		cursor: pointer;
	}
	@media screen and (min-width: 768px) {
		a {
			margin-inline: 56px;
		}
	}
	@media screen and (min-width: 1024px) {
		a {
			margin-inline: 64px;
		}
	}
	.button-3d {
		width: 100%;
		height: 100%;
		position: absolute;
		color: transparent;
		background-color: white;
		top: 4px;
		left: 4px;
		border: 1px solid #000000;
	}
</style>
