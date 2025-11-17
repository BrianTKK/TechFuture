
import { Platform, FaqItem } from './types';

export const PLATFORMS: Platform[] = [
  {
    name: 'Mimo',
    url: 'https://mimo.org/',
    description: 'Aprenda a programar e construa aplicativos e sites em qualquer lugar, a qualquer hora.',
    tags: ['Iniciante', 'Mobile', 'Desenvolvimento Web'],
  },
  {
    name: 'Alura',
    url: 'https://www.alura.com.br/',
    description: 'Plataforma completa com cursos de tecnologia, desde programação até design e data science.',
    tags: ['Iniciante', 'Avançado', 'Front-end', 'Back-end', 'Data Science'],
  },
  {
    name: 'CodeCombat',
    url: 'https://codecombat.com/',
    description: 'Aprenda a programar jogando um jogo de RPG. Divertido para todas as idades.',
    tags: ['Iniciante', 'Gamificação', 'Python', 'JavaScript'],
  },
  {
    name: 'CodeMonkey',
    url: 'https://www.codemonkey.com/',
    description: 'Ensina programação para crianças através de jogos divertidos e interativos.',
    tags: ['Iniciante', 'Gamificação', 'Crianças'],
  },
  {
    name: 'CodinGame',
    url: 'https://www.codingame.com/start/',
    description: 'Aprimore suas habilidades de programação com desafios e competições online.',
    tags: ['Intermediário', 'Avançado', 'Gamificação', 'Desafios'],
  },
  {
    name: 'CheckiO',
    url: 'https://checkio.org/',
    description: 'Aprenda Python ou TypeScript resolvendo desafios e missões em um mundo de jogos.',
    tags: ['Iniciante', 'Intermediário', 'Gamificação', 'Python', 'TypeScript'],
  },
  {
    name: 'Flexbox Froggy',
    url: 'https://flexboxfroggy.com/',
    description: 'Um jogo divertido para aprender os conceitos do Flexbox em CSS.',
    tags: ['Iniciante', 'CSS', 'Front-end', 'Gamificação'],
  },
  {
    name: 'CSS Grid Garden',
    url: 'https://cssgridgarden.com/',
    description: 'Aprenda a usar o Grid Layout do CSS cuidando do seu jardim de cenouras.',
    tags: ['Iniciante', 'CSS', 'Front-end', 'Gamificação'],
  },
  {
    name: 'CSS Diner',
    url: 'https://flukeout.github.io/',
    description: 'Aprenda sobre seletores CSS com este pequeno e divertido jogo.',
    tags: ['Iniciante', 'CSS', 'Front-end', 'Gamificação'],
  },
  {
    name: 'Elevator Saga',
    url: 'https://play.elevatorsaga.com/',
    description: 'Teste suas habilidades em JavaScript programando o movimento de um elevador.',
    tags: ['Intermediário', 'JavaScript', 'Desafios', 'Gamificação'],
  },
  {
    name: 'SQL Murder Mystery',
    url: 'https://mystery.knightlab.com/',
    description: 'Aprenda conceitos e comandos SQL resolvendo um crime misterioso.',
    tags: ['Iniciante', 'Back-end', 'SQL', 'Gamificação'],
  },
  {
    name: 'Screeps',
    url: 'https://screeps.com/',
    description: 'Um MMO de estratégia para programadores, onde você controla sua colônia com JavaScript.',
    tags: ['Avançado', 'JavaScript', 'Gamificação', 'Back-end'],
  },
  {
    name: 'Codedex',
    url: 'https://www.codedex.io/home',
    description: 'Aprenda a programar com uma experiência gamificada e uma comunidade engajada.',
    tags: ['Iniciante', 'Gamificação', 'Desenvolvimento Web'],
  },
  {
    name: 'Roadmap.sh',
    url: 'https://roadmap.sh/',
    description: 'Guias e roadmaps para desenvolvedores, mostrando caminhos para se tornar um especialista.',
    tags: ['Guias', 'Front-end', 'Back-end', 'DevOps'],
  },
  {
    name: 'Codewars',
    url: 'https://www.codewars.com/',
    description: 'Melhore suas habilidades resolvendo desafios de programação (kata) em várias linguagens.',
    tags: ['Intermediário', 'Avançado', 'Desafios', 'Algoritmos'],
  },
];


export const CATEGORIES = [
  'Iniciante',
  'Intermediário',
  'Avançado',
  'Front-end',
  'Back-end',
  'CSS',
  'JavaScript',
  'Python',
  'Gamificação',
  'Desafios',
  'Guias',
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Por que aprender a programar é importante para o futuro?',
    answer: 'A tecnologia está se tornando central em quase todas as profissões. Aprender a programar não apenas abre portas para carreiras em tecnologia, mas também desenvolve o raciocínio lógico e a capacidade de resolver problemas, habilidades valiosas em qualquer área.'
  },
  {
    question: 'Eu preciso de um diploma universitário para trabalhar com tecnologia?',
    answer: 'Não necessariamente. Embora a educação formal seja valiosa, a área de tecnologia valoriza muito as habilidades práticas. Muitas empresas focam mais em seu portfólio, projetos e conhecimento demonstrado do que em diplomas. As plataformas listadas são ótimas para construir essa base.'
  },
  {
    question: 'Qual a melhor linguagem de programação para começar?',
    answer: 'Para iniciantes, Python e JavaScript são excelentes escolhas. Python é conhecido por sua sintaxe limpa e legível, sendo muito usado em análise de dados e IA. JavaScript é a linguagem da web, essencial para desenvolvimento front-end e cada vez mais popular no back-end.'
  },
  {
    question: 'Quanto tempo leva para conseguir um emprego na área?',
    answer: 'Isso varia muito dependendo do seu ritmo de estudo, dedicação e da área que você escolher. Com foco e estudo consistente, algumas pessoas conseguem sua primeira oportunidade em 6 a 12 meses, mas o aprendizado é contínuo ao longo de toda a carreira.'
  }
];
