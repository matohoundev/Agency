import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Timeline principale pour orchestrer toutes les animations
export const masterTimeline = gsap.timeline();

// Animations spécifiques pour chaque section

export const homeAnimations = {
	init() {
		const tl = gsap.timeline();

		tl.to('.header', {
			opacity: 1,
			scale: 1,
			duration: 1,
			ease: 'ease.out'
		})
			.to(
				'.hero-title-section',
				{
					opacity: 1,
					scale: 1,
					duration: 0.8,
					ease: 'ease.InOut'
				},
				'1'
			)
			.to('.buttonEffect', {
				opacity: 1,
				duration: 0.5,
				ease: 'ease.out'
			})
			.to(
				'.button-base',
				{
					x: 0,
					y: 0,
					duration: 0.5,
					ease: 'ease.out'
				},
				'2.5'
			);

		// Animation des éléments "objectif desktop/mobile" entre About et Footer
		gsap
			.timeline({
				scrollTrigger: {
					trigger: '.About',
					start: 'top center',
					endTrigger: '.Footer',
					end: 'bottom bottom',
					scrub: true
					// markers: true
				}
			})
			.to('.logo-dark, .bg-desktop-dark, .bubble-dark, .bg-mobile-dark', {
				opacity: 1,
				duration: 0.5
			})
			.to(
				'.logo-dark, .bg-desktop-dark, .bubble-dark, .bg-mobile-dark',
				{
					opacity: 0,
					duration: 0.5
				},
				'>'
			);

		return tl;
	}
};

export const aboutAnimations = {
	init() {
		const tl = gsap.timeline();

		tl.fromTo(
			'.about-title',
			{
				opacity: 0,
				y: 100
			},
			{
				scrollTrigger: {
					trigger: '.About',
					start: 'top 80%',
					end: 'bottom 40%',
					scrub: true
				},
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power2.out'
			}
		).fromTo(
			'.about-content',
			{
				opacity: 0,
				x: 100
			},
			{
				scrollTrigger: {
					trigger: '.About',
					start: 'top 70%',
					end: 'bottom 70%',
					scrub: true
				},
				opacity: 1,
				x: 0,
				duration: 1,
				ease: 'power2.out',
				delay: 0.5
			}
		);

		return tl;
	}
};

export const projectAnimations = {
	init() {
		const tl = gsap.timeline();

		tl.to('.Projects', {
			scrollTrigger: {
				trigger: '.Projects',
				end: '-350px',
				scrub: 1
			},
			scale: 1,
			y: 0
		});

		return tl;
	}
};

