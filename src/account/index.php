<?php


header("Access-Control-Allow-Origin: *");


$servername = 'localhost:3302';
$usernamesq = "root";
$password = "root";
$dbname = "myAUTH";
$databasename = "Lists";
$username = $_POST['username'];
$parol = $_POST['parol'];
$email = $_POST['email'];
$figure = $_POST['islogin'];
$ok = true;
$list = array();
$test = false;

// Create connection
$conn = new mysqli($servername, $usernamesq, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}




function teksery()
{

    global $conn, $username, $test, $databasename;

    $sql = "SELECT id, username, parol FROM $databasename";
    $result = $conn->query($sql);


    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            if ($row['username'] == $username) {
                $test = true;
                return true;
            }
        }
    }
    $test = false;
    return false;

    $conn->close();
};

teksery();


function handle()
{

    global $figure, $conn, $username, $parol, $email, $test, $list;

    if ($figure == "false") {

        if (!$test) {

            $sql = "INSERT INTO Lists (username, parol, email)
            VALUES ('$username', '$parol', '$email')";

            if ($conn->query($sql) === TRUE) {

                $figure = true;

                $list[] = "New record created successfully";
            } else {

                $list[] = "Error:";
            }
        }
    }
};

handle();


echo json_encode(
    array(
        'signin' => $figure,
        'ok' => $ok,
        'test' => $test,
        'messages' => $list,

    )
);
