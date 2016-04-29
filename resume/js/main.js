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

  //Dropdown

  // Get the button, and when the user clicks on it, execute myFunction
	document.getElementById("show__menu").onclick = function() {myFunction()};

	/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
	function myFunction() {
	    document.getElementById("menu").classList.toggle("show");
	}

	// Close the dropdown if the user clicks outside of it
	window.onclick = function(event) {
	  if (!event.target.matches('.button__menu_icon')) {

	    var dropdowns = document.getElementsByClassName("menu");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
	  }
	}

});
