<?php
$servername = "";
$username = "root";
$password = "";
$dbname = "login";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$sql = "SELECT * FROM datalogin";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<br>" . "id: " . $row["id"]. " - username: " . $row["username"]. " - email: " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}

mysqli_close($conn);

?>