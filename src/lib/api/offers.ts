export async function fetchOffers() {
    const res = await fetch('/data/offers.json');
    if (!res.ok) throw new Error('Erreur chargement offres');
    return await res.json();
}