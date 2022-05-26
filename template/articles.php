<article class=" container-fluid">
	<div class="container content text-justify mt-2">
		<h1 class="h1"><?php echo $x['art_names'] ?></h1>
		<div class="container text-justify p-2 art">
			<?php
			echo html_entity_decode($x['art_content'], ENT_HTML5);
			?>
		</div>

	</div>
	<?php
	$controller->includer(true, true, './template/dopArt.php', $controller, $x2, $x['art_names']);
	?>
</article>