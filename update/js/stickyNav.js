/* 
throttle scroll events to improve performance.

Reference: https://www.sitepoint.com/throttle-scroll-events/
"This implementation sets a time variable, which tracks when the function is first called. 
Each time the returned function is called it checks if the wait interval has passed and if so 
it fires the callback and resets time."
*/
function throttle(fn, wait) {
  let time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

// Get the left nav element
let navbar = document.getElementById('projects-nav');
// Get the offset position of the left nav
let sticky = navbar ? navbar.offsetTop : undefined;

window.addEventListener('scroll', throttle(function () {
	// Navbar is often being initialized too early so had to do it here too for the first scroll.
	if (!navbar) {
		navbar = document.getElementById('projects-nav');
		sticky = navbar.offsetTop;
	}

	if (window.pageYOffset >= sticky) {
	    $(navbar).addClass("sticky")
	} else {
	    $(navbar).removeClass("sticky");
	}

}, 50)); // 50 ms timeout
