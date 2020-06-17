$(document).ready(function () {

  let $btns = $('.project-area .button-group button');

  $btns.click(function (e) {

    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter: selector
    });

    return false;

  });

  $('.project area img').on('load', function () {
    $('.project-area .button-group #btn1').trigger('click');
    console.log('ok');
  });

  $('.project-area .grid .popup-image').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
  });

});