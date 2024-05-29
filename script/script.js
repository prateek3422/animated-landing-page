const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



function firstpageanim (){
    let tl = gsap.timeline()


    tl.from(".nav a,.nav h3" , {
        y:"-10",
        duration:1.5,
        opacity: 0,
        ease: Expo.easeInOut,



    })
        .to(".boundryelem",{
            y:0,
            duration:2,
            delay:-1,
            ease: Expo.easeInOut,
            stagger:0.2
        })

        .from(".herofooter" ,{
            y:-10,
            opacity: 0,
            duration:1,
            ease: Expo.easeInOut,
    
        })
}


let timeout;

const flatCircle = () =>{

    let xscale = 1
    let yscale = 1

    let xprev = 0
    let yprev = 0

    

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout)
        
        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev)
        xscale = gsap.utils.clamp(.8,1.2,  dets.clientY - yprev)

        xprev = dets.clientX
        yprev = dets.clientY


        circlefollower(xscale, yscale)
        timeout = setTimeout(function(){
            document.querySelector(".minicircle").style.transform= `translate(${dets.clientX}px, ${dets.clientY}px) scale(1 , 1)`
        }, 100)
    })
}


function circlefollower(xscale, yscale){
    window.addEventListener("mousemove", function(details){
       document.querySelector(".minicircle").style.transform= `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale} , ${yscale})`
    })
}


function movingimg() {

    let rotate = 0
    let differ = 0

    document.querySelectorAll(".elem").forEach(function(elem){

        

        elem.addEventListener("mouseleave", function(dets){
            let diff = dets.clientY - elem.getBoundingClientRect().top
            differ = dets.clientX  - rotate
            rotate = dets.clientX

            

            gsap.to(elem.querySelector("img"),{
                opacity:0,
                ease: Power3,

            })
        })




        

        elem.addEventListener("mousemove", function(dets){
            let diff = dets.clientY - elem.getBoundingClientRect().top
            differ = dets.clientX  - rotate
            rotate = dets.clientX

            

            gsap.to(elem.querySelector("img"),{
                opacity:1,
                ease: Power3,
                top:diff,
                left: dets.clientX,
                rotate:gsap.utils.clamp(-15,15,differ*.8)

            })
        })

        


    })
}


movingimg()
circlefollower()
flatCircle()
firstpageanim ()



