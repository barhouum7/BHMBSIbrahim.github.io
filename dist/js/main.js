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


const blocksContainer = document.querySelector('.projects')

const projectBlocks = Array.from(blocksContainer.children)

const projectBlocksOrderRange = [...Array(projectBlocks.length).keys()]

// Add Order CSS Property To Project Blocks.

    // Add A mouseover Event
    function showModal(projectBlocks, message) {
        projectBlocks.addEventListener('click', () => {
            setTimeout(() => {
                // Launching The Modal Box When focus on Cards 
            document.querySelector('.modal-content p').innerHTML = message
            // Creating the Modal's Variable
            // Get the modal
            var modal = document.getElementById("myModal");
    
            // Get the button that opens the modal
            // var btn = document.getElementById("myBtn");
    
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
    
    
            // When the user clicks on the button, open the modal
            // btn.onclick = function() {
                modal.style.display = "block";
            // }
    
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }
    
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            }, 500)
        })
    }

    showModal(projectBlocks[0], '<div align="center"><h4>I developed the famous memory game. <br />You are given a set of cards with pictures that are flipped back, when you click on an image, it flips over and reveals the image. If you click on two exactly the same pics, that is a win-win for you.</h4> <h2>Technologies used 👨‍💻</h2> <h4>HTML5, CSS3 and JavaScript.</h4></div>')
    showModal(projectBlocks[1], '<div align="center"><h4>This is a phone book using bash scripting that lets us perform simple phone book operations like our cell phones. It is a BASH script that can be used to add, view, edit, search, and remove phone directory related records.<br /><br />Personal information such as first name, father`s name, gender, phone number, email, and address are requested while adding a record in the phone book. These records can then be modified, inserted, searched for, and removed.<br /><br />I`ve Used NoSQL MongoDB Atlas as free cloud database service, deployed and fully managed over AWS.<br /><br />Adding, inserting, modifying, and updating new records, searching for saved contacts, and deleting phone book records, these operations are the basic functions that form up the main menu of this phone book script</h4><h2>Technologies used 👨‍💻</h2> <h4>shell, mongodb, bash-script, crud-operations, mongodb-atlas, mongoshell</h4></div>')
    showModal(projectBlocks[2], '<div align="center"><h4>This is a Neumorphic styled Tic Tac Toe Game using JavaScript. And I will make it better by turning it to a AI Game using the Minimax Algorithm. Neumorphism is a recent UI design trend. It’s also called “Soft UI”. It’s designs appear to extrude from the background.</h4><h2>Technologies used 👨‍💻</h2> <h4>HTML5, CSS3, SASS, JavaScript, NodeJS, npm-package, css-grid, css-flexbox</h4></div>')
    showModal(projectBlocks[3], '<div align="center"><h4>This is a Neumorphic styled calculator. (Neumorphism is a recent UI design trend).</h4><h2>Technologies used 👨‍💻</h2> <h4>HTML5, CSS3, SASS, JavaScript, NodeJS, npm-package, css-grid, css-flexbox</h4></div>')
    showModal(projectBlocks[4], '<div align="center"><h4>I`ve built a website project example to cover all information about coffee.</h4><h2>Technologies used 👨‍💻</h2> <h4>HTML5 and CSS3.</h4></div>')
    showModal(projectBlocks[5], '<div align="center"><h4>I have created an example of a travel journal website.</h4><h2>Technologies used 👨‍💻</h2> <h4>HTML5 and CSS3.</h4></div>')