<?php
require_once "./template/function.php"; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php $controller->includer(true, true, './template/header.php', $controller, $controller->dirExt('css'), $controller->dirExt('js'), $menu_alias, $artRow); ?>
</head>
<?php
global $sape;
if (!defined('_SAPE_USER')) {
    define('_SAPE_USER', '29edd94871c48e1e8770ad7b3d5cb17d8ff22e723c248ab07123df22f2d96b43');
}
require_once(realpath($_SERVER['DOCUMENT_ROOT'] . '/29edd94871c48e1e8770ad7b3d5cb17d8ff22e723c248ab07123df22f2d96b43__php/29edd94871c48e1e8770ad7b3d5cb17d8ff22e723c248ab07123df22f2d96b43/sape.php'));
$sape = new SAPE_client();
?>

<body>
    <div id="rek"><?php echo iconv("windows-1251", "UTF-8", $sape->return_links()); ?></div>
    <?php
    $controller->includer(true, true, './template/menu.php', $controller, $menu_class, $menu_alias);
    $controller->includer(true, true, './template/duttonTop.php', $controller);
    $controller->includer($controller->indexPage($sansize->getrequest('alias'), ''), $art_menu[0]['alias'], './template/subart.php', $controller, $art_menu, $art_menu_count);
    $controller->includer($controller->indexPage($sansize->getrequest('alias'), ''), $artRow['art_alias'], './template/articles.php', $controller, $artRow, $artRows);
    $controller->includer(true, true, './template/footer.php', $controller);

    ?>

</body>

</html>