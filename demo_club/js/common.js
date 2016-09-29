jQuery(document).ready(function ($) {

  //Slider
  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
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
    
  //show gallery

  var largeImg = document.getElementById('largeImg');

    var thumbs = document.getElementById('thumbs');

    thumbs.onclick = function(e) {
      var target = e.target;

      while (target != this) {

        if (target.nodeName == 'A') {
          $('.show-img').fadeIn();
          showThumbnail(target.href, target.title);
          return false;
        }

        target = target.parentNode;
      }
    }

    function showThumbnail(href, title) {
      largeImg.src = href;
      largeImg.alt = title;
    }

    //предзагрузка
    var imgs = thumbs.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
      var url = imgs[i].parentNode.href;
      var img = document.createElement('img');
      img.src = url;
    }
    //Закрытие  большого изображения

    $('.close').click(function() {
      $('.show-img').fadeOut();
      return false;
    });


});    