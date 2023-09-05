<?php namespace ProcessWire;

// Template file for “home” template used by the homepage

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

	<section class="uk-section uk-width-1-1@m seccion">
		<?php $items = $page->seccion; ?>
        <div class="uk-container">
            <h2 class="texto uk-margin-remove">SERVICIOS</h2>
            <?php foreach ($items as $item): ?>
                <div class="uk-child-width-1-2@m uk-flex uk-flex-middle" uk-grid>
                    <div class="">
                        <p class=""><?= $item->text; ?></p>
                        <a class="uk-button uk-button-default" href="#">Conoce Más</a>
                    </div>
                    <div class="">
                        <img class="uk-border-rounded" src="<?= $item->image->url ?>" alt="Hero Image">
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
	</section>

    <!--<section>
        <div class="uk-container">
            <div uk-grid="">
                <div></div>
                <div></div>
            </div>
        </div>
    </section>-->

	<section class="uk-section">
        <div class="uk-container">
            <div class=" uk-margin-large">
                <h2 class="uk-margin-large-bottom">Paquetes</h2>
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
            <div class=" uk-margin-large">
                <div class="" uk-grid>
                    <?php foreach ($images as $image): ?>
                        <div class="uk-text-center uk-width-1-2@m ">
                            <div class="promos ">
                                <img class="uk-border-rounded" src="<?= $image->url ?>" alt="Hero Image" loading="lazy">
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
	</section>

</region>
