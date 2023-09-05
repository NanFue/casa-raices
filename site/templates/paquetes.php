<?php namespace ProcessWire; 

// Template file for pages using the “basic-page” template

?>


<region id="content">

	<section class=" uk-width-1-1@m">
		<div class="uk-height-large uk-position-relative uk-background-cover uk-flex" style="background-image: url('<?= $page->image->url ?>');" uk-parallax="bgy: -200">
			<div class="inner-container uk-padding uk-text-center uk-position-center">
				<div class="uk-background-default uk-padding-small">
					<h1 class="logo">Casa Raíces</h1>
				</div>
			</div>
		</div>
	</section>

	<section>
		<?php $images = $page->images; ?>
		<div class=" uk-margin-large">
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

