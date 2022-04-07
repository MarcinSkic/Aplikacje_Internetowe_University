const coursesMenu = document.querySelector('.coursesMenu');
const aside = document.querySelector('aside');
const navButtons = document.querySelectorAll('.nav');

coursesMenu.addEventListener('click',event => {
    aside.classList.toggle('visible');
    event.target.classList.toggle('active');
});

navButtons.forEach(activateButton);

function activateButton(link){
    if(window.location.href.includes(link.href)){
        link.classList.toggle('active');

        if(link.classList.contains('nested')){
            link.parentNode.parentNode.parentNode.childNodes[0].classList.toggle('active');
        }
    }
}