<!DOCTYPE html>
<html>
<body>

<?php
session_start();

// initializing variables
$login_id = "";
$email    = "";
$errors = array(); 

// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'music');

if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}



$sql = "SELECT id, login_id, email, img FROM users";
$result = $db->query($sql);


if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        print "<br> id: ". $row["id"]. "<br> - login_id: ". $row["login_id"]. "<br> - Email: " . $row["email"] . "<br>";
      print "<img src=\"".$row["img"]."\">";
     
    }
} else {
    print "0 results";
}



$db->close();   
        ?> 



</body>
</html>