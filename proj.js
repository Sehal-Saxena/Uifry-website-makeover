function page1animation(){
    var tl = gsap.timeline();

    tl.from("nav h1,nav h4, nav button", {
      y: -40,
      opacity: 0,
      delay: 1,
      duration: 0.7,
      stagger: 0.2,
    });

    tl.from("#center1 h1", {
      x: -300,
      opacity: 0,
      duration: 0.5,
    });

    tl.from("#center1 p", {
      x: -300,
      opacity: 0,
      duration: 0.5,
    });

    tl.from("#center1 button", {
      opacity: 0,
      duration: 0.4,
    });

    tl.from(
      "#center2 img",
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=1"
    );

    tl.from(".section1bottom", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
    });
}

page1animation()

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        scrub:1,
        end:"top 0"
    }
})

tl2.from(".features",{
    x:30,
    opacity:0,
    duration:0.7
})

tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1
},"yay")

tl2.from(
  ".elem.line1.right",
  {
    x: 400,
    opacity: 0,
    duration: 1,
  },
  "yay"
);


tl2.from(".elem.line2.left", {
  x: -300,
  opacity: 0,
  duration: 1,
},"bee");


tl2.from(".elem.line2.right", {
  x: 300,
  opacity: 0,
  duration: 1,
},"bee");
// gsap.from(".features",{
//     x:100,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:".features h3",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// });