
function initMap() {
  const loc = {lat: 44.837004, lng: 11.601539};
  const map = new google.maps.Map(document.querySelector('.map'), {
      center: loc,
      zoom: 18
    });
  const marker = new google.maps.Marker({position: loc, map: map});

}

window.addEventListener('scroll', function(){
  if(window.scrollY > 150) {
    var navbar = $('#navbar').addClass("is-scrolled");
  } else {
    var navbar = $('#navbar').removeClass("is-scrolled");
  }
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#navbar a, .btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
