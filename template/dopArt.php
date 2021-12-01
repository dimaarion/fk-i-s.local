<div class="container content dopArt text-left mt-2">
    <?php


    foreach ($x as $key => $val) :

        if (stristr($val['art_names'], substr($x2, 0, 4))) :
    ?>

            <a href="<?php echo $val['art_alias'] ?>">
                <h3 class="text-left"><?php echo $val['art_names'] ?></h3>
            </a>
            <div class="row">
                <?php if (is_array(json_decode($val['art_subcontent']))) :
                    $json = json_decode($val['art_subcontent']);
                    $json = $controller->parseStdClass($json);
                    foreach ($json as $key => $js) :
                        $name = $js['name'];
                        $content = $js['content'];
                ?>
                        <?php if ($key == 0 && $content != "") : ?>
                            <div class="col-sm-1"><img width="100%" src="<?php echo $content; ?>" /></div>
                        <?php endif; ?>
                        <?php if ($key == 1 && $content != "") : ?>
                            <div class="col-sm">
                                <p><?php echo $content; ?></p>
                            </div>
                        <?php endif; ?>

                <?php
                    endforeach;
                else :
                    echo html_entity_decode($val['art_subcontent'], ENT_HTML5);
                endif; ?>
            </div>

    <?php
        endif;
    endforeach; ?>
</div>