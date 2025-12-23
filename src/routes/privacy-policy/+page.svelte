<script lang="ts">
	import { base } from '$app/paths';
	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>Politique de confidentialité • Agency</title>
	<meta name="robots" content="noindex" />
	<meta
		name="description"
		content="Politique de confidentialité et traitement des données personnelles d'Agency."
	/>
	<link rel="canonical" href={`${base}/privacy-policy`} />
	<meta property="og:title" content="Politique de confidentialité • Agency" />
	<meta
		property="og:description"
		content="Comment nous collectons, utilisons et protégeons vos données personnelles."
	/>
</svelte:head>

<section class="container mx-auto px-8 xl:px-16 py-24 text-white bg-blue-900">
	<header class="mb-10">
		<h1 class="text-3xl md:text-4xl font-bold tracking-tight">Politique de confidentialité</h1>
		<p class="mt-2 text-gray-400">Dernière mise à jour: {year}</p>
	</header>

	<div class="grid gap-8 md:grid-cols-2">
		<article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 md:col-span-2">
			<h2 class="text-xl font-semibold mb-3">Introduction</h2>
			<p class="text-gray-300 leading-relaxed">
				Cette politique explique comment <strong>Agency</strong> collecte, utilise et protège vos données
				personnelles lorsque vous utilisez notre site et nos services. Nous appliquons les exigences
				du RGPD et ne collectons que les données nécessaires.
			</p>
		</article>

		<article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
			<h2 class="text-xl font-semibold mb-3">Responsable du traitement</h2>
			<p class="text-gray-300 leading-relaxed">
				Agency — 123 Rue de l'Innovation, 75000 Paris, France<br />
				Email: contact@agency.com
			</p>
		</article>

		<article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
			<h2 class="text-xl font-semibold mb-3">Données collectées</h2>
			<ul class="text-gray-300 leading-relaxed list-disc pl-5 space-y-1">
				<li>Données de contact (nom, email) lorsque vous nous écrivez.</li>
				<li>Données d’usage anonymisées (pages vues, événements) à des fins statistiques.</li>
				<li>
					Données techniques (adresse IP tronquée, type de navigateur) pour la sécurité et le
					diagnostic.
				</li>
			</ul>
		</article>

		<article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
			<h2 class="text-xl font-semibold mb-3">Finalités & bases légales</h2>
			<ul class="text-gray-300 leading-relaxed list-disc pl-5 space-y-1">
				<li>Répondre à vos demandes — <em>intérêt légitime / exécution précontractuelle</em>.</li>
				<li>Mesure d’audience et amélioration du site — <em>intérêt légitime</em>.</li>
				<li>Sécurité du service — <em>intérêt légitime</em>.</li>
			</ul>
		</article>

		<article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
			<h2 class="text-xl font-semibold mb-3">Durée de conservation</h2>
			<p class="text-gray-300 leading-relaxed">
				Nous conservons vos données uniquement le temps nécessaire aux finalités décrites ci-dessus
				et conformément aux exigences légales (ex. logs techniques ≤ 12 mois, échanges commerciaux ≤
				3 ans sans interaction).
			</p>
		</article>

		<article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
			<h2 class="text-xl font-semibold mb-3">Partage & sous-traitance</h2>
			<p class="text-gray-300 leading-relaxed">
				Nous ne vendons pas vos données. Nous pouvons faire appel à des prestataires de confiance
				(hébergement, analytics) qui agissent selon nos instructions et offrent des garanties de
				sécurité adéquates.
			</p>
		</article>

		<article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
			<h2 class="text-xl font-semibold mb-3">Transferts hors UE</h2>
			<p class="text-gray-300 leading-relaxed">
				Si certains prestataires sont situés hors UE, des garanties appropriées sont mises en place
				(clauses contractuelles types de la Commission européenne, pays adéquats, etc.).
			</p>
		</article>

		<article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
			<h2 class="text-xl font-semibold mb-3">Sécurité</h2>
			<p class="text-gray-300 leading-relaxed">
				Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour
				protéger vos données (chiffrement en transit, contrôle d’accès, journaux de sécurité).
			</p>
		</article>

		<article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
			<h2 class="text-xl font-semibold mb-3">Vos droits</h2>
			<ul class="text-gray-300 leading-relaxed list-disc pl-5 space-y-1">
				<li>Accès, rectification, effacement.</li>
				<li>Limitation et opposition au traitement.</li>
				<li>Portabilité des données.</li>
				<li>Réclamation auprès de la CNIL si nécessaire.</li>
			</ul>
			<p class="text-gray-300 leading-relaxed mt-2">
				Pour exercer vos droits: contact@agency.com. Une preuve d’identité peut être demandée.
			</p>
		</article>

		<article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 md:col-span-2">
			<h2 class="text-xl font-semibold mb-3">Cookies & mesures d’audience</h2>
			<p class="text-gray-300 leading-relaxed">
				Nous utilisons des cookies strictement nécessaires au fonctionnement du site et, le cas
				échéant, des cookies de mesure d’audience anonymisés. Vous pouvez paramétrer votre
				navigateur pour les désactiver ou les supprimer. Si un bandeau de consentement est affiché,
				vos préférences seront respectées.
			</p>
		</article>

		<article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 md:col-span-2">
			<h2 class="text-xl font-semibold mb-3">Contact</h2>
			<p class="text-gray-300 leading-relaxed">
				Pour toute question relative à cette politique: contact@agency.com
			</p>
		</article>
	</div>
</section>

<style>
	h1,
	h2 {
		font-family: 'Montserrat', sans-serif;
	}
	p,
	li {
		font-family: 'Manrope', sans-serif;
	}
	/* Amélioration de la lisibilité sur fond sombre */
	article {
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
	}
	@media (prefers-reduced-motion: no-preference) {
		article {
			transition:
				transform 200ms ease,
				background-color 200ms ease;
		}
		article:hover {
			transform: translateY(-2px);
			background-color: rgba(255, 255, 255, 0.06);
		}
	}
	/* Large screens padding harmony */
	@media (min-width: 1280px) {
		section {
			padding-top: 5rem;
			padding-bottom: 5rem;
		}
	}
	/* Focus styles */
	a:focus-visible,
	button:focus-visible {
		outline: 2px solid rgba(255, 255, 255, 0.6);
		outline-offset: 2px;
		border-radius: 0.5rem;
	}
	/* Visually hidden, if needed later */
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
