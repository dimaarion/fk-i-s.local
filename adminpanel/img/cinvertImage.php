<?php
function base64_to_gif($base64_string, $output_file) {

    $data = explode(',', $base64_string);
file_put_contents($output_file,base64_decode($data[1]));
    return $output_file;
}
$imgUrl = $_REQUEST['imageSrc'];
$nameImg = $_REQUEST['nameImg'];
$urlFile = "../../img/upload/".$nameImg;
$yesFile = "Файл успешно сохранен";
$noFile = "Такой файл уже существует";
if(!is_file($urlFile)){
    base64_to_gif($imgUrl, $urlFile);
    echo $yesFile;
}else{
    echo $noFile;
}

