<script lang="ts">
	export let faqItems: { question: string; answer: string }[] = [];

	let activeIndex = -1;

	function toggleFaq(index: number) {
		activeIndex = activeIndex === index ? -1 : index;
	}
</script>

<div class="faq-box space-y-4">
	{#each faqItems as item, i}
		<div class="faq-item rounded-xl">
			<button
				type="button"
				class="w-full px-6 py-3.5 text-left flex justify-between items-center gap-x-2 transition-colors duration-200 rounded-xl"
				on:click={() => toggleFaq(i)}
				aria-expanded={activeIndex === i}
				aria-controls={'faq-answer-' + i}
			>
				<p class="text-md md:text-xl font-semibold">{item.question}</p>
				<svg
					class="w-6 h-6 transform transition-transform duration-300 ease-in-out {activeIndex === i
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
			<div class="faq-answer {activeIndex === i ? 'open' : 'closed'}" id={'faq-answer-' + i}>
				<div class="px-6 pt-2 pb-4">
					<p class="text-md md:text-xl">{item.answer}</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.faq-box {
		font-family: 'Montserrat', sans-serif;
		color: var(--ink);
	}

	.faq-box :hover {
		cursor: pointer;
	}

	.faq-item {
		transition: all 0.3s ease-in-out;
		background-color: var(--paper-variant);
		border: 1px solid rgb(214, 201, 185);
	}

	button:hover {
		color: var(--paper);
		background-color: #dbcfc8;
	}

	.faq-answer {
		max-height: 0;
		overflow: hidden;
		transition:
			max-height 0.4s ease-in-out,
			opacity 0.3s ease-in-out,
			padding 0.3s ease-in-out;
		opacity: 0;
	}

	.faq-answer.open {
		max-height: 500px; /* Ajuste selon tes besoins */
		opacity: 1;
	}

	.faq-answer.closed {
		max-height: 0;
		opacity: 0;
		padding-top: 0;
		padding-bottom: 0;
	}

	/* Animation plus fluide pour le texte */
	.faq-answer p {
		transition: transform 0.3s ease-in-out;
		white-space: pre-line;
	}

	.faq-answer.open p {
		transform: translateY(0);
	}

	.faq-answer.closed p {
		transform: translateY(-10px);
	}
</style>
