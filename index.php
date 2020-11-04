<?php require_once "./template/function.php"; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php $controller->includer(true, true, './template/header.php', $controller, $controller->dirExt('css'), $controller->dirExt('js'), $menu_alias, $artRow); ?>
</head>

<body>
    <?php 
    $controller->includer(true, true, './template/menu.php', $controller, $menu_class, $menu_alias);
    $controller->includer($controller->indexPage($sansize->getrequest('alias'), ''), $art_menu[0]['alias'], './template/subart.php', $controller, $art_menu);
    $controller->includer($controller->indexPage($sansize->getrequest('alias'), ''), $artRow['art_alias'], './template/articles.php', $controller, $artRow);
    ?>
    
</body>

</html>