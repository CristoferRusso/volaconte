<?php 

	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: *');
	
	$conn = new mysqli("localhost","root","06051994Numenor.","volaconte");
    echo 'online';

		
		if($_SERVER['REQUEST_METHOD'] == 'POST'){

		$name = $_POST['firstName'];
		$surname = $_POST['lastName'];
		$email = $_POST['email'];
		$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

		
		$sql = "INSERT INTO users(email,password,name,surname) VALUES('$email','$password','$name','$surname');";
		$res = mysqli_query($conn, $sql);
		if($res){
			echo "Success!";
		}
		else{
			echo "Error!";
		}
		$conn->close();
	
	}
?>
