const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Loader

gsap.from(".fastrack li", {
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  scale: 0.7,
  rotate: 180,
});

gsap.to([".fastrack li", ".fastrack ul"], {
  scale: 0.5,
  rotate: 360,
  duration: 1,
  delay: 2,
  stagger: -0.1,
  opacity: 0,
});

gsap.to(".dialCircle", {
  scale: 5,
  rotate: 360,
  duration: 1,
  delay: 2.2,
  opacity: 1,
});
gsap.to(".dialCircle", {
  scale: 5,
  duration: 1,
  delay: 4,
  background: "#E0A75E",
  borderColor: "#E0A75E",
});

gsap.to(".dialCircle img", {
  opacity: 1,
  scale: 1.3,
  rotate: 720,
  duration: 2,
  delay: 2.7,
  opacity: 1,
});

gsap.to(".lightSource", {
  opacity: 1,
  scale: 1.5,
  rotate: -630,
  duration: 1.5,
  delay: 3.5,
  opacity: 1,
});
gsap.to(".lightSource", {
  opacity: 1,
  scale: 0.5,
  rotate: -1260,
  duration: 2,
  delay: 4.5,
  opacity: 0,
});

gsap.to(".dialCircle img", {
  scale: 0.5,
  duration: 2,
  delay: 6,
  opacity: 0,
});
gsap.to(".dialCircle", {
  duration: 2,
  delay: 6,
  background: "white",
  borderColor: "white",
});

gsap.to(".clock", {
  rotate: 360,
  transformOrigin: "top left",
  duration: 2,
  delay: 6,
  opacity: 1,
  scale: 1,
});
gsap.to(".clock lottie-player", {
  rotate: 360,
  duration: 1.5,
  delay: 7,
  opacity: 1,
  scale: 0.9,
});
gsap.to(".clock lottie-player", {
  duration: 1,
  delay: 8.4,
  scale: 0.6,
});
gsap.to(".wristWatch", {
  duration: 1,
  delay: 8.2,
  opacity: 1,
});

gsap.to(".dialCircle", {
  scale: 20,
  rotate: 360,
  duration: 1.5,
  delay: 9.5,
  opacity: 0,
});
gsap.to(".wristWatch", {
  duration: 1,
  delay: 9.3,
  opacity: 0,
  scale: 0,
});
gsap.to(".clock lottie-player", {
  duration: 1,
  delay: 9.3,
  opacity: 0,
  scale: 0,
});

gsap.to(".loader ", {
  opacity: 0,
  duration: 2,
  delay: 10,
  background: "none",
});
gsap.to(".loader ", {
  scale: 0,
  duration: 1,
  delay: 11,
});
gsap.to(".navbar ", {
  opacity: 1,
  duration: 2,
  delay: 11,
});
gsap.to(".navbar div", {
  stagger: 0.5,
  delay: 11,
});
gsap.from(".navbar li", {
  opacity: 0,
  x: "-100%",
  stagger: 0.5,
  delay: 11.5,
  ease: "elastic.out(0.9,0.5)",
});

gsap.to(".tabContainer", {
  transform: "translateX(-300vw)",
  scrollTrigger: {
    trigger: ".tabContainer",
    scroller: "body",
    markers: false,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});

const serviceContainer = document.querySelector(".services");
const serviceLine = document.querySelector(".line");

var tl = gsap.timeline({
  scrollTrigger: {
    start: "top 60%",
    end: "top 0%",
    markers: false,
    scroller: "body",
    trigger: ".services",
    scrub: 2,
  },
});

tl.from(serviceLine, {
  x: "-100%",
  duration: 2,
  delay: 0.5,
  ease: "slow(0.7,0.7,false)",
});
tl.from(".section", {
  y: -60,
  duration: 1.5,
  opacity: 0,
  stagger: 0.6,
  ease: "elastic.out(0.9,0.3)",
});
tl.from(".serviceText", {
  opacity: 0,
  x: -80,
  duration: 0.5,
  stagger: 0.5,
  delay: -2.5,
});

gsap.from(".trendings .heading", {
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: ".trendings",
    scroller: "body",
    markers: false,
    start: "top 50%",
    end: "top 20%",
    scrub: 2,
  },
  duration: 1,
});
gsap.from(".trendings .slideContainer", {
  opacity: 0,
  x: "100%",
  scrollTrigger: {
    trigger: ".trendings",
    scroller: "body",
    markers: false,
    start: "top 45%",
    end: "top 15%",
    scrub: 2,
  },
  duration: 1,
  delay: 0.3,
});
gsap.from(".trendings .slideContainer2", {
  opacity: 0,
  x: "-100%",
  scrollTrigger: {
    trigger: ".trendings",
    scroller: "body",
    markers: false,
    start: "top 40%",
    end: "top 10%",
    scrub: 2,
  },
  duration: 1,
  delay: 0.3,
});

