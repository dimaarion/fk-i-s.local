<?php
spl_autoload_register(function ($className) {
    require './adminpanel/admin/classes/' . $className . '.php';
});
$controller  = new Controller();
$sansize = new Sansize();
$menuClass = new DSelect('menu');
$menuClassRows = new DSelect('menu');
$articleClassRow = new DSelect('article');
$menu_class = new Menu();
$art_menu_select = new DSelect('menu,article,art_menu');
//Переменные
$menu_alias =  $menuClass->queryRow('alias', $controller->indexPage($sansize->getrequest('alias'), ''));
$artRow = $articleClassRow->queryRow('art_alias', $controller->indexPage($sansize->getrequest('alias'), ''));
$menu = $menuClassRows->queryRows();
$menu_class->props = $menu;
$art_menu = $art_menu_select->queryRowWhere('menu.menu_id = art_menu.menu AND art_id = art_menu.articles AND menu.menu_id =' . $menu_alias['menu_id']);
//переадресация на главную если статьи не существует
$controller->redirects($controller->ifElseContent($controller->ifElseContent($artRow['art_alias'],$menu_alias['alias']),'nopage'), 'nopage','/');
//переадресация с http на https
$controller->redirects($_SERVER['HTTP_X_FORWARDED_PROTOCOL'],'http','https://'. $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
// Отправка письма

function intFilter($val)
{
    if (isset($val)) {
        if (is_int($val)) {
            return $val;
        } else {
            if (is_numeric($val)) {
                return intval($val);
            } else {
                return 0;
            }
        }
    } else {
        return 0;
    }
}
$sansize = new Sansize();
$name = $sansize->getrequest('username');
$tel = $sansize->getrequest('usertel');
$mail = $sansize->getrequestEmail('usermail');
$tema = $sansize->getrequest('theme');
$content = $sansize->getrequest('message');
$nameh = intFilter($sansize->getrequestInt('namehidden'));
$telh = intFilter($sansize->getrequestInt('telhidden'));
$mailh = intFilter($sansize->getrequestInt('mailhidden'));
$temah = intFilter($sansize->getrequestInt('themehidden'));
$contenth = intFilter($sansize->getrequestInt('messagehidden'));
$countform = $nameh + $telh  + $mailh + $temah + $contenth;
$countformto = strlen($name) + strlen($tel) + strlen($mail) + strlen($tema) + strlen($content);
if ($countform != 0 && $countformto != 0) {
    if ($nameh != 0 && $telh != 0 && $mailh != 0 && $temah != 0 && $contenth != 0) {
        new DMail('19197908an@mail.ru', 'sandani<noreply@sandani.ru>', $tema, ['name' => 'Ф. И. О: ' . $name, 'Телефон: ' . 'tel' => $tel, 'mail' => 'Почта: ' . $mail, 'message' => $content]);
        header('location:/message.html?id=Сообщение отправлено!');
    } else {
        header('location:/message.html?id=Ошибка! Сообщение не отправлено');
    }
}
//определение расширения страниц

?>