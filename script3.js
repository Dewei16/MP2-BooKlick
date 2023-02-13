// Paypal function

let PayForm = document.querySelector('.paypal-form-container');

document.querySelector('#pay-btn').onclick = () =>{
    PayForm.classList.toggle('active');
}

document.querySelector('#clo-login-btn').onclick = () => {
    PayForm.classList.toggle('active');
}

// Gcash function

let GcashForm = document.querySelector('.gcash-form-container');

document.querySelector('#pay1-btn').onclick = () =>{
    GcashForm.classList.toggle('active');
}

document.querySelector('#gex-login-btn').onclick = () => {
    GcashForm.classList.toggle('active');
}



// Alert function

function imFunction() {
    alert('Thank you for buying, Keep Searching!')
  }
