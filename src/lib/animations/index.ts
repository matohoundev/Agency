// Point d'entrée principal pour toutes les animations GSAP
export * from './gsapTimeline';
export * from './useGSAP';
export * from './animationPresets';
export * from './pageAnimations';
export * from './globalAnimations';

// Réexport des éléments les plus utilisés
export { 
	animationController, 
	predefinedAnimations,
	initSectionAnimations,
	cleanupAnimations 
} from './gsapTimeline';

export { 
	useGSAPAnimations, 
	useScrollAnimations, 
	usePageEntryAnimations 
} from './useGSAP';

export { 
	createHeroTimeline,
	createGallerySequence,
	animationPresets 
} from './animationPresets';

export {
	PageAnimationManager,
	usePageAnimations
} from './pageAnimations';

export {
	GlobalAnimationManager,
	useGlobalAnimations
} from './globalAnimations';
