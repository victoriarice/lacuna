(function() {
  const navOpenClass = 'nav--open'
  const navListClass = 'js-nav-list'

  const openNavButton = document.querySelector('.js-open-nav')
  const closeNavButton = document.querySelector('.js-close-nav')
  const nav = document.querySelector('.js-nav')

  const initialize = () => {
    addEventListeners()
  }

  const addEventListeners = () => {
    openNavButton.addEventListener('click', openNav)
    nav.addEventListener('click', onNavClick)
  }

  const onNavClick = (e) => {
    if (!e.target.classList.contains(navListClass)) {
      closeNav()
    }
  }

  const openNav = () => {
    nav.classList.add(navOpenClass)
  }

  const closeNav = () => {
    nav.classList.remove(navOpenClass)
  }

  initialize()
})()
