
"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobe,
  FaLaptopCode,
  FaShoppingCart,
  FaMobileAlt,
  FaCogs,
  FaTools,
  FaProjectDiagram,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaCode,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaLayerGroup,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import styles from "../styles/Services.module.css";

const servicesData = [
  {
    id: "web-statique",
    number: "01",
    category: "WEB DEVELOPMENT",
    theme: "purple",
    icon: <FaGlobe />,
    title: "Sites web vitrines",
    description:
      "Une présence digitale professionnelle qui valorise votre activité et renforce votre image de marque.",
    features: [
      "Design moderne et responsive",
      "Optimisation SEO",
      "Performance et sécurité",
    ],
    details:
      "Nous concevons des sites web élégants, rapides et adaptés à votre identité. Chaque interface est pensée pour présenter clairement votre activité, rassurer vos visiteurs et transformer leur intérêt en prises de contact.",
  },
  {
    id: "web-dynamique",
    number: "02",
    category: "WEB DEVELOPMENT",
    theme: "blue",
    icon: <FaLaptopCode />,
    title: "Applications web",
    description:
      "Des plateformes interactives et évolutives conçues autour de vos besoins et de vos utilisateurs.",
    features: [
      "Interfaces personnalisées",
      "Backend et bases de données",
      "Tableaux de bord",
    ],
    details:
      "Du portail client à la plateforme métier, nous développons des applications web complètes avec des fonctionnalités adaptées à vos processus, une architecture évolutive et une expérience utilisateur fluide.",
  },
  {
    id: "ecommerce",
    number: "03",
    category: "DIGITAL COMMERCE",
    theme: "orange",
    icon: <FaShoppingCart />,
    title: "Solutions e-commerce",
    description:
      "Des boutiques en ligne conçues pour simplifier l'achat et accompagner le développement de votre activité.",
    features: [
      "Catalogue et gestion des produits",
      "Commandes et paiements",
      "Gestion et suivi des ventes",
    ],
    details:
      "Nous créons des expériences e-commerce intuitives, de la découverte des produits jusqu'à la commande. Votre boutique est pensée pour faciliter la gestion quotidienne et offrir un parcours d'achat agréable.",
  },
  {
    id: "apps-mobiles",
    number: "04",
    category: "MOBILE DEVELOPMENT",
    theme: "blue",
    icon: <FaMobileAlt />,
    title: "Applications mobiles",
    description:
      "Des applications mobiles intuitives pour connecter votre entreprise à vos utilisateurs.",
    features: [
      "Expérience iOS et Android",
      "Interface UI/UX sur mesure",
      "Connexion aux services web",
    ],
    details:
      "Nous développons des applications mobiles adaptées à votre projet, avec une attention particulière portée à l'expérience utilisateur, aux performances et à la communication avec vos systèmes existants.",
  },
  {
    id: "solutions-metiers",
    number: "05",
    category: "BUSINESS SOLUTIONS",
    theme: "purple",
    icon: <FaCogs />,
    title: "Solutions métiers",
    description:
      "Des outils digitaux qui simplifient vos opérations et améliorent la gestion de votre entreprise.",
    features: [
      "CRM et ERP personnalisés",
      "Gestion des processus",
      "Reporting et tableaux de bord",
    ],
    details:
      "Nous analysons vos méthodes de travail pour concevoir des outils adaptés à votre organisation : gestion commerciale, suivi des clients, gestion interne, reporting et automatisation des tâches.",
  },
  {
    id: "logiciels-caisse",
    number: "06",
    category: "BUSINESS SOLUTIONS",
    theme: "orange",
    icon: <FaTools />,
    title: "Logiciels de gestion",
    description:
      "Des logiciels personnalisés pour centraliser vos données et garder le contrôle de vos opérations.",
    features: [
      "Gestion des ventes et stocks",
      "Suivi des opérations",
      "Statistiques et rapports",
    ],
    details:
      "Nous développons des logiciels adaptés aux besoins des commerces et des entreprises : gestion de stock, facturation, suivi des ventes et centralisation des informations dans une interface claire.",
  },
  {
    id: "intelligence-artificielle",
    number: "07",
    category: "AI SOLUTIONS",
    theme: "purple",
    icon: <FaRobot />,
    title: "Solutions d'intelligence artificielle",
    description:
      "Intégrez l'IA à vos outils pour exploiter vos données et améliorer vos méthodes de travail.",
    features: [
      "Assistants et chatbots IA",
      "Traitement intelligent des données",
      "Intégration de modèles IA",
    ],
    details:
      "Nous intégrons des fonctionnalités d'intelligence artificielle à vos applications et processus : assistants conversationnels, automatisation intelligente, analyse de données et fonctionnalités adaptées à vos cas d'usage.",
  },
  {
    id: "automatisation",
    number: "08",
    category: "AI & AUTOMATION",
    theme: "blue",
    icon: <FaProjectDiagram />,
    title: "Automatisation & intégration",
    description:
      "Connectez vos outils et réduisez les tâches répétitives grâce à des workflows intelligents.",
    features: [
      "Automatisation des workflows",
      "Intégration API",
      "Synchronisation des outils",
    ],
    details:
      "Nous connectons vos applications et automatisons les opérations répétitives pour réduire les interventions manuelles, fluidifier la circulation des données et vous faire gagner du temps.",
  },
];

