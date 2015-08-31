window.email;

function showMailChimpSignup(event) {
  document.getElementById('email-signup').className = 'show';
}

function hideMailChimpSignup(event) {
  document.getElementById('email-signup').className = '';
}

function next_slide() {
  galerie.nextItem();
  updateTracker();
}

function previous_slide() {
  galerie.previousItem();
  updateTracker();
}

function updateTracker() {
  var state = galerie.getState();
  var id = state.currentElem.getAttribute('data-galerie');
  var trackers = document.getElementsByClassName('galerie-tracker');
  for (var i = 0; i < trackers.length; i++) {
    trackers[i].className = 'galerie-tracker';
    if(parseInt(trackers[i].getAttribute('data-galerie-id')) == id) {
      console.log('found a match!');
      trackers[i].className += ' on';
    }
  }
}

function createTrackers() {
  for (var i = 0; i < galerie.items.length; i++) {
    var tracker = document.createElement('div');
    tracker.className = 'galerie-tracker';
    if(!i) { tracker.className += ' on'; }
    tracker.setAttribute('data-galerie-id', i);
    document.getElementById('galerie-tracker-wrapper').appendChild(tracker);
  }
}

window.onload = function() {
  galerie.init();
  createTrackers();
}