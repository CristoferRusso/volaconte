
<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$conn = mysqli_connect('localhost', 'root', '06051994Numenor.', 'volaconte');
if (!mysqli_connect('localhost', 'root', '06051994Numenor.', 'volaconte')) {
	echo 'ERROR: ' . mysqli_connect_error();
} else {
	//echo "online";
}





$userData['flag'] = 0;


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $sql = "SELECT * FROM users WHERE email = ?";
    $stm = $conn->prepare($sql);
    $stm->bind_param('s', ($_POST['email']));
    $res = $stm->execute();
    $result = $stm->get_result();

    if ($res && $result->num_rows) {
        $row = $result->fetch_assoc();
        if (password_verify($_POST['password'], $row['password'])) {

          
            $userData['name'] = $row['name'];
            $userData['surname'] = $row['surname'];
            $userData['user_id'] = $row['id'];
            $userData['flag'] = 1;
            echo json_encode($userData);
            
        } else {
            $userData['error'] = 'Wrong email or password';
            echo json_encode($userData);
        }
        $conn->close();
    } else {
        $userData['error'] = 'This email does not exist';
        echo json_encode($userData);
    }

}

?>