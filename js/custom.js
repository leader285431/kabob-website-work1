

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  // var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // // Check if there are any nav burgers
  // if ($navbarBurgers.length > 0) {

  //   // Add a click event on each of them
  //   $navbarBurgers.forEach(function ($el) {
  //     $el.addEventListener('click', () => {

  //       // Get the target from the "data-target" attribute
  //       var target = $el.dataset.target;
  //       var $target = document.getElementById(target);

  //       // Toggle the class on both the "navbar-burger" and the "navbar-menu"
  //       $el.classList.toggle('is-active');
  //       $target.classList.toggle('is-active');

  //     });
  //   });
  // }

  ////////////
  // navbar //
  ////////////

  window.addEventListener("scroll", function(){
    var getNavs = Array.from(document.getElementsByClassName("hero_navbar"));

    if (window.scrollY > 590) {
        getNavs[0].classList.add( 'navbar__js-active' )
    } else {
        getNavs[0].classList.remove( 'navbar__js-active' );
      }
  });
});