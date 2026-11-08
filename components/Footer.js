
import Link from 'next/link';
import Image from 'next/image';
import {
  FaEnvelope,
  FaClock,
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import styles from './Footer.module.css';

const services = [
  'Sites web statiques',
  'Sites web dynamiques',
  'E-commerce',
  'Applications mobiles',
  'Solutions métiers',
  'Logiciels de caisse',
  'Consultation stratégique',
  'Solutions sur mesure',
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundGrid} />
      <div className={styles.glow} />

      <div className={styles.footerTopLine} />

      <div className={styles.container}>
        {/* Brand column */}
        <div className={`${styles.column} ${styles.brandColumn}`}>
          <Link href="/" className={styles.logoLink} aria-label="Inova Sphere - Accueil">
            <Image
              src="/images/inova_logo_blanc.png"
              alt="Inova Sphere"
              className={styles.logo}
              width={150}
              height={40}
            />
          </Link>

          <p className={styles.tagline}>Smart tech, real impact.</p>

          <p className={styles.brandDescription}>
            Votre partenaire digital pour concevoir des expériences
            numériques intelligentes, innovantes et durables.
          </p>

          <div className={styles.brandDetails}>
            <div className={styles.contactItem}>
              <span className={styles.iconBox}>
                <FaMapMarkerAlt />
              </span>
              <p>
                Cité Erriadh, Borj Cédria, Immeuble Fadhel, 2ᵉ étage,
                Rue Iraq, N°44, Soliman Erriadh, Nabeul 8020,
                à côté du dispensaire.
              </p>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.iconBox}>
                <FaClock />
              </span>
              <p>9h à 18h, du lundi au vendredi</p>
            </div>
          </div>
        </div>

        {/* Company column */}
        <div className={styles.column}>
          <h3 className={styles.heading}>
            <Link href="/propos">Notre société</Link>
          </h3>

          <span className={styles.headingLine} />

          <ul className={styles.list}>
            <li><Link href="/propos#a-propos">À propos de nous</Link></li>
            <li><Link href="/propos#mission">Notre mission</Link></li>
            <li><Link href="/propos#equipe">Notre équipe</Link></li>
            <li><Link href="/propos#valeurs">Nos valeurs</Link></li>
          </ul>
        </div>

        {/* Services column */}
        <div className={styles.column}>
          <h3 className={styles.heading}>
            <Link href="/services">Nos services</Link>
          </h3>

          <span className={styles.headingLine} />

          <ul className={styles.list}>
            {services.map((service) => (
              <li key={service}>
                <Link href="/services#services-section">{service}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className={styles.column}>
          <h3 className={styles.heading}>
            <Link href="/contact">Nos contacts</Link>
          </h3>

          <span className={styles.headingLine} />

          <div className={styles.contactInfo}>
            <a href="tel:+21653123640" className={styles.contactItem}>
              <span className={styles.iconBox}>
                <FaPhone />
              </span>
              <span>+216 53 123 640</span>
            </a>

            <a
              href="mailto:contact@inovasphere.tech"
              className={styles.contactItem}
            >
              <span className={styles.iconBox}>
                <FaEnvelope />
              </span>
              <span>contact@inovasphere.tech</span>
            </a>
          </div>

          <h4 className={styles.subHeading}>Suivez-nous</h4>

          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/profile.php?id=61576716958404"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com/company/inova-sphere"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className={styles.contactNote}>
            <span className={styles.statusDot} />
            <span>Parlons de votre prochain projet</span>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.bottomInner}>
          <p>
            © {new Date().getFullYear()} Inova Sphere. Tous droits réservés.
          </p>

          <Link href="/" className={styles.backToTop}>
            Retour à l’accueil <span>↑</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
