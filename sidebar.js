const sidebar = document.querySelector('.navbar-bars');
const sidebarMenu = document.querySelector('.mobile-view');
const mobileMenu = () => {
    sidebarMenu.classList.toggle('is-active');
    console.log('yes');
}
sidebar.addEventListener("click", mobileMenu);