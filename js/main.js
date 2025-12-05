gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    // Hero Animation
    const heroTl = gsap.timeline();

    heroTl.from('.hero-bg video', {
        scale: 1.2,
        duration: 2,
        ease: 'power2.out'
    })
        .from('.hero-title .line', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power4.out'
        }, '-=1.5')
        .to('.hero-subtitle', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.5');

    // Hero Parallax
    gsap.to('.hero-bg video', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // About Animation
    const aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: 'top 70%',
            end: 'bottom bottom',
            toggleActions: 'play none none reverse'
        }
    });

    aboutTl.from('.about-text .section-label', {
        x: -50,
        opacity: 0,
        duration: 0.8
    })
        .from('.about-text h2', {
            y: 50,
            opacity: 0,
            duration: 0.8
        }, '-=0.6')
        .from('.about-text p', {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, '-=0.6')
        .from('.about-image', {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8');

    // Works Animation
    const worksTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#works',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    worksTl.from('.works-header', {
        y: 30,
        opacity: 0,
        duration: 0.8
    })
        .from('.work-item', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.4');

    // Contact Animation
    const contactTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        }
    });

    contactTl.from('.contact-content .section-label', {
        y: 20,
        opacity: 0,
        duration: 0.8
    })
        .from('.contact-content h2', {
            y: 50,
            opacity: 0,
            duration: 0.8
        }, '-=0.6')
        .from('.contact-btn', {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.4');

    // Cursor Follower (Simple)
    const cursor = document.querySelector('.cursor-follower');

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
        });
    }
});
