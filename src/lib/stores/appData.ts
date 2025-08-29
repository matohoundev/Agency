import { writable } from 'svelte/store';
import type { Project } from '$lib/types/project';
import type { Offer } from '$lib/types/offer';

export type AppData = {
  projects: Project[];
  offers: Offer[];
  isLoading: boolean;
  error: string | null;
};

const initial: AppData = {
  projects: [],
  offers: [],
  isLoading: true,
  error: null
};

export const appData = writable<AppData>(initial);

export function setAppLoading(isLoading: boolean) {
  appData.update((s) => ({ ...s, isLoading }));
}

export function setAppError(error: string | null) {
  appData.update((s) => ({ ...s, error }));
}

export function setAppData(data: { projects?: Project[]; offers?: Offer[] }) {
  appData.update((s) => ({
    ...s,
    projects: data.projects ?? s.projects,
    offers: data.offers ?? s.offers
  }));
}
