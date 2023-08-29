<?php namespace ProcessWire;

\Less_Autoloader::register();

//Compile UIKit

$less_files = array();
$uikitFile = $config->paths->templates . 'css/uikit-custom.less';

$less_files = array(
	$uikitFile => $config->path->templates . 'css/uikit-custom.css'
);

$uikitOptions = array(
	'cache_dir'    => $config->paths->assets . 'cache/less/',
	'output'       => $config->paths->templates . 'css/build.css',
	'relativeUrls' => true
);

$uikitCustomFilename = \Less_Cache::Get($less_files, $uikitOptions);

// Optional main output file, called after rendering page’s template file. 
// This is defined by $config->appendTemplateFile in /site/config.php, and
// is typically used to define and output markup common among most pages.
// 	
// When the Markup Regions feature is used, template files can prepend, append,
// replace or delete any element defined here that has an "id" attribute. 
// https://processwire.com/docs/front-end/output/markup-regions/
	
/** @var Page $page */
/** @var Pages $pages */
/** @var Config $config */
	
$home = $pages->get('/'); /** @var HomePage $home */

?><!DOCTYPE html>
<html lang="en">
	<head id="html-head">
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title><?php echo $page->title; ?></title>
		<link rel="stylesheet" type="text/css" href="<?php echo $config->urls->templates; ?>styles/main.css" />
		<script src="<?php echo $config->urls->templates; ?>scripts/main.js"></script>

		<link rel="stylesheet" href="<?= $urls->templates ?>css/build.css" class="href">
		<link rel="stylesheet" href="<?= $urls->templates ?>styles/main.css" class="href">
		<script src="<?= $urls->templates ?>js/uikit.min.js"></script>
		<script src="<?= $urls->templates ?>js/uikit-icons.min.js"></script>


	</head>

	<body id="html-body">

	<div id="topnav" class=" " uk-sticky>
		<nav class="" uk-navbar>
			<div class="uk-navbar-left">
				<img src="site/templates/img/logo.png" alt="">
			</div>

			<div class="uk-navbar-right">
				<ul class="uk-navbar-nav uk-subnav-divider">
					<?php foreach ($home->children as $servicio): ?>
						<li class="<?= $servicio == $page ? 'uk-active' : '' ?>">
							<a href="<?= $servicio->url ?>">
								<?= $servicio->title ?>
							</a>
						</li>
					<?php endforeach ?>
				</ul>
			</div>
		</nav>
	</div>

		<div id="content">

		</div>
	

		<hr>
		<section id="footer" class="uk-container uk-margin-large">
			<div class="uk-container uk-child-width-1-4@m" uk-grid>
				<div class="uk-text-center">
					<span uk-icon="icon: home; ratio: 2"></span>
					<p>VALPARAISO #6 , MEXICO, 07020</p>
				</div>
				<div class="uk-text-center">
					<span uk-icon="icon: receiver; ratio: 2"></span>
					<p>Tel: 998-874-7645</p>
				</div>
				<div class="uk-text-center">
					<span uk-icon="icon: mail;ratio: 2"></span>
					<p>dra.gil@casaraices.com.mx</p>
				</div>
				<div class="uk-text-center">
				<span uk-icon="icon:clock; ratio: 2"></span>
				<p>HORARIO DE ATENCIÓN :
					Lun a Dom
					09 am - 06 pm</p>
				</div>
			</div>

			<div class="uk-container uk-child-width-1-2@m uk-flex-middle" uk-grid>
				<div>
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d468.2330212962717!2d-99.12314125643802!3d19.485074125220788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9086913d741%3A0x4431335a8ec0076d!2sCasa%20Ra%C3%ADces!5e0!3m2!1ses-419!2sus!4v1692922665806!5m2!1ses-419!2sus" class="uk-width-1-1@m uk-height-medium" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>

				<div class="">
					<h3>Contáctenos</h3>
					<?php $form = $modules->get('FormBuilder')->render('contact');

					if ($form) {
					echo $form->render();
					}
					?>
				</div>
			</div>
		</section>
	
	</body>
</html>