import './style.css'


function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();


}
loco();

const cursor= document.querySelector('.cursor');
const main=document.querySelector('body');

main.addEventListener('mousemove',(event)=>{
  gsap.to('.cursor',{
    x:event.x,
    y:event.y,
    duration:0,
    opacity:1,
  })
})


function canvas(){

  const canvas= document.querySelector("canvas");
const context=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener('resize', function(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  render();
})

function files(index){
  var data=`./feature/feature_000.jpg
  ./feature/feature_001.jpg
  ./feature/feature_002.jpg
  ./feature/feature_003.jpg
  ./feature/feature_004.jpg
  ./feature/feature_005.jpg
  ./feature/feature_006.jpg
  ./feature/feature_007.jpg
  ./feature/feature_008.jpg
  ./feature/feature_009.jpg
  ./feature/feature_010.jpg
  ./feature/feature_011.jpg
  ./feature/feature_012.jpg
  ./feature/feature_013.jpg
  ./feature/feature_014.jpg
  ./feature/feature_015.jpg
  ./feature/feature_016.jpg
  ./feature/feature_017.jpg
  ./feature/feature_018.jpg
  ./feature/feature_019.jpg
  ./feature/feature_020.jpg
  ./feature/feature_021.jpg
  ./feature/feature_022.jpg
  ./feature/feature_023.jpg
  ./feature/feature_024.jpg
  ./feature/feature_025.jpg
  ./feature/feature_026.jpg
  ./feature/feature_027.jpg
  ./feature/feature_028.jpg
  ./feature/feature_029.jpg
  ./feature/feature_030.jpg
  ./feature/feature_031.jpg
  ./feature/feature_032.jpg
  ./feature/feature_033.jpg
  ./feature/feature_034.jpg
  ./feature/feature_035.jpg
  ./feature/feature_036.jpg
  ./feature/feature_037.jpg
  ./feature/feature_038.jpg
  ./feature/feature_039.jpg
  ./feature/feature_040.jpg
  ./feature/feature_041.jpg
  ./feature/feature_042.jpg
  ./feature/feature_043.jpg
  ./feature/feature_044.jpg
  ./feature/feature_045.jpg
  ./feature/feature_046.jpg
  ./feature/feature_047.jpg
  ./feature/feature_048.jpg
  ./feature/feature_049.jpg
  ./feature/feature_050.jpg
  ./feature/feature_051.jpg
  ./feature/feature_052.jpg
  ./feature/feature_052.jpg
  ./feature/feature_054.jpg
  ./feature/feature_055.jpg
  ./feature/feature_056.jpg
  ./feature/feature_057.jpg
  ./feature/feature_058.jpg
  ./feature/feature_059.jpg
  ./feature/feature_060.jpg
  ./feature/feature_061.jpg
  ./feature/feature_062.jpg
  ./feature/feature_063.jpg

  `
  return data.split("\n")[index];
}
const frameCount=64//no. of images

const images=[];
const imageSeq={
  frame:1,
}

for (let i = 0; i < frameCount; i++) {
  const img= new Image();
  img.src=files(i);
  images.push(img);
}

gsap.to(imageSeq,{
  frame:frameCount-1,
  snap:'frame',
  ease:`none`,
  scrollTrigger:{
    scrub:0.2,
    trigger:`.why-heading .center`,
    start:'50% 0%',
    end:'400% 50%',
    scroller:`#main`,
  },
  onUpdate:render,

})
images[1].onload=render;

function render(){
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img,ctx){
  var canvas=ctx.canvas;
  var hRatio=canvas.width/img.width;
  var vRatio=canvas.height/img.height;
  var ratio=Math.max(hRatio, vRatio);
  var centerShift_x=(canvas.width - img.width *ratio)/2;
  var centerShift_y=(canvas.height-img.height*ratio)/2;
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width*ratio,
    img.height*ratio,
  )
}

}

canvas()



