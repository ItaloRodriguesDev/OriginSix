/*  abre e fecha o menu quando clica no icone de menu*/


const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/*  quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

    for (const link of links) {
        link.addEventListener('click', function(){
            nav.classList.remove('show')
        })
    }



    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    function changeHeaderWhenScroll() {
        
        if (window.scrollY >= navHeight) {
            //scroll é maior eu a altura do header
            header.classList.add('scroll')
        } else {
            //scroll é menor que a altura do header
            header.classList.remove('scroll')
        }
    }



    /*------------TESTIMONIALS CARROUSEL, SLIDER SWIPER -------------*/
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination'
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
            767: {
              slidesPerView: 2,
              setWrapperSize: true
            }
        }
      })

      /* ScrollReveal: Mostrar elementos quando dre scroll na página */

    const scrollReveal = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 800,
        reset: true
    })

      scrollReveal.reveal(
          `#home .image, #home .text,
          #about .image, #about .text,
          #services header, #services .card,
          #testimonials header, #testimonials .testimonials
          #contact .text, #contact .links,
          footer .brand, footer .social
          `,
          {interval: 100}
          )


/* BOTÃO VOLTAR PARA O TOPO -- BACK_TO_TOP --*/


const backToTopButton = document.querySelector('.back_to_top')
function back_to_top () {

    if (window.scrollY >= 300) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

      /*Menu ativo conforme a seção visivel na página */
      const sections = document.querySelectorAll ('main section[id]')
      function activateMenuAtCurrentSection () {

          const chekpoint = window.pageYOffset + (window.innerHeight / 8) * 4

          for (const section of sections) {
              const sectionTop = section.offsetTop
              const sectionHeight = section.offsetHeight
              const sectionId = section.getAttribute('id')

              const chekpointStart = chekpoint >= sectionTop
              const chekpointEnd = chekpoint <= sectionTop + sectionHeight

              if (chekpointStart && chekpointEnd) {
                document
                    .querySelector('nav ul li a[href*=' + sectionId + ']')
                    .classList.add('active')
              } else {
                document
                    .querySelector('nav ul li a[href*=' + sectionId + ']')
                    .classList.remove('active')

              }
          }
          
      }


window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    back_to_top()
    activateMenuAtCurrentSection ()
    
})