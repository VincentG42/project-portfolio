gsap.registerPlugin(ScrollTrigger);
//  dark mode switch
const darkMode = document.querySelector('#dark_mode');
const html= document.querySelector('html')
// console.log(html.attributes['data-theme'].value);

document.documentElement.setAttribute('data-theme', 'light');
let buttonRotation =gsap.to(darkMode,{
    duration: 1.5,
    rotation:180,
    paused:true,
    ease: "expo",
})

darkMode.addEventListener('click', ()=>{
    buttonRotation.restart();
    
        if (html.attributes['data-theme'].value === 'light'){
            document.documentElement.setAttribute('data-theme', 'dark');
        }else{
            document.documentElement.setAttribute('data-theme', 'light');
    }
})

//dark mode 
// scroll div
// let sections = document.querySelectorAll('section')
// sections.forEach(section=>{
//     ScrollTrigger.create({
//         trigger:section,
//         start:'top top',
//         pin:true,
//         pinSpacing:false,
//         markers:false,
//         });
// })

gsap.to('#about',{ clipPath:'polygon(0 0, 0 0, 0 0, 0 0)', y:'-100vh',position:'absolute', duration:0});
gsap.to('#skills',{ clipPath:'polygon(0 0, 0 0, 0 0, 0 0)',y:'-200vh',position:'absolute', duration:0});
gsap.to('#contact',{ clipPath:'polygon(0 0, 0 0, 0 0, 0 0)',y:'-300vh',position:'absolute', duration:0});

let about = document.querySelector('#about');
let skills = document.querySelector('#skills');
let contact = document.querySelector('#contact');

let aboutButton = document.querySelector('#about_button');
let skillsButton = document.querySelector('#skills_button');
let contactButton = document.querySelector('#contact_button');

let tl = gsap.timeline(); 
tl.pause()

function divOnView(button, section,tl){
    tl.to(button,{ x: 200, duration: 1 },0)
    tl.to(section,{x:'16vw',duration:1},0)
    tl.to(section,{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',duration:1},0)
}

aboutButton.addEventListener('click',()=>{
    tl.play()
    divOnView(aboutButton,about)

})