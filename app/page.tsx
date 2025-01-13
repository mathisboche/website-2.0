import Image from 'next/image';
import { 
  FaChessKing, 
  FaGlobe, 
  FaLaptopCode, 
  FaCertificate, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython 
} from 'react-icons/fa';

export default function HomePage() {
  return (
    <main className="font-['Source_Sans_Pro'] bg-[#0F0F0F] text-[#E0E0E0] min-h-screen relative">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center
                         bg-[#0F0F0F] bg-opacity-80 backdrop-blur-sm shadow-md">
        <h1 className="text-xl font-['Oswald'] font-semibold tracking-wide">
          Mathis Boche
        </h1>
        <nav>
          <ul className="hidden md:flex space-x-6 text-base">
            <li className="hover:text-[#FF4500] transition"><a href="#hero">Accueil</a></li>
            <li className="hover:text-[#FF4500] transition"><a href="#about">À propos</a></li>
            <li className="hover:text-[#FF4500] transition"><a href="#projects">Projets</a></li>
            <li className="hover:text-[#FF4500] transition"><a href="#skills">Compétences</a></li>
            <li className="hover:text-[#FF4500] transition"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="pt-24 pb-16 px-6 text-center bg-gradient-to-r from-[#0F0F0F] to-[#1C1C1C]"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-['Oswald'] font-bold mb-4 leading-tight">
            Lycéen passionné de code & d’échecs
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            J’allie ma soif de programmation web et ma fibre compétitive issue des échecs. 
            De la conception UX à l’implémentation, je rêve de bâtir des solutions numériques audacieuses.
          </p>
          <a 
            href="#about"
            className="inline-block bg-[#FF4500] px-8 py-3 text-base font-semibold rounded-full
                       hover:bg-[#FF6A33] transition-colors duration-300"
          >
            Découvrir mon parcours
          </a>
        </div>
      </section>

      {/*
      <section className="px-6 py-12 bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-['Oswald'] font-bold mb-6 text-center">
            Inspiration
          </h3>
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/midjourney-placeholder-1.jpg"
              alt="Illustration Midjourney Abstraite"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section> */}

      {/* STATS / HIGHLIGHTS */}
      <section className="px-6 py-12 bg-[#1C1C1C]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Stat: Élo Échecs */}
          <div className="bg-[#2A2A2A] p-6 rounded-xl text-center hover:shadow-md transition-all">
            <div className="mb-3 flex justify-center">
              <FaChessKing className="w-10 h-10 text-[#FF4500]" />
            </div>
            <h3 className="text-xl font-['Oswald'] mb-1 text-[#FF4500]">Élo Échecs</h3>
            <p className="text-base">1759 (objectif 2000)</p>
          </div>
          
          {/* Stat: Langues */}
          <div className="bg-[#2A2A2A] p-6 rounded-xl text-center hover:shadow-md transition-all">
            <div className="mb-3 flex justify-center">
              <FaGlobe className="w-10 h-10 text-[#FF4500]" />
            </div>
            <h3 className="text-xl font-['Oswald'] mb-1 text-[#FF4500]">Langues</h3>
            <p className="text-base">Français, Russe, Anglais</p>
          </div>
          
          {/* Stat: Projets Web */}
          <div className="bg-[#2A2A2A] p-6 rounded-xl text-center hover:shadow-md transition-all">
            <div className="mb-3 flex justify-center">
              <FaLaptopCode className="w-10 h-10 text-[#FF4500]" />
            </div>
            <h3 className="text-xl font-['Oswald'] mb-1 text-[#FF4500]">Projets Web</h3>
            <p className="text-base">Portfolio, ChessMates, etc.</p>
          </div>
          
          {/* Stat: DAFFE 1 */}
          <div className="bg-[#2A2A2A] p-6 rounded-xl text-center hover:shadow-md transition-all">
            <div className="mb-3 flex justify-center">
              <FaCertificate className="w-10 h-10 text-[#FF4500]" />
            </div>
            <h3 className="text-xl font-['Oswald'] mb-1 text-[#FF4500]">DAFFE 1</h3>
            <p className="text-base">Certification d’animateur échecs</p>
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="px-6 py-16 bg-gradient-to-r from-[#0F0F0F] to-[#1C1C1C]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-lg">
            {/* Placeholder Midjourney portrait abstr. */}
            <Image
              src="/images/portrait.png"
              alt="Portrait de Mathis Boche"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-['Oswald'] font-bold mb-4">
              À propos
            </h3>
            <p className="leading-relaxed mb-4 text-base md:text-lg">
              Je suis Mathis Boche, lycéen en Terminale passionné par le <strong>développement web</strong> et les <strong>échecs</strong>.
            </p>
            <p className="leading-relaxed mb-4 text-base md:text-lg">
              Trilingue (Français, Russe, Anglais), j’exploite cette ouverture culturelle et mon goût pour la stratégie pour créer des projets web originaux. 
              Les échecs m’ont appris la <em>réflexion</em>, la <em>patience</em> et l’<em>anticipation</em>.
            </p>
            <p className="leading-relaxed text-base md:text-lg">
              Mon ambition ? Intégrer une <strong>prépa scientifique</strong> puis une <strong>école d’ingénieur</strong>. 
              Je crois que la logique d’un échiquier et l’innovation technologique sont des clés pour façonner l’avenir.
            </p>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projects" className="px-6 py-16 bg-[#1C1C1C]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-['Oswald'] font-bold text-center mb-10">
            Projets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform">
              {/* Image Midjourney/Placeholder */}
             {/* <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                <Image
                  src="/images/midjourney-project1.jpg"
                  alt="Midjourney Project Placeholder"
                  fill
                  className="object-cover"
                />
              </div>*/}
              <h4 className="text-lg font-semibold mb-2 text-[#FF4500]">Portfolio Personnel</h4>
              <p className="text-base leading-relaxed">
                Un projet complet avec Next.js et TailwindCSS. Cette vitrine illustre mon souci du détail, 
                de l’UX/UI au déploiement sur Vercel.
              </p>
            </div>
            <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform">
             {/* <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                <Image
                  src="/images/midjourney-chess.jpg"
                  alt="Midjourney Chess Placeholder"
                  fill
                  className="object-cover"
                />
              </div>*/}
              <h4 className="text-lg font-semibold mb-2 text-[#FF4500]">ChessMates International</h4>
              <p className="text-base leading-relaxed">
                Responsable du site (Wix) et de la communication sur les réseaux. 
                J’y ai découvert le travail en équipe et l’organisation d’événements internationaux.
              </p>
            </div>
            <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform">
             {/* <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                <Image
                  src="/images/midjourney-project2.jpg"
                  alt="Midjourney Project Placeholder"
                  fill
                  className="object-cover"
                />
              </div>*/}
              <h4 className="text-lg font-semibold mb-2 text-[#FF4500]">Autres Projets</h4>
              <p className="text-base leading-relaxed">
                Divers projets scolaires et personnels autour de React et JS. 
                J’y explore de nouvelles approches et affine mes compétences de développeur junior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section id="skills" className="px-6 py-16 bg-gradient-to-r from-[#0F0F0F] to-[#1C1C1C] text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-['Oswald'] font-bold mb-8">Compétences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[#FF4500] flex items-center gap-2">
                <FaReact /> Développement Web
              </h4>
              <ul className="list-disc list-inside text-base md:text-lg space-y-2">
                <li className="flex items-center gap-2">
                  <FaHtml5 /> <strong>HTML</strong>
                </li>
                <li className="flex items-center gap-2">
                  <FaCss3Alt /> <strong>CSS</strong>
                </li>
                <li className="flex items-center gap-2">
                  <FaReact /> <strong>JavaScript / React / Next.js</strong>
                </li>
                <li className="flex items-center gap-2">
                  <FaPython /> <strong>Python</strong>
                </li>
                <li><strong>Outils :</strong> GitHub, Vercel, Wix Studio, Figma</li>
                <li><strong>Montage vidéo :</strong> DaVinci Resolve</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[#FF4500]">Échecs & Stratégie</h4>
              <p className="text-base md:text-lg">
                Elo standard : <strong>1759</strong> – Objectif : <strong>2000</strong>.
              </p>
              <ul className="list-disc list-inside text-base md:text-lg space-y-2">
                <li>2 participations Championnat de France Jeunes (U14/U16)</li>
                <li>DAFFE 1 : certification d’animateur</li>
                <li>Gestion du site & réseaux sociaux ChessMates</li>
                <li>Bénévolat en club, cours pour jeunes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT - amélioré */}
      <section id="contact" className="px-6 py-20 bg-[#1C1C1C] text-center relative overflow-hidden">
        <h3 className="text-2xl md:text-3xl font-['Oswald'] font-bold mb-6">Contact</h3>
        <p className="text-base md:text-lg max-w-xl mx-auto mb-8">
          Envie d’en savoir plus ? Besoin d’un développeur junior passionné par la stratégie et le code ?
          <br />N’hésitez pas à me joindre ou à parcourir mes réseaux :
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-8 sm:space-y-0 mb-8">
          <a
            href="https://github.com/mathisboche"
            className="inline-flex items-center text-base font-semibold hover:text-[#FF4500] transition"
          >
            <FaGithub className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mathis-boche"
            className="inline-flex items-center text-base font-semibold hover:text-[#FF4500] transition"
          >
            <FaLinkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a
            href="mailto:mathisboche@outlook.fr"
            className="inline-flex items-center text-base font-semibold hover:text-[#FF4500] transition"
          >
            <FaEnvelope className="w-5 h-5 mr-2" />
            Email
          </a>
        </div>

        <p className="text-sm text-gray-400">
          Tél : +33 6 01 86 85 89 <br/>
          Basé à Montrouge, France
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-4 bg-black text-center text-gray-400 text-xs">
        <p>© {new Date().getFullYear()} Mathis Boche – Lycéen & Développeur Web.</p>
      </footer>
    </main>
  );
}
