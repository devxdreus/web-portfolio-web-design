$(document).ready(function () {

  let $btns = $('.project-area .button-group button');

  // isotope
  $btns.click(function (e) {

    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter: selector
    });

    return false;

  });

  $('.project-area img').on('load', function () {
    $('.project-area .button-group #btn1').trigger('click');

  });

  // magnific popup
  $('.project-area .grid .popup-image').magnificPopup({
    type: 'image',
    gallery: { enabled: true },
    mainClass: 'mfp-with-zoom',

    zoom: {
      enabled: true,

      duration: 300,
      easing: 'ease-in-out',

      opener: function (openerElement) {

        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }

    }
  });

  // owl carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,

    responsive: {
      0: {
        items: 1
      }, 544: {
        items: 2
      }
    }
  })

});