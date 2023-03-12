<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$conn = mysqli_connect('localhost', 'root', '06051994Numenor.', 'volaconte');
if (!mysqli_connect('localhost', 'root', '06051994Numenor.', 'volaconte')) {
	echo 'ERROR: ' . mysqli_connect_error();
} else {
	//echo "online";
}



if ($_SERVER['REQUEST_METHOD'] == 'POST') {



	$sql = "SELECT email FROM users WHERE email =?";
	$stm = $conn->prepare($sql);
	$stm->bind_param('s', ($_POST['email']));
	$res = $stm->execute();
	$result = $stm->get_result();

	if ($res && $result->num_rows) {
		echo ('Account alredy taken');
		$stm->close();
	} else {

		$sql = "INSERT INTO users (email,password,name,surname) VALUES(?,?,?,?)";
		$stm = $conn->prepare($sql);
		$passHash = password_hash($_POST['password'], PASSWORD_DEFAULT);
		$stm->bind_param('ssss', $_POST['email'], $passHash, $_POST['firstName'], $_POST['lastName']);
		$res = $stm->execute();
		if ( $stm->execute()) {
			echo ('You are registered');
			
			$conn->close();

		} else {
			echo ('Server error');
		}
		$conn->close();
	}
}

?>