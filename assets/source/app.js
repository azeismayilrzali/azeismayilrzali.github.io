document.addEventListener("DOMContentLoaded", function () {
    const image = Array.from(document.querySelectorAll("img"));

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) =>
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;

                    observer.unobserve(img)
                }
            }));
        image.forEach(img => observer.observe(img))
    }
});



Splitting();
AOS.init({
    startEvent: 'load',
});


function openNav2(params) {
    gsap.to(".sidenav", 0.2, {
        right: 0,
        ease: Expo.linear,
    });
    gsap.to(".menu__item", 0.4, {
        y: "-50px",
        opacity: 1,
        delay: 0.8,
    });
}
function closeNav2(params) {
    gsap.to(".sidenav", 0.2, {
        right: "-105%",
        ease: Expo.linear,
    });
    gsap.to(".menu__item", 0.4, {
        y: 0,
        opacity: 0,
    });
}

var circle = gsap.timeline({
    repeat: -1,
})
circle
    .to("#bigCircle", 2, { rotate: 360 })
    .to("#smallCircle", 2, { rotate: 360 })

var line = gsap.timeline({
    repeat: -1,
    repeatDelay: 5,
});

line
    .fromTo("#circleLine", 1, { y: 30, ease: Elastic.easeOut }, { y: -10, ease: Elastic.easeOut },)
    .fromTo("#circleLine", 1, { y: -10, ease: Elastic.easeOut }, { y: 30, ease: Elastic.easeOut },)


var lastMachine = gsap.timeline({
    repeat: -1,
})

lastMachine
    .to("#secondMachine", 3, { x: -400, ease: Elastic.easeOut })
    .to("#secondMachine", 3, { x: 0, ease: Elastic.easeOut })

let secondMachine = document.getElementById("#secondMachine")
