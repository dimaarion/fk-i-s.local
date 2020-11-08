<div class="container content dopArt text-left mt-2">
    <?php foreach($x as $key=>$val): ?>
    <a href="<?php echo $val['art_alias'] ?>"><h3 class="text-left"><?php echo $val['art_names'] ?></h3></a>
    <div><?php echo html_entity_decode($val['art_subcontent'], ENT_HTML5); ?></div>
    <?php endforeach; ?>
</div>