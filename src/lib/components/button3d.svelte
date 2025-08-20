<div class="buttonEffect">
	<button class="relative z-15">
		<a href="https://atohoun-marvin.fr/" target="_blank" rel="noopener noreferrer"
			>Réserver un appel gratuit</a
		>
	</button>

	<div class="button-3d text-lg md:text-xl lg:text-2xl"></div>
</div>

<style>
	.buttonEffect {
		position: relative;
		/* max-width: 420px; */
		/* width: 100%; */
	}

		/* @media screen and (max-width: 1280px) {
		.buttonEffect {
			max-width: 350px;
		}
	} */

	/* @media screen and (min-width: 1920px) {
		.buttonEffect {
			max-width: 420px;
		}
	} */

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
		transition:
			top 300ms ease,
			left 300ms ease;
	}

	.buttonEffect:hover .button-3d {
		top: 4px;
		left: 0px;
	}

	.buttonEffect:active .button-3d {
		top: 0px;
		left: 0px;
	}

		button {
		background-color: #000000;
		position: relative;
		color: white;

		text-align: center;
		text-decoration: none;
		cursor: pointer;
	}

	a {
		width: 100%;
		/* border: 1px solid blue; */
		margin: 15px 40px;
		font-size: var(--text-lg) /* 1.25rem = 20px */;
		line-height: var(--tw-leading, var(--text-xl--line-height) /* calc(1.75 / 1.25) ≈ 1.4 */);
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

	@media screen and (min-width: 1280px) {
		a {
			font-size: var(--text-lg);
			line-height: var(--tw-leading, var(--text-2xl--line-height) /* calc(2 / 1.5) ≈ 1.3333 */);
			margin-inline: 32px;
		}
	}

		@media screen and (min-width: 1920px) {
		a {
			font-size: var(--text-xl);
			margin-block: 21px;
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
