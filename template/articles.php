<div class="container-fluid">
    <h1 class="text-center p-5 mt-5 "><?php echo $x['art_names'] ?></h1>
    <div class="container-fluid mt-5">
        <div class=" text-sm-left" style="font-size: 16pt;" id="content">
            <?php echo html_entity_decode($x['art_content'], ENT_HTML5); ?>
        </div>
    </div>
</div>