
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaBrain,
  FaLightbulb,
  FaHandshake,
  FaShieldAlt,
  FaUsers,
  FaRocket,
  FaCompass,
  FaLayerGroup,
  FaCheckCircle,
  FaQuoteLeft,
} from 'react-icons/fa';
import styles from '../styles/Propos.module.css';

const values = [
  {
    number: '01',
    icon: <FaLightbulb />,
    title: 'Innovation',
    description:
      'Nous explorons les possibilités offertes par la technologie pour imaginer des solutions pertinentes, modernes et utiles.',
  },
  {
    number: '02',
    icon: <FaShieldAlt />,
    title: 'Fiabilité',
    description:
      'Nous accordons de l’importance à la qualité du code, à la sécurité et à la stabilité de chaque solution développée.',
  },
  {
    number: '03',
    icon: <FaHandshake />,
    title: 'Proximité',
    description:
      'Nous privilégions une collaboration transparente, une écoute attentive et un accompagnement adapté à chaque projet.',
  },
  {
    number: '04',
    icon: <FaUsers />,
    title: 'Collaboration',
    description:
      'Les meilleurs résultats naissent d’une compréhension commune des objectifs et d’un travail construit ensemble.',
  },
];

const expertise = [
  {
    number: '01',
    icon: <FaCode />,
    title: 'Web development',
    description:
      'Des sites web et plateformes performants, conçus pour valoriser votre activité et accompagner votre croissance.',
  },
  {
    number: '02',
    icon: <FaMobileAlt />,
    title: 'Mobile development',
    description:
      'Des applications mobiles intuitives qui rapprochent vos services de vos utilisateurs.',
  },
  {
    number: '03',
    icon: <FaBrain />,
    title: 'AI solutions',
    description:
      'Des solutions intelligentes qui intègrent l’IA et l’automatisation à vos produits et processus.',
  },
];

const principles = [
  'Comprendre votre activité avant de proposer une solution',
  'Concevoir une expérience simple et intuitive',
  'Construire une technologie fiable et évolutive',
  'Vous accompagner au-delà de la mise en ligne',
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'À propos de Inova Sphere',
  url: 'https://inovasphere.tech/propos',
  description:
    'Découvrez Inova Sphere, entreprise tunisienne spécialisée en développement web, développement mobile et solutions d’intelligence artificielle.',
  about: {
    '@type': 'Organization',
    name: 'Inova Sphere',
    url: 'https://inovasphere.tech',
    description:
      'Inova Sphere accompagne les entreprises dans leurs projets digitaux grâce au développement web, mobile et aux solutions IA.',
    foundingDate: '2025',
    email: 'contact@inovasphere.tech',
    telephone: '+21653123640',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61576716958404',
      'https://www.linkedin.com/company/inova-sphere',
    ],
  },
};

export default function Propos() {
  return (
    <>
      <NextSeo
        title="À propos de Inova Sphere | Entreprise Tech en Tunisie"
        description="Découvrez Inova Sphere, entreprise technologique tunisienne fondée en 2025. Nous concevons des solutions de développement web, applications mobiles et intelligence artificielle sur mesure."
        canonical="https://inovasphere.tech/propos"
        openGraph={{
          type: 'website',
          locale: 'fr_TN',
          url: 'https://inovasphere.tech/propos',
          siteName: 'Inova Sphere',
          title: 'À propos de Inova Sphere | Smart tech, real impact',
          description:
            'Une vision, trois expertises : développement web, mobile et intelligence artificielle. Découvrez l’approche Inova Sphere.',
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
              'Inova Sphere, entreprise informatique Tunisie, entreprise technologique Tunisie, agence développement web Tunisie, développement mobile Tunisie, intelligence artificielle Tunisie, solutions digitales sur mesure',
          },
          { name: 'author', content: 'Inova Sphere' },
          { name: 'robots', content: 'index, follow, max-image-preview:large' },
          { name: 'theme-color', content: '#100b25' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className={styles.aboutPage}>
        {/* INTRO */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <motion.div
              className={styles.heroContent}
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div className={styles.eyebrow} variants={reveal}>
                <span className={styles.eyebrowLine} />
                BEHIND INOVA SPHERE
              </motion.div>

              <motion.h1 variants={reveal}>
                Technology with
                <span> purpose.</span>
                <br />
                Innovation with
                <span> impact.</span>
              </motion.h1>

              <motion.p className={styles.heroDescription} variants={reveal}>
                Nous sommes Inova Sphere. Une entreprise technologique née
                d’une ambition : transformer les idées en solutions digitales
                utiles, performantes et pensées pour durer.
              </motion.p>

              <motion.div className={styles.heroActions} variants={reveal}>
                <Link href="/contact" className={styles.primaryButton}>
                  Parlons de votre projet <FaArrowRight />
                </Link>
                <a href="#our-story" className={styles.scrollLink}>
                  Découvrir notre histoire
                  <span className={styles.scrollLine} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.88, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              aria-hidden="true"
            >
              <div className={styles.visualOrbit} />
              <div className={styles.visualOrbitSecond} />
              <div className={styles.visualCore}>
                <span className={styles.coreTop}>INOVA</span>
                <span className={styles.coreMain}>IS</span>
                <span className={styles.coreBottom}>SPHERE</span>
              </div>

              <div className={`${styles.floatingNode} ${styles.nodeOne}`}>
                <FaCode />
                <span>WEB</span>
              </div>
              <div className={`${styles.floatingNode} ${styles.nodeTwo}`}>
                <FaMobileAlt />
                <span>MOBILE</span>
              </div>
              <div className={`${styles.floatingNode} ${styles.nodeThree}`}>
                <FaBrain />
                <span>AI</span>
              </div>

              <span className={styles.visualCoordinate}>36°43' N / 10°25' E</span>
              <span className={styles.visualIndex}>IS — 2025</span>
            </motion.div>
          </div>

          <div className={styles.heroBottom}>
            <span>SMART TECH, REAL IMPACT</span>
            <span>01 / ABOUT US</span>
          </div>
        </section>

        {/* STORY */}
        <section className={styles.storySection} id="our-story">
          <div className={styles.container}>
            <div className={styles.storyLayout}>
              <motion.div
                className={styles.storyHeading}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
              >
                <span className={styles.sectionLabel}>
                  <span className={styles.labelLine} />
                  OUR STORY
                </span>

                <h2>
                  Built around
                  <span> possibilities.</span>
                </h2>

                <div className={styles.storyYear}>
                  <strong>2025</strong>
                  <span>THE BEGINNING</span>
                </div>
              </motion.div>

              <motion.div
                className={styles.storyText}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
              >
                <motion.p variants={reveal}>
                  Fondée en 2025, Inova Sphere est née d’une conviction :
                  la technologie doit être un véritable levier de progression
                  pour les entreprises, et non une complexité supplémentaire.
                </motion.p>

                <motion.p variants={reveal}>
                  Nous imaginons et développons des solutions digitales
                  adaptées aux besoins réels de chaque projet. Notre approche
                  associe réflexion, conception et expertise technique pour
                  donner vie à des produits utiles et évolutifs.
                </motion.p>

                <motion.p variants={reveal}>
                  Notre ambition est simple : créer une technologie qui a du
                  sens, qui répond à des enjeux concrets et qui génère un
                  impact réel.
                </motion.p>

                <motion.div className={styles.storySignature} variants={reveal}>
                  <span className={styles.signatureMark}>IS.</span>
                  <span>Smart tech, real impact.</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className={styles.expertiseSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeading}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <span className={styles.sectionLabel}>
                <span className={styles.labelLine} />
                WHAT DRIVES US
              </span>
              <h2>
                Three fields.
                <span> One ambition.</span>
              </h2>
              <p>
                Trois domaines complémentaires pour accompagner vos projets
                dans un environnement numérique en constante évolution.
              </p>
            </motion.div>

            <motion.div
              className={styles.expertiseGrid}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {expertise.map((item) => (
                <motion.article
                  className={styles.expertiseItem}
                  key={item.number}
                  variants={reveal}
                >
                  <div className={styles.expertiseTop}>
                    <span className={styles.expertiseNumber}>
                      / {item.number}
                    </span>
                    <span className={styles.expertiseIcon}>{item.icon}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span className={styles.expertiseBottomLine} />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* MISSION */}
        <section className={styles.missionSection}>
          <div className={styles.missionGlow} />
          <div className={styles.container}>
            <div className={styles.missionLayout}>
              <motion.div
                className={styles.missionIntro}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
              >
                <span className={styles.sectionLabel}>
                  <span className={styles.labelLine} />
                  OUR MISSION
                </span>

                <h2>
                  Making technology
                  <span> work for you.</span>
                </h2>

                <p>
                  Rendre les technologies accessibles et utiles en créant des
                  solutions qui simplifient le quotidien, répondent aux défis
                  des entreprises et ouvrent de nouvelles possibilités.
                </p>
              </motion.div>

              <motion.div
                className={styles.missionQuote}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <FaQuoteLeft className={styles.quoteIcon} />
                <blockquote>
                  La bonne technologie ne se contente pas de fonctionner.
                  Elle fait avancer les choses.
                </blockquote>
                <span className={styles.quoteCaption}>
                  THE INOVA SPHERE MINDSET
                </span>
              </motion.div>
            </div>

            <div className={styles.principles}>
              {principles.map((principle, index) => (
                <motion.div
                  className={styles.principle}
                  key={principle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                >
                  <FaCheckCircle />
                  <span>{principle}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className={styles.valuesSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeading}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <span className={styles.sectionLabel}>
                <span className={styles.labelLine} />
                WHAT WE BELIEVE IN
              </span>
              <h2>
                The principles
                <span> behind our work.</span>
              </h2>
              <p>
                Nos valeurs guident notre manière de concevoir, de collaborer
                et de construire chaque solution.
              </p>
            </motion.div>

            <motion.div
              className={styles.valuesGrid}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {values.map((value) => (
                <motion.article
                  className={styles.valueCard}
                  key={value.number}
                  variants={reveal}
                >
                  <div className={styles.valueTop}>
                    <span>{value.number}</span>
                    <span className={styles.valueIcon}>{value.icon}</span>
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <span className={styles.valueAccent} />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.finalContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              <div className={styles.finalVisual}>
                <FaCompass />
                <span>YOUR NEXT STEP</span>
              </div>

              <span className={styles.sectionLabel}>
                <span className={styles.labelLine} />
                LET'S MOVE FORWARD
              </span>

              <h2>
                Your vision.
                <span> Our technology.</span>
              </h2>

              <p>
                Chaque grande réalisation commence par une idée. Faisons
                connaissance et explorons ce que nous pouvons construire
                ensemble.
              </p>

              <div className={styles.finalActions}>
                <Link href="/contact" className={styles.primaryButton}>
                  Start a project <FaArrowRight />
                </Link>
                <Link href="/services" className={styles.secondaryButton}>
                  Explore our services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
