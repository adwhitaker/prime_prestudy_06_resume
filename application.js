$(document).ready(function () {
  $('button').on('click', function() {
    $("header, nav, main, footer").slideDown();
    $(this).remove();
  });
});
