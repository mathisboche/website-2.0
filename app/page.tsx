export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 flex flex-col gap-32 pb-32">
      <section className="flex flex-col items-center text-center gap-4 mt-16">
        <h2 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--c1)] via-[var(--c2)] to-[var(--c3)] animate-pulse">
          Concevoir. Anticiper. Élever.
        </h2>
        <p className="text-sm text-gray-400 max-w-md leading-relaxed">
          Je suis Mathis Boche, ingénieur digital en devenir et joueur d’échecs passionné.  
          J’allie rigueur technologique, approche créative et vision stratégique pour façonner des solutions numériques élégantes et durables.
        </p>
      </section>

      <section id="expertise" className="flex flex-col gap-6 backdrop-blur-md bg-white/5 rounded-lg p-8 border border-white/10">
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--c2)] to-[var(--c3)]">
          Expertise
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
          Maîtrise avancée du développement web (JavaScript, Python, HTML, CSS, Next.js), déploiement agile (Vercel, GitHub), conception UX (Figma), et optimisation des performances. J’offre une approche complète, du code à la mise en production, pour des projets résolument tournés vers l’excellence technique.
        </p>
      </section>

      <section id="parcours" className="flex flex-col gap-6 backdrop-blur-md bg-white/5 rounded-lg p-8 border border-white/10">
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--c1)] to-[var(--c2)]">
          Parcours
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
          Un itinéraire formé entre Normandie et région parisienne, enrichi par une éducation exigeante et un engagement constant. En terminale, je vise une prépa scientifique pour affûter mes compétences, élargir mes perspectives et renforcer ma capacité d’innovation.
        </p>
      </section>

      <section id="vision" className="flex flex-col gap-6 backdrop-blur-md bg-white/5 rounded-lg p-8 border border-white/10">
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--c3)] to-[var(--c1)]">
          Vision
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
          Au croisement du code et des échecs, je cultive une pensée stratégique, une élégance conceptuelle et un sens aigu de l’exécution. Mon ambition : concevoir un futur numérique harmonieux, où chaque solution s’inscrit dans une vision globale et durable.
        </p>
      </section>

      <section className="flex flex-col items-center gap-4">
        <p className="text-sm text-gray-500">
          Prêt à concrétiser vos idées ?
        </p>
        <a
          href="mailto:mathisboche@outlook.fr"
          className="border border-[var(--c2)] text-[var(--c2)] px-4 py-2 rounded-sm hover:bg-[var(--c2)] hover:text-black transition-all"
        >
          Me contacter
        </a>
      </section>
    </div>
  );
}
