
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    'Bonjour Inova Sphere, je souhaite discuter de mon projet.'
  );

  return (
    <Link
      href={`https://wa.me/21653123640?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Contacter Inova Sphere sur WhatsApp"
    >
      <span className={styles.tooltip}>Discutons de votre projet</span>
      <span className={styles.icon}>
        <FaWhatsapp />
      </span>
    </Link>
  );
}
