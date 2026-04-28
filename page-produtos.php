<?php
/* Template Name: Página Produtos */
get_header();
?>
<?php get_template_part('template-parts/produtos'); ?>
<?php if (class_exists('WooCommerce')) : ?>
<section class="section"><div class="container"><?php echo do_shortcode('[products limit="12" columns="4"]'); ?></div></section>
<?php endif; ?>
<?php get_footer(); ?>
