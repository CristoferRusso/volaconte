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


    $_POST['password'] = 'ciao';
	$sql = "SELECT email FROM users WHERE email =?";
	$stm = $conn->prepare($sql);
	$stm->bind_param('s', ($_POST['email']));
	$res = $stm->execute();
	$result = $stm->get_result();

	if ($res && $result->num_rows) {
		$userData['error'] = 'Email alredy taken';
		echo json_encode($userData);
		$stm->close();
	} else {

		$sql = "INSERT INTO users (email,password,name,surname) VALUES(?,?,?,?)";
		$stm = $conn->prepare($sql);
		$passHash = password_hash($_POST['password'], PASSWORD_DEFAULT);
		$stm->bind_param('ssss', $_POST['email'], $passHash, $_POST['firstName'], $_POST['lastName']);
		$res = $stm->execute();

		$sql = "SELECT email FROM users WHERE email =?";
		$stm = $conn->prepare($sql);
		$stm->bind_param('s', ($_POST['email']));
		$res = $stm->execute();
		$result = $stm->get_result();
              

		if ( $res && $result->num_rows) {
			$userData['success'] = 'You are registered';
            $userData['flag'] = 1;
            echo json_encode($userData);
			

		} else {
			$userData['error'] = 'Server error';
            echo json_encode($userData);
		}
		$conn->close();
	}
}

?>