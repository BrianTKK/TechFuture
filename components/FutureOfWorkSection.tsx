import React from 'react';

const FutureOfWorkSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">A Encruzilhada do Amanhã: Adapte-se ou Fique Para Trás</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">
          Estamos vivendo a mais profunda transformação no mercado de trabalho da história. Não é uma onda passageira, é uma mudança de era. A questão não é *se* a tecnologia vai impactar sua carreira, mas *como* e *quando*.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 text-slate-300 text-lg leading-relaxed">
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">O Fim de uma Era: Profissões em Risco</h3>
          <p className="mb-4">
            A automação e a Inteligência Artificial (IA) estão se tornando incrivelmente eficientes em tarefas repetitivas e baseadas em regras. Funções que antes exigiam um ser humano para entrada de dados, operação de caixa, telemarketing ou até mesmo certas análises contábeis estão sendo rapidamente assumidas por algoritmos. Isso não é motivo para pânico, mas para um despertar: o valor humano está se deslocando de tarefas de "fazer" para tarefas de "pensar", "criar" e "conectar".
          </p>
          <blockquote className="border-l-4 border-purple-500 pl-4 italic text-slate-400">
            "A automação aplicada a uma operação eficiente aumentará a eficiência. A automação aplicada a uma operação ineficiente aumentará a ineficiência." - Bill Gates
          </blockquote>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">A Evolução: Profissões Adaptadas pela Tecnologia</h3>
          <p className="mb-4">
            A maioria das profissões não desaparecerá, mas será radicalmente transformada. A tecnologia se tornará uma parceira, uma ferramenta que amplifica nossas capacidades. Pense nisso:
          </p>
          <ul className="list-disc list-inside space-y-3 mb-4 pl-4">
            <li><strong>Médicos</strong> usarão IA para analisar exames e prever doenças com uma precisão antes inimaginável, permitindo que se concentrem no cuidado ao paciente.</li>
            <li><strong>Advogados</strong> utilizarão softwares para analisar milhares de documentos em minutos, identificando precedentes cruciais para seus casos.</li>
            <li><strong>Designers e Arquitetos</strong> criarão protótipos em realidade virtual, permitindo que clientes "entrem" em seus projetos antes da primeira pedra ser assentada.</li>
            <li><strong>Profissionais de Marketing</strong> deixarão de depender da intuição e usarão análise de dados para entender o comportamento do consumidor em tempo real.</li>
          </ul>
          <p>
            Em todos esses cenários, o profissional que dominar as ferramentas tecnológicas terá uma vantagem competitiva imensa. A tecnologia não os substitui, ela os torna melhores, mais rápidos e mais eficazes.
          </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">O Novo Horizonte: As Carreiras do Futuro</h3>
          <p className="mb-4">
            Paralelamente à transformação, um universo de novas carreiras está surgindo. Funções que pareciam ficção científica há uma década são hoje algumas das mais promissoras:
          </p>
           <ul className="list-disc list-inside space-y-3 pl-4">
            <li><strong>Engenheiro(a) de Prompt:</strong> Especialistas em "conversar" com IAs para extrair os melhores resultados.</li>
            <li><strong>Especialista em Ética de IA:</strong> Garantindo que os sistemas de inteligência artificial sejam justos, transparentes e não perpetuem preconceitos.</li>
            <li><strong>Desenvolvedor(a) de Realidade Aumentada/Virtual:</strong> Criando as experiências imersivas que definirão o futuro do entretenimento, educação e trabalho.</li>
             <li><strong>Cientista de Dados:</strong> O "tradutor" do bem mais valioso do século XXI: os dados.</li>
          </ul>
        </div>

        <div className="!mt-16 pt-8 border-t border-slate-700 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">O Fio Condutor: A Alfabetização Digital é o Novo Normal</h3>
          <p className="max-w-3xl mx-auto">
            Seja qual for o seu caminho, o denominador comum é a tecnologia. Aprender a programar, entender a lógica por trás dos sistemas, analisar dados e ter fluência digital não são mais habilidades de nicho para "pessoas de TI". São competências fundamentais, como ler e escrever foram no século passado.
          </p>
          <p className="mt-4 max-w-3xl mx-auto font-semibold text-cyan-300">
            Aprender tecnologia não é sobre se tornar um programador. É sobre se tornar um profissional preparado para o futuro, seja ele qual for. É o caminho para não ser apenas um espectador, mas um criador ativo na nova economia digital.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureOfWorkSection;