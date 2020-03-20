/*
  website Name: anipat

  auther: Mohaemd Abdelkader

  contact Us : mohamedabdelkader.fed@gmail.com
*/

/*
==========================================================================*/


/*sticky Navbar in top when scrolling*/

var myNav = document.querySelector('.header_area_bottom');

window.onscroll = function () {
  'use strict';
  if(window.pageYOffset >= 250) {
    myNav.classList.add('sticky');
  } else {
    myNav.classList.remove('sticky');
  }
}

/*
=====================================================*/

/* Open menu and close when press click on menu icon */

let openMenu = document.querySelector('.mega_menu'),
    btnMenu = document.querySelector('.btn_menu');

btnMenu.onclick = function () {
  if (openMenu.style.maxHeight){
  openMenu.style.maxHeight = null;
  } else {
  openMenu.style.maxHeight = '350px';
  }
}

/*
=====================================================*/

/* accordin link*/

var mobileDrop = document.getElementsByClassName('mobile_drop'),
    i;
for (i = 0; i < mobileDrop.length; i++) {
  mobileDrop[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
  });
}


/*
=====================================================*/
/*code owlCarousel*/

$(document).ready(function (){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:100,
    items:1,
    autoplay:true,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
  });
});
