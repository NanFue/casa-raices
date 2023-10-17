<?php namespace ProcessWire; ?>

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


    <section class="uk-margin-large">
        <div class="uk-container">
            <div class="uk-margin-large">
                <?= $page->text ;?>
            </div>
            <div class="uk-child-width-1-3@m" uk-grid="masonry: true" uk-lightbox>
                <?php foreach ($page->images as $galleryItem): ?>
                    <div>
                        <div class="">
                            <a href="<?= $galleryItem->url ?>" data-caption="<?= $galleryItem->title ?>">
                                <img src="<?= $galleryItem->url ?>" alt="<?= $galleryItem->title ?>" >
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

</region>
