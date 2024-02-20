<?php
  include "server/database.php";

  if (isset($_POST['buton'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "INSERT INTO username (user,password) VALUES
    ('$username', '$password')";

    if($db->query($sql)){
      echo "Success";
    }else{
      echo "gagal";
    }
    
  }
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
  <title>Document</title>
</head>

<body>
  <div class="login-container">
    <h1>Login</h1>
    <div class="login-page">
      <form action="login.php" method="POST">
        <input type="text" placeholder="Email" id="username" name="username" />
        <div class="username-message"></div>
        <input type="password" placeholder="Password" id="password" name="password" />
        <div class="password-message"></div>
        <button id="button-submit" name="buton">Login</button>
      </form>
      <a id="link-forgot" href="https://accounts.google.com/accountchooser/identifier?continue=https%3A%2F%2Fmyaccount.google.com%2Fsigninoptions%2Fpassword&flowName=GlifWebSignIn&hl=id&ifkv=AXo7B7WKVUCHOQhLloc62mRQKB_E3_p7Mv-Td0KarCQ-PUE_3SGulc3NgU4cFYJATS8C3qMkcwAY&kdi=CAM&rart=ANgoxcd7tybo4bQzxOJMheVHTKg_IuFlK4AxvpU6AuJp829tOXjie8HTS4wFt8mpeuuU1NMYrcC5p9aSJrERWrEsz7aEkLmvBA&rpbg=1&sarp=1&scc=1&service=accountsettings&flowEntry=AccountChooser">
        <h5>Forgot your password?</h5>
      </a>
    </div>
  </div>

</body>

</html>