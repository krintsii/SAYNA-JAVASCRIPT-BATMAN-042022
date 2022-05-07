
// les animation de la titre et image des paragraphes et des boutton sur scroll 
const title = document.querySelectorAll("h1")
const para = document.querySelectorAll("p");
const image = document.querySelectorAll('img')
const btn = document.querySelectorAll('button')
const select = document.querySelectorAll('select')
const input = document.querySelectorAll('input')
const icone = document.querySelectorAll('svg')




function apparaitre(element) {
    const debut = element.getBoundingClientRect().top;
    return debut <= window.innerHeight
}

function addClass(element,className) {
    element.classList.add(className)
}

function removeClass(element,className) {
    element.classList.remove(className)
}


function AnimScroll(tabListe, Class) {
   tabListe.forEach(element => {
    if (apparaitre(element)) {
        addClass(element,Class)
    } else{
        removeClass(element,Class)
    }
   });
};

window.addEventListener('scroll', () => {
    AnimScroll(title, 'slideTitle')
    AnimScroll(para, 'slideTitle')
    AnimScroll(image, 'slideTitle')
    AnimScroll(btn, 'slideTitle')
    AnimScroll(input, 'slideTitle')
    AnimScroll(select, 'slideTitle')
    AnimScroll(icone, 'slideTitle')

})
