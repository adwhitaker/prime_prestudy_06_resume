$(document).ready(function () {
  $('#resumeButton').on('click', 'button', function() {
    $("header, nav, main, footer").slideDown();
    $('#resumeButton').remove();
  });
  $('.contactInfo').on('click', 'button', function() {
    $('#address').slideToggle();
  });
});
