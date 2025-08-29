export async function fetchProjects() {
    const res = await fetch('/data/projects.json');
    if (!res.ok) throw new Error('Erreur chargement projets');
    return await res.json();
}