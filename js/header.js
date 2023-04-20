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

const enterPopup = document.getElementById("enterPopup");
const enter = document.getElementById("enter");
const enterExit = document.getElementById("enterExit");


enter.addEventListener('click', function () {
    enterPopup.classList.add("show");
    document.body.style.overflow = 'hidden';
})

enterExit.addEventListener('click', function () {
    enterPopup.classList.remove("show");
    document.body.style.overflow = 'unset';
})

const mailFormEnterBtn = document.getElementById("mailFormEnterBtn");
const smsFormEnterBtn = document.getElementById("smsFormEnterBtn");
const mailEnterForm = document.getElementById("mailEnterForm");
const smsEnterForm = document.getElementById("smsEnterForm");


mailFormEnterBtn.addEventListener('click', function (){
    mailEnterForm.classList.add('active');
    smsEnterForm.classList.remove('active');
    mailFormEnterBtn.classList.add('active');
    smsFormEnterBtn.classList.remove('active');
})

smsFormEnterBtn.addEventListener('click', function (){
    smsEnterForm.classList.add('active');
    mailEnterForm.classList.remove('active');
    smsFormEnterBtn.classList.add('active');
    mailFormEnterBtn.classList.remove('active');
})


const registrationPopup = document.getElementById("registrationPopup");
const registration = document.getElementById("registration");
const registrationExit = document.getElementById("registrationExit");


registration.addEventListener('click', function () {
    registrationPopup.classList.add("show");
    document.body.style.overflow = 'hidden';
})

registrationExit.addEventListener('click', function () {
    registrationPopup.classList.remove("show");
    document.body.style.overflow = 'unset';
})


const mailFormRegistrationBtn = document.getElementById("mailFormRegistrationBtn");
const smsFormRegistrationBtn = document.getElementById("smsFormRegistrationBtn");
const mailRegistrationForm = document.getElementById("mailRegistrationForm");
const smsRegistrationForm = document.getElementById("smsRegistrationForm");


mailFormRegistrationBtn.addEventListener('click', function (){
    mailRegistrationForm.classList.add('active');
    smsRegistrationForm.classList.remove('active');
    mailFormRegistrationBtn.classList.add('active');
    smsFormRegistrationBtn.classList.remove('active');
})

smsFormRegistrationBtn.addEventListener('click', function (){
    smsRegistrationForm.classList.add('active');
    mailRegistrationForm.classList.remove('active');
    smsFormRegistrationBtn.classList.add('active');
    mailFormRegistrationBtn.classList.remove('active');
})
