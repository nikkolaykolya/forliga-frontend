const currencyPlusInput = document.getElementById('currencyPlusInput');
const currencyPlusOptions = document.getElementsByClassName('balance__currency-plus-options');
const currencyPlusDrop = document.getElementById('currencyPlusDrop');
const currencyPlusLabel = document.getElementById('currencyPlusLabel');

for (let i = 0; i < currencyPlusOptions.length; i++) {
    currencyPlusOptions[i].addEventListener('click', function (){
        currencyPlusInput.value = currencyPlusOptions[i].innerHTML;
    })
}

currencyPlusInput.addEventListener('click', function (){
    currencyPlusLabel.classList.toggle('show');
})

const wayInput = document.getElementById('wayInput');
const wayOptions = document.getElementsByClassName('balance__way-options');
const wayDrop = document.getElementById('wayDrop');
const wayLabel = document.getElementById('wayLabel');

for (let i = 0; i < wayOptions.length; i++) {
    wayOptions[i].addEventListener('click', function (){
        wayInput.value = wayOptions[i].innerHTML;
    })
}

wayInput.addEventListener('click', function (){
    wayLabel.classList.toggle('show');
})


const balancePaymentMethodInput = document.getElementById('balancePaymentMethodInput');
const balancePaymentMethodOptions = document.getElementsByClassName('balance__payment-options');
const balancePaymentDrop = document.getElementById('balancePaymentDrop');
const balancePaymentMethodLabel = document.getElementById('balancePaymentMethodLabel');

for (let i = 0; i < balancePaymentMethodOptions.length; i++) {
    balancePaymentMethodOptions[i].addEventListener('click', function (){
        balancePaymentMethodInput.value = balancePaymentMethodOptions[i].innerHTML;
    })
}

balancePaymentMethodInput.addEventListener('click', function (){
    balancePaymentMethodLabel.classList.toggle('show');
})


const tradeCurrencyInput = document.getElementById('tradeCurrencyInput');
const tradeCurrencyOptions = document.getElementsByClassName('balance__trade-currency-options');
const tradeCurrencyDrop = document.getElementById('tradeCurrencyDrop');
const tradeCurrencyLabel = document.getElementById('tradeCurrencyLabel');

for (let i = 0; i < tradeCurrencyOptions.length; i++) {
    tradeCurrencyOptions[i].addEventListener('click', function (){
        tradeCurrencyInput.value = tradeCurrencyOptions[i].innerHTML;
    })
}

tradeCurrencyInput.addEventListener('click', function (){
    tradeCurrencyLabel.classList.toggle('show');
})