<script>
	export let faqItems = [];

	let activeIndex = -1;

	function toggleFaq(index) {
		activeIndex = activeIndex === index ? -1 : index;
	}
</script>

<div class="faq-box space-y-4">
	{#each faqItems as item, i}
		<div class="bg-gray-700 rounded-xl overflow-hidden">
			<button
				class="w-full px-6 py-3.5 text-left flex justify-between items-center focus:outline-none gap-x-2"
				on:click={() => toggleFaq(i)}
				aria-expanded={activeIndex === i}
			>
				<p class="text-md md:text-xl font-semibold">{item.question}</p>
				<svg
					class="w-6 h-6 transform transition-transform duration-200 {activeIndex === i
						? 'rotate-180'
						: ''}"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{#if activeIndex === i}
				<div class="px-6 pb-4 transition-all duration-200">
					<p class="text-md md:text-xl">{item.answer}</p>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.faq-box {
		font-family: 'Montserrat', sans-serif;
	}
</style>
