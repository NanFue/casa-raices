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


    <section class="uk-container uk-container-small uk-margin-large">
            <div class="">
                <?= $page->text; ?>
            </div>
    </section>

    <section class="promos2 uk-margin">
        <div class="uk-container uk-container-small">
                <div class="uk-child-width-1-2@m uk-margin-large-bottom uk-margin-large-top" uk-grid>
                    <?php foreach ($page->texto_2columnas as $item): ?>
                        <div class="">
                            <?= $item->texto_izq ?>
                        </div>

                        <div class="">
                            <?= $item->texto_der ?>
                        </div>
                    <?php endforeach; ?>
                </div>
        </div>
    </section>

    <div class="uk-margin-large">
        <?= $page->texto_extra ; ?>
    </div>

    <section class="uk-flex uk-flex-center uk-padding-small uk-margin-large-bottom">
        <div class=" uk-container-small uk-child-width-1-2@m uk-flex-middle" uk-grid>
            <?php foreach ($page->personal as $item): ?>
                <div>
                    <?= $item->text ?>
                </div>

                <div>
                    <img class="uk-border-rounded" src="<?= $item->image->url ?>" alt="Hero Image" loading="lazy">
                </div>
            <?php endforeach; ?>
        </div>
    </section>
</region>
