<script>
	import Button from '$lib/components/button3d.svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer class="relative z-10">
	<!-- <footer class="relative z-10 bg-amber-300"> -->
	<div
		class="container h-screen mx-auto px-6 pt-20 md:pt-40 pb-6 border-2 flex flex-col justify-between"
	>
		<div class="flex justify-center">
			<h6 class="text-white text-6xl lg:text-7xl">
				Faisons quelque chose <br /> de <span>GRAND</span> <span>ensemble</span>
			</h6>
		</div>
		<div class="flex justify-center mb-4">
			<Button />
		</div>
		<div class="">
			<!-- <div class=" bg-amber-700"> -->
			<div class="social-box"></div>
			<div class="flex flex-col md:flex-row justify-between items-center">
				<div class="mb-4 md:mb-0">
					<p class="text-gray-700">&copy; {currentYear} Agency. Tous droits réservés.</p>
				</div>
				<div class="flex space-x-4">
					<a href="/contact" class="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
					<a href="/about" class="text-gray-600 hover:text-blue-600 transition-colors">À propos</a>
					<a href="/legal" class="text-gray-600 hover:text-blue-600 transition-colors"
						>Mentions légales
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	h6 {
		font-family: 'Manrope', sans-serif;
		font-weight: bold;
	}

	h6 span:first-of-type {
		font-weight: bolder;
	}

	h6 span:last-of-type {
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-thickness: 2px;
	}
</style>
