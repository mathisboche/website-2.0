/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.mathisboche.fr', // Remplacez par l'URL de votre site
  generateRobotsTxt: true, // Générer un fichier robots.txt
  exclude: ['/admin', '/api'], // Exclure des pages spécifiques
  changefreq: 'monthly', // Fréquence des modifications
  priority: 0.7, // Priorité par défaut des pages
};

module.exports = config;
