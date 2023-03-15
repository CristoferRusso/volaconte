
<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');


if (!empty($_POST['city'])) {
$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://skyscanner44.p.rapidapi.com/autocomplete?query=".$_POST['origin'],
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"X-RapidAPI-Host: skyscanner44.p.rapidapi.com",
		"X-RapidAPI-Key:6c76818edemshcc68cce329d5588p165e05jsnaffa088aba07"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
if ($err) {
	echo "cURL Error #:" . $err;
} else {
	sleep(3);
	echo $response;
}
}

?>
	
