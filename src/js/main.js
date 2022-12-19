import gsap from "gsap";
import all from "gsap/all";
import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});

gsap.to(".line-bg", {
  scrollTrigger: {
    trigger: ".line-bg",
    scrub: 0.1,
    start: "top+=400 bottom",
  },
  x: -735,
  duration: 5,
});
gsap.to(".square-bg", {
  scrollTrigger: {
    trigger: ".square-bg",
    start: "top+=200 bottom",
    scrub: 0.1,
  },
  x: 500,
  duration: 5,
});
gsap.to(".circle-bg", {
  scrollTrigger: {
    trigger: ".cricle-bg",
    start: "top+=800 bottom",
    scrub: 0.1,
  },
  x: -400,
  duration: 5,
});

var buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  var underline = button.querySelector(".underline");

  button.addEventListener("mousemove", () => {
    underline.classList.add("underlining");
  });

  button.addEventListener("mouseleave", () => {
    underline.classList.remove("underlining");
  });
});

var triggers = document.querySelectorAll(".trigger");

triggers.forEach((trigger) => {
  var coverSquare = trigger.querySelector(".cover-square");

  trigger.addEventListener("mousemove", () => {
    coverSquare.classList.add("coverSquareOn");
  });

  trigger.addEventListener("mouseleave", () => {
    coverSquare.classList.remove("coverSquareOn");
  });
});

var triggersContact = document.querySelectorAll(".triggerContact");

triggersContact.forEach((triggerContact) => {
  var hoverBackground = triggerContact.querySelector(".hover-bg");

  triggerContact.addEventListener("mousemove", () => {
    hoverBackground.classList.add("active-hover-bg");
  });

  triggerContact.addEventListener("mouseleave", () => {
    hoverBackground.classList.remove("active-hover-bg");
  });
});

var menuTriggerAdd = document.querySelector(".menu-trigger-add");
var menu = document.querySelector(".menu");

menuTriggerAdd.addEventListener("click", () => {
  menu.classList.add("menuOpen");
});

var menuTriggerRmv = document.querySelector(".menu-trigger-rmv");
var menu = document.querySelector(".menu");

menuTriggerRmv.addEventListener("click", () => {
  menu.classList.remove("menuOpen");
});

var docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back soon ;)";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

// 1
// testfunction = function () {
//   console.log("hello");
// };

// openMenu = function () {
//   menuTrigger.addEventListener("click", "testfunction");
// };

// // 2

// openMenu = function () {
//   menuTrigger.addEventListener("click", function () {
//     console.log("hello");
//   });
// };

// // 3

// openMenu = function () {
//   menuTrigger.addEventListener("click", () => {
//     console.log("hello");
//   });
// };