let tl1 = gsap.timeline({
  scrollTrigger: {
    start: "top 0%",
    end: "top -100%",
    markers: false,
    scroller: "body",
    trigger: ".slider",
    scrub: 2,
    pin: true,
  },
});

tl1.to(".shopYourVibe .sliderContainer .slider .slide1 .image", {
  y: "-100%",
  duration: 2,
  stagger: -0.2,
});
tl1.from(".shopYourVibe .sliderContainer .slider .slide2 .image", {
  y: "100%",
  delay: -3,
  duration: 2,
  stagger: -0.2,
  opacity: 0,
});
tl1.to(".shopYourVibe .sliderContainer .slider .slide2 .image", {
  y: "0",
  stagger: 0,
  duration: 1.2,
});
tl1.to(".shopYourVibe .sliderContainer .slider .slide2 .image", {
  y: "-100%",
  duration: 2,
  stagger: -0.2,
});
tl1.from(".shopYourVibe .sliderContainer .slider .slide3 .image", {
  y: "100%",
  delay: -3,
  duration: 2,
  stagger: -0.2,
  opacity: 0,
});
tl1.to(".shopYourVibe .sliderContainer .slider .slide3 .image", {
  y: "0",
  stagger: 0,
  duration: 1.2,
});

//Footer

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".fastrack-heading", {
    scrollTrigger: {
      trigger: ".fastrack-heading",
      start: "top 80%",
      end: "top 50%",
      scrub: true,
    },
    opacity: 0,
    y: 100,
    duration: 2,
    ease: "power4.out",
  });
});

//BestSeller
async function bestSeller(){
  const res = await fetch("http://localhost:5173/assets.json");
  const data = await res.json();
  const arr = data.Bestseller
  const wrapper = document.querySelector('.bs-wrapper')

  arr.forEach((element) => {
    wrapper.innerHTML = wrapper.innerHTML + `
        <div
                class="bestSeller-slide h-[340px] custom:h-[400px] relative rounded-xl bg-[#1D1C1C] overflow-hidden"
              >
                <div class="imgBox">
                  <img
                    class="lg:w-[200px] custom:w-[170px] w-[140px]"
                    src="${element.img}"
                    alt=""
                  />
                </div>

                <div
                  class="contentBox pt-[30px] flex flex-col gap-2 custom:gap-3"
                >
                  <h2
                    class="text-white relative font-bold text-lg custom:text-xl sm:text-2xl  capitalize"
                  >
                    ${element.name}
                  </h2>
                  <p
                    class="bestSeller-cate text-[#7d7d7d] text-[10px] leading-3"
                  >
                    ${element.cate}
                  </p>
                  <div
                    class="bestSeller-price flex gap-2 items-center justify-center"
                  >
                    <div
                      class="font-semibold text-white text-[13px] custom:text-[15px] md:text-lg lg:text-xl"
                    >
                      &#8377; ${element.price}
                    </div>
                    <div
                      class="font-semibold line-through text-[grey] text-[13px] custom:text-[15px] md:text-lg lg:text-xl"
                    >
                      &#8377; 7000
                    </div>
                    <div
                      class="discount text-[#FF721D] text-[9px] custom:text-xs"
                    >
                      62% OFF
                    </div>
                  </div>
                  <div class="bestSeller-button w-full flex justify-center">
                    <div
                      class="buyNow px-3 py-2 bg-gradient-to-r from-[#FF721D] to-[#972b07] rounded-md text-[white] text-[12px] md:text-[15px] text-center font-bold tracking-widest w-[80%] sm:w-[70%]"
                    >
                      BUY NOW
                    </div>
                  </div>
                </div>
              </div>
    `
  });
}

bestSeller()