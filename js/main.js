const gamesSearch = document.getElementById("gamesSearch");
const gamesSearchDrop = document.getElementById("gamesSearchDrop");

gamesSearch.addEventListener('focus', function (){
    if (document.activeElement === gamesSearch) {
        gamesSearchDrop.classList.add("show");
    }
});

gamesSearch.addEventListener('blur', function (){
    gamesSearchDrop.classList.remove("show");
});


const chatForm = document.getElementById("chatForm");
const contacts = document.getElementById("contacts");
const chatExit = document.getElementById("chatExit");
const chatSubmit = document.getElementById("chatSubmit");

contacts.addEventListener('click', function () {
    chatForm.classList.add("show");
    document.body.style.overflow = 'hidden';
})

chatExit.addEventListener('click', function () {
    chatForm.classList.remove("show");
    document.body.style.overflow = 'unset';
})

chatSubmit.addEventListener('click', function (){
    chatForm.classList.remove("show");
    document.body.style.overflow = 'unset';
})

const startPopup = document.getElementById("startPopup");
const startBtn = document.getElementById("startBtn");
const startExit = document.getElementById("startExit");


startBtn.addEventListener('click', function () {
    startPopup.classList.add("show");
    document.body.style.overflow = 'hidden';
})

startExit.addEventListener('click', function () {
    startPopup.classList.remove("show");
    document.body.style.overflow = 'unset';
})