const technologies = [
  { label: "Développement web", icon: <FaCode /> },
  { label: "Applications mobiles", icon: <FaMobileAlt /> },
  { label: "Intelligence artificielle", icon: <FaRobot /> },
  { label: "Bases de données", icon: <FaDatabase /> },
  { label: "Cloud & intégrations", icon: <FaCloud /> },
  { label: "Architecture logicielle", icon: <FaLayerGroup /> },
  { label: "Performance & SEO", icon: <FaChartLine /> },
  { label: "Sécurité applicative", icon: <FaShieldAlt /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleToggleDetails = (id) => {
    setExpandedCardId((previous) => (previous === id ? null : id));
  };

  return (
    <>
      <Head>
        <title>Nos Services | Développement Web, Mobile & IA | Inova Sphere</title>

        <meta
          name="description"
          content="Inova Sphere accompagne les entreprises dans leur transformation digitale : développement web et mobile, e-commerce, logiciels sur mesure, intelligence artificielle et automatisation."
        />

        <meta
          name="keywords"
          content="développement web Tunisie, développement mobile Tunisie, agence digitale Tunisie, intelligence artificielle Tunisie, solutions IA, développement logiciel, application web, application mobile, e-commerce, CRM ERP, automatisation"
        />

        <link
          rel="canonical"
          href="https://inovasphere.tech/services"
        />

        <meta property="og:title" content="Nos Services | Inova Sphere" />
        <meta
          property="og:description"
          content="Développement web et mobile, intelligence artificielle et solutions digitales sur mesure. Découvrez les expertises d'Inova Sphere."
        />
        <meta
          property="og:image"
          content="https://inovasphere.tech/images/inova_logo_purple.png"
        />
        <meta
          property="og:url"
          content="https://inovasphere.tech/services"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_TN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nos Services | Inova Sphere"
        />
        <meta
          name="twitter:description"
          content="Des solutions web, mobiles et IA pensées pour répondre aux besoins de votre entreprise."
        />
        <meta
          name="twitter:image"
          content="https://inovasphere.tech/images/inova_logo_purple.png"
        />
      </Head>

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />
          <div className={styles.heroGlowSecondary} />

          <div className={styles.heroInner}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                NOS EXPERTISES
                <span className={styles.eyebrowDot} />
              </div>

              <h1>
                La technologie
                <span>au service de vos ambitions.</span>
              </h1>

              <p className={styles.heroDescription}>
             {` Du développement web et mobile à l'intelligence artificielle,
                nous imaginons et construisons des solutions digitales qui
                répondent aux vrais besoins de votre entreprise.`}  
              </p>

              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.primaryButton}>
                  Parlons de votre projet
                  <FaArrowRight />
                </Link>

                <Link
                  href="#services-section"
                  className={styles.secondaryLink}
                >
                  Explorer nos services
                  <FaArrowRight />
                </Link>
              </div>

              <div className={styles.heroNote}>
                <span className={styles.noteIcon}>
                  <FaCheck />
                </span>
                Des solutions pensées autour de vos objectifs.
              </div>
            </motion.div>

            {/* VISUAL */}
            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <div className={styles.visualAura} />

              <div className={`${styles.orbit} ${styles.orbitOuter}`}>
                <span className={`${styles.orbitPoint} ${styles.pointOne}`} />
                <span className={`${styles.orbitPoint} ${styles.pointTwo}`} />
                <span className={`${styles.orbitPoint} ${styles.pointThree}`} />
              </div>

              <div className={`${styles.orbit} ${styles.orbitInner}`} />

              <div className={styles.visualCore}>
                <div className={styles.coreIcon}>
                  <FaLayerGroup />
                </div>
                <span>INOVA</span>
                <strong>SPHERE</strong>
                <small>SMART TECH · REAL IMPACT</small>
              </div>

              <motion.div
                className={`${styles.floatingNode} ${styles.nodeWeb}`}
                animate={{ y: [0, -9, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span><FaCode /></span>
                <div>
                  <strong>Web Development</strong>
                  <small>Digital experiences</small>
                </div>
              </motion.div>

              <motion.div
                className={`${styles.floatingNode} ${styles.nodeMobile}`}
                animate={{ y: [0, 9, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span><FaMobileAlt /></span>
                <div>
                  <strong>Mobile Apps</strong>
                  <small>Connected experiences</small>
                </div>
              </motion.div>

              <motion.div
                className={`${styles.floatingNode} ${styles.nodeAI}`}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span><FaRobot /></span>
                <div>
                  <strong>Artificial Intelligence</strong>
                  <small>Smarter solutions</small>
                </div>
              </motion.div>

              <div className={styles.visualCaption}>
                <span />
                BUILDING WHAT&apos;S NEXT
              </div>
            </motion.div>
          </div>

          <div className={styles.heroBottomLine} />
        </section>

        {/* INTRODUCTION */}
        <section className={styles.introSection}>
          <motion.div
            className={styles.introInner}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.sectionEyebrow}>
              <span />
              CE QUE NOUS FAISONS
            </div>

            <div className={styles.introContent}>
              <h2>
                Chaque projet mérite
                <span>une solution bien pensée.</span>
              </h2>

              <p>
                Nous associons expertise technique, réflexion stratégique et
                créativité pour développer des outils digitaux utiles,
                performants et évolutifs. Notre approche commence par
                comprendre votre besoin, puis construire la solution qui lui
                correspond.
              </p>
            </div>
          </motion.div>
        </section>

        {/* SERVICES GRID */}
        <section
          id="services-section"
          className={styles.servicesSection}
        >
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <div className={styles.sectionEyebrow}>
              <span />
              NOS DOMAINES D&apos;EXPERTISE
            </div>

            <h2>
              Des idées aux
              <span>solutions concrètes.</span>
            </h2>

            <p>
              Découvrez nos expertises et les différentes façons dont nous
              pouvons accompagner votre transformation digitale.
            </p>
          </motion.div>

          <motion.div
            className={styles.servicesGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            {servicesData.map((service) => {
              const isExpanded = expandedCardId === service.id;

              return (
                <motion.article
                  key={service.id}
                  variants={cardVariants}
                  className={`${styles.serviceCard} ${
                    service.theme === "blue"
                      ? styles.blue
                      : service.theme === "orange"
                        ? styles.orange
                        : ""
                  } ${isExpanded ? styles.expandedCard : ""}`}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.cardNumber}>
                      {service.number}
                    </span>

                    <span className={styles.cardCategory}>
                      {service.category}
                    </span>
                  </div>

                  <div className={styles.cardIcon}>
                    {service.icon}
                  </div>

                  <h3>{service.title}</h3>

                  <p className={styles.cardDescription}>
                    {service.description}
                  </p>

                  <ul className={styles.featuresList}>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <FaCheck />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`details-${service.id}`}
                        className={styles.cardDetails}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{service.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    className={styles.learnMore}
                    onClick={() => handleToggleDetails(service.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`details-${service.id}`}
                  >
                    {isExpanded ? "Voir moins" : "En savoir plus"}
                    <FaArrowRight
                      className={isExpanded ? styles.rotatedArrow : ""}
                    />
                  </button>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* TECHNOLOGIES / CAPABILITIES */}
        <section className={styles.technologySection}>
          <div className={styles.technologyInner}>
            <motion.div
              className={styles.technologyIntro}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.sectionEyebrow}>
                <span />
                NOTRE SAVOIR-FAIRE
              </div>

              <h2>
                Une vision globale.
                <span>Une expertise complémentaire.</span>
              </h2>
            </motion.div>

            <motion.div
              className={styles.technologyList}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {technologies.map((technology) => (
                <motion.div
                  key={technology.label}
                  className={styles.technologyItem}
                  variants={cardVariants}
                >
                  {technology.icon}
                  <span>{technology.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.section
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.ctaGrid} />
          <div className={styles.ctaGlow} />

          <div className={styles.ctaContent}>
            <div className={styles.ctaEyebrow}>
              <span />
              VOTRE PROCHAIN PROJET COMMENCE ICI
            </div>

            <h2>
              Et si nous donnions
              <span>vie à votre idée ?</span>
            </h2>

            <p>
              Parlons de vos objectifs, de vos défis et de la solution digitale
              qui pourrait faire la différence.
            </p>

            <Link href="/contact" className={styles.ctaButton}>
              Discutons de votre projet
              <FaArrowRight />
            </Link>

            <span className={styles.ctaFootnote}>
              Inova Sphere — Smart tech, real impact.
            </span>
          </div>
        </motion.section>
      </main>
    </>
  );
}
