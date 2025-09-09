<script lang="ts">
    import '../app.css';
    import Nav from '$lib/sections/nav.svelte';
    import Footer from '$lib/sections/Footer.svelte';
    import Background3d from '$lib/components/Background3d.svelte';
    import { onMount } from 'svelte';
    import { fetchAllData } from '$lib/api/fetchAllData';
    import { initAllAnimations, cleanupAnimations } from '$lib/animations/gsapTimeline';
    import { setAppData, setAppError, setAppLoading } from '$lib/stores/appData';
	import { afterNavigate } from '$app/navigation';

    let { children } = $props();

    onMount(() => {
        let cancelled = false;
        (async () => {
            try {
                const data = await fetchAllData();
                if (!cancelled) {
                    // Maj du store global
                    setAppData(data);
                    setAppLoading(false);
                    initAllAnimations();
                }
            } catch (err) {
                if (!cancelled) {
                    const message = err instanceof Error ? err.message : String(err);
                    setAppError(message);
                    setAppLoading(false);
                }
            }
        })();
        return () => {
            cancelled = true;
            cleanupAnimations();
        };
    });

    // a voir si ça fonctionne bien je garde ça pour l'instant
    afterNavigate(() => {
        cleanupAnimations();
        initAllAnimations();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
</script>

<Nav />

<main class="relative z-5 overflow-hidden">
     {@render children()}
</main>

<Footer />

<Background3d />
