<?php namespace ProcessWire; ?>

<region id="content">

    <section class=" uk-width-1-1@m">
        <div class="uk-height-large uk-background-cover uk-light uk-flex" style="background-image: url('<?= $page->image->url ?>');" uk-parallax="bgy: -200">
        </div>
    </section>


    <section class="uk-margin-large">
        <div class="uk-container">
            <div class="uk-margin-large">
                <?= $page->text ;?>
            </div>
            <div class="uk-child-width-1-3@m" uk-grid="masonry: true">
                <?php foreach ($page->images as $galleryItem): ?>
                    <div>
                        <div class="">
                            <img src="<?= $galleryItem->url ?>" alt="<?= $galleryItem->title ?>">
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

</region>
