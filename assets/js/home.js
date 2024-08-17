import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// header links animate
const navLinks = document.querySelectorAll(".nav-link");
gsap.to(navLinks, {
  opacity: 1,
  duration: 0.25,
  stagger: 0.25,
});

// banner section animate
const bannerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner", // 触发动画的元素
  },
  defaults: {
    duration: 0.5,
  },
});

bannerTimeline
  .from(".banner__image", {
    opacity: 0,
  })
  .from(".banner__title", {
    opacity: 0,
  })
  .from(".banner__secTitle", {
    opacity: 0,
  });

// intro section animate

const introTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro", // 触发动画的元素
    start: "top 50%",
  },
  defaults: {
    duration: 0.25,
  },
});

introTimeline
  .from(".intro__text", {
    opacity: 0,
    y: 200,
  })
  .from("[data-intro-img-1]", {
    opacity: 0,
    y: 200,
  })
  .from("[data-intro-img-2]", {
    opacity: 0,
    y: 200,
  })
  .from("[data-intro-img-3]", {
    opacity: 0,
    y: 200,
  });

// about

const aboutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".about", // 触发动画的元素
    start: "top 75%",
  },
  defaults: {
    duration: 0.5,
    ease: "bounce.out",
  },
});

aboutTimeline
  .from("[data-about-card-1]", {
    opacity: 0,
    y: -100,
  })
  .from("[data-about-card-2]", {
    opacity: 0,
    y: -100,
  })
  .from(
    "[data-about-card-3]",
    {
      opacity: 0,
      y: -100,
    },
    "-=0.25"
  )
  .from(
    "[data-about-card-4]",
    {
      opacity: 0,
      y: -100,
    },
    "-=0.25"
  )
  .from("[data-about-title]", {
    opacity: 0,
    y: -100,
  })
  .from("[data-about-text]", {
    opacity: 0,
    y: -100,
  });

// contact section animate

const contactTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact", // 触发动画的元素
    start: "top 75%",
  },
  defaults: {
    duration: 0.5,
    ease: "elastic.out",
  },
});

contactTimeline
  .from("[data-contact-title]", {
    x: "-50%",
  })
  .from("[data-contact-link]", {
    y: "-100%",
    opacity: 0,
  });

// projct section

const projectTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".project", // 触发动画的元素
    start: "top 75%",
  },
  defaults: {
    duration: 0.5,
    ease: "bounce.out",
  },
});

projectTimeline
  .from("[data-project-title]", {
    opacity: 0,
    y: "-100%",
  })
  .from("[data-project-img-1]", {
    opacity: 0,
    y: "-100%",
  })
  .from("[data-project-img-2]", {
    opacity: 0,
    y: "-100%",
  })
  .from("[data-project-img-3]", {
    opacity: 0,
    y: "-100%",
  })
  .from("[data-project-img-4]", {
    opacity: 0,
    y: "-100%",
  })
  .from("[data-project-img-5]", {
    opacity: 0,
    y: "-100%",
  });
