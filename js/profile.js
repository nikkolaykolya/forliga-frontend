const paymentMethodInput = document.getElementById('paymentMethodInput');
const paymentOptions = document.getElementsByClassName('profile__payment-options');
const paymentDrop = document.getElementById('paymentDrop');
const paymentMethodLabel = document.getElementById('paymentMethodLabel');

for (let i = 0; i < paymentOptions.length; i++) {
    paymentOptions[i].addEventListener('click', function (){
        paymentMethodInput.value = paymentOptions[i].innerHTML;
    })
}

paymentMethodInput.addEventListener('click', function (){
    paymentMethodLabel.classList.toggle('show');
})

// document.addEventListener('click', function (event){
//     if (event.target.id !== paymentMethodInput) {
//         paymentDrop.classList.remove('show');
//         console.log(event.target.id);
//     }
// })


