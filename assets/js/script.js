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

    // const orderBtn = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '#header',
    //         start: '0 100%',
    //         toggleAction: 'restart pause reverse pause',
    //         scrub: true,
    //     }
    // });
    // orderBtn.from('#orderButton', { scale: 1, rotation: 0, y: 0 }).to('#orderButton', { scale: 0.5, rotation: 160, y: 140 });
});