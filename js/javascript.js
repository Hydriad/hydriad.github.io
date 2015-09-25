//smooth scrolling up and down!
//source: https://css-tricks.com/snippets/jquery/smooth-scrolling/

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          //the top - # sets it that # of pixels above div
          scrollTop: target.offset().top-69
        }, 500);
        return false;
      }
    }
  });
});
//end smooth scrolling code

//setting height of relative element to height of absolute landing (window):
$(function() {
  //assigns height of absolutelanding to height of window
  $("#absolutelanding").height( $(window).height());
  //assigns relatively-positioned section1 to height of absolutelanding
  $("#section1").height($("#absolutelanding").height());
});
//jquery height reference: https://api.jquery.com/height/
//end setting height

//TRYAING AGAIIN
$(document).ready(function(){
     $(window).bind('scroll', function() {
     var navHeight = $( window ).height();
       if ($(window).scrollTop() > navHeight-72) {
          $('#navfixed').addClass('vis');
          //$('#navfixed').removeClass('notvis');
       }
       else {
          $('#navfixed').removeClass('vis');
          //$('#navfixed').addClass('notvis');
       }
    });
  });





//DEBOUNCING
//var myEfficientFn = debounce(function() {
  // All the taxing stuff you do
//}, 50);
//window.addEventListener('resize', myEfficientFn);

//Debounce code
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};