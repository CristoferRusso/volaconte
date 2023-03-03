
<?php
require 'db.php';

session_start();

$errors = '';
if (empty($_POST['email'])) {
    $errors .= 'Email is required <br>';
} else if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errors .= 'Invalid email <br>';
}
if (empty($_POST['password'])) {
    $errors .= 'Password is required<br>';
}

$sql = "SELECT id,email,password,name,surname FROM users WHERE email =?";
$stm = $link->prepare($sql);
$stm->bind_param('s', ($_POST['email']));
$res = $stm->execute();
$result = $stm->get_result();

if ($res && $result->num_rows) {
    $row = $result->fetch_assoc();
    if (password_verify($_POST['password'], $row['password'])) {
        $_SESSION['messageLogin'] = 'You are logged in ';
        $_SESSION['user_email'] = $_POST['email'];
        $_SESSION['name'] = $row['name'];
        $_SESSION['surname'] = $row['surname'];
        $_SESSION['user_id'] = $row['id'];
              
        $res = [
            'data' => []   
        ];
    
        $link = dbConnect();
        $sql = 'SELECT * FROM `users` INNER JOIN ticket on users.email = ticket.id WHERE users.email = "'.$_POST['email'].'"';
        $stm = $link->prepare($sql);
        $stm->execute();
        $res['data'] =  $stm->fetchAll(PDO::FETCH_ASSOC);
        $_SESSION['res'] =  $res['data'];

        header('Location: login.php');

    
    } else {

        $_SESSION['errors'] = 'Wrong email or password';
        header('Location: login.php');
        die();
    }
} else {
    $errors .= 'This email does not exist';
}

if (!empty($errors)) {

    $_SESSION['errors'] = $errors;
    header('Location: login.php');
    die();
}

