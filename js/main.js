(function() {
  const navOpenClass = 'nav--open'

  const openNavButton = document.querySelector('.js-open-nav')
  const closeNavButton = document.querySelector('.js-close-nav')
  const nav = document.querySelector('.js-nav')

  const initialize = () => {
    addEventListeners()
  }

  const addEventListeners = () => {
    openNavButton.addEventListener('click', openNav)
    closeNavButton.addEventListener('click', closeNav)
  }

  const openNav = (e) => {
    nav.classList.add(navOpenClass)
  }

  const closeNav = (e) => {
    nav.classList.remove(navOpenClass)
  }

  initialize()
})()
