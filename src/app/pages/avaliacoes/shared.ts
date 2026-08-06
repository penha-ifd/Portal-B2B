import type React from 'react';

export const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

export const REVIEWS = [
  { id: 1, fonte: "google" as const, estrelas: 5, nome: "Maria S.", data: "2026-07-28", texto: "Comida maravilhosa, o prato do dia estava perfeito. Atendimento super atencioso, voltarei com certeza!", respondida: false, temas: ["Comida", "Atendimento"], unidade: "Pinheiros" },
  { id: 2, fonte: "ifood" as const, estrelas: 4, nome: "João P.", data: "2026-07-27", texto: "Gostei bastante, mas demorou um pouco pra chegar. Comida estava quente ainda.", respondida: true, resposta: "Olá João, obrigado pelo feedback! Estamos trabalhando para melhorar nosso tempo de entrega.", temas: ["Comida", "Espera"], unidade: "Pinheiros" },
  { id: 3, fonte: "google" as const, estrelas: 2, nome: "Ana L.", data: "2026-07-25", texto: "Atendimento deixou a desejar, garçom demorou 20min pra trazer o cardápio. Comida ok mas nada especial pelo preço.", respondida: false, temas: ["Atendimento", "Espera", "Preço"], unidade: "Vila Madalena" },
  { id: 4, fonte: "ifood" as const, estrelas: 5, nome: "Carlos M.", data: "2026-07-24", texto: "Melhor hambúrguer da região! Sempre peço aqui.", respondida: true, resposta: "Valeu Carlos! Fica de olho nas novidades do cardápio.", temas: ["Comida"], unidade: "Pinheiros" },
  { id: 5, fonte: "google" as const, estrelas: 3, nome: "Fernanda R.", data: "2026-07-23", texto: "Ambiente bonito mas achei caro pelo que oferece. Porções poderiam ser maiores.", respondida: false, temas: ["Ambiente", "Preço"], unidade: "Moema" },
  { id: 6, fonte: "ifood" as const, estrelas: 1, nome: "Ricardo T.", data: "2026-07-22", texto: "Pedido veio errado e frio. Terceira vez que acontece. Inaceitável.", respondida: false, temas: ["Comida", "Atendimento"], unidade: "Vila Madalena" },
  { id: 7, fonte: "google" as const, estrelas: 5, nome: "Patrícia G.", data: "2026-07-21", texto: "Lugar incrível pra um jantar a dois. Carta de vinhos excelente e atendimento impecável.", respondida: true, resposta: "Obrigada Patrícia! Temos novidades na carta, volte logo!", temas: ["Ambiente", "Atendimento"], unidade: "Pinheiros" },
  { id: 8, fonte: "ifood" as const, estrelas: 4, nome: "Bruno A.", data: "2026-07-20", texto: "Boa opção no bairro. Entrega rápida e comida saborosa.", respondida: false, temas: ["Comida"], unidade: "Moema" },
];

export const DISTRIBUICAO = [
  { estrelas: 5, pct: 62 },
  { estrelas: 4, pct: 24 },
  { estrelas: 3, pct: 8 },
  { estrelas: 2, pct: 4 },
  { estrelas: 1, pct: 2 },
];

export const TEMAS = [
  { nome: "Comida", sentimento: "positivo" as const, count: 38 },
  { nome: "Ambiente", sentimento: "positivo" as const, count: 24 },
  { nome: "Atendimento", sentimento: "neutro" as const, count: 19 },
  { nome: "Preço", sentimento: "negativo" as const, count: 12 },
  { nome: "Espera", sentimento: "negativo" as const, count: 9 },
];

export const DISTRIBUICAO_TEMPORAL = {
  diaMes: [
    { label: "1–7", valor: 76 },
    { label: "8–14", valor: 73 },
    { label: "15–21", valor: 94 },
    { label: "22–28", valor: 70 },
    { label: "29–31", valor: 40 },
  ],
  diaSemana: [
    { label: "Dom", valor: 99 },
    { label: "Seg", valor: 56 },
    { label: "Ter", valor: 58 },
    { label: "Qua", valor: 31 },
    { label: "Qui", valor: 42 },
    { label: "Sex", valor: 46 },
    { label: "Sáb", valor: 95 },
  ],
  horario: [
    { label: "0h", valor: 98 },
    { label: "3h", valor: 4 },
    { label: "6h", valor: 5 },
    { label: "9h", valor: 8 },
    { label: "12h", valor: 33 },
    { label: "15h", valor: 93 },
    { label: "18h", valor: 90 },
    { label: "21h", valor: 70 },
  ],
};

export const SENTIMENTO = {
  nss: 76.6,
  variacao: 12.6,
  positivos: 164,
  negativos: 17,
  neutros: 11,
  total: 192,
};

