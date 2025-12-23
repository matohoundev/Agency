import { base } from '$app/paths';

export async function fetchOffers() {
	const res = await fetch(`${base}/data/offers.json`);
	if (!res.ok) throw new Error('Erreur chargement offres');
	return await res.json();
}
