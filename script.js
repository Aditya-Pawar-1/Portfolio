"use strict";

const arr = [
  "./assets/images/iPhone 13.png",
  "./assets/images/MacBook Pro 16.png",
  "./assets/images/iPad Mini.png",
  "./assets/images/iPhone 13 Pro.png",
];

const arr2 = [
  "./assets/images/Lost&Found.png",
  "./assets/images/HeavenHomes.png",
];

const page3ImageContainer = document.querySelector(".page3-image-container");
const page3ImageContainer1 = document.querySelector("#page3-image-container1");
const page3ImageContainer2 = document.querySelector("#page3-image-container2");

const page3ImageContainer1H4 = document.querySelector(
  "#page3-image-container1 h4"
);

const page3ImageContainer2H4 = document.querySelector(
  "#page3-image-container2 h4"
);

const page3ImageContainer1Img = document.querySelector(
  "#page3-image-container1 img"
);
const page3ImageContainer2Img = document.querySelector(
  "#page3-image-container2 img"
);

const linkedin = document.querySelectorAll(".linkedin");

const Home = document.querySelector("#Home-nav");
const Skills = document.querySelector("#Skills-nav");
const Projects = document.querySelector("#Projects-nav");
const page1video = document.querySelector("#video-container video");
const circle = document.querySelector(".clickCircle");
const circle1 = document.querySelector("#clickCircle1");
const circle2 = document.querySelector("#clickCircle2");
const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function sheryAnimation() {
  Shery.makeMagnet("#nav-mid h3", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}


Shery.textAnimate(".text-target", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

function page3ImageContainerAnimation1() {
  var imageIncrementer = 0;
  page3ImageContainer1.addEventListener("click", function () {
    page3ImageContainer1H4.style.opacity = 0;
    let tl = gsap.timeline();
    tl.set("#page3-image-container1 img", {
      attr: { src: arr[imageIncrementer] },
      ease: "0.25,0.1,0.25,1",
    });
    tl.to("#page3-image-container1 img", {
      opacity: 1,
    });
    //  page3ImageContainer1Img.setAttribute("src", arr[imageIncrementer]);
    imageIncrementer < 3 ? imageIncrementer++ : (imageIncrementer = 0);
  });

  page3ImageContainer1.addEventListener("mousemove", function (e) {
    gsap.to("#clickCircle1", {
      left: e.clientX - 150,
      top: e.clientY - 210,
    });
  });

  page3ImageContainer1.addEventListener("mouseenter", function (e) {
    gsap.to("#clickCircle1", {
      opacity: 1,
    });
  });

  page3ImageContainer1.addEventListener("mouseleave", function () {
    var tl = gsap.timeline();
    tl.to("#clickCircle1", {
      opacity: 0,
    });
    tl.to("#page3-image-container1 img", {
      opacity: 0,
      duration: 0.2,
    });

    tl.to("#page3-image-container1 h4", {
      duration: 0.2,
      ease: "0.25,0.1,0.25,1",
      opacity: 1,
    });
    //  page3ImageContainer1H4.style.display = "block";
    //  page3ImageContainer1Img.style.display = "none";
    //  page3ImageContainer1H4.style.opacity = 1;
    imageIncrementer = 0;
  });
}

function page3ImageContainerAnimation2() {
  var imageIncrementer = 0;
  page3ImageContainer2.addEventListener("click", function () {
    page3ImageContainer2H4.style.opacity = 0;
    let tl = gsap.timeline();
    tl.set("#page3-image-container2 img", {
      attr: { src: arr2[imageIncrementer] },
      ease: "0.25,0.1,0.25,1",
    });
    tl.to("#page3-image-container2 img", {
      opacity: 1,
    });
    //  page3ImageContainer1Img.setAttribute("src", arr[imageIncrementer]);
    imageIncrementer < 1 ? imageIncrementer++ : (imageIncrementer = 0);
  });

  page3ImageContainer2.addEventListener("mousemove", function (e) {
    gsap.to("#clickCircle2", {
      left: e.clientX - 700,
      top: e.clientY - 150,
    });
  });

  page3ImageContainer2.addEventListener("mouseenter", function (e) {
    gsap.to("#clickCircle2", {
      opacity: 1,
    });
  });

  page3ImageContainer2.addEventListener("mouseleave", function () {
    var tl = gsap.timeline();
    tl.to("#clickCircle2", {
      opacity: 0,
    });
    tl.to("#page3-image-container2 img", {
      opacity: 0,
      duration: 0.2,
    });

    tl.to("#page3-image-container2 h4", {
      duration: 0.2,
      ease: "0.25,0.1,0.25,1",
      opacity: 1,
    });
    //  page3ImageContainer2H4.style.display = "block";
    //  page3ImageContainer2Img.style.display = "none";
    //  page3ImageContainer2H4.style.opacity = 1;
    imageIncrementer = 0;
  });
}

function page1videoAnimation() {
  page1video.addEventListener("mouseenter", function () {
    gsap.to("#video-container video", {
      scale: 1.2,
      duration: 0.1,
      ease: "0.25,0.1,0.25,1",
    });
  });
  page1video.addEventListener("mouseleave", function () {
    gsap.to("#video-container video", {
      scale: 1,
      duration: 0.1,
      ease: "0.25,0.1,0.25,1",
    });
  });
}

function arrowAnimation() {
  document.querySelector("#arrow1").addEventListener("mouseenter", function () {
    gsap.to("#arrow1", {
      rotate: 50,
      duration: 0.5,
    });
  });
  document.querySelector("#arrow1").addEventListener("mouseleave", function () {
    gsap.to("#arrow1", {
      rotate: 0,
      duration: 0.5,
    });
  });

  document.querySelector("#arrow2").addEventListener("mouseenter", function () {
    gsap.to("#arrow2", {
      rotate: 50,
      duration: 0.5,
    });
  });
  document.querySelector("#arrow2").addEventListener("mouseleave", function () {
    gsap.to("#arrow2", {
      rotate: 0,
      duration: 0.5,
    });
  });
}

function openLinedin() {
  linkedin.forEach((element) => {
    element.addEventListener("click", function () {
      window.open("https://www.linkedin.com/in/aditya-pawar-dev", "_blank");
    });
  });
}

function footerMail() {
  document
    .querySelector("#footer-part1")
    .addEventListener("click", function () {});
}

function allpagesAnimation() {
  gsap.from("#page2 #page2-svg-container .skill-block", {
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2 ",
      scroller: "main",
      start: "top 30%",
      end: "top 5%",
      scrub: 4,
    },
  });

  gsap.from("#page3-image-container1", {
    x: -1000,
    scrollTrigger: {
      trigger: "#page3-image-container1 ",
      scroller: "main",
      start: "-10% 35%",
      end: "10% 30%",
      scrub: 2,
    },
  });

  if (window.outerWidth > 1024) {
    gsap.from("#arrow1", {
      x: 1000,
      scrollTrigger: {
        trigger: "#arrow1",
        scroller: "main",
        start: "10% 100%",
        end: "55% 80%",
        scrub: 2,
      },
    });
    gsap.from("#page3 #arrow2", {
      x: -1000,
      duration: 0.3,
      scrollTrigger: {
        trigger: "#page3 arrow2",
        scroller: "main",
        start: "310% 15%",
        end: "320% 18%",
        scrub: 3,
      },
    });
  }

  gsap.from("#page3 #page3-image-container2", {
    x: 1000,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page3 #page3-image-container2",
      scroller: "main",
      start: "-15% 15%",
      end: "-5% 15%",
      scrub: 3,
    },
  });
}

locomotiveAnimation();
sheryAnimation();
page3ImageContainerAnimation1();
page3ImageContainerAnimation2();
page1videoAnimation();
arrowAnimation();
openLinedin();
allpagesAnimation();
navAnimation();
