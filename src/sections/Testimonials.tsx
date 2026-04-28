import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';
import { testimonialsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(section.querySelectorAll('.testimonials-header'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });

      // Animate cards
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section.querySelector('.testimonials-grid'),
          start: 'top 80%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const testimonials = testimonialsConfig.testimonials;

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        background: '#050A0F',
        zIndex: 50,
        padding: '16vh 8vw',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <p
          className="testimonials-header font-sans-body"
          style={{
            fontSize: '12px',
            letterSpacing: '0.3em',
            color: '#C41E3A',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          {testimonialsConfig.eyebrow}
        </p>
        <h2
          className="testimonials-header font-serif-display"
          style={{
            fontSize: 'clamp(28px, 3vw, 42px)',
            fontWeight: 300,
            color: '#ffffff',
            margin: 0,
          }}
        >
          {testimonialsConfig.title}
        </h2>
      </div>

      {/* Cards Grid */}
      <div
        className="testimonials-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '16px',
              padding: '40px',
              border: '1px solid rgba(255,255,255,0.06)',
              transition: 'all 0.4s ease',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(196, 30, 58, 0.3)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Quote Icon */}
            <Quote
              size={32}
              style={{
                color: '#C41E3A',
                marginBottom: '20px',
                opacity: 0.6,
              }}
            />

            {/* Quote Text */}
            <p
              className="font-sans-body"
              style={{
                fontSize: '15px',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 300,
                marginBottom: '28px',
                fontStyle: 'italic',
              }}
            >
              "{testimonial.quote}"
            </p>

            {/* Star Rating */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="#C41E3A"
                  color="#C41E3A"
                />
              ))}
            </div>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <div>
                <p
                  className="font-sans-body"
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#ffffff',
                    margin: 0,
                    marginBottom: '4px',
                  }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="font-sans-body"
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.45)',
                    margin: 0,
                  }}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
