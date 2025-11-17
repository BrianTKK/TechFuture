import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

// Fix: Explicitly typed component as React.FC to resolve type inference issue with the 'children' prop.
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, children }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center">
    <div className="flex justify-center items-center mb-4 h-12 w-12 rounded-full bg-cyan-900/50 text-cyan-400 mx-auto">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
    <p className="text-slate-400">{children}</p>
  </div>
);

const FutureOfWorkSection = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">A Revolução já Começou</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Automação, Inteligência Artificial e novas formas de colaboração estão redefinindo o mercado de trabalho.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
            title="Novas Habilidades"
          >
            A demanda por habilidades digitais e de programação nunca foi tão alta. Adaptar-se é essencial para se manter relevante.
          </FeatureCard>
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
            title="Adaptação de Profissões"
          >
            Funções tradicionais estão evoluindo. Médicos, advogados, artistas e muitos outros usarão tecnologia para otimizar seu trabalho.
          </FeatureCard>
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
            title="Criação de Oportunidades"
          >
            A tecnologia não apenas extingue, mas também cria novas carreiras e oportunidades que ainda nem imaginamos.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default FutureOfWorkSection;