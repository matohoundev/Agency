<script>
	import Hamburger from '$lib/icons/hamburger.svelte';

	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}
</script>

<header class="fixed w-full z-10 pointer-events-none">
	<div
		class="container mx-auto px-4 py-4 flex justify-between items-center align-middle pointer-events-auto"
	>
		<!-- Logo -->
		<a href="/">
			<img src="/icons/logo-white.svg" alt="Logo" class="w-11" />
		</a>

		<!-- Navigation -->
		<nav>
			<ul class="hidden md:flex space-x-8 text-white">
				<li><a href="/realisations" class="hover:underline">Réalisations</a></li>
				<li><a href="/offre" class="hover:underline">Offre</a></li>
				<li><a href="/tarifs" class="hover:underline">Tarifs</a></li>
				<li><a href="/contact" class="hover:underline">Contact</a></li>
			</ul>

			<!-- Mobile menu button -->
			<button class="md:hidden text-white align-middle" on:click={toggleMobileMenu}>
				<Hamburger />
			</button>
		</nav>
	</div>

	<!-- Mobile menu (only visible when open) -->
	{#if isMobileMenuOpen}
		<div class="md:hidden absolute top-16 left-0 w-full bg-black text-white pointer-events-auto">
			<ul class="px-4 py-2">
				<li class="py-2">
					<a href="/realisations" class="hover:underline" on:click={closeMobileMenu}>Réalisations</a
					>
				</li>
				<li class="py-2">
					<a href="/offre" class="hover:underline" on:click={closeMobileMenu}>Offre</a>
				</li>
				<li class="py-2">
					<a href="/tarifs" class="hover:underline" on:click={closeMobileMenu}>Tarifs</a>
				</li>
				<li class="py-2">
					<a href="/contact" class="hover:underline" on:click={closeMobileMenu}>Contact</a>
				</li>
			</ul>
		</div>
	{/if}
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
	nav {
		background-color: rgba(255, 255, 255, 0.1);
		padding: 4px 6px;
		border-radius: 40px;
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
</style>
