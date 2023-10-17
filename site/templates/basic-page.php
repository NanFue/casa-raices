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

    <section class="uk-container">
        <div class="uk-margin-large-top">
            <?= $page->text; ?>
        </div>

        <!-- Google Calendar Appointment Scheduling begin -->
        <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0N_BA4HgsX3pWRoxo_qEVwSI1wHdmDHwNj_zy-nG3hMp1gkb9llT2CyWYzzLi7JwEm-jqkadIn?gv=true" style="border: 0" width="100%" height="600" frameborder="0"></iframe>
        <!-- end Google Calendar Appointment Scheduling -->
    </section>

</region>
