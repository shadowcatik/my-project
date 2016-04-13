$(document).ready(function(){
  // Submit contacts form
  function submitContactsForm(name, email, phone, type, time, success_callback, error_callback){
    $.ajax({
      url: 'send.php',
      method: 'post',
      dataType: 'json',
      data: {
        name: name,
        email: email,
        phone: phone,
        type: type,
        time: time
      },
      success: function(data){
        if(data.status == 'success'){
          alert('Заявка успешно отправлена!');
          if (success_callback) {
            success_callback();
          }
        }
        else{
          alert(data.message);
          if (error_callback) {
            error_callback();
          }
        }
      },
      error: function(){
        alert('Возникла ошибка, попробуйте позже');
        if (error_callback) {
          error_callback();
        }
      }
    });
  }

  // Scroll animation
  function scrollToAnchor(aid){
    var aTag = $("#"+ aid);
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  $('a#scroll-to-contact-form').click(function(){
    scrollToAnchor('share');
    return false;
  });

  // Callback form
  $('a#callback').click(function(){
    $('div.b-callback').fadeIn();
    return false;
  });

  $('a.b-callback-close').click(function(){
    $('div.b-callback').fadeOut();
    return false;
  });

  $('#callback-form').submit(function(){
    // Data validation
    name = $('form#callback-form input[name="name"]').val();
    email = $('form#callback-form input[name="email"]').val();
    phone = $('form#callback-form input[name="phone"]').val();
    time = $('form#callback-form input[name="time"]').val();

    if(name == '' || email == '' || phone == ''){
      alert('Все поля обязательны для заполнения');
    }

    submitContactsForm(name, email, phone, 'callback', time, function(){
      $("#callback-form")[0].reset();
      $('a.b-callback-close').click();
    });

    return false;
  });

  // Sketch form
  $('#sketch-form').submit(function(){
    // Data validation
    name = $('form#sketch-form input[name="name"]').val();
    email = $('form#sketch-form input[name="email"]').val();
    phone = $('form#sketch-form input[name="phone"]').val();

    if(name == '' || email == '' || phone == ''){
      alert('Все поля обязательны для заполнения');
    }

    submitContactsForm(name, email, phone, 'sketch', '', function(){$("#sketch-form")[0].reset();});

    return false;
  });

  // Dropdown
    // Get the button, and when the user clicks on it, execute myFunction
  document.getElementById("show__menu").onclick = function() {myFunction()};

  /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
  function myFunction() {
      document.getElementById("menu").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.menu_link')) {

      var dropdowns = document.getElementsByClassName("menu_dropdown");
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
