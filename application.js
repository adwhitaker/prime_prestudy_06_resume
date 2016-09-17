$(document).ready(function () {
  $('#resumeButton').on('click', 'button', function() {
    $("header, nav, main, footer").slideDown();
    $('#resumeButton').remove();
  });
});
