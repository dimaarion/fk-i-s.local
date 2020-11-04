<div class="row">
    <?php
    foreach ($x as $key => $value): ?>
        <div class="container content mb-4 mt-2">
            <h2 class="h2 pt-2 pb-2"><?php echo $value['art_names']; ?></h2>
            <div class="row">
                <div class="col-sm text-left">
                    <?php echo html_entity_decode($value['art_subcontent'], ENT_HTML5); ?>
                    <div class="col-sm text-right pb-3"><a class="detailed  justify-content-end" href="/<?php echo $value['art_alias']; ?>">Подробнее ...</a></div>
                </div>
            </div>
        </div>

        
    <?php endforeach; ?>
</div>