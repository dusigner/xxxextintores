<?php
if (!defined('ABSPATH')) {
    exit;
}

function xxxextintores_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', [
        'height'      => 80,
        'width'       => 260,
        'flex-width'  => true,
        'flex-height' => true,
    ]);

    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');

    register_nav_menus([
        'primary' => __('Menu Principal', 'xxxextintores'),
        'footer'  => __('Menu Rodapé', 'xxxextintores'),
    ]);
}
add_action('after_setup_theme', 'xxxextintores_setup');

function xxxextintores_scripts(): void
{
    $theme_version = wp_get_theme()->get('Version');

    wp_enqueue_style(
        'xxxextintores-fonts',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@400;500;700&display=swap',
        [],
        null
    );

    wp_enqueue_style('xxxextintores-style', get_stylesheet_uri(), ['xxxextintores-fonts'], $theme_version);
    wp_enqueue_style('xxxextintores-main', get_template_directory_uri() . '/assets/css/main.css', ['xxxextintores-style'], $theme_version);
    wp_enqueue_style('xxxextintores-woocommerce', get_template_directory_uri() . '/assets/css/woocommerce.css', ['xxxextintores-main'], $theme_version);

    wp_enqueue_script('xxxextintores-main', get_template_directory_uri() . '/assets/js/main.js', [], $theme_version, true);
}
add_action('wp_enqueue_scripts', 'xxxextintores_scripts');

function xxxextintores_fallback_menu(): void
{
    echo '<ul class="menu-fallback">';
    echo '<li><a href="' . esc_url(home_url('/')) . '">Home</a></li>';
    echo '<li><a href="' . esc_url(home_url('/sobre/')) . '">Sobre</a></li>';
    echo '<li><a href="' . esc_url(home_url('/servicos/')) . '">Serviços</a></li>';
    echo '<li><a href="' . esc_url(home_url('/produtos/')) . '">Produtos</a></li>';
    echo '<li><a href="' . esc_url(home_url('/orcamento/')) . '">Orçamento</a></li>';
    echo '<li><a href="' . esc_url(home_url('/contato/')) . '">Contato</a></li>';
    echo '</ul>';
}

function xxxextintores_woocommerce_active(): bool
{
    return class_exists('WooCommerce');
}

function xxxextintores_excerpt_more(string $more): string
{
    return '...';
}
add_filter('excerpt_more', 'xxxextintores_excerpt_more');
