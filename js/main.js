gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


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

// color_button
document.documentElement.setAttribute('color-pop', 'noColor');


function changeColor(button, color){
    button.on('click', ()=>{
        document.documentElement.setAttribute('color-pop', color);
    })
}

changeColor($('.purple'),'purple');
changeColor($('.blue'),'blue');
changeColor($('.orange'),'orange');
changeColor($('.unset'),'noColor');

gsap.set('.color_splashes',{visibility:'hidden'});

let tlColorButtons= gsap.timeline();
tlColorButtons.pause();
tlColorButtons.to('#color_mode_div',{scale:'3', y:'4em', x:'-2em'},0);
tlColorButtons.to('.color_splashes',{visibility:'visible'},0,'<0.1');


$('#color_mode_div').on('mouseenter',() =>{
    tlColorButtons.play();
  
})
$('#color_mode_div').on('mouseleave',() =>{
    tlColorButtons.reverse();
})

//logo perso
function logoPerso(button, color){
    button.on('click',()=>{
       gsap.set('#logo_perso',{fill:color})
    })
}

logoPerso($('.purple'), 'var(--element_color)');
logoPerso($('.orange'), 'var(--element_color)');
logoPerso($('.blue'), 'var(--element_color)');
logoPerso($('.unset'), 'var(--text_color)');


gsap.set($('#hero_shadow'),{opacity:0});
if (html.attributes['data-theme'].value != 'noColor'){
    gsap.set($('#hero_shadow'),{opacity:1});
}
// home -> statut

// #statut
let tlStatut= gsap.timeline({repeat:-1,  repeatDelay: 5})
tlStatut.to('#statut',0.05,{x:'+=0.5em', rotate: '0.5deg', yoyo:true, repeat:1})
tlStatut.to('#statut',0.05,{x:'-=0.5em', rotate: '-0.5deg', yoyo:true, repeat:1})

gsap.set('#statut_precision',{clipPath:'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)'})

gsap.to('#statut_precision',{clipPath:'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',duration:2})

// clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
// clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);