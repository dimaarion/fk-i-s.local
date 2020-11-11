<?php
   global $sape;
    if (!defined('_SAPE_USER')){
        define('_SAPE_USER', '29edd94871c48e1e8770ad7b3d5cb17d8ff22e723c248ab07123df22f2d96b43');
     }
     require_once(realpath($_SERVER['DOCUMENT_ROOT'].'/29edd94871c48e1e8770ad7b3d5cb17d8ff22e723c248ab07123df22f2d96b43__php/29edd94871c48e1e8770ad7b3d5cb17d8ff22e723c248ab07123df22f2d96b43/sape.php'));
    $sape = new SAPE_client(array('charset' => 'UTF-8'));
    $sape->show_image();