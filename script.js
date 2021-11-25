window.addEventListener("scroll", () => {
    let events = document.querySelector('.club2');
    let eventsPosition = events.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(eventsPosition < screenPosition){
        events.classList.add("active-club2");
    }
})
window.addEventListener("scroll", () => {
    let sports = document.querySelector('.club3');
    let sportsPosition = sports.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(sportsPosition < screenPosition){
        sports.classList.add("active-club3");
    }
})

window.addEventListener("scroll", () => {
    let firstbox = document.querySelector('.box-1');
    let firstboxPosition = firstbox.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(firstboxPosition < screenPosition){
        firstbox.classList.add("active-box1");
    }
})
window.addEventListener("scroll", () => {
    let secondbox = document.querySelector('.box-2');
    let secondboxPosition = secondbox.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(secondboxPosition < screenPosition){
        secondbox.classList.add("active-box2");
    }
})
window.addEventListener("scroll", () => {
    let thirdbox = document.querySelector('.box-3');
    let thirdboxPosition = thirdbox.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(thirdboxPosition < screenPosition){
        thirdbox.classList.add("active-box3");
    }
})

window.addEventListener("scroll", () => {
    let faculty = document.querySelector('.column1-row1-animation');
    let facultyPosition = faculty.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(facultyPosition  < screenPosition){
        faculty.classList.add("active-faculty");
    }
})
window.addEventListener("scroll", () => {
    let faculty3 = document.querySelector('.column1-row2-animation');
    let faculty3Position = faculty3.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(faculty3Position  < screenPosition){
        faculty3.classList.add("active-faculty3");
    }
})
window.addEventListener("scroll", () => {
    let faculty5 = document.querySelector('.column1-row3-animation');
    let faculty5Position = faculty5.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(faculty5Position  < screenPosition){
        faculty5.classList.add("active-faculty5");
    }
})
window.addEventListener("scroll", () => {
    let faculty2 = document.querySelector('.column2-animation1');
    let faculty2Position = faculty2.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(faculty2Position  < screenPosition){
        faculty2.classList.add("active-faculty2");
    }
})
window.addEventListener("scroll", () => {
    let faculty4 = document.querySelector('.column2-animation2');
    let faculty4Position = faculty4.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(faculty4Position  < screenPosition){
        faculty4.classList.add("active-faculty4");
    }
})
window.addEventListener("scroll", () => {
    let faculty6 = document.querySelector('.column2-animation3');
    let faculty6Position = faculty6.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(faculty6Position  < screenPosition){
        faculty6.classList.add("active-faculty6");
    }
})

window.addEventListener("scroll", () => {
    let info1 = document.querySelector('.global');
    let info1Position = info1.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(info1Position < screenPosition){
        info1.classList.add("active-global");
    }
})
window.addEventListener("scroll", () => {
    let info2 = document.querySelector('.employability');
    let info2Position = info2.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(info2Position < screenPosition){
        info2.classList.add("active-employability");
    }
})
window.addEventListener("scroll", () => {
    let info3 = document.querySelector('.experience');
    let info3Position = info3.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(info3Position < screenPosition){
        info3.classList.add("active-experience");
    }
})


window.addEventListener("scroll", () => {
    let notice = document.querySelector('.notice-animation');
    let noticePosition = notice.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(noticePosition  < screenPosition){
        notice.classList.add("active-notice");
    }
})

window.addEventListener("scroll", () => {
    let presidentRight = document.querySelector('.president-text');
    let presidentRightPosition = presidentRight.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(presidentRightPosition < screenPosition){
        presidentRight.classList.add("active-src");
    }
})

const sidebar = document.querySelector('.navbar-bars');
const sidebarMenu = document.querySelector('.mobile-view');
const mobileMenu = () => {
    sidebarMenu.classList.toggle('is-active');
    console.log('yes');
}
sidebar.addEventListener("click", mobileMenu);