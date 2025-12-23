<script lang="ts">
	import Hamburger from '$lib/icons/hamburger.svelte';
	import { gsap } from 'gsap';

	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		if (isMobileMenuOpen) {
			closeMobileMenu();
			return;
		} else {
			isMobileMenuOpen = !isMobileMenuOpen;
			animateNav(true);
		}
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
		animateNav(false);
	}

	const animateNav = (isOpen: boolean) => {
		const bubble = document.querySelector('.bubble');
		const bubbleDark = document.querySelector('.bubble-dark');
		const mobileNav = document.querySelector('.mobile-nav');
		if (bubble && bubbleDark && isOpen) {
			gsap.to(bubble, { scale: 10.5, duration: 0.5, ease: 'power2.out' });
			gsap.to(bubbleDark, { scale: 10.5, duration: 0.5, ease: 'power2.out' });
			if (mobileNav) {
				gsap.fromTo(
					mobileNav,
					{
						opacity: 0,
						y: -30,
						pointerEvents: 'none',
						transform: 'perspective(800px) rotateX(-80deg) scaleY(0.7) skewY(-20deg)'
					},
					{
						opacity: 1,
						y: 0,
						pointerEvents: 'auto',
						transform: 'perspective(800px) rotateX(0deg) scaleY(1) skewY(0deg)',
						duration: 0.6,
						ease: 'power2.out'
					}
				);
			}
		} else if (bubble && bubbleDark && !isOpen) {
			gsap.to(bubble, { scale: 1, duration: 0.5, ease: 'power2.out' });
			gsap.to(bubbleDark, { scale: 1, duration: 0.5, ease: 'power2.out' });
			if (mobileNav) {
				gsap.to(mobileNav, {
					opacity: 0,
					y: -25,
					pointerEvents: 'none',
					transform: 'perspective(800px) rotateX(-80deg) scaleY(0.7) skewY(-20deg)',
					duration: 0.1,
					ease: 'power2.in'
				});
			}
		}
	};
</script>

<header class="fixed w-full z-15 header">
	<div
		class="container mx-auto px-8 xl:px-16 py-4 flex justify-between items-center align-middle pointer-events-auto"
	>
		<!-- Logo -->
		<div class="logo-content relative">
			<a href="/" class="relative z-10">
				<img src="/icons/logo-white.svg" alt="Logo" class="relative logo-light w-11" />
				<img src="/icons/logo-white.svg" alt="Logo" class="w-11 logo-dark z-10" />
			</a>
		</div>

		<!-- Navigation -->
		<nav class="relative">
			<div class="bubble"></div>
			<div class="bubble-dark"></div>
			<div class="relative">
				<div class="bg-desktop-dark z-10"></div>
				<ul class="hidden md:flex space-x-8 text-white relative z-20">
					<li><a href="/#projects" class="hover:underline">Réalisations</a></li>
					<li><a href="/#offre" class="hover:underline">Offre</a></li>
					<li><a href="/#tarifs" class="hover:underline">Tarifs</a></li>
					<li><a href="/#footer" class="hover:underline">Contact</a></li>
				</ul>
			</div>

			<!-- Mobile menu button -->
			<button class="md:hidden text-white relative" on:click={toggleMobileMenu}>
				<div class="bg-mobile-dark z-10"></div>
				<Hamburger />
			</button>
		</nav>
	</div>

	<!-- Mobile menu (only visible when open) -->
	<div
		class="md:hidden mobile-nav absolute flex flex-col text-right top-16 left-0 w-full text-white"
	>
		<ul class="px-4 py-2">
			<li class="py-2">
				<a href="#projects" class="hover:underline" on:click={closeMobileMenu}>Réalisations</a>
			</li>
			<li class="py-2">
				<a href="#offre" class="hover:underline" on:click={closeMobileMenu}>Offre</a>
			</li>
			<li class="py-2">
				<a href="#tarifs" class="hover:underline" on:click={closeMobileMenu}>Tarifs</a>
			</li>
			<li class="py-2">
				<a href="#contact" class="hover:underline" on:click={closeMobileMenu}>Contact</a>
			</li>
		</ul>
	</div>
</header>

<style>
	.header {
		opacity: 0;
		scale: 0.9;
	}

	a {
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		font-size: 1.5rem;
		transition: color 0.3s ease;
	}
	.logo-light {
		/* l'objectif desktop */
		opacity: 1;
	}

	.logo-dark {
		position: absolute;
		top: 0;
		left: 0;
		filter: brightness(1) invert(0.5);
		/* l'objectif desktop*/
		opacity: 0;
	}

	@media screen and (min-width: 768px) {
		a {
			font-size: 1.25rem;
		}
	}

	nav {
		padding: 4px 6px;
	}

	.bubble {
		position: absolute;
		padding: 25px 34px;
		background-color: rgba(12, 15, 20, 0.8);
		border-radius: 40px;
		pointer-events: none;
		z-index: -1;
		top: -1px;
		left: -1px;
	}

	.bubble-dark {
		position: absolute;
		padding: 25px 34px;
		z-index: -1;
		pointer-events: none;
		border-radius: 40px;
		top: -1px;
		left: -1px;
		background-color: rgba(12, 15, 20, 0.8);
		/* l'objectif mobile */
		opacity: 0;
	}

	@supports (backdrop-filter: blur(1px)) {
		.bubble {
			backdrop-filter: blur(1px);
			background-color: rgba(255, 255, 255, 0.1);
		}

		.bubble-dark {
			backdrop-filter: blur(1px);
		}
	}

	/* full screen bubble on mobile */

	@media screen and (min-width: 768px) {
		.bubble,
		.bubble-dark {
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}
	}

	button {
		background-color: rgba(255, 255, 255, 0.1);
		padding: 8px 15px;
		border-radius: 40px;
	}

	.bg-desktop-dark {
		position: absolute;
		background-color: rgb(26, 32, 44, 0.5);
		width: 100%;
		height: 100%;
		border-radius: 40px;
		top: 0;
		left: 0;
		/* l'objectif desktop */
		opacity: 0;
	}

	.bg-mobile-dark {
		position: absolute;
		background-color: rgb(26, 32, 44, 0.5);
		width: 100%;
		height: 100%;
		border-radius: 40px;
		top: 0;
		left: 0;
		/* l'objectif mobile */
		opacity: 0;
	}

	@media screen and (min-width: 768px) {
		nav {
			padding: 2px 8px;
		}

		ul {
			background-color: rgba(255, 255, 255, 0.1);
			padding: 8px 32px;
			border-radius: 40px;
		}
	}

	.mobile-nav {
		opacity: 0;
		pointer-events: none;
		transform-origin: top left;
		will-change: transform, opacity;
	}
</style>