export const detailAnimations = {
	init() {
		const tl = gsap.timeline();

		// Animation du titre et sous-titre de la section
		gsap.fromTo(
			'.detail-title-content',
			{
				opacity: 0,
				y: 50
			},
			{
				scrollTrigger: {
					trigger: '.Detail-head',
					start: 'top 80%'
				},
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power2.out'
			}
		);

		gsap.fromTo(
			'.detail-subtitle',
			{
				opacity: 0,
				y: 30
			},
			{
				scrollTrigger: {
					trigger: '.Detail-head',
					start: 'top 75%'
				},
				opacity: 1,
				y: 0,
				duration: 0.6,
				delay: 0.2,
				ease: 'power2.out'
			}
		);

		// Animation pour chaque carte individuellement
		for (let i = 1; i <= 4; i++) {
			const card = `.detail-card-${i}`;
			// Ajustement pour que la carte 4 démarre plus tôt
			const startOffset = i === 4 ? '90%' : '85%';

			// Animation du conteneur de carte
			gsap.fromTo(
				card,
				{
					opacity: 0,
					y: 100,
					scale: 0.9
				},
				{
					scrollTrigger: {
						trigger: card,
						start: `top ${startOffset}`
					},
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.8,
					ease: 'power2.out'
				}
			);

			// Animation de l'image avec effet de zoom
			gsap.fromTo(
				`${card} img`,
				{
					opacity: 0,
					scale: 1.2,
					rotation: i % 2 === 0 ? 5 : -5
				},
				{
					scrollTrigger: {
						trigger: card,
						start: `top ${startOffset}`
					},
					opacity: 1,
					scale: 1,
					rotation: 0,
					duration: 1,
					delay: 0.2,
					ease: 'power2.out'
				}
			);

			// Animation du titre de la carte
			const titleClass = i % 2 === 0 ? '.detail-card-title-return' : '.detail-card-title';
			gsap.fromTo(
				`${card} ${titleClass}`,
				{
					opacity: 0,
					x: i % 2 === 0 ? -50 : 50,
					rotation: i % 2 === 0 ? -10 : 10
				},
				{
					scrollTrigger: {
						trigger: card,
						start: `top ${startOffset}`
					},
					opacity: 1,
					x: 0,
					rotation: 0,
					duration: 0.8,
					delay: 0.1,
					ease: 'back.out(1.2)'
				}
			);

			// Animation du highlight
			gsap.fromTo(
				`${card} .detail-highlight`,
				{
					opacity: 0,
					y: 30
				},
				{
					scrollTrigger: {
						trigger: card,
						start: `top ${startOffset}`
					},
					opacity: 1,
					y: 0,
					duration: 0.6,
					delay: 0.4,
					ease: 'power2.out'
				}
			);

			// Animation des features une par une
			gsap.fromTo(
				`${card} .detail-features p`,
				{
					opacity: 0,
					x: i % 2 === 0 ? 30 : -30
				},
				{
					scrollTrigger: {
						trigger: card,
						start: `top ${startOffset}`
					},
					opacity: 1,
					x: 0,
					duration: 0.6,
					delay: 0.5,
					stagger: 0.1,
					ease: 'power2.out'
				}
			);
		}

		return tl;
	}
};

export const pricingAnimations = {
	init() {
		const tl = gsap.timeline();

		const isMobile = window.innerWidth < 768;

		tl.from('.BoxPricing-purple', {
			rotate: -10,
			x: -150
		})
			.to('.BoxPricing-purple', {
				scrollTrigger: {
					trigger: '.Pricing',
					// markers: true,
					end: '100px',
					scrub: true
				},
				rotate: 0,
				x: 0,
				duration: 1,
				ease: 'power2.out'
			})
			.from('.BoxPricing-pink', {
				rotate: 10,
				x: 150
			})
			.to(
				'.BoxPricing-pink',
				{
					scrollTrigger: {
						trigger: isMobile ? '.BoxPricing-pink' : '.Pricing',
						end: '100px',
						scrub: true
					},
					rotate: 0,
					x: 0,
					duration: 1,
					ease: 'power2.out'
				},
				'-=0.5'
			);

		return tl;
	}
};

export const splineBackgroundAnimations = {
	init() {
		// Un seul ScrollTrigger qui pilote la timeline pour garantir une interpolation fluide
		const tl = gsap.timeline({ defaults: { ease: 'ease.out' } });

		// Phase 1: dé-zoom progressif quand on traverse About
		tl.to('.splineBackground', { scaleX: 0.9, scaleY: 0.85 })
			// Phase 2: retour à l'échelle normale à l'approche de Projects
			.to('.splineBackground', { scale: 1.01 }, '+=1');

		ScrollTrigger.create({
			animation: tl,
			trigger: '.About',
			start: 'top 80%',
			endTrigger: '.Detail',
			end: 'bottom 10%',
			scrub: 1,
			// markers: true,
			invalidateOnRefresh: true
		});

		return tl;
	}
};

// Fonction pour initialiser toutes les animations
export function initAllAnimations() {
	// L'animation Home est lancée une seule fois indépendamment
	homeAnimations.init();

	masterTimeline
		.add(splineBackgroundAnimations.init())
		.add(aboutAnimations.init())
		.add(projectAnimations.init())
		.add(detailAnimations.init());
	// .add(pricingAnimations.init());
}

// Fonction pour nettoyer les animations (utile pour la navigation)
export function cleanupAnimations() {
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	masterTimeline.clear();
}
