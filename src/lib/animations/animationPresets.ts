// Exemples d'utilisation avancée des animations GSAP centralisées

import { animationController, type TimelineConfig, type AnimationConfig } from './gsapTimeline';

// Exemple 1: Timeline complexe pour l'animation d'entrée d'une section
export function createHeroTimeline() {
	const heroTimeline: TimelineConfig = {
		animations: [
			{
				target: '.hero-title',
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: 'power3.out'
			},
			{
				target: '.hero-subtitle',
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power2.out',
				delay: 0.3
			},
			{
				target: '.hero-cta',
				opacity: 1,
				scale: 1,
				duration: 0.8,
				ease: 'back.out(1.7)',
				delay: 0.5
			}
		],
		masterTrigger: '.hero-section',
		onComplete: () => console.log('Hero animation terminée'),
		onStart: () => console.log('Hero animation commencée')
	};

	return animationController.createTimeline(heroTimeline);
}

// Exemple 2: Animation séquentielle pour une galerie
export function createGallerySequence(items: string[]) {
	const animations: AnimationConfig[] = items.map((item, index) => ({
		target: item,
		opacity: 1,
		y: 0,
		scale: 1,
		duration: 0.6,
		ease: 'power2.out',
		delay: index * 0.15 // Décalage progressif
	}));

	const galleryTimeline: TimelineConfig = {
		animations,
		masterTrigger: '.gallery-section'
	};

	return animationController.createTimeline(galleryTimeline);
}

// Exemple 3: Animation parallèle pour plusieurs éléments
export function createParallaxEffect() {
	const parallaxAnimations = [
		{
			target: '.parallax-bg',
			y: -50,
			ease: 'none',
			trigger: '.parallax-section',
			start: 'top bottom',
			end: 'bottom top',
			scrub: true
		},
		{
			target: '.parallax-content',
			y: 50,
			ease: 'none',
			trigger: '.parallax-section',
			start: 'top bottom',
			end: 'bottom top',
			scrub: true
		}
	];

	return parallaxAnimations.map(config => 
		animationController.createAnimation(config)
	);
}

// Exemple 4: Animation de révélation de texte
export function createTextReveal(textElement: string) {
	return animationController.createAnimation({
		target: textElement,
		opacity: 1,
		clipPath: 'inset(0% 0% 0% 0%)',
		duration: 1.5,
		ease: 'power4.out',
		trigger: textElement,
		start: 'top 80%'
	});
}

// Preset d'animations communes
export const animationPresets = {
	// Animation fade in with slide up
	fadeInUp: (target: string, delay: number = 0): AnimationConfig => ({
		target,
		opacity: 1,
		y: 0,
		duration: 1,
		ease: 'power2.out',
		delay,
		trigger: target,
		start: 'top 85%'
	}),

	// Animation de rotation avec scale
	rotateScale: (target: string): AnimationConfig => ({
		target,
		rotation: 360,
		scale: 1.1,
		duration: 2,
		ease: 'power2.inOut',
		trigger: target
	}),

	// Animation de typing effect
	typeWriter: (target: string): AnimationConfig => ({
		target,
		width: '100%',
		duration: 2,
		ease: 'power2.inOut',
		trigger: target
	}),

	// Animation morphing
	morphShape: (target: string): AnimationConfig => ({
		target,
		borderRadius: '50%',
		scale: 1.2,
		duration: 1.5,
		ease: 'elastic.out(1, 0.5)',
		trigger: target
	})
};

// Fonction utilitaire pour créer des animations responsives
export function createResponsiveAnimation(
	config: AnimationConfig,
	breakpoint: number = 768
): AnimationConfig {
	const isMobile = window.innerWidth < breakpoint;
	
	return {
		...config,
		duration: isMobile ? config.duration! * 0.7 : config.duration,
		y: isMobile ? (config.y || 0) * 0.5 : config.y,
		x: isMobile ? (config.x || 0) * 0.5 : config.x
	};
}
