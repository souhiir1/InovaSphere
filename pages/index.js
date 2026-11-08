
import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaBrain,
  FaLaptopCode,
  FaShoppingCart,
  FaLayerGroup,
  FaNetworkWired,
  FaDatabase,
  FaRobot,

  FaCheck,

 
} from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const expertise = [
  {
    number: '01',
    code: 'WEB / 01',
    icon: <FaCode />,
    title: 'Web development',
    subtitle: 'Des expériences web pensées pour aller plus loin.',
    description:
      'Nous concevons des sites web, plateformes et applications performantes, avec une architecture solide et une expérience utilisateur fluide.',
    capabilities: ['Sites web', 'Applications web', 'E-commerce'],
    accent: 'purple',
  },
  {
    number: '02',
    code: 'MOBILE / 02',
    icon: <FaMobileAlt />,
    title: 'Mobile development',
    subtitle: 'Vos idées, directement entre les mains de vos utilisateurs.',
    description:
      'Nous développons des applications mobiles intuitives et évolutives, conçues pour répondre aux usages réels de vos utilisateurs.',
    capabilities: ['iOS & Android', 'Applications métier', 'UI / UX'],
    accent: 'blue',
  },
  {
    number: '03',
    code: 'ARTIFICIAL INTELLIGENCE / 03',
    icon: <FaBrain />,
    title: 'AI solutions',
    subtitle: 'Rendez la technologie plus intelligente.',
    description:
      'Nous intégrons l’intelligence artificielle et l’automatisation dans vos outils et processus pour créer des solutions plus efficaces.',
    capabilities: ['IA générative', 'Automatisation', 'Intégration IA'],
    accent: 'orange',
  },
];

const capabilities = [
  {
    icon: <FaLaptopCode />,
    title: 'Websites & platforms',
    description: 'Des sites vitrines aux plateformes web complexes.',
    index: '01',
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce',
    description: 'Des expériences de vente en ligne simples et efficaces.',
    index: '02',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Business software',
    description: 'Des outils CRM, ERP et solutions métiers personnalisés.',
    index: '03',
  },
  {
    icon: <FaDatabase />,
    title: 'Custom applications',
    description: 'Des applications conçues autour de vos besoins.',
    index: '04',
  },
  {
    icon: <FaRobot />,
    title: 'AI integration',
    description: 'Des fonctionnalités intelligentes intégrées à vos produits.',
    index: '05',
  },
  {
    icon: <FaNetworkWired />,
    title: 'Digital automation',
    description: 'Des processus connectés pour simplifier votre quotidien.',
    index: '06',
  },
];

const steps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Nous prenons le temps de comprendre votre activité, vos objectifs et les besoins de vos utilisateurs.',
  },
  {
    number: '02',
    title: 'Design & build',
    description:
      'Nous définissons la bonne approche, concevons l’expérience et développons votre solution.',
  },
  {
    number: '03',
    title: 'Launch & evolve',
    description:
      'Nous préparons le lancement et faisons évoluer votre produit selon vos besoins.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Inova Sphere',
  url: 'https://inovasphere.tech',
  logo: 'https://inovasphere.tech/images/inova_logo_purple.png',
  image: 'https://inovasphere.tech/images/inova_logo_purple.png',
  description:
    'Inova Sphere est une entreprise tunisienne spécialisée en développement web, développement mobile et solutions d’intelligence artificielle.',
  telephone: '+21653123640',
  email: 'contact@inovasphere.tech',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Cité Erriadh, Borj Cédria, Immeuble Fadhel, 2e étage, Rue Iraq',
    addressLocality: 'Borj Cédria',
    addressRegion: 'Ben Arous',
    postalCode: '8020',
    addressCountry: 'TN',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Tunisia',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61576716958404',
    'https://www.linkedin.com/company/inova-sphere',
  ],
  knowsAbout: [
    'Développement web',
    'Développement mobile',
    'Intelligence artificielle',
    'E-commerce',
    'Applications web',
    'Solutions CRM et ERP',
    'Automatisation',
  ],
};

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

