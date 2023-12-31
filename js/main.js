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
let sections = document.querySelectorAll('section')
sections.forEach(section=>{
    ScrollTrigger.create({
        trigger:section,
        start:'top top',
        pin:true,
        pinSpacing:false,
        markers:false,
        });
})

