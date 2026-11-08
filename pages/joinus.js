import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/JoinUs.module.css';
import { FaUpload, FaPaperPlane, FaGithub, FaLinkedin, FaGlobe, FaUserTie, FaGraduationCap, FaCode, FaMapMarkerAlt, FaMoneyBillWave, FaInfoCircle } from 'react-icons/fa';
import Head from 'next/head';
const JoinUs = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    education_level: '',
    training: '',
    skills: '',
    address: '',
    portfolio_link: '',
    github_link: '',
    source: '',
    applied_role: '',
    expected_salary: '',
    salary_type: '',
  });
  const [resume, setResume] = useState(null);
  const [resumeName, setResumeName] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'applied_role') {
      const lower = value.toLowerCase();
      if (lower.includes('freelance')) {
        setFormData((prev) => ({ ...prev, salary_type: 'hourly' }));
      } else if (!lower.includes('intern')) {
        setFormData((prev) => ({ ...prev, salary_type: 'monthly' }));
      } else {
        setFormData((prev) => ({ ...prev, salary_type: '' }));
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      setResumeName(file.name);
    }
  };

  const removeResume = () => {
    setResume(null);
    setResumeName('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.full_name || !formData.email || !formData.applied_role || !formData.source || !resume) {
      setMessage('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    const data = new FormData();
    for (let key in formData) data.append(key, formData[key]);
    data.append('resume', resume);

    try {
      const res = await axios.post('https://www.inovasphere.tech/api/recruitment/saveApplication', data);
      setMessage('Votre candidature a été envoyée avec succès!');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        education_level: '',
        training: '',
        skills: '',
        address: '',
        portfolio_link: '',
        github_link: '',
        source: '',
        applied_role: '',
        expected_salary: '',
        salary_type: '',
      });
      setResume(null);
      setResumeName('');
    } catch (error) {
      console.error(error);
      setMessage("Erreur lors de l'envoi. Veuillez réessayer.");
    }
  };

    return (
        <>
         <Head>
        <title>  {`Rejoignez l'équipe Inova Sphere - Postulez dès maintenant`}</title>
        <meta name="description" content="Postulez chez Inova Sphere, entreprise tunisienne innovante en développement web, mobile et IA. Rejoignez une équipe dynamique et collaborative." />
        <meta name="keywords" content="Recrutement, Emploi, Inova Sphere,travail,développeur,ingénieur,ingénieur informatique, Développement web, Mobile,Stage Tunisie, Stage d'été Tunisie, Stage informatique Tunisie, Stage développement web, Stage développement mobile, Stage IA Tunisie,Stage Graphic Design Tunisie, Stage UX/UI Tunis, Stage Design Digital, Stage d'été Design, Stage en Design Graphique, Stage Web Design, Intelligence Artificielle, Stage, Freelance, CDI" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
        <meta property="og:title" content="Rejoignez l'équipe Inova Sphere - Postulez dès maintenant" />
        <meta property="og:description" content="Postulez chez Inova Sphere, entreprise tunisienne innovante en développement web, mobile et IA." />
        <meta property="og:type" content="website" />
      
      </Head>
   <div className={styles.container}>
      {/* Header section - now standalone */}
      <div className={styles.header}>
        <h1 className={styles.title}>  {`Rejoignez l'équipe Inova Sphere`}</h1>
        <p className={styles.subtitle}>
            {`Une entreprise tunisienne spécialisée dans le développement web, mobile et les solutions d'IA`}
        </p>
      </div>

      {/* Content section with two columns */}
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <div className={styles.companyInfo}>
          <div>
              <h3>Pourquoi nous rejoindre ?</h3>
              <ul>
                <li><span>🚀</span> Environnement dynamique et innovant</li>
                <li><span>💡</span> Projets ambitieux et technologies de pointe</li>
                <li><span>🌱</span> Opportunités de croissance professionnelle</li>
                <li><span>🤝</span> Culture collaborative et équipe soudée</li>
              </ul>
            </div>

            {/* Second paragraph on the right */}
            <div>
              <h3>Notre Processus</h3>
              <p>Nous examinons chaque candidature avec attention et contacterons les candidats retenus dans les 2 semaines.</p>
              
              <h3>Avantages</h3>
              <ul>
                <li>Formations continues</li>
                <li>Environnement de travail flexible</li>
                <li>Projets variés et stimulants</li>
              </ul>
            </div>
          </div>
        </div>

     <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Formulaire de recrutement</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="full_name"><FaUserTie /> Nom complet *</label>
          <input 
            type="text" 
            id="full_name" 
            name="full_name" 
            value={formData.full_name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">📧 Adresse email *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">📱 Numéro de téléphone</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="education_level"><FaGraduationCap /> Niveau scolaire</label>
          <input 
            type="text" 
            id="education_level" 
            name="education_level" 
            value={formData.education_level} 
            onChange={handleChange} 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="training">🎓 Formations</label>
          <textarea 
            id="training" 
            name="training" 
            value={formData.training} 
            onChange={handleChange} 
            rows={3} 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="skills"><FaCode /> Compétences</label>
          <textarea 
            id="skills" 
            name="skills" 
            value={formData.skills} 
            onChange={handleChange} 
            rows={3} 
            placeholder="Listez vos compétences techniques et non techniques"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address"><FaMapMarkerAlt /> Adresse</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="portfolio_link"><FaGlobe /> Lien portfolio</label>
          <input 
            type="url" 
            id="portfolio_link" 
            name="portfolio_link" 
            value={formData.portfolio_link} 
            onChange={handleChange} 
            placeholder="https://votresite.com" 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="github_link"><FaGithub /> Lien Github</label>
          <input 
            type="url" 
            id="github_link" 
            name="github_link" 
            value={formData.github_link} 
            onChange={handleChange} 
            placeholder="https://github.com/votreprofil" 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="applied_role">💼 Poste désiré *</label>
          <select 
            id="applied_role" 
            name="applied_role" 
            value={formData.applied_role} 
            onChange={handleChange} 
            required
          >
            <option value="">Sélectionnez un poste</option>
            <option>Graphic Design Internship</option>
            <option>UI/UX Internship</option>
            <option>Junior Developer</option>
            <option>Mid-level Web Developer</option>
            <option>Mid-level Mobile Developer</option>
            <option>Web Dev Internship</option>
            <option>Mobile Dev Internship</option>
            <option>Junior Mobile Developer</option>
            <option>DevOps Engineer</option>
            <option>Tech Lead / Project Manager</option>
            <option>AI Engineer</option>
            <option>Client Service Agent</option>
            <option>Freelance Developer</option>
            <option>Freelance Designer (Web)</option>
            <option>Freelance Designer (Mobile)</option>
            <option>Freelance Designer (Graphic)</option>
            <option>Freelance Designer (UX/UI)</option>
          </select>
        </div>
{!formData.applied_role.toLowerCase().includes('intern') && (
  <div className={styles.formGroup}>
    <label htmlFor="expected_salary">
      <FaMoneyBillWave /> Salaire attendu{' '}
      {formData.salary_type && (
        <span className={styles.salaryType}>
          ({formData.salary_type === 'hourly' ? 'par heure' : 'par mois'})
        </span>
      )}
    </label>
    <input
      type="number"
      id="expected_salary"
      name="expected_salary"
      value={formData.expected_salary}
      onChange={handleChange}
      placeholder={formData.salary_type === 'hourly' ? 'Ex: 25' : 'Ex: 2500'}
    />
  </div>
)}


     <div className={styles.formGroup}>
  <label htmlFor="source"><FaInfoCircle /> Comment avez-vous entendu parler de nous ? *</label>
  <select
    id="source"
    name="source"
    value={formData.source}
    onChange={handleChange}
    required
  >
    <option value="">Sélectionnez une option</option>
    <option value="Recherche Google">Recherche Google</option>
    <option value="Facebook">Facebook</option>
    <option value="LinkedIn">LinkedIn</option>
    <option value="Recommandation">Recommandation (ami/collègue)</option>
    <option value="Evénement">Evénement</option>
    <option value="Autre">Autre</option>
  </select>
</div>

        <div className={styles.formGroup}>
          <label htmlFor="resume"><FaUpload /> Joindre votre CV *</label>
          <div className={styles.fileUploadContainer}>
            <label htmlFor="resume" className={styles.fileUploadLabel}>
              <FaUpload /> Choisir un fichier
            </label>
            <input 
              type="file" 
              id="resume" 
              onChange={handleFileChange} 
              required 
              accept=".pdf,.doc,.docx" 
              className={styles.fileInput}
            />
            {resumeName && (
              <div className={styles.fileInfo}>
                <span>{resumeName}</span>
                <button type="button" onClick={removeResume} className={styles.removeFile}>
                  ×
                </button>
              </div>
            )}
          </div>
        </div>

        <button className={styles.submit} type="submit">
          <FaPaperPlane /> Envoyer ma candidature
        </button>
    </form>
        </div>
      </div>

      {/* Message and footer sections */}
      {message && (
        <div className={`${styles.message} ${message.includes('succès') ? styles.success : styles.error}`}>
          {message}
        </div>
      )}

      <div className={styles.footerNote}>
        <p>Nous examinerons votre candidature et vous contacterons si votre profil correspond à nos besoins.</p>
        <p>  {`L'équipe Inova Sphere vous remercie pour votre intérêt!`}</p>
      </div>
    </div>
    </>
  );
};

export default JoinUs;