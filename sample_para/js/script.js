gsap.registerPlugin(ScrollTrigger);

let targets = gsap.utils.toArray(".sec_inner");

targets.forEach((target, i) => {
  ScrollTrigger.create({
    trigger: target,
    start: "top top",
    toggleClass: "is-active",
    pin: true,
   });
});


