<?php namespace ProcessWire;

// Template file for “home” template used by the homepage

?>
<region id="content">

	<section class=" uk-width-1-1@m">
		<div class="uk-height-large uk-background-cover  uk-flex" style="background-image: url('<?= $page->image->url ?>');" uk-parallax="bgy: -200">
			<div class="outer-container uk-padding uk-flex ">
				<div class="inner-container uk-padding uk-width-1-1 uk-flex uk-flex-middle uk-text-center uk-position-center">
					<h1 class="logo"><?php echo $page->title; ?></h1>
				</div>
			</div>
		</div>
	</section>

	<section class="uk-flex uk-flex-center uk-section uk-container uk-width-1-1@m seccion">
		<?php $items = $page->seccion; ?>
		<?php foreach ($items as $item): ?>
			<div class="uk-container uk-child-width-1-2@m uk-flex uk-flex-middle" uk-grid>
				<div class="">
					<p class=""><?= $item->text; ?></p>
					<a class="uk-button uk-button-default" href="#">Conoce Más</a>
				</div>
				<div class="">
					<img class="uk-border-rounded" src="<?= $item->image->url ?>" alt="Hero Image">
				</div>
			</div>
		<?php endforeach; ?>
	</section>

	<section class="uk-section uk-container">
		<div class="uk-margin-large">
			<div class="" uk-grid>
			<?php $items = $page->paquetes; ?>
			<?php foreach ($items as $item): ?>
				<div class="uk-text-center uk-width-1-3@m ">
					<div class="uk-card uk-card-default uk-card-body"><?php echo $item->text ?>
					</div>
				</div>
			<?php endforeach; ?>
			</div>
		</div>

		<?php $images = $page->images; ?>
		<div class="uk-container uk-margin-large">
			<div class="" uk-grid>
				<?php foreach ($images as $image): ?>
					<div class="uk-text-center uk-width-1-2@m uk-box-shadow-bottom">
						<div class="uk-card uk-card-default uk-card-body">
							<img class="uk-border-rounded" src="<?= $image->url ?>" alt="Hero Image" loading="lazy">
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

</region>