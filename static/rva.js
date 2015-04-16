window.email;

function init() {
  console.log('waka');
}

function showMailChimpSignup(event) {
  document.getElementById('email-signup').className = 'show';
}

function hideMailChimpSignup(event) {
  document.getElementById('email-signup').className = '';
}

window.onload = init();