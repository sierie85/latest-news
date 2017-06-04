<?php

$source = $_GET['source'];
$api_key = 'YOURAPIKEY';
$url = 'https://newsapi.org/v1/articles?source='.$source.'&apiKey='.$api_key;

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $url
));

$response = curl_exec($curl);

if(!$response){
    die('Error:' . curl_error($curl));
}

curl_close($curl);

header('Content-type:application/json;charset=utf-8');
die($response);