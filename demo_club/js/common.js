jQuery(document).ready(function ($) {

   
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').outerWidth();
  var slideHeight = $('#slider ul li').outerHeight();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('.slider__controls-button--prev').click(function () {
        moveLeft();
    });

    $('.slider__controls-button--next').click(function () {
        moveRight();
    });

});    