const figure = document.querySelectorAll('figure')
const tabfig = Array.from(figure)
const figcaption = document.querySelectorAll('figcaption')
const tabficap = Array.from(figcaption)

for (let i = 0; i < tabficap.length; i++){
    tabfig[i].addEventListener('mouseover',() => {
        figcaption[i].classList.add("opacity")
        figcaption[i].classList.remove("Desopacity")

    }) 
    tabfig[i].addEventListener('mouseleave',() => {
        figcaption[i].classList.add("Desopacity")
        figcaption[i].classList.remove("opacity")
    })     
}


// pour le slide de l'image avec boutton 

const data = [
    `<img src="Assets/Illustrations/Home/Bathome10_slide_ba.png" width="100%" alt="">
    <div class="ps-2 pt-2 pb-2">
      <p class="fs-4">A c t i o n , A d v e n t u r e</p>
      <p class="fs-5">The Dark Knigth </p>
      <p>IMDB <span style="color: #FFFF00;">: 9</span></p>
      <p style="font-size: 12px;">
          Batman aborde une phase décisive dans sa guerre contre le crime. Avec l'aide du lieutenant de police Gordon et du nouveau procureur Harvey Dent, il entreprend de démanteler les dernière organisations criminelles qui infectent les rues de la ville. L'association s'avère efficace, mais le trio se heurte bientôt à un nouveau génie du crime qui répand la terreur et le chaos dans Gotham : le Joker
      </p>
    </div>`,

    `<img src="Assets/Illustrations/Home/Bathome11_slide_ba.png" width="100%" alt="">
    <div class="ps-2 pt-2 pb-2">
      <p class="fs-4">A c t i o n , A d v e n t u r e</p>
      <p class="fs-5">The Dark Knight Rises </p>
      <p>IMDB <span style="color: #FFFF00;">: 8.4</span></p>
      <p style="font-size: 12px;">
          Huit ans ont passé depuis que Batman a disparu, passent du statut de héros à celui de fugitif.Le "Chevalier Noir" a tout sacrifié pour le mieux. Pendant un certain temps, le mensonge a l'effet escompté : la criminalité de Gotham City est presque éliminée par le commissaire James Gordon avec l"unité anticrime d'Harvey Dent. Mais l'arrivée à Gotham de Bane, un terroriste masqué, chamboule l'ordre établi et pousse Bruces à sortir de l'exil qu'il s'est imposé
      </p>
    </div>`,

    `<img src="Assets/Illustrations/Home/Bathome8.png" width="100%" alt="">
    <div class="ps-2 pt-2 pb-2">
      <p class="fs-4">A c t i o n , A d v e n t u r e</p>
      <p class="fs-5">Batman Begins </p>
      <p>IMDB <span style="color: #FFFF00;">: 8.2</span></p>
      <p style="font-size: 12px;">
        Le jeune Bruce Wayne assiste impuissant au meurtre de ses
        parents. Profondément traumatisé, il grandit obnubilé par un
        désir de vengeance. La Ligue des ombres, une secte de
        guerriers ninja dirigée par Ra's al Ghul, se chargera de son
        entraînement. De retour chez lui à Gotham, avec l'aide de son
        majordome Alfred Pennyworth, Bruce Wayne se lance alors
        dans la lutte contre le crime sous le nom de Batman.
      </p>
    </div>`
]

const video1 = [
    `<iframe width="900" height="415" src="https://www.youtube.com/embed/UMgb3hQCb08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

    `<iframe width="900" height="415" src="https://www.youtube.com/embed/OiqPQ7L_C00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

    ` <iframe width="900" height="415" src="https://www.youtube.com/embed/jXrFsn9pcZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,


]

const cardSlide = document.getElementById('cardSlide')
const VideoSlide = document.getElementById('videoSlide')
const next = document.getElementById('Next')
const Prev = document.getElementById('Prev')
let i = 0
next.addEventListener('click',()=> {
    cardSlide.innerHTML= `${data[i]}`
    VideoSlide.innerHTML= `${video1[i]}`
    if (i < data.length-1) {
        i++
    } else{
        i = 0
    }
})

Prev.addEventListener('click', ()=>{
    cardSlide.innerHTML= `${data[i]}`
    VideoSlide.innerHTML= `${video1[i]}`
    if (i > 0) {

        i-- 
    } else{
        i = data.length-1
    }
})


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





// le slide de citation 

const citation = [
    {
        cit:"Soit on meurt en héros, soit on vit assez longtemps pour se voir endosser le rôle du méchant.",
        Auteur:"The Dark Knight : Le Chevalier Noir ",
        Date:"Harvey Dent (2008)"

    },
    {
        cit:"Le héros peut être en chacun, même en celui qui fait une chose aussi simple et rassurante que mettre un manteau sur les épaules d'un garçon et ainsi lui faire comprendre que le monde ne s'est pas écroulé.",
        Auteur:"The Dark Knight Rises ",
        Date:"Batman à James Gordon (2012))"

    },
    {
        cit:"Ah ! Tu crois que l'obscurité est ton allié. Tu n'a fait qu'adopter la pénombre. Moi je suis né dedans, j'ai été façonné par elle. Je n'ai découvert la lumière qu'a l'âge d'homme, et alors, elle m'a juste paru AVEUGLANTE !",
        Auteur:"The Dark Knight Rises",
        Date:" Bane à Batman (2012)"

    },
    {
        cit:"- Je vous prépare la batmoto monsieur ?- En pleine journée Alfred ? Pas très subtile. - La Lamborghini alors... beaucoup plus subtile.",
        Auteur:"The Dark Knight: Le Chevalier Noir",
        Date:"Alfred et Batman (2008)"

    },
    {
        cit:"- Freeze, t'es givré !.",
        Auteur:"Batman Begins ",
        Date:"Batman (2022)"

    },
    {
        cit:"La peur est un outil. Cette lumière qui déchire le ciel, ce n’est pas qu’un appel à l’aide. C’est un avertissement.",
        Auteur:"Batman ",
        Date:"Batman (2022)"

    },
    {
        cit:"- Pourquoi tombons nous Bruce ?  - … - Pour mieux apprendre à nous relever.",
        Auteur:"The Dark Knight: Le Chevalier Noir",
        Date:" Thomas Wayne à Bruce Wayne 8 ans (2005)"

    },
    {
        cit:"Des hommes tombent du ciel, les dieux crachent la foudre, des innoncents meurent. C’est comme cela que ça commence, monsieur. De la fureur, de la fièvre, un sentiment d’impuissance, qui rend les hommes bien… cruels.",
        Auteur:"Batman v Superman : l’aube de la justice,",
        Date:"Alfred à Batman (2016)"

    },
    
]

const cit1 = document.getElementById('cit1')
const cit2 = document.getElementById('cit2')
const cit3 = document.getElementById('cit3')

let indice = 0
setInterval(()=>{
    cit1.textContent=citation[indice].cit;
    cit2.textContent=citation[indice].Auteur;
    cit3.textContent=citation[indice].Date;
    if(indice < citation.length-1){
        indice++;
    } else{
        indice = 0;
    }
},3000)


const popbox = document.getElementById('envoyer')
const formulaire = document.getElementById('formulaire')

popbox.addEventListener('click',()=> {
    formulaire.innerHTML=`<div class="popbox pt-5 mt-5">
                                <h1 class="text-center pt-5 mt-5" >MESSAGE RECU </h1>
                      </div>`
})



// les api 


fetch("https://batman-api.herokuapp.com")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.question);
    })