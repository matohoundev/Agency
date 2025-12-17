<script lang="ts">
	export let themeBtn: string = 'black';
	// When false, show immediately without intro animation
	export let animate: boolean = true;
	// Link & label customization
	export let href: string = 'https://calendly.com/matohoundev/startprojet';
	export let label: string = 'Réserver un appel gratuit';
	export let target: string | null = '_blank';
	export let rel: string | null = 'noopener noreferrer';
</script>

<div class="buttonEffect" style="opacity: {animate ? undefined : 1}">
	<button
		class="button-base relative z-15 btn-color-{themeBtn}"
		style="transform: {animate ? 'translateY(4px) translateX(4px)' : 'none'}"
	>
		<a {href} {target} {rel}>{label}</a>
	</button>

	<div class="button-3d button-3d-color-{themeBtn} text-lg md:text-xl lg:text-2xl"></div>
</div>

<style>
	.buttonEffect {
		position: relative;
		/* max-width: 420px; */
		/* width: 100%; */
		opacity: 0;
	}

	.button-base {
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
		font-weight: 600;
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

	.buttonEffect:active .button-base {
		top: 4px;
		left: 0px;
	}

	button {
		position: relative;
		text-align: center;
		text-decoration: none;
		cursor: pointer;
	}

	.btn-color-black {
		color: white;
		background-color: #000000;
	}

	.btn-color-white {
		background-color: #ffffff;
		color: black;
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
		top: 4px;
		left: 4px;
	}

	.button-3d-color-black {
		background-color: var(--paper);
		border: 1px solid #000000;
	}

	.button-3d-color-white {
		background-color: black;
		border: 1px solid #ffffff;
	}
</style>
