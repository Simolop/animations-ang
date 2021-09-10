import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-parallax',
  template: `
  <section>
    <div class="bg"></div>
      <h1>THIS IS MY FIRST PARALLAX SECTION</h1>
  </section>
  <section>
    <div class="bg"></div>
      <h1>GREAT THAT IT'S WORKING</h1>
  </section>
  <section>
    <div class="bg"></div>
      <h1>SCROLL MORE TO SEE MORE</h1>
  </section>
  <section>
    <div class="bg"></div>
      <h1>LOVING THE IMAGES</h1>
  </section>
  <section>
    <div class="bg"></div>
      <h1>NICE, RIGHT?</h1>
  </section>
  `,
  styles: [
    `
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: -1;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    `
  ]
})
export class ParallaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Register the ScrollTrigger plugin with gsap
    gsap.registerPlugin(ScrollTrigger);

    //Loop over all the sections and set animations
    gsap.utils.toArray("section").forEach((section: any, i) => {
  
    // Set the bg variable for the section
    section.bg = section.querySelector(".bg");

    // Give the backgrounds some random images
    section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

    // Set the initial position for the background
    section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

    // Do the parallax effect on each section
    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none", // Don't apply any easing function.
      scrollTrigger: {
      // Trigger the animation as soon as the section comes into view
      trigger: section, 
      // Animate on scroll/scrub
      scrub: true
    }
  });
});
  }

}
