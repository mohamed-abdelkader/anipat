let openMenu = document.querySelector('.mega_menu'),
    btnMenu = document.querySelector('.btn_menu');

btnMenu.onclick = function () {
  'use strict';
  openMenu.classList.toggle('open');

}
// $(function () {
//   $('.btn_menu').on('click', function () {
//     $('.mega_menu').slideToggle();
//   });
// });

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
});



var myNav = document.querySelector('.header_area_bottom');

window.onscroll = function () {
  'use strict';
  if(window.pageYOffset >= 250) {
    myNav.classList.add('sticy');
  } else {
    myNav.classList.remove('sticy');
  }
}
