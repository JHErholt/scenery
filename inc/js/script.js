
// Menu functions for switching pages
function page_1_btn() {
    // Giving the pressed link an active color,
    // while removing active from the other links
    document.getElementById('menu-item-1').classList.add('menu__item-active')
    document.getElementById('menu-item-2').classList.remove('menu__item-active')
    document.getElementById('menu-item-3').classList.remove('menu__item-active')
    document.getElementById('footer__menu-item-1').classList.add('footer__menu-item-active')
    document.getElementById('footer__menu-item-2').classList.remove('footer__menu-item-active')
    document.getElementById('footer__menu-item-3').classList.remove('footer__menu-item-active')
    // Making the page of the pressed link active,
    // while making the other pages hidden
    document.getElementById('page1').classList.add('active')
    document.getElementById('page1').classList.remove('hidden')
    document.getElementById('page2').classList.add('hidden')
    document.getElementById('page2').classList.remove('active')
    document.getElementById('page3').classList.add('hidden')
    document.getElementById('page3').classList.remove('active')
}
function page_2_btn() {
    document.getElementById('menu-item-1').classList.remove('menu__item-active')
    document.getElementById('menu-item-2').classList.add('menu__item-active')
    document.getElementById('menu-item-3').classList.remove('menu__item-active')
    document.getElementById('footer__menu-item-1').classList.remove('footer__menu-item-active')
    document.getElementById('footer__menu-item-2').classList.add('footer__menu-item-active')
    document.getElementById('footer__menu-item-3').classList.remove('footer__menu-item-active')

    document.getElementById('page1').classList.add('hidden')
    document.getElementById('page1').classList.remove('active')
    document.getElementById('page2').classList.add('active')
    document.getElementById('page2').classList.remove('hidden')
    document.getElementById('page3').classList.add('hidden')
    document.getElementById('page3').classList.remove('active')
}
function page_3_btn() {
    document.getElementById('menu-item-1').classList.remove('menu__item-active')
    document.getElementById('menu-item-2').classList.remove('menu__item-active')
    document.getElementById('menu-item-3').classList.add('menu__item-active')
    document.getElementById('footer__menu-item-1').classList.remove('footer__menu-item-active')
    document.getElementById('footer__menu-item-2').classList.remove('footer__menu-item-active')
    document.getElementById('footer__menu-item-3').classList.add('footer__menu-item-active')

    document.getElementById('page1').classList.add('hidden')
    document.getElementById('page1').classList.remove('active')
    document.getElementById('page2').classList.add('hidden')
    document.getElementById('page2').classList.remove('active')
    document.getElementById('page3').classList.add('active')
    document.getElementById('page3').classList.remove('hidden')
}