export const WORD_CLOUD = [
  { palavra: "comida", count: 46, sentimento: "positivo" as const },
  { palavra: "atendimento", count: 42, sentimento: "positivo" as const },
  { palavra: "excelente", count: 30, sentimento: "positivo" as const },
  { palavra: "ambiente", count: 26, sentimento: "positivo" as const },
  { palavra: "espera", count: 24, sentimento: "negativo" as const },
  { palavra: "experiência", count: 23, sentimento: "neutro" as const },
  { palavra: "ótimo", count: 21, sentimento: "positivo" as const },
  { palavra: "demora", count: 20, sentimento: "negativo" as const },
  { palavra: "rápido", count: 19, sentimento: "positivo" as const },
  { palavra: "preço", count: 18, sentimento: "negativo" as const },
  { palavra: "maravilhoso", count: 18, sentimento: "positivo" as const },
  { palavra: "cardápio", count: 17, sentimento: "neutro" as const },
  { palavra: "recomendo", count: 16, sentimento: "positivo" as const },
  { palavra: "porção", count: 16, sentimento: "neutro" as const },
  { palavra: "voltarei", count: 15, sentimento: "positivo" as const },
  { palavra: "sabor", count: 15, sentimento: "positivo" as const },
  { palavra: "frio", count: 14, sentimento: "negativo" as const },
  { palavra: "qualidade", count: 14, sentimento: "neutro" as const },
  { palavra: "pedido", count: 13, sentimento: "neutro" as const },
  { palavra: "garçom", count: 13, sentimento: "neutro" as const },
];

export const GOOGLE_PERFORMANCE = {
  visualizacoes: { valor: 56227, delta: 2096, positivo: true },
  cliquesSite: { valor: 398, delta: 13, positivo: false },
  cliquesLigacao: { valor: 747, delta: 237, positivo: false },
  solicitacoesRota: { valor: 781, delta: 262, positivo: false },
  taxaInteracao: { valor: 3.43, delta: 1.08, positivo: false },
  distribuicao: { site: 20.66, ligacao: 38.79, rota: 40.55 },
};

export const UNIDADES = [
  {
    nome: "Cantina Di Napoli - Pinheiros",
    short: "Pinheiros",
    notaPublica: 4.7,
    notaGoogle: 4.7,
    notaIfood: 4.8,
    notaPeriodo: 4.8,
    delta: +0.1,
    volume: 92,
    nota: 4.72,
    distribuicao: [
      { estrelas: 5, count: 664, pct: 89 },
      { estrelas: 4, count: 27, pct: 8 },
      { estrelas: 3, count: 15, pct: 4 },
      { estrelas: 2, count: 9, pct: 3 },
      { estrelas: 1, count: 31, pct: 6 },
    ],
  },
  {
    nome: "Cantina Di Napoli - Vila Madalena",
    short: "Vila Madalena",
    notaPublica: 4.5,
    notaGoogle: 4.5,
    notaIfood: 4.4,
    notaPeriodo: 4.3,
    delta: -0.2,
    volume: 21,
    nota: 4.49,
    distribuicao: [
      { estrelas: 5, count: 198, pct: 84 },
      { estrelas: 4, count: 7, pct: 5 },
      { estrelas: 3, count: 5, pct: 4 },
      { estrelas: 2, count: 3, pct: 3 },
      { estrelas: 1, count: 24, pct: 12 },
    ],
  },
  {
    nome: "Cantina Di Napoli - Moema",
    short: "Moema",
    notaPublica: 4.3,
    notaGoogle: 4.3,
    notaIfood: 4.6,
    notaPeriodo: 4.5,
    delta: +0.2,
    volume: 20,
    nota: 4.24,
    distribuicao: [
      { estrelas: 5, count: 115, pct: 74 },
      { estrelas: 4, count: 7, pct: 5 },
      { estrelas: 3, count: 10, pct: 7 },
      { estrelas: 2, count: 1, pct: 2 },
      { estrelas: 1, count: 22, pct: 14 },
    ],
  },
];

export const RESPOSTAS_PREDEFINIDAS = [
  "Obrigado pelo feedback! Ficamos felizes que tenha gostado.",
  "Agradecemos sua avaliação. Vamos trabalhar para melhorar!",
  "Sentimos muito pela experiência. Gostaríamos de conversar para resolver.",
];

export function diasAtras(dataStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dataStr).getTime()) / 86400000);
  if (diff === 0) return "hoje";
  if (diff === 1) return "ontem";
  return `há ${diff} dias`;
}

export function renderEstrelas(n: number): string {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

export function getSentimento(estrelas: number): "positivo" | "neutro" | "negativo" {
  if (estrelas >= 4) return "positivo";
  if (estrelas === 3) return "neutro";
  return "negativo";
}

export function getInitials(nome: string): string {
  const parts = nome.split(/\s+/);
  return parts.map(p => p[0]).join("").toUpperCase().slice(0, 2);
}
