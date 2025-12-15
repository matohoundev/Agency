<script>
	import BoxFaq from '$lib/components/boxFaq.svelte';

	const faqItems = [
		{
			question: ' Quels types de sites web développez-vous ?',
			answer:
				'Je crée principalement des sites vitrines 3D interactifs pour les entreprises souhaitant une présence en ligne innovante et immersive.'
		},
		{
			question: 'Quels sont les délais de livraison pour recevoir mon site ?',
			answer:
				'Les délais de livraison dépendent du projet. Généralement, un projet standard est livré en 2 à 4 semaines après validation du concept.'
		},
		{
			question: 'Comment se déroule la collaboration ?',
			answer:
				"Au programme, je vous propose un planning et des points de validation réguliers pour obtenir vos retours et garantir le bon avancement du projet en toute transparence.\n\nL'objectif est de s'assurer que le résultat final corresponde parfaitement à vos attentes."
		},
		{
			question: 'Puis-je demander des modifications après la livraison ?',
			answer:
				'Oui pas de soucis, je propose un support post-livraison pour effectuer des ajustements mineurs et vous aider à prendre en main votre site.'
		},
		{
			question: 'Si je n’ai pas de contenu prêt, pouvez-vous m’aider ?',
			answer:
				'Absolument, je peux vous accompagner dans la création de contenu visuel et textuel adapté à votre site et vous conseiller sur la meilleure façon de le présenter.'
		},
		{
			question: 'Comment se passe le paiement ?',
			answer:
				"Un acompte de 30% est demandé au démarrage, puis le solde à la livraison. Les paiements s'effectuent par virement bancaire."
		},
		{
			question: 'Puis-je gérer mon site moi-même après sa mise en ligne ?',
			answer:
				"Oui avec l'outil Sanity, vous pouvez facilement gérer et mettre à jour le contenu de votre site sans connaissances techniques.\n\n Je fournis une formation rapide pour vous familiariser avec l'interface."
		}
	];
</script>

<section class="Faq mx-auto py-16 px-4 flex flex-col justify-center text-white">
	<div class="max-w-6xl mx-auto w-full">
		<div class="text-center mb-12">
			<h5 class="text-4xl font-bold mb-4">Vos questions</h5>
			<p class="faq-subtitle text-lg">Trouvez rapidement des réponses à vos questions</p>
		</div>

		<BoxFaq {faqItems} />

		<div class="text-center mt-12">
			<p class="mb-2 text-2xl">Une autre question ?</p>
			<p class="mail text-2xl">
				Contactez-moi sur <a
					href="mailto:matohoundev@gmail.com"
					class="text-blue-400 hover:underline">matohoundev@gmail.com</a
				>
			</p>
		</div>
	</div>
</section>

<style>
	.Faq {
		scroll-margin-top: 2rem;
		background-color: #1a202c;
	}

	h5 {
		font-family: 'Montserrat', sans-serif;
	}

	@media screen and (min-width: 768px) {
		h5 {
			font-size: 2.7rem;
		}

		.faq-subtitle {
			font-size: 1.2rem;
		}
	}

	@media screen and (min-width: 1920px) {
		h5 {
			font-size: 3rem;
		}

		.faq-subtitle {
			font-size: 1.3rem;
		}
	}

	.faq-subtitle,
	.mail {
		font-family: 'Manrope', sans-serif;
	}
</style>
