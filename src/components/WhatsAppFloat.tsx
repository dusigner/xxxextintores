import { MessageCircle } from 'lucide-react';
import { contactConfig } from '../config';

export default function WhatsAppFloat() {
  const phoneNumber = contactConfig.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/55${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(37, 211, 102, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
      }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} color="#ffffff" fill="#ffffff" />
    </a>
  );
}