export default function Accueil() {
  return (
    <>
      <NextSeo
        title="Inova Sphere | Développement Web, Mobile & IA en Tunisie"
        description="Inova Sphere accompagne les entreprises en Tunisie dans leur transformation digitale : développement web, applications mobiles, e-commerce, logiciels métiers et intelligence artificielle sur mesure."
        canonical="https://inovasphere.tech/"
        openGraph={{
          type: 'website',
          locale: 'fr_TN',
          url: 'https://inovasphere.tech/',
          siteName: 'Inova Sphere',
          title: 'Inova Sphere | Smart tech, real impact',
          description:
            'Développement web, mobile et solutions IA. Nous transformons vos idées en produits digitaux.',
          images: [
            {
              url: 'https://inovasphere.tech/images/inova_logo_purple.png',
              width: 1200,
              height: 630,
              alt: 'Inova Sphere - Smart tech, real impact',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'Inova Sphere, développement web Tunisie, développement mobile Tunisie, intelligence artificielle Tunisie, création site web, site e-commerce Tunisie, application mobile, CRM, ERP, automatisation, solutions digitales sur mesure',
          },
          { name: 'author', content: 'Inova Sphere' },
          { name: 'robots', content: 'index, follow, max-image-preview:large' },
          { name: 'theme-color', content: '#100b25' },
        ]}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <div className={styles.home}>
        {/* Intro / transition from the header */}
        <section className={styles.introSection}>
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.introContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={reveal}
            >
              <span className={styles.sectionLabel}>
                <span className={styles.labelLine} />
                WHAT WE DO
              </span>

              <h2>
                Technology is our tool.
                <span> Your ambition is our direction.</span>
              </h2>

              <p>
                Nous créons des produits digitaux utiles, évolutifs et
                intelligemment conçus. Du premier concept à la mise en
                production, nous donnons une forme concrète à vos idées.
              </p>
            </motion.div>

            <motion.div
              className={styles.introAside}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className={styles.asideNumber}>01 — 03</span>
              <span className={styles.asideText}>
                OUR CORE
                <br />
                EXPERTISES
              </span>
              <span className={styles.asideLine} />
            </motion.div>
          </div>
        </section>

        {/* Main expertise */}
        <section className={styles.expertiseSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.expertiseHeading}>
              <div>
                <span className={styles.sectionLabel}>
                  <span className={styles.labelLine} />
                  OUR EXPERTISE
                </span>
                <h2 className={styles.sectionTitle}>
                  Three disciplines.
                  <span> One connected vision.</span>
                </h2>
              </div>

              <p>
                Des compétences complémentaires pour imaginer et construire
                des solutions digitales cohérentes, de bout en bout.
              </p>
            </div>

            <motion.div
              className={styles.expertiseGrid}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {expertise.map((item) => (
                <motion.article
                  className={`${styles.expertiseCard} ${styles[item.accent]}`}
                  key={item.number}
                  variants={reveal}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.cardCode}>{item.code}</span>
                    <span className={styles.cardIcon}>{item.icon}</span>
                  </div>

                  <div className={styles.cardBody}>
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.description}</p>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.capabilityTags}>
                      {item.capabilities.map((capability) => (
                        <span key={capability}>{capability}</span>
                      ))}
                    </div>

                    <Link
                      href="/services"
                      className={styles.cardArrow}
                      aria-label={`Découvrir ${item.title}`}
                    >
                      <FaArrowRight />
                    </Link>
                  </div>
                  <span className={styles.cardWatermark}>{item.number}</span>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Capabilities */}
        <section className={styles.capabilitiesSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.capabilitiesTop}>
              <div>
                <span className={styles.sectionLabel}>
                  <span className={styles.labelLine} />
                  WHAT WE BUILD
                </span>
                <h2 className={styles.sectionTitle}>
                  From an idea
                  <span> to a real product.</span>
                </h2>
              </div>

              <p>
                Chaque projet est différent. Nous adaptons notre expertise
                pour créer la solution qui correspond à votre réalité.
              </p>
            </div>

            <motion.div
              className={styles.capabilitiesGrid}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {capabilities.map((item) => (
                <motion.article
                  className={styles.capabilityItem}
                  key={item.index}
                  variants={reveal}
                >
                  <div className={styles.capabilityTop}>
                    <span className={styles.capabilityIcon}>{item.icon}</span>
                    <span className={styles.capabilityIndex}>{item.index}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className={styles.capabilityLine} />
                </motion.article>
              ))}
            </motion.div>

            <div className={styles.allServices}>
              <Link href="/services" className={styles.textLink}>
                Explore all services <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className={styles.processSection}>
          <div className={styles.processGlow} />
          <div className={styles.sectionContainer}>
            <div className={styles.processHeading}>
              <span className={styles.sectionLabel}>
                <span className={styles.labelLine} />
                HOW WE WORK
              </span>
              <h2 className={styles.sectionTitle}>
                Clear thinking.
                <span> Thoughtful execution.</span>
              </h2>
              <p>
                Une méthode structurée, collaborative et transparente pour
                transformer une idée en une solution concrète.
              </p>
            </div>

            <div className={styles.processTrack}>
              <div className={styles.processTrackLine} />
              {steps.map((step, index) => (
                <motion.article
                  className={styles.processStep}
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: index * 0.16 }}
                >
                  <span className={styles.processNumber}>{step.number}</span>
                  <div className={styles.processNode}>
                    <span />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.contactSection}>
          <div className={styles.contactOrb} />
          <div className={styles.contactGrid} />

          <motion.div
            className={styles.contactContent}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
          >
            <span className={styles.sectionLabel}>
              <span className={styles.labelLine} />
              LET'S BUILD SOMETHING
            </span>

            <h2>
              Have an idea?
              <span> Let's make it real.</span>
            </h2>

            <p>
              Vous avez un projet en tête ou un défi à relever ? Parlons de
              votre idée et construisons la suite ensemble.
            </p>

            <div className={styles.contactActions}>
              <Link href="/contact" className={styles.primaryButton}>
                Start a project <FaArrowRight  />
              </Link>
              <Link href="/propos" className={styles.secondaryButton}>
                Discover Inova Sphere
              </Link>
            </div>

            <div className={styles.contactFootnote}>
              <FaCheck />
              <span>Un premier échange pour comprendre votre projet.</span>
            </div>
          </motion.div>

          <div className={styles.contactDecoration} aria-hidden="true">
            <span className={styles.decorationCircle} />
            <span className={styles.decorationCircleInner} />
            <span className={styles.decorationCross}>+</span>
            <span className={styles.decorationCode}>IS / 2026</span>
          </div>
        </section>
      </div>
    </>
  );
}
