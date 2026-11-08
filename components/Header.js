
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/propos" },
  { label: "Nos services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const pageTitles = {
  "/": {
    eyebrow: "WEB • MOBILE • INTELLIGENCE ARTIFICIELLE",
    title: "Vos idées méritent",
    description:
      "Nous concevons des expériences digitales intelligentes qui font évoluer votre entreprise.",
    showButton: true,
  },
  "/services": {
    eyebrow: "NOS EXPERTISES",
    title: "La technologie au service de vos idées.",
    description:
      "Des solutions web, mobiles et intelligentes pensées pour répondre à vos objectifs.",
    showButton: false,
  },
  "/propos": {
    eyebrow: "QUI SOMMES-NOUS ?",
    title: "L'innovation commence par une vision.",
    description:
      "Nous transformons les idées ambitieuses en solutions digitales concrètes et durables.",
    showButton: false,
  },
  "/blog": {
    eyebrow: "INSIGHTS & INNOVATION",
    title: "Le digital évolue. Restons en avance.",
    description:
      "Découvrez nos réflexions, conseils et actualités autour des nouvelles technologies.",
    showButton: false,
  },
  "/contact": {
    eyebrow: "PARLONS DE VOTRE PROJET",
    title: "Votre prochaine idée commence ici.",
    description:
      "Parlons de vos besoins et imaginons ensemble la solution qui vous correspond.",
    showButton: false,
  },
  "/joinus": {
    eyebrow: "REJOIGNEZ L'AVENTURE",
    title: "Construisons ensemble le digital de demain.",
    description:
      "Envie de créer, d'innover et de relever de nouveaux défis ? Parlons-en.",
    showButton: false,
  },
};

const rotatingPhrases = [
  "un site web remarquable.",
  "une application mobile.",
  "une solution IA innovante.",
  "un projet sans limites.",
];

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const currentPage = pageTitles[router.pathname] || pageTitles["/"];

  useEffect(() => {
    if (router.pathname !== "/") return;

    const interval = setInterval(() => {
      setPhraseIndex((previous) =>
        (previous + 1) % rotatingPhrases.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [router.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      {/* Background layers */}
      <div className={styles.backgroundOverlay} />
      <div className={styles.decorativeGlow} />
      <div className={styles.glowOrb} />
      <div className={styles.glowOrbTwo} />
      <div className={styles.techGrid} />
      <div className={styles.lightBeam} />
      <div className={styles.digitalLine} />

      {/* Navigation */}
      <div className={styles.navWrapper}>
        <div className={styles.navContainer}>
          <Link
            href="/"
            className={styles.logoContainer}
            aria-label="Inova Sphere - Accueil"
          >
            <Image
              src="/images/inova_logo_blanc.png"
              width={170}
              height={55}
              alt="Inova Sphere - Développement web, mobile et intelligence artificielle"
              priority
              className={styles.logo}
            />
          </Link>

          <nav
            className={styles.desktopNav}
            aria-label="Navigation principale"
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                style={{ "--nav-index": index }}
                className={`${styles.navLink} ${
                  router.pathname === link.path ? styles.active : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/contact" className={styles.navCta}>
              Démarrer un projet
              <HiArrowUpRight />
            </Link>
          </nav>

          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className={styles.heroContainer}>
        <div key={router.pathname} className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            {currentPage.eyebrow}
          </div>

          <h1
            className={styles.heroTitle}
            aria-label={
              router.pathname === "/"
                ? `Vos idées méritent ${rotatingPhrases[phraseIndex]}`
                : currentPage.title
            }
          >
            {currentPage.title}

            {router.pathname === "/" && (
              <span className={styles.rotatingWrapper}>
                <span
                  key={phraseIndex}
                  className={styles.rotatingPhrase}
                  aria-hidden="true"
                >
                  {rotatingPhrases[phraseIndex]}
                </span>
              </span>
            )}
          </h1>

          <div className={styles.heroAccent}>
            <span />
          </div>

          <p className={styles.heroDescription}>
            {currentPage.description}
          </p>

          {currentPage.showButton && (
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryButton}>
                Parlons de votre projet
                <HiArrowUpRight />
              </Link>

              <Link href="/services" className={styles.secondaryButton}>
                Découvrir nos services
                <span>↗</span>
              </Link>
            </div>
          )}

          <div className={styles.heroBottom}>
            <span className={styles.heroBottomDot} />
            <span>Smart tech, real impact.</span>
            <span className={styles.bottomLine} />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuInner}>
          <span className={styles.mobileMenuLabel}>NAVIGATION</span>

          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              href={link.path}
              tabIndex={menuOpen ? 0 : -1}
              style={{ "--nav-index": index }}
              className={`${styles.mobileLink} ${
                router.pathname === link.path
                  ? styles.mobileLinkActive
                  : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.mobileLinkNumber}>
                0{index + 1}
              </span>

              {link.label}

              <HiArrowUpRight className={styles.mobileLinkArrow} />
            </Link>
          ))}

          <Link
            href="/contact"
            tabIndex={menuOpen ? 0 : -1}
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            Démarrer un projet
            <HiArrowUpRight />
          </Link>

          <p className={styles.mobileTagline}>
            Inova Sphere — Smart tech, real impact.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
