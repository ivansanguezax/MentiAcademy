/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor:true,
    centeredSlides: true,
    slidesPreView: 'auto',
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item');
accordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector('.value__accordion-header');

    accordionHeader.addEventListener('click', ()=>{
        const openItem = document.querySelector('.accordion-open')
        toogleItem(item)

        if(openItem && openItem!== item){
            toogleItem(openItem)
        }
    })
});

const toogleItem = (item)=>{
    const accordionContent = item.querySelector('.value__accordion-content');
    
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px' 
        item.classList.add('accordion-open');
    }
}



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
// variables
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//seleccion previa
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//obtencion del tema
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


if (selectedTheme) {
  //validacion
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    // añadir o sacar boton 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Guardamos la eleccion del usuario
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset:true
})

sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`);
sr.reveal(`.home__description, .footer__info`, { delay:500});
sr.reveal(`.home__search`, { delay:600});
sr.reveal(`.home__value`, { delay:700});
sr.reveal(`.home__images`, { delay:800, origin:'bottom'});
sr.reveal(`.logos__img`,{interval:100});
sr.reveal(`.value__images, .contact__content`,{origin:'left'});
sr.reveal(`.value__content, .contact__images`,{origin:'rigth'});