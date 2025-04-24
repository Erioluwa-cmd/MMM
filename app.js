document.querySelector(".year").innerHTML = new Date().getFullYear()


const menu_btn = document.querySelector(".menu-btn")

menu_btn.addEventListener("click", show)
const nav = document.querySelector(".div-11")

function show(){

    
    nav.classList.toggle("show-catergory")

    menu_btn.classList.toggle("chng-menu-btn")
}

const view = document.querySelector(".view")
const contact = document.querySelector(".contact")
const contact_us = document.querySelector(".contact-us")
const display_nav = document.querySelector(".section")
const view_product = document.querySelector(".view-product")

view.addEventListener("click", function(event){
    event.preventDefault()
    display_nav.style.display = "flex"
    view_product.style.display = "none"
    nav.classList.toggle("show-catergory")
    menu_btn.classList.toggle("chng-menu-btn")

})

contact.addEventListener("click", function(event){
    event.preventDefault()
    display_nav.style.display = "none"
    view_product.style.display = "flex"
    nav.classList.toggle("show-catergory")
    menu_btn.classList.toggle("chng-menu-btn")
})

contact_us.addEventListener("click", function(event){
    event.preventDefault()
    display_nav.style.display = "none"
    view_product.style.display = "flex"
    nav.classList.toggle("show-catergory")
    menu_btn.classList.toggle("chng-menu-btn")
})