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

export const detailAnimations = {
	init() {
		const tl = gsap.timeline();

		tl.from('.detail-card-1', {
			x: 200
		})
			.to('.detail-card-1', {
				scrollTrigger: {
					trigger: '.Detail',
					end: '100px',
					scrub: true
				},
				x: 0,
				duration: 2,
				ease: 'power2.out'
			})
			.from('.detail-card-2', {
				x: -200
			})
			.to(
				'.detail-card-2',
				{
					scrollTrigger: {
						trigger: '.Detail',
						end: '400px',
						scrub: true
					},
					x: 0,
					duration: 1,
					ease: 'power2.out'
				},
				'-=1'
			)
			.from('.detail-card-3', {
				x: 200
			})
			.to(
				'.detail-card-3',
				{
					scrollTrigger: {
						trigger: '.Detail',
						end: '500px',
						scrub: true
					},
					x: 0,
					duration: 1,
					ease: 'power2.out'
				},
				'-=1'
			)
			.from('.detail-card-4', {
				x: -200
			})
			.to(
				'.detail-card-4',
				{
					scrollTrigger: {
						trigger: '.Detail',
						end: '600px',
						scrub: true
					},
					x: 0,
					duration: 1,
					ease: 'power2.out'
				},
				'-=1'
			);

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

export const splineBackgroundAnimations = {
	init() {
		// Un seul ScrollTrigger qui pilote la timeline pour garantir une interpolation fluide
		const tl = gsap.timeline({ defaults: { ease: 'ease.out' } });

		// Phase 1: dé-zoom progressif quand on traverse About
		tl.to('.spline', { scaleX: 0.9, scaleY: 0.85 })
			// Phase 2: retour à l'échelle normale à l'approche de Projects
			.to('.spline', { scale: 1.01 }, '+=0.5');

		ScrollTrigger.create({
			animation: tl,
			trigger: '.About',
			start: 'top 80%',
			endTrigger: '.Projects',
			end: 'bottom 40%',
			scrub: 1,
			markers: true,
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
		.add(pricingAnimations.init())
		.add(detailAnimations.init());
}

// Fonction pour nettoyer les animations (utile pour la navigation)
export function cleanupAnimations() {
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	masterTimeline.clear();
}
