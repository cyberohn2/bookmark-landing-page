// TOGGLING MOBILE MENU
const menuBtn = document.querySelector('.menu-btn')
const pageHeader = document.querySelector('.page-header')
const logo = document.querySelector('.logo')
menuBtn.addEventListener('click', e =>{
    e.preventDefault()
    let hidden = pageHeader.getAttribute('aria-hidden')
    if (hidden == 'true') {
        pageHeader.setAttribute('aria-hidden', 'false')
        menuBtn.setAttribute('src','./images/icon-close.svg')
        logo.setAttribute('src', './images/logo-bookmark - MOBILE MENU.svg')
    } else {
        pageHeader.setAttribute('aria-hidden', 'true')
        menuBtn.setAttribute('src','./images/icon-hamburger.svg')
        logo.setAttribute('src', './images/logo-bookmark.svg')
    }
})
// SWITCHING TABS
const tabBtns = Array.from(document.querySelectorAll('.tab-btns-container button'))
const tabs = document.querySelectorAll('.tab')
tabBtns.forEach((btn,index) =>{
    btn.addEventListener('click', () =>{
        removeActive(tabBtns)
        removeActive(tabs)
        btn.classList.add('active')
        tabs[index].classList.add('active')
    })
})
function removeActive(array) {
    array.forEach(el =>{
        el.classList.remove('active')
    })
}
// TOGGLING FAQS
const faqs = document.querySelectorAll('.faq-item')
faqs.forEach(faq =>{
    faq.addEventListener('click', e =>{
        faq.classList.toggle('active')
    })
})
// VALIDATING USER INPUT 
const NLform = document.querySelector('.newsletter-form')
const userInput = document.querySelector('#user-input')
const inputControl = document.querySelector('.input-control')
NLform.addEventListener('submit', e => {
    e.preventDefault()
    let isvalid = userInput.value == ''
    isvalid ? setError(inputControl): setSucces(inputControl)
})
function setSucces(element) {
    element.classList.remove('error')
}
function setError(element) {
    element.classList.add('error')
}