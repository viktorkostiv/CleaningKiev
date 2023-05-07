window.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({
        ease: "none",
        duration: 2
    });



    const nav = gsap.timeline({
        scrollTrigger: {
            trigger: '#navBar',
            start: '60px 60px',
            toggleAction: 'restart pause reverse pause',
            scrub: true,
        }
    });
    nav.from("#navBar", {
        backgroundColor: 'rgba(255, 255, 255, 0)'
    }).to("#navBar", {
        backgroundColor: '#fff'
    });

    const plusesItems = document.querySelectorAll('.pluses_item');

    const plusesTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#header',
            start: '50px top',
            end: '50% top',
            toggleAction: 'restart pause reverse pause',
            scrub: true,
        },
    });

    plusesItems.forEach((item, index) => {
        plusesTimeline.from(item, {
            duration: 0.2,
            y: 100,
            delay: index * 0.005
        }).to(item, {
            y: 0,
        });
    });

    const orderBtn = gsap.timeline({
        scrollTrigger: {
            trigger: '#pluses',
            start: '0 100%',
            end: 'bottom bottom',
            toggleAction: 'restart pause reverse pause',
            scrub: true,
        }
    });

    orderBtn.from('#orderButton', {
        duration: 1,
        rotation: -15,
        y: 0
    }).to('#orderButton', {
        duration: 1,
        scale: 0.8,
        rotation: 60,
        y: 70,
    });

    const button = document.querySelector('#orderButton');
    button.addEventListener('mouseenter', function () {
        gsap.to(button, {
            scale: 1,
            ease: 'back.out(1.7)',
        });
    });

    button.addEventListener('mouseleave', function () {
        gsap.to(button, {
            scale: 0.8,
            ease: 'back.out(1.7)',
        });
    });
});
