const scroll = new LocomotiveScroll({
  el: document.querySelector("section"),
  smooth: true
});

let Ani = gsap.timeline();

Ani.from("#logo,ul li", {
  y: -60,
  duration: 2,
  delay: 1,
  stagger: 0.2
});
Ani.from("#home__content h5", {
  opacity: 0,
  duration: 1
});
gsap.to("#home__page p", {
  y: 30,
  duration: 1,
  repeat: -1,
  yoyo: true
});
