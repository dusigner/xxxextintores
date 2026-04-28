<?php
if (!defined('ABSPATH')) {
    exit;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-header" id="topo">
    <div class="container header-inner">
        <div class="brand">
            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                <?php
                if (has_custom_logo()) {
                    the_custom_logo();
                } else {
                    echo '<span>PROTEÇÃO FIRE</span>';
                }
                ?>
            </a>
        </div>

        <button class="menu-toggle" aria-expanded="false" aria-controls="primary-menu">☰</button>

        <nav class="main-nav" aria-label="Principal">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container'      => false,
                'menu_id'        => 'primary-menu',
                'fallback_cb'    => 'xxxextintores_fallback_menu',
            ]);
            ?>
        </nav>
    </div>
</header>
<main id="content" class="site-content">