function loader(){

  const loaderTl=gsap.timeline();
loaderTl.from('.loader .fastrack',{
  width:0,
  opacity:0,
  duration:1,
  delay:0.2,

})
loaderTl.to('.loader .upText',{
  width:'100%',
  duration:2,
})
loaderTl.to('.loadText',{
  opacity:0,
  scale:0,
  // rotate:720,
  duration:1,
  delay:0.3
})
loaderTl.to('.dialCircle',{
  scale:5.6,
  rotate:360,
  duration:1.5,
  delay:-.5,
  opacity:1
})
loaderTl.to('.dialCircle img',{
  scale:0,
  rotate:360,
  duration:1.5,
  delay:.75,
  opacity:1,
  top:'50%'

})
loaderTl.to('.dialCircle',{
  background:'white',
  border:'white',
  duration:1,
  delay:-1.5,
  opacity:1
})
loaderTl.to('.clock',{
  rotate:360,
  transformOrigin:'top left',
  duration:1.5,
  opacity:1,
  scale:1,
  delay:-1.8
})
loaderTl.to('.clock lottie-player',{
  rotate:360,
  duration:1.5,
  delay:-.5,
  scale:1.55,

})
loaderTl.to('.clock lottie-player',{
  
  duration:1,
  scale:1,
  
})
loaderTl.to('.wristWatch',{
  duration:1,
  opacity:1,
  delay:-.5
})
loaderTl.to('.dialCircle',{
  scale:20,
  rotate:360,
  duration:1.5,
  opacity:0, 
  
})
loaderTl.to('.wristWatch',{
  duration:.5,
  opacity:0,
  scale:.5,
  delay:-1.75,
  zIndex:-1
})
loaderTl.to('.clock lottie-player',{
  duration:.5,
  delay:-1.75,
  opacity:0,
  scale:0.7,
  zIndex:-1
})
loaderTl.to('.page',{
  opacity:0,
  duration:2,
  backgroun:'none',
  delay:-1
})
loaderTl.to('.page',{
  scale:0,
  duration:.1,
  delay:-.2
})



}
loader();

gsap.to('.navPage .navbar ',{
  scrollTrigger:{
    pin:true,
    scrub:2,
    start:'top top',
    end:'1000% top',
    trigger:'.navPage .navbar',
    scroller:`#main`,


  }
})


gsap.to('.page1 .video ',{
  scrollTrigger:{
    pin:true,
    scrub:2,
    start:'top top',
    end:'90% top',
    trigger:'.page1 .video',
    scroller:`#main`,
    markers:false


  }
})




function scrollHorizontal(){

  const slider=document.querySelector('.wrapper');
const sections=gsap.utils.toArray('.horizontalScroll .wrapper .slide');

const tlScroll=gsap.timeline({
  default:{
    ease:'none'
  },
  scrollTrigger:{
    trigger:slider,
    scroller:'#main',
    pin:true,
    scrub:2,
    start:'top 0%',
    end:'top -100%',
    markers:false,
  }
})

tlScroll.to(slider,{
  xPercent:-75
}, "<")




sections.forEach((stop, index)=> {

  if(index===0){

    tlScroll.from(stop.querySelector('.image'),{
      x:'-40vw',
      rotate:'-180deg',
      scrollTrigger:{
        trigger:stop.querySelector('.image'),
        containerAnimation:tlScroll,
        scrub:true,
        markers:false,
  
      }
    })

  }else{

    tlScroll.from(stop.querySelector('.image'),{
      x:'-40vw',
      rotate:'-180deg',
      opacity:0,
      scrollTrigger:{
        trigger:stop.querySelector('.image'),
        containerAnimation:tlScroll,
        scrub:true,
        markers:false,
        end:'center center'
  
      }
    })
    

  }
  
  // console.log(stop.querySelector('.image'))
  
  
});
  
}

scrollHorizontal()


function service(){

  const serviceContainer=document.querySelector('.services')
const serviceLine=document.querySelector('.line')

var tl= gsap.timeline({scrollTrigger: {start:'top 60%',end:'top 0%', markers:false, scroller:'#main', trigger:'.services', scrub:3, }})

tl.from(serviceLine,{
  x:'-100%',
  duration:2,
  delay:0.5,
  ease: "slow(0.7,0.7,false)",

})
tl.from('.section',{
  y:-60,
  duration:1.5,
  opacity:0,
  stagger:0.6,
  ease: "elastic.out(0.9,0.3)",

})
tl.from('.serviceText', {
  opacity:0,
  x:-80,
  duration:0.5,
  stagger:0.5,
  delay:-2.5 

})


}
service();

function trendings(){

  gsap.from('.trendings .heading',{
    opacity:0,
    scale:0,
    scrollTrigger: {
      trigger:'.trendings',
      scroller:'#main',
      markers:false,
      start:"top 50%",
      end:'top 20%',
      scrub:2,
    },
    duration:1,
  
  })
  gsap.from('.trendings .slideContainer',{  
    opacity:0,
    x:'100%',
    scrollTrigger: {
      trigger:'.trendings',
      scroller:'#main',
      markers:false,
      start:"top 45%",
      end:'top 15%',
      scrub:2,
    },
    duration:1,
    delay:0.3
  
  })
  
  gsap.from('.trendings .slideContainer2',{
    opacity:0,
    x:'-100%',
    scrollTrigger: {
      trigger:'.trendings',
      scroller:'#main',
      markers:false,
      start:"top 40%",
      end:'top 10%',
      scrub:2,
    },
    duration:1,
    delay:0.3
  
  })
  
  

}
trendings();


function shopYourVibe(){

  let tl1=gsap.timeline({scrollTrigger: {start:'top 0%',end:'top -100%', markers:false, scroller:'#main', trigger:'.slider', scrub:2, pin:true}})

  tl1.to('.shopYourVibe .sliderContainer .slider .slide1 .image',{
    y:'-100%',
    duration:2,
    stagger:-.2,
  })
  tl1.from('.shopYourVibe .sliderContainer .slider .slide2 .image',{
    y:'100%',
    delay:-3,
    duration:2,
    stagger:-.2,
    opacity:0
  })
  tl1.to('.shopYourVibe .sliderContainer .slider .slide2 .image',{
    y:'0',
    stagger:0,
    duration:1.2
  })
  tl1.to('.shopYourVibe .sliderContainer .slider .slide2 .image',{
    y:'-100%',
    duration:2,
    stagger:-.2,
  })
  tl1.from('.shopYourVibe .sliderContainer .slider .slide3 .image',{
    y:'100%',
    delay:-3,
    duration:2,
    stagger:-.2,
    opacity:0
  })
  tl1.to('.shopYourVibe .sliderContainer .slider .slide3 .image',{
    y:'0',
    stagger:0,
    duration:1.2
  })



}
shopYourVibe()


function bestSellerAnimation(){

  gsap.from('.bestSeller .heading',{
    opacity:0,
    scale:0,
    scrollTrigger: {
      trigger:'.bestSeller',
      scroller:'#main',
      markers:false,
      start:"top 50%",
      end:'top 20%',
      scrub:2,
    },
    duration:1,
  
  })
  
  gsap.from('.bestSeller .bestSeller-slide',{
    opacity:0,
    scale:0,
    scrollTrigger: {
      trigger:'.bestSeller',
      scroller:'#main',
      markers:false,
      start:"top 40%",
      end:'top 10%',
      scrub:2,
    },
    duration:1,
    stagger:0.3
  
  })
  
  

}
bestSellerAnimation();


function whyUs(){

  const tlWhy=gsap.timeline({
    scrollTrigger:{
      trigger:'.why-heading',
      start:'50% 50%',
      end:'100% 50%',
      scrub:2,
      pin:true,
      markers:false,
      scroller:'#main'
    }
  })
  
  tlWhy.to('.top',{
    top:'-50%',
  },'a')
  tlWhy.to('.bottom',{
    bottom:'-90%',
    zIndex:-1,
  },'a')
  tlWhy.to('.top-h',{
    top:'70%',
  },'a')
  tlWhy.to('.bottom-h',{
    top:'-70%',
  },'a')

  //method 2
gsap.to('.why-heading .center',{
  scrollTrigger:{
    trigger:'.why-heading .center',
    pin:true,
    scroller:'#main',
    start:'50% 0%',
    end:'260% 50%',
  }
})

const tlWatch=gsap.timeline({
  scrollTrigger:{
    trigger:'.page11 .sec-2',
    start:'50% 90%',
    end:'50% 50%',
    scrub:true,
    markers:false,
    scroller:'#main'
  }
})

tlWatch.to('.watchImage',{
 top:'100%',
 left:'0%'

})

const tlWatch2=gsap.timeline({
  scrollTrigger:{
    trigger:'.page11 .sec-3',
    start:'50% 90%',
    end:'50% 50%',
    scrub:true,
    markers:false,
    scroller:'#main'
  }
})

tlWatch2.to('.watchImage',{
  top:'200%',
  left:'60%'
 
 })

  

}

whyUs()

 function category(){
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
 }

 category();


 // Trending
async function fillTrending() {
  const res = await fetch("https://jayasaha811733.github.io/ReImagine_2_API/assets.json");
  const data = await res.json();
  const arr = data.trending;
  const wrapper = document.querySelector(".trending-wrapper");
  const wrapper2 = document.querySelector(".trending-wrapper2");
  for (let i = 0; i < 5; i++) {
    wrapper.innerHTML =
      wrapper.innerHTML +
      `
        <div style="--position:${i}" class="slide trending-slide max-w-[400px] h-[250px] w-[98vw] border border-[#FF721D] rounded-[20px] bg-[#100F0F] p-3 relative">
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
        <div style="--position:${i-5}" class="slide trending-slide max-w-[400px] h-[250px] w-[98vw] border border-[#FF721D] rounded-[20px] bg-[#100F0F] p-3 relative">
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


async function bestSeller() {
  const res = await fetch("https://jayasaha811733.github.io/ReImagine_2_API/assets.json");
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