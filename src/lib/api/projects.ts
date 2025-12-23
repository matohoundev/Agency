import { base } from '$app/paths';

export async function fetchProjects() {
	const res = await fetch(`${base}/data/projects.json`);
	if (!res.ok) throw new Error('Erreur chargement projets');
	return await res.json();
}
