window.email;

function showMailChimpSignup(event) {
  document.getElementById('email-signup').className = 'show';
}

function hideMailChimpSignup(event) {
  document.getElementById('email-signup').className = '';
}

function next_slide() {
  galerie.next();
  updateTracker();
}

function previous_slide() {
  galerie.prev();
  updateTracker();
}

function updateTracker() {
  var state = galerie.state();
  console.log(state);
  $('.galerie-tracker').removeClass('on');
  $('.galerie-tracker').each(function() {
    if(parseInt($(this).attr('data-galerie-id')) === state['current-slide']-1) {
      $(this).addClass('on');
    }
  });
}

$(document).ready(function() {
  galerie.init();
});