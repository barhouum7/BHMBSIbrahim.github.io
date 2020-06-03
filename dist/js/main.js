// Select DOM Items
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')
// const secondarytext = document.querySelector('.secondary-text')
// const primarytext = document.querySelector('.primary-text')

// Set Initial State Of the Menu
let showMenu = false

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show')
        menuBranding.classList.add('show')
        navItems.forEach(item => item.classList.add('show'))

        // Set the Menu State
        showMenu = true
    } else {
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        menuBranding.classList.remove('show')
        navItems.forEach(item => item.classList.remove('show'))

        // Set the Menu State
        showMenu = false
    }
}

// Changing a new color For the Active Page

/* Get the first element of the nodelist for nav: */
let menuClick = document.getElementsByClassName('menu-nav')[0]

/* Attach an event listener
(note: changeActive not changeActive()).
This will use event delegation
to catch the events
that bubble up from the anchors. */
menuClick.addEventListener('click', changeActive, false)
/* Now Adding some Code to the function  */
function changeActive(event) {
    // Grab the active element
    let active = this.querySelector('li.active')
    // Remove the active class from that element
    active.classList.remove('active')
    // Add the active Class to the Current Clicked Element
    event.target.parentNode.classList.add('active')
}