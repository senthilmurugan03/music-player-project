<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <link rel="stylesheet" type="text/css" href="music.css">
</head>
<body>
  <div class="header">
  	<h2>Login</h2>

  <form method="post" action="login.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  		<label>Login_id</label>
  		<input type="text" name="login_id" >
  	</div>
  	<div class="input-group">
  		<label>Password</label>
  		<input type="password" name="password">
  	</div>
  		<button type="submit" class="btn" name="login_user">Login</button>
  	<p>
  		Not yet a member? <a href="register.php">Sign up</a>
  	</p>
  </form>
   </div>
</body>
</html>