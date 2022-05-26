<article>
    <?php
    if (count($x) > 0) :
        echo '<h1 class = "subArtTitle"></h1>';
        foreach ($x as $key => $value) : ?>
            <div class="container content mb-4 mt-2">
                <h2 class="h2 pt-2 pb-2"><?php echo $value['art_names']; ?></h2>
                <div class="col-sm text-justify">
                    <div class="row">
                        <?php if (is_array(json_decode($value['art_subcontent']))) :
                            $json = json_decode($value['art_subcontent']);
                            $json = $controller->parseStdClass($json);
                            
                            foreach ($json as $key => $js) :
                                $name = $js['name'];
                                $content = $js['content'];
                        ?>
                                <?php if ($key == 0 && $content != "") : ?>
                                    <div class="col-sm-2"><img width="100%" src="<?php echo $content; ?>" /></div>
                                <?php endif; ?>
                                <?php if ($key == 1 && $content != "") : ?>
                                    <div class="col-sm">
                                        <p><?php echo $content; ?><span class = "reklamaPage"></span></p>
                                    </div>
                                <?php endif; ?>

                        <?php
                            endforeach;
                        else :
                            echo html_entity_decode($value['art_subcontent'], ENT_HTML5);
                        endif; ?>
                    </div>
                    <div class="col-sm text-right pb-3"><a class="detailed  justify-content-end" href="/<?php echo $value['art_alias']; ?>">Подробнее ...</a></div>
                </div>
            </div>
        <?php endforeach; ?>

</article>
<?php
        if (count($x2) > $controller->limit) {
            $controller->includer(true, true, './template/pagination.php', $controller, $x2);
        }
    endif;
?>