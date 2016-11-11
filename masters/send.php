<?php
//  ini_set('error_reporting', E_ALL);
//  ini_set('display_errors', 1);
//  ini_set('display_startup_errors', 1);
  // Including libraries

//  require_once('recaptcha/autoload.php');

//  $siteKey = '6LfnAhYTAAAAALX9yNFnfsFoesyyq-02fHx_QHpx';
//  $secret = '6LfnAhYTAAAAAIzuQR5xixtj4PkPlwkLoEMD1E_h';

  // Handling request
/* if(!isset($_POST['g-recaptcha-response']) || $_POST['g-recaptcha-response'] == ''){
    echo json_encode(array('status' => 'error', 'message' => 'Подтвердите, что Вы не робот'));
    die();
  }*/

  if(isset($_POST['name']) && $_POST['name'] != '' && isset($_POST['phone']) && $_POST['phone'] != ''
    && isset($_POST['email']) && $_POST['email'] != ''){
    // Validating recaptcha
    //$recaptcha = new \ReCaptcha\ReCaptcha($secret);
    //$resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);

    if(true){
      $type = '';
      if($_POST['type'] == 'callback'){
        $type = 'Обратный звонок';
      }
      elseif($_POST['type'] == 'sketch'){
        $type = 'Заявка на эскиз';
      }
      // Init mail
      $to = 'Oksana <kyoshiniimura@gmail.com>, Tanya <tatusha-465@yandex.ru>';
      $subject = '[Сувениры от Татьяны] Заявка с сайта';
      $message = "
      <html>
        <head>
         <title>Заявка с сайта mastertatiana.ru</title>
        </head>
        <body>
          <p>{$type}</p>
          <table>
             <tr>
             <th>Имя</th><td>{$_POST['name']}</td>
             </tr>
             <tr>
             <th>Телефон</th><td>{$_POST['phone']}</td>
             </tr>
             <tr>
             <th>Почта</th><td>{$_POST['email']}</td>
             </tr>
             <tr>
             <th>Удобное время</th><td>{$_POST['time']}</td>
             </tr>
          </table>
        </body>
      </html>
      ";

      $headers= "MIME-Version: 1.0\r\n";
      $headers .= "Content-type: text/html; charset=\"utf-8\"\r\n";
      $headers .= "From: mastertatiana <kyoshiniimura@gmail.com>\r\n";
      mail($to, $subject, $message, $headers);

      echo json_encode(array('status' => 'success'));
      die();
    }
    else{
      echo json_encode(array('status' => 'error', 'message' => 'ReCaptcha not passed'));
      die();
    }
  }
  else{
    echo json_encode(array('status' => 'error', 'message' => 'Поля Имя, Email, Телефон обязательны для заполнения'));
    die();
  }
