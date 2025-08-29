<script lang="ts">
  const year = new Date().getFullYear();
</script>

<svelte:head>
  <title>Mentions légales • Agency</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="container mx-auto px-8 xl:px-16 py-24 text-white bg-blue-900">
  <header class="mb-10">
    <h1 class="text-3xl md:text-4xl font-bold tracking-tight">Mentions légales</h1>
    <p class="mt-2 text-gray-400">Dernière mise à jour: {year}</p>
  </header>

  <div class="grid gap-8 md:grid-cols-2">
    <article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
      <h2 class="text-xl font-semibold mb-3">Éditeur du site</h2>
      <p class="text-gray-300 leading-relaxed">
        Agency<br />
        123 Rue de l'Innovation, 75000 Paris, France<br />
        SIREN: 000 000 000<br />
        Email: contact@agency.com
      </p>
    </article>

    <article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
      <h2 class="text-xl font-semibold mb-3">Hébergement</h2>
      <p class="text-gray-300 leading-relaxed">
        Hébergeur: Vercel Inc.<br />
        440 N Barranca Ave #4133, Covina, CA 91723, États‑Unis
      </p>
    </article>

    <article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
      <h2 class="text-xl font-semibold mb-3">Propriété intellectuelle</h2>
      <p class="text-gray-300 leading-relaxed">
        Le contenu de ce site (textes, images, logos, vidéos, code) est protégé par le droit de la propriété
        intellectuelle. Toute reproduction ou réutilisation sans autorisation est interdite.
      </p>
    </article>

    <article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
      <h2 class="text-xl font-semibold mb-3">Données personnelles</h2>
      <p class="text-gray-300 leading-relaxed">
        Ce site collecte des données minimales (formulaire de contact, analytics anonymisés). Vous pouvez demander
        l'accès, la rectification ou la suppression de vos données à tout moment via l'adresse email indiquée.
      </p>
    </article>

    <article class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 md:col-span-2">
      <h2 class="text-xl font-semibold mb-3">Cookies</h2>
      <p class="text-gray-300 leading-relaxed">
        Nous utilisons des cookies strictement nécessaires au fonctionnement du site et des cookies de mesure
        d'audience anonymisés. Vous pouvez les désactiver via les paramètres de votre navigateur.
      </p>
    </article>
  </div>
</section>

<style>
  h1, h2 {
    font-family: 'Montserrat', sans-serif;
  }
  p {
    font-family: 'Manrope', sans-serif;
  }
</style>
