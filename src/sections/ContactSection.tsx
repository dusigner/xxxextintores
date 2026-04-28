import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { contactConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.contact-animate'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: 'Telefone', value: contactConfig.phone },
    { icon: MessageCircle, label: 'WhatsApp', value: contactConfig.whatsapp },
    { icon: Mail, label: 'Email', value: contactConfig.email },
    { icon: MapPin, label: 'Endereço', value: contactConfig.address },
    { icon: Clock, label: 'Horário', value: contactConfig.hours },
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: "'Noto Sans SC', 'Helvetica Neue', Arial, sans-serif",
    outline: 'none',
    transition: 'all 0.3s ease',
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
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
          className="contact-animate font-sans-body"
          style={{
            fontSize: '12px',
            letterSpacing: '0.3em',
            color: '#C41E3A',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          {contactConfig.eyebrow}
        </p>
        <h2
          className="contact-animate font-serif-display"
          style={{
            fontSize: 'clamp(28px, 3vw, 42px)',
            fontWeight: 300,
            color: '#ffffff',
            margin: 0,
          }}
        >
          {contactConfig.title}
        </h2>
      </div>

      {/* Content Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '6vw',
          maxWidth: '1200px',
          margin: '0 auto',
          alignItems: 'start',
        }}
      >
        {/* Left - Form */}
        <div className="contact-animate">
          {submitted ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 40px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.06)',
                textAlign: 'center',
              }}
            >
              <CheckCircle size={48} color="#C41E3A" style={{ marginBottom: '24px' }} />
              <h3
                className="font-serif-display"
                style={{ fontSize: '24px', fontWeight: 300, color: '#ffffff', marginBottom: '12px' }}
              >
                Mensagem Enviada!
              </h3>
              <p className="font-sans-body" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px' }}>
                Entraremos em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#C41E3A'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#C41E3A'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#C41E3A'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#C41E3A'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <option value="" disabled>Serviço desejado</option>
                  <option value="recarga">Recarga de Extintores</option>
                  <option value="manutencao">Manutenção</option>
                  <option value="venda">Venda de Extintores</option>
                  <option value="projeto">Projeto de Combate a Incêndio</option>
                  <option value="sinalizacao">Sinalização e Equipamentos</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#C41E3A'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
              <button
                type="submit"
                className="font-sans-body"
                style={{
                  background: '#C41E3A',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '40px',
                  padding: '16px 32px',
                  fontSize: '13px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E0304A';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(196, 30, 58, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#C41E3A';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Send size={16} />
                ENVIAR MENSAGEM
              </button>
            </form>
          )}
        </div>

        {/* Right - Contact Info + Map */}
        <div className="contact-animate" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(196, 30, 58, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <item.icon size={18} color="#C41E3A" />
                </div>
                <div>
                  <p
                    className="font-sans-body"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      color: 'rgba(255,255,255,0.4)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-sans-body"
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.8)',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              height: '250px',
            }}
          >
            <iframe
              src={contactConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
