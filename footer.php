<?php
if (!defined('ABSPATH')) {
    exit;
}
?>
</main>
<footer class="site-footer">
    <div class="container footer-grid">
        <div>
            <h3>PROTEÇÃO FIRE</h3>
            <p>Nossa missão é proteger vidas e patrimônios com soluções técnicas em segurança contra incêndio.</p>
        </div>
        <div>
            <h4>Contato</h4>
            <p>(11) 9999-9999<br>contato@protecaofire.com.br</p>
        </div>
        <div>
            <h4>Menu Rápido</h4>
            <?php
            wp_nav_menu([
                'theme_location' => 'footer',
                'container'      => false,
                'fallback_cb'    => 'xxxextintores_fallback_menu',
            ]);
            ?>
        </div>
    </div>
    <div class="container footer-copy">
        <p>© <?php echo esc_html(date_i18n('Y')); ?> Proteção Fire. Todos os direitos reservados.</p>
    </div>
</footer>

<a class="whatsapp-float" href="https://wa.me/5511988888888" target="_blank" rel="noopener noreferrer" aria-label="Fale via WhatsApp">🟢</a>
<?php wp_footer(); ?>
</body>
</html>
