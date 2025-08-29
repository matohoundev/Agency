import { fetchProjects } from './projects';
import { fetchOffers } from './offers';

export async function fetchAllData() {
    const [projects, offers] = await Promise.all([
        fetchProjects(),
        fetchOffers()
    ]);
    return { projects, offers };
}