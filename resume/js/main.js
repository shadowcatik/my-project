$(document).ready(function(){
  // Scroll animation
  function scrollToAnchor(aid){
    var aTag = $("#"+ aid);
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  $('a#scroll').click(function(){
    scrollToAnchor('resume');
    return false;
  });

});
