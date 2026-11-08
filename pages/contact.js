
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaArrowRight,
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import styles from "../styles/Contact.module.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const contactMethods = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "contact@inovasphere.tech",
    href: "mailto:contact@inovasphere.tech",
    description: "Écrivez-nous directement",
  },
  {
    icon: FaPhone,
    label: "Téléphone",
    value: "+216 53 123 640",
    href: "tel:+21653123640",
    description: "Parlons de votre projet",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+216 53 123 640",
    href: "https://wa.me/21653123640",
    description: "Contactez-nous sur WhatsApp",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Une erreur est survenue. Veuillez réessayer."
        );
      }

      setStatus({
        type: "success",
        message:
          "Votre message a bien été envoyé. Notre équipe vous contactera bientôt.",
      });

      setForm(initialForm);
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.message ||
          "Impossible d'envoyer votre message. Veuillez réessayer.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Inova Sphere – Parlons de votre projet digital</title>

        <meta
          name="description"
          content="Contactez Inova Sphere pour vos projets web, mobile et intelligence artificielle. Notre équipe vous accompagne dans la réalisation de vos solutions digitales en Tunisie."
        />

        <meta
          name="keywords"
          content="contact Inova Sphere, agence digitale Tunisie, développement web Tunisie, développement mobile, intelligence artificielle, solutions digitales"
        />

        <link rel="canonical" href="https://inovasphere.tech/contact" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact | Inova Sphere" />
        <meta
          property="og:description"
          content="Une idée, un projet ou une question ? Échangeons ensemble et donnons vie à vos ambitions digitales."
        />
        <meta
          property="og:url"
          content="https://inovasphere.tech/contact"
        />
        <meta property="og:locale" content="fr_TN" />
        <meta property="og:site_name" content="Inova Sphere" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Inova Sphere" />
        <meta
          name="twitter:description"
          content="Contactez notre équipe pour discuter de votre prochain projet digital."
        />
      </Head>

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />

          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              <span className={styles.eyebrowLine} />
              CONTACT
            </motion.span>

            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Construisons
              <br />
              quelque chose de <span>grand.</span>
            </motion.h1>

            <motion.p className={styles.heroDescription} variants={fadeUp}>
              Chaque grande idée commence par une conversation.
              Parlez-nous de votre projet et imaginons ensemble
              la prochaine étape.
            </motion.p>

            <motion.a
              href="#contact-details"
              className={styles.heroLink}
              variants={fadeUp}
            >
              Entrer en contact
              <FaArrowRight />
            </motion.a>
          </motion.div>

          <div className={styles.heroDecoration} aria-hidden="true">
            <div className={styles.decorationCircle}>
              <div className={styles.decorationInner}>
                <span>IS</span>
              </div>
              <span className={styles.decorationDot} />
            </div>

            <span className={styles.decorationLabel}>
              SMART TECH
              <br />
              REAL IMPACT
            </span>
          </div>

          <div className={styles.heroBottom}>
            <span>INOVA SPHERE</span>
            <span>WEB · MOBILE · AI</span>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className={styles.contactSection} id="contact-details">
          <div className={styles.sectionHeading}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className={styles.sectionEyebrow}>
                RESTONS CONNECTÉS
              </span>

              <h2>
                Votre prochain projet
                <br />
                commence <span>ici.</span>
              </h2>

              <p>
                {`Vous avez une idée en tête ou besoin d'un accompagnement
                digital ? Notre équipe est à votre écoute.`}
              </p>
            </motion.div>
          </div>

          <div className={styles.contactGrid}>
            {/* LEFT SIDE */}
            <motion.aside
              className={styles.contactInfo}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
            >
              <div className={styles.infoHeader}>
                <span className={styles.sectionEyebrow}>
                  NOS COORDONNÉES
                </span>

                <h3>
                  Parlons de
                  <br />
                  votre vision.
                </h3>

                <p>
                  Choisissez le moyen de communication qui vous
                  convient le mieux.
                </p>
              </div>

              <div className={styles.contactMethods}>
                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      className={styles.contactMethod}
                      target={
                        method.label === "WhatsApp" ? "_blank" : undefined
                      }
                      rel={
                        method.label === "WhatsApp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <span className={styles.methodIcon}>
                        <Icon />
                      </span>

                      <span className={styles.methodContent}>
                        <span className={styles.methodLabel}>
                          {method.label}
                        </span>

                        <strong>{method.value}</strong>

                        <span className={styles.methodDescription}>
                          {method.description}
                        </span>
                      </span>

                      <FaArrowRight className={styles.methodArrow} />
                    </a>
                  );
                })}
              </div>

              <div className={styles.addressBlock}>
                <span className={styles.addressIcon}>
                  <FaMapMarkerAlt />
                </span>

                <div>
                  <span className={styles.methodLabel}>
                    Notre adresse
                  </span>

                  <p>
                    Cité Erriadh, Borj Cédria,
                    <br />
                    Immeuble Fadhel, 2e étage,
                    <br />
                    Rue Iraq, N°44, Soliman Erriadh,
                    <br />
                    Nabeul 8020, Tunisie.
                  </p>
                </div>
              </div>

              <div className={styles.socialBlock}>
                <span>RETROUVEZ-NOUS</span>

                <div className={styles.socialLinks}>
                  <a
                    href="https://www.facebook.com/profile.php?id=61576716958404"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Inova Sphere"
                  >
                    <FaFacebook />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/inova-sphere"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Inova Sphere"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </motion.aside>

            {/* RIGHT SIDE - FORM */}
            <motion.div
              className={styles.formCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
            >
              <div className={styles.formHeader}>
                <div>
                  <span className={styles.sectionEyebrow}>
                    UN PROJET EN TÊTE ?
                  </span>

                  <h3>Envoyez-nous un message.</h3>

                  <p>
                    Remplissez le formulaire et notre équipe
                    reviendra vers vous.
                  </p>
                </div>

                <div className={styles.formHeaderIcon}>
                  <FaPaperPlane />
                </div>
              </div>

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">
                      Nom complet <span>*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="email">
                      Adresse email <span>*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nom@exemple.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      maxLength={254}
                      required
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Numéro de téléphone</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+216 XX XXX XXX"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    maxLength={30}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message">
                    Votre message <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Parlez-nous de votre projet..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={5000}
                    required
                  />
                </div>

                {status.message && (
                  <div
                    className={`${styles.formStatus} ${
                      status.type === "success"
                        ? styles.successStatus
                        : styles.errorStatus
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {status.type === "success" && <FaCheckCircle />}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={loading}
                >
                  <span>
                    {loading ? "Envoi en cours..." : "Envoyer le message"}
                  </span>

                  {!loading && <FaArrowRight />}
                </button>

                <p className={styles.formNote}>
                  <FaClock />
                  Nous vous répondrons dans les meilleurs délais.
                </p>
              </form>
            </motion.div>
          </div>
        </section>

        {/* MAP */}
        <section className={styles.mapSection}>
          <div className={styles.mapHeading}>
            <div>
              <span className={styles.sectionEyebrow}>NOUS TROUVER</span>

              <h2>
                Passons du digital
                <br />
                <span>à la rencontre.</span>
              </h2>
            </div>

            <p>
              Retrouvez notre équipe à Borj Cédria,
              en Tunisie.
            </p>
          </div>

          <div className={styles.mapFrame}>
            <iframe
              title="Localisation Inova Sphere à Borj Cédria"
              src="https://www.google.com/maps?q=Immeuble%20Fadhel%2C%20Borj%20Cedria%2C%20Tunisie&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </main>
    </>
  );
}
