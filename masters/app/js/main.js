$(document).ready(function(){
  // Submit contacts form
  function submitContactsForm(name, email, phone, type, time, review, success_callback, error_callback){
    $.ajax({
      url: 'send.php',
      method: 'post',
      dataType: 'json',
      data: {
        name: name,
        email: email,
        phone: phone,
        type: type,
        time: time,
        review: review
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

  //Phone mask
    jQuery(function($){
      $(".phone_mask").mask("+7 (999) 999-9999");
    });

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
  $('a.callback').click(function(){
    $('div.b-callback').fadeIn();
    return false;
  });

  $('a.b-callback-close').click(function(){
    $('div.b-callback').fadeOut();
    return false;
  });

  $('.callback-form').submit(function(){
    // Data validation
    name = $('form.callback-form input[name="name"]').val();
    email = $('form.callback-form input[name="email"]').val();
    phone = $('form.callback-form input[name="phone"]').val();
    time = $('form.callback-form input[name="time"]').val();

    if(name == '' || email == '' || phone == ''){
      alert('Все поля обязательны для заполнения');
    }

    submitContactsForm(name, email, phone, 'callback', time, function(){
      $(".callback-form")[0].reset();
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

  // Review form

   $('#review-form').submit(function(){
    // Data validation
    name = $('form#review-form input[name="name"]').val();
    review = $('form#review-form textarea[name="review"]').val();

    if(name == '' || review == ''){
      alert('Все поля обязательны для заполнения');
    }

    submitContactsForm(name, review, phone, 'review', '', function(){$("#review-form")[0].reset();});

    return false;
  });

  //dropdown
  document.querySelector('#show__menu').addEventListener('click', () => {
    document.querySelector('.menu')
      .classList.toggle('show');
  });

  
  //fancybox
 
  $(".fancybox-thumb").fancybox({
    prevEffect  : 'none',
    nextEffect  : 'none',
    helpers : {
      title : {
        type: 'outside'
      },
      thumbs  : {
        width : 50,
        height  : 50
      }
    }
  });

});
