const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.getElementById('burgerMenu');

burgerBtn.addEventListener('click', function (){
    burgerBtn.classList.toggle('cross');
    burgerMenu.classList.toggle('show');
    if (burgerBtn.classList.contains('cross')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
})
