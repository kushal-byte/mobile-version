 var crsr=document.querySelector("#cursor")
 var blu=document.querySelector("#blurcursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px"
     crsr.style.top= dets.y+"px"
     blu.style.left=dets.x- 150 +"px"
     blu.style.top=dets.y- 120 +"px"


})
gsap.to("#nav",{
    backgroundColor :"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top-10%",
        end:"top -12%",
        scrub:2,

    }
})
gsap.to("#main ",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
    start:"top -40%",
end:"top -60%",
scrub:2,
}
})
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },})