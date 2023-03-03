<?php

session_start();
require 'db.php';

$errors = '';



//Controlla che l'email non è già presente nel server//
$sql = "SELECT email FROM users WHERE email =?";
//La funzione prepare la query nella variabile $stm
$stm = $link->prepare($sql);
//In questo modo stiamo dicendo che il parametro che andremo a mettere nella query(?) è di tipo stringa e che il valore che voglia far passare è email
$stm->bind_param('s',($_POST['email']));
//Esegue la query
$res = $stm->execute();
//Va a verificare che ci sono dati nella variabile $res e mostra la quantità di righe ritornate e inserisce il risultato nella variabile $result
$result = $stm->get_result();
//Verifica che i dati presenti in $result siano già presenti nel server e se ci sono restituisce un errore
if($res && $result->num_rows) {
    //Se ritorna qualcosa vuol dire che la email già esiste
    $errors .= 'Email alredy exist';
}
$stm->close();

if(!empty($errors)) {
    $_SESSION['errors'] = $errors;
    header('Location: register.php');
   die();
    
} 


//REGISTRAZIONE utente//

$sql = "INSERT INTO users (email,password,name,surname) VALUES(?,?,?,?)";
$stm = $link->prepare($sql);

//Codifica la password inserita dall'utente
$passHash = password_hash($_POST['password'], PASSWORD_DEFAULT);

$stm->bind_param('ssss', $_POST['email'], $passHash, $_POST['Firstname'], $_POST['Lastname']);

$res = $stm->execute();

if($res && $stm->affected_rows) {
    $res = [
        'data' => []   
    ];

    $link = dbConnect();
    $sql = 'SELECT * FROM `users` INNER JOIN ticket on users.email = ticket.id WHERE users.email = "'.$_POST['email'].'"';
    $stm = $link->prepare($sql);
    $stm->execute();
    $res['data'] =  $stm->fetchAll(PDO::FETCH_ASSOC);
    $_SESSION['res'] =  $res['data'];
    
    $_SESSION['messageRegistration'] = '<br> You can now access your platform <br>' ;
    $_SESSION['user_email'] = $_POST['email'];
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['surname'] = $_POST['surname'];
    $_SESSION['message'] = 'You are logged in with';
} 
    //VERIFICA UTENTE LOGGATO//
    //Verifica che l'utente è loggato controllando se l'email è stata inserita in sessione
    $_SESSION['user_email'] =  $_POST['email'] ;
    header('Location: register.php');
    
   
    


