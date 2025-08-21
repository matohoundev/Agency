
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Timeline principale pour orchestrer toutes les animations
export const masterTimeline = gsap.timeline();

// Animations spécifiques pour chaque section

export const homeAnimations = {
  init() {
    const tl = gsap.timeline();
    
    tl.from('.title', {
      opacity: 0,
      y: 50,
      duration: 1,
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
        end: 'bottom 20%',
        scrub: true
      },
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power2.out'
    })
    .from('.about-content', {
      scrollTrigger: {
        trigger: '.About',
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: true
      },
      opacity: 0,
      x: 100,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.5');
    
    return tl;
  }
};

export const detailAnimations = {
  init() {
    const tl = gsap.timeline();
    
    tl.to('.detail-card-1', {
      scrollTrigger: {
        trigger: '.Detail',
        end: '100px',
        markers: true,
        scrub: true
      },
      x: 0,
      duration: 2,
      ease: 'back.inOut'
    })
    .to('.detail-card-2', {
      scrollTrigger: {
        trigger: '.Detail',
        end: '300px',
        scrub: true
      },
      x: 0,
      duration: 2,
      ease: 'back.inOut'
    }, '-=1');
    
    return tl;
  }
};

export const pricingAnimations = {
  init() {
    const tl = gsap.timeline();
    
    tl.from('.pricing-title', {
      scrollTrigger: {
        trigger: '.Pricing',
        start: 'top 80%',
        scrub: true
      },
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'back.out(1.7)'
    })
    .from('.BoxPricing', {
      scrollTrigger: {
        trigger: '.Pricing',
        start: 'top 60%',
        scrub: true
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2
    }, '-=0.5');
    
    return tl;
  }
};

// Fonction pour initialiser toutes les animations
export function initAllAnimations() {
  masterTimeline
    // .add(homeAnimations.init())
    // .add(aboutAnimations.init())
    .add(detailAnimations.init())
    // .add(pricingAnimations.init())
    // Ajoutez d'autres animations ici
}

// Fonction pour nettoyer les animations (utile pour la navigation)
export function cleanupAnimations() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  masterTimeline.kill();
}
