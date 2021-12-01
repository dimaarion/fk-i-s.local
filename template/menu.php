<?php
$settings = new DSelect('settings');
$title = $settings->queryRow('settings_id', 1)['name_site'];

?>
<div class="container-fluid head text-left">
	<div class="container img-cont">
		<a href="/"><img src="/img/log3.png" title="<?php echo $title; ?>" class="log-img"></a>
		<div class="container menu-top">
			<nav id="menu">
				<ul class="nav justify-content-end">
					<?php $x->menu_recursions($x2['alias'], 'style = "color: rgb(235, 113, 35);"', $arr[0]["alias"]); ?>
				</ul>
			</nav>
		</div>

	</div>
</div>