import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { heroConfig } from '../config';

export default function HeroField() {
  const textShadow = '0 2px 24px rgba(0,0,0,0.45)';
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Wordmark entrance
      gsap.from(section.querySelector('.hero-wordmark'), {
        opacity: 0,
        x: -30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Eyebrow entrance
      gsap.from(section.querySelector('.hero-eyebrow'), {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      });

      // Title entrance
      gsap.from(section.querySelector('.hero-title'), {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out',
      });

      // Description entrance
      gsap.from(section.querySelector('.hero-description'), {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.0,
        ease: 'power3.out',
      });

      // CTA entrance
      gsap.from(section.querySelector('.hero-cta'), {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.2,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  if (!heroConfig.wordmarkText && !heroConfig.titleLine1) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: '1 1 auto',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          alignItems: 'center',
          padding: '0 6vw',
          gap: '6vw',
        }}
        className="hero-grid"
      >
        {/* Left - Wordmark */}
        <div
          className="hero-wordmark"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2
            className="font-serif-display"
            style={{
              fontSize: 'clamp(48px, 7vw, 112px)',
              fontWeight: 300,
              color: '#ffffff',
              letterSpacing: '0.15em',
              textShadow,
              margin: 0,
            }}
          >
            {heroConfig.wordmarkText}
          </h2>
        </div>

        {/* Right - Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxWidth: '440px',
          }}
        >
          {heroConfig.eyebrow && (
            <p
              className="hero-eyebrow font-sans-body"
              style={{
                fontSize: '12px',
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.75)',
                textTransform: 'uppercase',
                marginBottom: '28px',
                marginLeft: '60px',
                textShadow,
              }}
            >
              {heroConfig.eyebrow}
            </p>
          )}

          <h1
            className="hero-title font-serif-display"
            style={{
              fontSize: 'clamp(32px, 3vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.3,
              color: '#ffffff',
              wordBreak: 'keep-all',
              marginBottom: '24px',
              marginLeft: '60px',
              textShadow,
            }}
          >
            {heroConfig.titleLine1}
            {heroConfig.titleLine2 && (
              <>
                <br />
                {heroConfig.titleLine2}
              </>
            )}
          </h1>

          {(heroConfig.descriptionLine1 || heroConfig.descriptionLine2) && (
            <p
              className="hero-description font-sans-body"
              style={{
                fontSize: '14px',
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 300,
                marginBottom: '40px',
                marginLeft: '60px',
                textShadow,
              }}
            >
              {heroConfig.descriptionLine1}
              {heroConfig.descriptionLine2 && (
                <>
                  <br />
                  {heroConfig.descriptionLine2}
                </>
              )}
            </p>
          )}

          {heroConfig.ctaText && (
            <button
              className="hero-cta font-sans-body"
              onClick={() => {
                if (heroConfig.ctaTargetId) {
                  document
                    .getElementById(heroConfig.ctaTargetId)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              style={{
                background: '#C41E3A',
                border: 'none',
                borderRadius: '40px',
                padding: '16px 36px',
                color: '#ffffff',
                fontSize: '13px',
                letterSpacing: '0.15em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginLeft: '60px',
                fontWeight: 500,
                textTransform: 'uppercase',
                boxShadow: '0 4px 16px rgba(196, 30, 58, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E0304A';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(196, 30, 58, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C41E3A';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(196, 30, 58, 0.3)';
              }}
            >
              {heroConfig.ctaText}
            </button>
          )}
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 120px 6vw 60px !important;
            gap: 40px !important;
          }
          .hero-grid > div:first-child {
            justify-content: flex-start !important;
          }
          .hero-grid > div:last-child {
            align-items: center !important;
            text-align: center !important;
          }
          .hero-eyebrow,
          .hero-title,
          .hero-description,
          .hero-cta {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
