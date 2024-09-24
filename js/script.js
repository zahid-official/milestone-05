const mainBalance = document.getElementById('main-balance');
const donationButton = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');

const noakhaliDonation = document.getElementById('noakhali-donation');
const noakhaliInput = document.getElementById('noakhali-input');
const noakhaliButton = document.getElementById('noakhali-button');

const feniDonation = document.getElementById('feni-donation');
const feniInput = document.getElementById('feni-input');
const feniButton = document.getElementById('feni-button');

const quotaDonation = document.getElementById('quota-donation');
const quotaInput = document.getElementById('quota-input');
const quotaButton = document.getElementById('quota-button');







// noakhali donation
noakhaliButton.addEventListener('click',function(){
    const noakhaliValue = parseFloat(noakhaliInput.value);
    // validation
    if(isNaN(noakhaliValue) || noakhaliValue < 0) {
        return alert('Invalid Input');
    }
    
    noakhaliDonation.innerText = parseFloat(noakhaliDonation.innerText) + noakhaliValue;
    mainBalance.innerText = parseFloat(mainBalance.innerText) - noakhaliValue;
})



// feni donation
feniButton.addEventListener('click',function(){
    const feniValue = parseFloat(feniInput.value);
    // validation
    if(isNaN(feniValue) || feniValue < 0) {
        return alert('Invalid Input');
    }
    
    feniDonation.innerText = parseFloat(feniDonation.innerText) + feniValue;
    mainBalance.innerText = parseFloat(mainBalance.innerText) - feniValue;
})


// quota donation
quotaButton.addEventListener('click',function(){
    const quotaValue = parseFloat(quotaInput.value);
    // validation
    if(isNaN(quotaValue) || quotaValue < 0) {
        return alert('Invalid Input');
    }
    
    quotaDonation.innerText = parseFloat(quotaDonation.innerText) + quotaValue;
    mainBalance.innerText = parseFloat(mainBalance.innerText) - quotaValue;
})

