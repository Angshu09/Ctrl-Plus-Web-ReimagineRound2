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
async function bestSeller() {
  const res = await fetch("http://localhost:5173/assets.json");
  const data = await res.json();
  const arr = data.Bestseller;
  const wrapper = document.querySelector(".bs-wrapper");

  arr.forEach((element) => {
    wrapper.innerHTML =
      wrapper.innerHTML +
      `
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
                    class="text-white relative font-bold text-lg custom:text-xl sm:text-2xl"
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
    `;
  });
}

bestSeller();

//Category
document.querySelector(".l-btn1").addEventListener("mousemove", function () {
  const centerCenterElement = document.querySelector(".center-center1");
  const contentElement = document.querySelector(".content-1");
  if (window.matchMedia("(max-width: 540px)").matches) {
    centerCenterElement.style.height = "22vh";
    contentElement.style.width = "80vw";
  } else if (window.matchMedia("(max-width: 640px)").matches) {
    centerCenterElement.style.height = "35vh";
    contentElement.style.width = "80vw";
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    centerCenterElement.style.height = "35vh";
    contentElement.style.width = "40vw";
  } else {
    centerCenterElement.style.height = "70vh";
    contentElement.style.width = "30vw";
  }
  document.querySelector(".l-btn1").style.background =
    "linear-gradient(to right, #ff721d, #d64312)";
  document.querySelector(".l-btn1").style.color = "white";
  document.querySelector(".l-btn1").style.border = "none";
  document.querySelector(".content-1").style.opacity = "1";
  document.querySelector(".content-1").style.filter = "blur(0.5px)";
});

document.querySelector(".l-btn1").addEventListener("mouseleave", function () {
  document.querySelector(".center-center1").style.height = "0";
  document.querySelector(".l-btn1").style.background = "initial";
  document.querySelector(".l-btn1").style.color = "grey";
  document.querySelector(".l-btn1").style.border = "1px solid grey";
  document.querySelector(".content-1").style.width = "20vw";
  document.querySelector(".content-1").style.opacity = "0";
  document.querySelector(".content-1").style.filter = "blur(10px)";
});

document.querySelector(".l-btn2").addEventListener("mousemove", function () {
  const centerCenterElement = document.querySelector(".center-center2");
  const contentElement = document.querySelector(".content-2");
  if (window.matchMedia("(max-width: 540px)").matches) {
    centerCenterElement.style.height = "22vh";
    contentElement.style.width = "80vw";
  } else if (window.matchMedia("(max-width: 640px)").matches) {
    centerCenterElement.style.height = "35vh";
    contentElement.style.width = "80vw";
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    centerCenterElement.style.height = "35vh";
    contentElement.style.width = "40vw";
  } else {
    centerCenterElement.style.height = "70vh";
    contentElement.style.width = "30vw";
  }
  document.querySelector(".l-btn2").style.background =
    "linear-gradient(to right, #ff721d, #d64312)";
  document.querySelector(".l-btn2").style.color = "white";
  document.querySelector(".l-btn2").style.border = "none";
  document.querySelector(".content-2").style.opacity = "1";
  document.querySelector(".content-2").style.filter = "blur(0.5px)";
});
document.querySelector(".l-btn2").addEventListener("mouseleave", function () {
  document.querySelector(".center-center2").style.height = "0";
  document.querySelector(".l-btn2").style.background = "initial";
  document.querySelector(".l-btn2").style.color = "grey";
  document.querySelector(".l-btn2").style.border = "1px solid grey";
  document.querySelector(".content-2").style.width = "20vw";
  document.querySelector(".content-2").style.opacity = "0";
  document.querySelector(".content-2").style.filter = "blur(10px)";
});

document.querySelector(".r-btn1").addEventListener("mousemove", function () {
  const centerCenterElement = document.querySelector(".center-center3");
  const contentElement = document.querySelector(".content-3");
  if (window.matchMedia("(max-width: 540px)").matches) {
    centerCenterElement.style.height = "22vh";
    contentElement.style.width = "80vw";
  } else if (window.matchMedia("(max-width: 640px)").matches) {
    centerCenterElement.style.height = "35vh";
    contentElement.style.width = "80vw";
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    centerCenterElement.style.height = "35vh";
    contentElement.style.width = "40vw";
  } else {
    centerCenterElement.style.height = "70vh";
    contentElement.style.width = "30vw";
  }
  document.querySelector(".r-btn1").style.background =
    "linear-gradient(to right, #ff721d, #d64312)";
  document.querySelector(".r-btn1").style.color = "white";
  document.querySelector(".r-btn1").style.border = "none";
  document.querySelector(".content-3").style.opacity = "1";
  document.querySelector(".content-3").style.filter = "blur(0.5px)";
});

document.querySelector(".r-btn1").addEventListener("mouseleave", function () {
  document.querySelector(".center-center3").style.height = "0";
  document.querySelector(".r-btn1").style.background = "initial";
  document.querySelector(".r-btn1").style.color = "grey";
  document.querySelector(".r-btn1").style.border = "1px solid grey";
  document.querySelector(".content-3").style.width = "20vw";
  document.querySelector(".content-3").style.opacity = "0";
  document.querySelector(".content-3").style.filter = "blur(10px)";
});

