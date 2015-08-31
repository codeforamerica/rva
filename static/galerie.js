var galerie = (function(){
  /////////////////////////////////
  // GLOBALS
  /////////////////////////////////
  var rotatorTimer;

  /////////////////////////////////
  // INITIALIZE
  /////////////////////////////////
  function init() {
    console.log('galerie initialized!');
    setupTracker();
  }
  var speed = 500;
  var interval = 3000;

  function setupTracker() {
    $('.galerie .item').each(function(e) {
      var tracker = document.createElement('div');
      tracker.className = 'galerie-tracker';
      if(!e) { tracker.className += ' on'; }
      tracker.setAttribute('data-galerie-id', e);
      document.getElementById('galerie-tracker-wrapper').appendChild(tracker);
    });
  }

  /////////////////////////////////
  // START THE BANNER
  /////////////////////////////////
  function setBannerRotation() {
    if($('.galerie .item').length > 1) {
      $('.galerie .item').hide().eq(0).show();
      rotatorTimer = setTimeout(function() { rotateBanner(1); }, interval);
    }
  }

  /////////////////////////////////
  // NEXT
  /////////////////////////////////
  function next() {
    var s = getSliderState();
      if(s['current-slide']===s['total-slides']) {
        rotateBanner(0);
      } else {
        rotateBanner(s['current-slide']);
      }
  }

  /////////////////////////////////
  // PREVIOUS
  /////////////////////////////////
  function prev() {
    var s = getSliderState();
    if(s['current-slide']!=1) {
      rotateBanner(s['current-slide']-2);
    } else {
      rotateBanner(s['total-slides']-1);
    }
  }

  /////////////////////////////////
  // CAROUSEL STATE
  /////////////////////////////////
  /*
  Returns the current state of the slider and necessary data when invoked.
  Used in next() and prev() to get data for pushing to the next slide from current.
  Can be used in the API via slippyslide.state(); to return information for extending the slider
  */
  function getSliderState() {
    var current = $('.item.on');
    var slides = $('.item').length;
    var slide = $('.item').index(current) + 1;
    var s = {
      'total-slides': slides,
      'current-slide': slide
    };
    return s;
  }

  /////////////////////////////////
  // BANNER ROTATER
  /////////////////////////////////
  function rotateBanner(num){
    // clear current slider timer
    clearTimeout(rotatorTimer);

    // fade out current slide
    $('.galerie .on').removeClass('on').fadeOut(speed);

    // fade in next item based on num
    $('.galerie .item').eq(num).addClass('on').fadeIn(speed);

    // change num to the next slide, or reset to zero if current slide is the last
    num = (num+1 == $('.galerie .item').length) ? 0: num+1;

    // set a new timer to continue the slider
    // rotatorTimer = setTimeout(function() { rotateBanner(num); }, interval);
  }

  /////////////////////////////////
  // ERROR HANDLER
  /////////////////////////////////
  function err(error) {
    console.log(error);
  }

  /////////////////////////////////
  // RETURN STATES for PUBLIC API
  /////////////////////////////////
  return {
    init: init,
    next: next,
    prev: prev,
    state: getSliderState,
    err: err
  };

})();