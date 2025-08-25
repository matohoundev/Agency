import { onMount, onDestroy } from 'svelte';
import { 
	animationController, 
	predefinedAnimations, 
	initSectionAnimations,
	cleanupAnimations,
	type AnimationConfig,
	type TimelineConfig
} from './gsapTimeline';

// Hook pour utiliser les animations GSAP dans les composants Svelte
export function useGSAPAnimations() {
	let cleanup: (() => void)[] = [];

	// Fonction pour ajouter une animation
	function addAnimation(config: AnimationConfig) {
		const animation = animationController.createAnimation(config);
		cleanup.push(() => animation.kill());
		return animation;
	}

	// Fonction pour ajouter une timeline
	function addTimeline(config: TimelineConfig) {
		const timeline = animationController.createTimeline(config);
		cleanup.push(() => timeline.kill());
		return timeline;
	}

	// Fonction pour initialiser une section prédéfinie
	function initSection(sectionName: string) {
		initSectionAnimations(sectionName);
	}

	// Nettoyage automatique au démontage du composant
	onDestroy(() => {
		cleanup.forEach(fn => fn());
		cleanup = [];
	});

	return {
		addAnimation,
		addTimeline,
		initSection,
		predefined: predefinedAnimations
	};
}

// Hook spécialisé pour les animations de scroll
export function useScrollAnimations() {
	const { addAnimation } = useGSAPAnimations();

	function addScrollAnimation(config: AnimationConfig) {
		return addAnimation({
			...config,
			trigger: config.trigger || config.target
		});
	}

	return {
		addScrollAnimation,
		predefined: predefinedAnimations
	};
}

// Hook pour les animations d'entrée de page
export function usePageEntryAnimations() {
	const { addAnimation } = useGSAPAnimations();

	onMount(() => {
		// Refresh ScrollTrigger après le montage
		animationController.refresh();
	});

	function animateIn(elements: string | string[], stagger: number = 0.1) {
		const targets = Array.isArray(elements) ? elements : [elements];
		
		targets.forEach((target, index) => {
			addAnimation({
				target,
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power2.out',
				delay: index * stagger
			});
		});
	}

	return {
		animateIn,
		addAnimation
	};
}
