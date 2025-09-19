<?php 
  session_start(); 

  if (!isset($_SESSION['login_id'])) {
  	$_SESSION['msg'] = "You must log in first";
  	header('location: login.php');
  }
  if (isset($_GET['logout'])) {
  	session_destroy();
  	unset($_SESSION['login_id']);
  	header("location: login.php");
  }
?>
<!DOCTYPE html>
<html>
<head>
	<title>Music Player</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet"type="text/css" href="music1.css">
</head>
<body>
  	<div class="head">
		<?php  if (isset($_SESSION['login_id'])) : ?>
    	<p class="wel">Welcome <strong><?php echo $_SESSION['login_id']; ?></strong></p>
    <button><a href="Home.php?logout" style="color: red;">logout</a></button>
	</div>
    <div class="content">
  	<!-- notification message -->
  	<?php if (isset($_SESSION['success'])) : ?>
      <div class="error success" >
      	<!-- <h3>
           <?php 
          	echo $_SESSION['success']; 
          	unset($_SESSION['success']);
          ?> 
      	</h3> -->
      </div>
  	<?php endif ?>

    <?php endif ?>
</div>


	<div class="music-player">
    <h2>Music Player</h2>
    <img class="album-art" id="albumArt" src="" alt="Album Art">
    <div class="info-container">
        <h3 id="artistName">Artist Name</h3>
        <h3 id="songName">Song Name</h3>
    </div>
    <audio id="audio" src=""></audio>
    <div class="progress-container">
        <div class="progress" id="progress"></div>
    </div>
    <div class="time">
        <span id="currentTime">0:00</span> <span id="duration">0:00</span>
    </div>
    <div class="controls">
        <button id="prevBtn"><i class="fa fa-step-backward"></i></button>
        <button id="playBtn"><i class="fa fa-play"></i></button>
        <button id="nextBtn"><i class="fa fa-step-forward"></i></button>
    </div>
    <div class="volume-container">
        <label for="volume">Volume:</label>
        <input type="range" id="volume" min="0" max="1" step="0.01" value="1">
    </div>
</div>
<script src="music1.js">
   
</script>

</body>
</html>