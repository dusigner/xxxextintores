<?php
/* Template Name: Página Sobre */
get_header();
?>
<section class="section"><div class="container"><h1>Sobre</h1><p>Edite o conteúdo da página Sobre no painel do WordPress.</p><?php while (have_posts()) : the_post(); the_content(); endwhile; ?></div></section>
<?php get_footer(); ?>
