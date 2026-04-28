<?php
/* Template Name: Página Serviços */
get_header();
?>
<?php get_template_part('template-parts/servicos'); ?>
<section class="section"><div class="container"><?php while (have_posts()) : the_post(); the_content(); endwhile; ?></div></section>
<?php get_footer(); ?>
