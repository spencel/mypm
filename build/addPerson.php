<?php

$servername = "mypm.sl-sandbox.dreamhosters.com";
$username = "slanke";
$password = "Jw6nCHC?";
$dbname = "db_mypm";
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>