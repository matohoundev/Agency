import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Timeline principale pour orchestrer toutes les animations
export const masterTimeline = gsap.timeline();

// Animations spécifiques pour chaque section

export const homeAnimations = {
	init() {
		const tl = gsap.timeline();

		tl.to('.title-effect', {
			opacity: 1,
			x: 4,
			y: 2.5,
			position: 'absolute',
			duration: 1.2,
			ease: 'power2.out'
		});

		return tl;
	}
};

export const aboutAnimations = {
	init() {
		const tl = gsap.timeline();

		tl.from('.about-title', {
			scrollTrigger: {
				trigger: '.About',
				start: 'top 80%',
				end: 'bottom 40%',
				scrub: true
			},
			opacity: 0.3,
			y: 100,
			duration: 1,
			ease: 'power2.out'
		}).from(
			'.about-content',
			{
				scrollTrigger: {
					trigger: '.About',
					start: 'top 70%',
					end: 'bottom 70%',
					scrub: true
				},
				opacity: 0,
				x: 100,
				duration: 1,
				ease: 'power2.out'
			},
			'-=0.5'
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
					markers: true,
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
			);

		return tl;
	}
};

export const pricingAnimations = {
	init() {
		const tl = gsap.timeline();

		tl.from('.BoxPricing-purple', {
			rotate: -10,
			x: -150
		})
			.to('.BoxPricing-purple', {
				scrollTrigger: {
					trigger: '.Pricing',
					markers: true,
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
						trigger: '.Pricing',
						markers: true,
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

// export const pricingAnimations = {
// 	init() {
// 		const tl = gsap.timeline();

// 		tl.from('.bg-opacity', {
// 			scrollTrigger: {
// 				trigger: '.Pricing',
// 				markers: true,
// 				end: 'bottom 90%',
// 				scrub: true
// 			},
// 			y: -5000,
// 			duration: 2,
// 			ease: 'power2.out'
// 		}).to('.BoxPricing-pink', {
// 			scrollTrigger: {
// 				trigger: '.Pricing',
// 				markers: true,
// 				end: '100px',
// 				scrub: true
// 			},
// 			rotate: 0,
// 			x: 0,
// 			duration: 1,
// 			ease: 'power2.out'
// 		});

// 		return tl;
// 	}
// };

// Fonction pour initialiser toutes les animations
export function initAllAnimations() {
	masterTimeline
		// .add(homeAnimations.init())
		.add(aboutAnimations.init())
		.add(detailAnimations.init());
	// Ajoutez d'autres animations ici
}

// Fonction pour nettoyer les animations (utile pour la navigation)
export function cleanupAnimations() {
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	masterTimeline.kill();
}
