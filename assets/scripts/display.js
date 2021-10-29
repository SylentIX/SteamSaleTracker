$("#weeks-container").hover(function () {
    $('#months-container').fadeIn();
    $('#years-container').fadeIn();
    $('#decades-container').fadeIn();
  },function () {
    $('#months-container').fadeOut();
    $('#years-container').fadeOut();
    $('#decades-container').fadeOut();
});