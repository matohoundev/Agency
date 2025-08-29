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
		const mobileNav = document.querySelector('.mobile-nav');
		if (bubble && isOpen) {
			gsap.to(bubble, { scale: 10.5, duration: 0.5, ease: 'power2.out' });
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
		} else if (bubble && !isOpen) {
			gsap.to(bubble, { scale: 1, duration: 0.5, ease: 'power2.out' });
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
	}


</script>

<header class="fixed w-full z-15 ">
	<div
		class="container mx-auto px-8 xl:px-16 py-4 flex justify-between items-center align-middle pointer-events-auto"
	>
		<!-- Logo -->
		<a href="/">
			<img src="/icons/logo-white.svg" alt="Logo" class="w-11" />
		</a>

		<!-- Navigation -->
		<nav class="relative">
			<div class="bubble"></div>
			<ul class="hidden md:flex space-x-8 text-white">
				<li><a href="/#projects" class="hover:underline">Réalisations</a></li>
				<li><a href="/#offre" class="hover:underline">Offre</a></li>
				<li><a href="/#tarifs" class="hover:underline">Tarifs</a></li>
				<li><a href="/#footer" class="hover:underline">Contact</a></li>
			</ul>

			<!-- Mobile menu button -->
			<button class="md:hidden text-white" on:click={toggleMobileMenu}>
				<Hamburger />
			</button>
		</nav>
	</div>

	<!-- Mobile menu (only visible when open) -->
		<div
			class="md:hidden mobile-nav absolute flex flex-col text-right top-16 left-0 w-full text-white "
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
	/* header div {
		backdrop-filter: blur(10px);
	} */
	a {
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		font-size: 1.5rem;
		transition: color 0.3s ease;
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
		/* background-color: red; */
		background-color: white;
		backdrop-filter: blur(1px);
		/* opacity: 0.9; */
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 40px;
		pointer-events: none;
		z-index: -1;
		top: -1px;
		left: -1px;
		/* transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1); */
		/* background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent 70%); */
		/* background-position: center; */
	}

	@media screen and (min-width: 768px) {
		.bubble {
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
