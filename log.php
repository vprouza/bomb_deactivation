<?php
echo("Ahoj<br>");
$file = "log.txt";
if(isset($_GET["nick"]) && $_GET["state"]){
    $nick = $_GET["nick"];
    $state = $_GET["state"];
    echo($nick . "<br>");
    echo($state . "<br>");
    $text = date("H:i:s") . "," . $state . "," . $nick . "\n";
    file_put_contents ($file ,$text,FILE_APPEND);
    echo("Success");
}else{
    echo("Error");
}