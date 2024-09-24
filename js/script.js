// navbar
const blogButton = document.getElementById('blog-button');
const mainBalance = document.getElementById('main-balance');
const donationButton = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');

// donation & history
const donationArea = document.getElementById('donation-area');
const historyArea = document.getElementById('history-area');
const donationHistory = document.getElementById('donation-history');

// noakhali
const noakhaliDonation = document.getElementById('noakhali-donation');
const noakhaliInput = document.getElementById('noakhali-input');
const noakhaliButton = document.getElementById('noakhali-button');

// feni
const feniDonation = document.getElementById('feni-donation');
const feniInput = document.getElementById('feni-input');
const feniButton = document.getElementById('feni-button');

// quota
const quotaDonation = document.getElementById('quota-donation');
const quotaInput = document.getElementById('quota-input');
const quotaButton = document.getElementById('quota-button');




// button: blog
blogButton.addEventListener('click', function(){
    window.location.href = './pages/blog.html';
})

// button: donation
donationButton.addEventListener('click', function(){
    donationButton.style.backgroundColor = '#b4f461';
    historyButton.style.backgroundColor = '#1111110D';

    donationArea.classList.remove('hidden');
    historyArea.classList.add('hidden');
})

// button: history
historyButton.addEventListener('click', function(){
    historyButton.style.backgroundColor = '#b4f461';
    donationButton.style.backgroundColor = '#1111110D';

    donationArea.classList.add('hidden');
    historyArea.classList.remove('hidden');
})



// noakhali donation
noakhaliButton.addEventListener('click', function(){
    const noakhaliValue = parseFloat(noakhaliInput.value);
    // validation
    if(isNaN(noakhaliValue) || noakhaliValue < 1) {
        return alert('Invalid Input');
    }
    else if(parseFloat(mainBalance.innerText) < noakhaliValue){
        return alert('Insufficient balance. Please add funds to continue.')
    }
    
    // count donation
    noakhaliDonation.innerText = parseFloat(noakhaliDonation.innerText) + noakhaliValue;
    mainBalance.innerText = parseFloat(mainBalance.innerText) - noakhaliValue;

    // donation history
    donationHistory.innerHTML += 
    `<li class="space-y-3 border rounded-xl p-8 my-8 mx-4">
        <p class="text-xl font-semibold">${noakhaliValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
        <p class="text-secondary">Date : ${new Date()}</p>
    </li>`;

    // modal
    my_modal_5.showModal();
})



// feni donation
feniButton.addEventListener('click', function(){
    const feniValue = parseFloat(feniInput.value);
    // validation
    if(isNaN(feniValue) || feniValue < 1) {
        return alert('Invalid Input');
    }
    else if(parseFloat(mainBalance.innerText) < feniValue){
        return alert('Insufficient balance. Please add funds to continue.')
    }
    
    // count donation
    feniDonation.innerText = parseFloat(feniDonation.innerText) + feniValue;
    mainBalance.innerText = parseFloat(mainBalance.innerText) - feniValue;

    // donation history
    donationHistory.innerHTML += 
    `<li class="space-y-3 border rounded-xl p-8 my-8 mx-4">
        <p class="text-xl font-semibold">${feniValue} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
        <p class="text-secondary">Date : ${new Date()}</p>
    </li>`;

    // modal
    my_modal_5.showModal();
})



// quota donation
quotaButton.addEventListener('click', function(){
    const quotaValue = parseFloat(quotaInput.value);
    // validation
    if(isNaN(quotaValue) || quotaValue < 1) {
        return alert('Invalid Input');
    }
    else if(parseFloat(mainBalance.innerText) < quotaValue){
        return alert('Insufficient balance. Please add funds to continue.')
    }
    
    // count donation
    quotaDonation.innerText = parseFloat(quotaDonation.innerText) + quotaValue;
    mainBalance.innerText = parseFloat(mainBalance.innerText) - quotaValue;

    // donation history
    donationHistory.innerHTML += 
    `<li class="space-y-3 border rounded-xl p-8 my-8 mx-4">
        <p class="text-xl font-semibold">${quotaValue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p class="text-secondary">Date : ${new Date()}</p>
    </li>`;

    // modal
    my_modal_5.showModal();
})