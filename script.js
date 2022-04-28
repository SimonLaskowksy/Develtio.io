const menuHamburger = document.querySelector('.toggle')
const mobileNavigation = document.querySelector('nav')
        
const responsiveMenu = () => {
    menuHamburger.classList.toggle('active')
    mobileNavigation.classList.toggle('active')
}

menuHamburger.addEventListener('click', responsiveMenu)