document.querySelector(".r-btn2").addEventListener("mousemove", function () {
  const centerCenterElement = document.querySelector(".center-center4");
  const contentElement = document.querySelector(".content-4");
  if (window.matchMedia("(max-width: 540px)").matches) {
    centerCenterElement.style.height = "22vh";
    contentElement.style.width = "80vw";
  } else if (window.matchMedia("(max-width: 640px)").matches) {
    centerCenterElement.style.height = "35vh";
    contentElement.style.width = "80vw";
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    centerCenterElement.style.height = "35vh";
    contentElement.style.width = "40vw";
  } else {
    centerCenterElement.style.height = "70vh";
    contentElement.style.width = "30vw";
  }
  document.querySelector(".r-btn2").style.background =
    "linear-gradient(to right, #ff721d, #d64312)";
  document.querySelector(".r-btn2").style.color = "white";
  document.querySelector(".r-btn2").style.border = "none";
  document.querySelector(".content-4").style.opacity = "1";
  document.querySelector(".content-4").style.filter = "blur(0.5px)";
});
document.querySelector(".r-btn2").addEventListener("mouseleave", function () {
  document.querySelector(".center-center4").style.height = "0";
  document.querySelector(".r-btn2").style.background = "initial";
  document.querySelector(".r-btn2").style.color = "grey";
  document.querySelector(".r-btn2").style.border = "1px solid grey";
  document.querySelector(".content-4").style.width = "20vw";
  document.querySelector(".content-4").style.opacity = "0";
  document.querySelector(".content-4").style.filter = "blur(10px)";
});

// Trending
async function fillTrending() {
  const res = await fetch("http://localhost:5173/assets.json");
  const data = await res.json();
  const arr = data.trending;
  const wrapper = document.querySelector(".trending-wrapper");
  const wrapper2 = document.querySelector(".trending-wrapper2");
  for (let i = 0; i < 5; i++) {
    wrapper.innerHTML =
      wrapper.innerHTML +
      `
        <div style="--position:${i}" class="slide trending-slide max-w-[400px] h-[250px] w-[100%] border border-[#FF721D] rounded-[20px] bg-[#100F0F] p-3 relative">
    <div class="desc flex flex-col w-[60%] justify-between p-3 h-full font-bold">

      <div class="logo w-[30%]">
        <img src="https://res.cloudinary.com/dojcchveo/image/upload/v1720950430/fastrack/t9tmr1zpecmjeuxgd29n.png" alt="logo">
      </div>

      <div class="itemName text-white">
        <p>${arr[i].name.slice(0, 35)}...</p>
      </div>

      <div class=" text-[grey] text-[9px] leading-3">
        ${arr[i].cate}
      </div>

      <div class="price flex gap-2 items-center">
        <div class="sp text-white text-sm">&#8377; ${arr[i].price}</div>
        <div class="mrp line-through text-[grey] text-sm">&#8377; 7000</div>
        <div class="discount text-[#FF721D] text-xs">62% OFF</div>
      </div>

      <div class="buttonContainer flex gap-3 text-white">
        <div class="buyNow px-3 py-2 bg-gradient-to-r from-[#FF721D] to-[#972b07] rounded-full text-[10px] text-center font-bold tracking-wide ">BUY NOW</div>
        <div class="addToCart px-3 py-2 bg-gradient-to-r from-[#FF721D] to-[#972b07] rounded-full text-[10px] text-center font-bold tracking-wide">+ ADD TO CART</div>
      </div>

    </div>

    <div class="watch-img absolute transition-all duration-500 w-[45%] h-[110%] top-1/2 -right-[7%] -translate-y-1/2">
      <img class="h-full object-cover "  src="${arr[i].img}" alt="">
    </div>

    </div>   
    `;
  }

  for(let i=5; i<10; i++){
    wrapper2.innerHTML =
      wrapper2.innerHTML +
      `
        <div style="--position:${i-5}" class="slide trending-slide max-w-[400px] h-[250px] w-[100%] border border-[#FF721D] rounded-[20px] bg-[#100F0F] p-3 relative">
    <div class="desc flex flex-col w-[60%] justify-between p-3 h-full font-bold">

      <div class="logo w-[30%]">
        <img src="https://res.cloudinary.com/dojcchveo/image/upload/v1720950430/fastrack/t9tmr1zpecmjeuxgd29n.png" alt="logo">
      </div>

      <div class="itemName text-white">
        <p>${arr[i].name.slice(0, 35)}...</p>
      </div>

      <div class=" text-[grey] text-[9px] leading-3">
        ${arr[i].cate}
      </div>

      <div class="price flex gap-2 items-center">
        <div class="sp text-white text-sm">&#8377; ${arr[i].price}</div>
        <div class="mrp line-through text-[grey] text-sm">&#8377; 7000</div>
        <div class="discount text-[#FF721D] text-xs">62% OFF</div>
      </div>

      <div class="buttonContainer flex gap-3 text-white">
        <div class="buyNow px-3 py-2 bg-gradient-to-r from-[#FF721D] to-[#972b07] rounded-full text-[10px] text-center font-bold tracking-wide ">BUY NOW</div>
        <div class="addToCart px-3 py-2 bg-gradient-to-r from-[#FF721D] to-[#972b07] rounded-full text-[10px] text-center font-bold tracking-wide">+ ADD TO CART</div>
      </div>

    </div>

    <div class="watch-img absolute transition-all duration-500 w-[45%] h-[110%] top-1/2 -right-[7%] -translate-y-1/2">
      <img class="h-full object-cover "  src="${arr[i].img}" alt="">
    </div>

    </div>   
    `;
  }
}

fillTrending();
