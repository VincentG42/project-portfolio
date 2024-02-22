gsap.registerPlugin(ScrollTrigger);

    //  dark mode switch ///////////////////////////////
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

    // scroll div /////////////////////////////////////////////////////

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

    // color_button //////////////////////////////////
document.documentElement.setAttribute('color-pop', 'noColor'); // default mode with no color


function changeColor(button, color){
    button.on('click', ()=>{
        document.documentElement.setAttribute('color-pop', color);
    })
}

    changeColor($('.purple'),'purple');
    changeColor($('.blue'),'blue');
    changeColor($('.orange'),'orange');
    changeColor($('.unset'),'noColor');

    // gestion svg palette pour choisir les couleurs
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

//logo perso ///////////////////
function logoPerso(button, color){
    button.on('click',()=>{
    gsap.set('#logo_perso',{fill:color});
    gsap.set(' #contact svg',{fill:color})
    })
}

    logoPerso($('.purple'), 'var(--element_color)');
    logoPerso($('.orange'), 'var(--element_color)');
    logoPerso($('.blue'), 'var(--element_color)');
    logoPerso($('.unset'), 'var(--text_color)');

// home -> statut//////////////////////////////////////////

    // #statut
    let tlStatut= gsap.timeline({repeat:-1,  repeatDelay: 5})
    tlStatut.to('#statut',0.05,{x:'+=0.5em', rotate: '0.5deg', yoyo:true, repeat:1})
    tlStatut.to('#statut',0.05,{x:'-=0.5em', rotate: '-0.5deg', yoyo:true, repeat:1})


    // trad fr/en /////////////////////////////////////////////////

     // default english part hidden
    gsap.set(".english",{display :"none"})

    let english = document.querySelectorAll('.english');
    let french = document.querySelectorAll('.french');
     //button event
    $('#check').on('change',()=>{
        if ($('#check').is(':checked')){
            // console.log('hello');
            gsap.set(".english",{display :"block"})
            gsap.set(".french",{display :"none"})
        } else {
            gsap.set(".english",{display :"none"})
            gsap.set(".french",{display :"block"})
            // console.log('world');
        }
    })

    // carroussel portfolios ///////////////////////////////////////////////////

    // let card1 = document.querySelector('.card_1');
    let cards =document.querySelector('.card_wrapper');
    let next = document.querySelector('.next');
    let previous = document.querySelector('.previous');
    // console.log(cards.children);

    let folioTl = gsap.timeline();

    index=0;

    next.addEventListener('click', ()=>{
        if( index < cards.children.length-1){
            folioTl.to(cards.children[cards.children.length-1 -index],{scale:1.5, duration: 1, ease: "power3.out"});
            folioTl.to(cards.children[cards.children.length-1 -index],{translateX:-3000,duration:1}, "-=1");
            folioTl.to(cards.children[cards.children.length-1 -index],{skewY:30,duration:1.5}, "-=1");
            folioTl.to(cards.children[cards.children.length-1 -index],{opacity:0,duration:0.5}, "-=0.8")
                index+=1;
            }
            // console.log(cards.children[cards.children.length-1 -index]);
    })

    previous.addEventListener('click', ()=>{
        if( index > 0){
            index -=1;
            folioTl.to(cards.children[cards.children.length-1 -index],{translateX:0, skewY:0})
            folioTl.to(cards.children[cards.children.length-1 -index],{scale:1,opacity:1, duration: 1, ease: "power3.in"},"-=1");

        }
    })

