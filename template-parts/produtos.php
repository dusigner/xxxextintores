<section class="section section-alt" id="produtos">
    <div class="container">
        <p class="eyebrow">NOSSOS PRODUTOS</p>
        <h2>Equipamentos certificados</h2>

        <?php if (function_exists('wc_get_products') && class_exists('WooCommerce')) : ?>
            <?php
            $products = new WP_Query([
                'post_type'      => 'product',
                'posts_per_page' => 4,
                'post_status'    => 'publish',
            ]);
            ?>
            <?php if ($products->have_posts()) : ?>
                <div class="cards cards-4 product-cards">
                    <?php while ($products->have_posts()) : $products->the_post(); global $product; ?>
                        <article class="card product-card">
                            <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('medium'); ?></a>
                            <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                            <?php if ($product) : ?>
                                <p class="price"><?php echo wp_kses_post($product->get_price_html()); ?></p>
                                <?php woocommerce_template_loop_add_to_cart(); ?>
                            <?php endif; ?>
                        </article>
                    <?php endwhile; wp_reset_postdata(); ?>
                </div>
            <?php else : ?>
                <p>Cadastre produtos no WooCommerce para exibição nesta seção.</p>
            <?php endif; ?>
        <?php else : ?>
            <div class="cards cards-4">
                <article class="card"><img src="<?php echo esc_url(get_template_directory_uri() . '/assets/img/product-1.jpg'); ?>" alt="Pó químico"><h3>Pó Químico</h3></article>
                <article class="card"><img src="<?php echo esc_url(get_template_directory_uri() . '/assets/img/product-2.jpg'); ?>" alt="CO2"><h3>CO2</h3></article>
                <article class="card"><img src="<?php echo esc_url(get_template_directory_uri() . '/assets/img/product-3.jpg'); ?>" alt="Água pressurizada"><h3>Água Pressurizada</h3></article>
                <article class="card"><img src="<?php echo esc_url(get_template_directory_uri() . '/assets/img/product-4.jpg'); ?>" alt="Espuma mecânica"><h3>Espuma Mecânica</h3></article>
            </div>
            <p class="note">Ative o WooCommerce para exibir produtos reais automaticamente.</p>
        <?php endif; ?>
    </div>
</section>
