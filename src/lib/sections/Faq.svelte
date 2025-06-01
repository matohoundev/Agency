<script>
	import BoxFaq from '$lib/components/boxFaq.svelte';

	const faqItems = [
		{
			question: 'Je ne suis pas satisfait, que se passe-t-il ?',
			answer:
				"Je suis là pour vous aider. Si vous n'êtes pas satisfait de mon service, je ferai de mon mieux pour résoudre le problème."
		},
		{
			question: 'Quels sont les délais de livraison ?',
			answer:
				'Les délais de livraison dépendent du projet. Généralement, un projet standard est livré en 2 à 4 semaines après validation du concept.'
		},
		{
			question: 'Quelles méthodes de paiement acceptez-vous ?',
			answer: "J'accepte les virements bancaires, PayPal et les paiements par carte de crédit."
		},
		{
			question: 'Quelles méthodes de paiement acceptez-vous ?',
			answer: "J'accepte les virements bancaires, PayPal et les paiements par carte de crédit."
		},
		{
			question: 'Quelles méthodes de paiement acceptez-vous ?',
			answer: "J'accepte les virements bancaires, PayPal et les paiements par carte de crédit."
		},
		{
			question: 'Quelles méthodes de paiement acceptez-vous ?',
			answer: "J'accepte les virements bancaires, PayPal et les paiements par carte de crédit."
		},
		{
			question: 'Quelles méthodes de paiement acceptez-vous ?',
			answer: "J'accepte les virements bancaires, PayPal et les paiements par carte de crédit."
		},
		{
			question: 'Offrez-vous un support après la livraison du projet ?',
			answer:
				"Oui, j'offre un support technique pendant 3 mois après la livraison finale du projet."
		}
	];
</script>

<section
	class="Faq container mx-auto py-16 px-4 flex flex-col justify-center bg-gray-800 text-white"
>
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
