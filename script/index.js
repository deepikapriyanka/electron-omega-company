
jQuery(document).ready(function($) {

  $('#myslider').bjqs({
    animtype      : 'fade',
    height        : 445,
    width         : 975,
    responsive    : true,
    randomstart   : true,
    animduration  : 450,
    animspeed : 4000,
    nexttext : '&gt',
    prevtext : '&lt',
    hoverpause : false,
    showmarkers : false
  });

});
