<?php


$arr = [
    'sweets' => ['apple', 'banana', 'mango'],
    'sour' => ['grapes', 'orange']
];
echo '<pre>';
print_r($arr['sweets']);
print_r($arr['sour']);
echo '</pre>';


// $type = $_POST["type"];
// $size = $_POST['size'];
// $color = $_POST['color'];
// $price = $_POST['price'];

// $connection = mysqli_connect("localhost","root", "", "e commerce" ) or die();

// $insert = "INSERT INTO clothes (type,size,color,price) VALUES ('{$type}', '{$size}', '{$color}', $price)";

// mysqli_query($connection, $insert);

?>