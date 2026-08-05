import type React from 'react';

export const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

export const REVIEWS = [
  { id: 1, fonte: "google" as const, estrelas: 5, nome: "Maria S.", data: "2026-07-28", texto: "Comida maravilhosa, o prato do dia estava perfeito. Atendimento super atencioso, voltarei com certeza!", respondida: false, temas: ["Comida", "Atendimento"] },
  { id: 2, fonte: "ifood" as const, estrelas: 4, nome: "João P.", data: "2026-07-27", texto: "Gostei bastante, mas demorou um pouco pra chegar. Comida estava quente ainda.", respondida: true, resposta: "Olá João, obrigado pelo feedback! Estamos trabalhando para melhorar nosso tempo de entrega.", temas: ["Comida", "Espera"] },
  { id: 3, fonte: "google" as const, estrelas: 2, nome: "Ana L.", data: "2026-07-25", texto: "Atendimento deixou a desejar, garçom demorou 20min pra trazer o cardápio. Comida ok mas nada especial pelo preço.", respondida: false, temas: ["Atendimento", "Espera", "Preço"] },
  { id: 4, fonte: "ifood" as const, estrelas: 5, nome: "Carlos M.", data: "2026-07-24", texto: "Melhor hambúrguer da região! Sempre peço aqui.", respondida: true, resposta: "Valeu Carlos! Fica de olho nas novidades do cardápio.", temas: ["Comida"] },
  { id: 5, fonte: "google" as const, estrelas: 3, nome: "Fernanda R.", data: "2026-07-23", texto: "Ambiente bonito mas achei caro pelo que oferece. Porções poderiam ser maiores.", respondida: false, temas: ["Ambiente", "Preço"] },
  { id: 6, fonte: "ifood" as const, estrelas: 1, nome: "Ricardo T.", data: "2026-07-22", texto: "Pedido veio errado e frio. Terceira vez que acontece. Inaceitável.", respondida: false, temas: ["Comida", "Atendimento"] },
  { id: 7, fonte: "google" as const, estrelas: 5, nome: "Patrícia G.", data: "2026-07-21", texto: "Lugar incrível pra um jantar a dois. Carta de vinhos excelente e atendimento impecável.", respondida: true, resposta: "Obrigada Patrícia! Temos novidades na carta, volte logo!", temas: ["Ambiente", "Atendimento"] },
  { id: 8, fonte: "ifood" as const, estrelas: 4, nome: "Bruno A.", data: "2026-07-20", texto: "Boa opção no bairro. Entrega rápida e comida saborosa.", respondida: false, temas: ["Comida"] },
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
    { label: "1-7", valor: 52 },
    { label: "8-14", valor: 68 },
    { label: "15-21", valor: 74 },
    { label: "22-28", valor: 89 },
    { label: "29-31", valor: 64 },
  ],
  diaSemana: [
    { label: "Dom", valor: 72 },
    { label: "Seg", valor: 38 },
    { label: "Ter", valor: 42 },
    { label: "Qua", valor: 45 },
    { label: "Qui", valor: 51 },
    { label: "Sex", valor: 68 },
    { label: "Sáb", valor: 81 },
  ],
  horario: [
    { label: "9h", valor: 8 },
    { label: "12h", valor: 45 },
    { label: "13h", valor: 52 },
    { label: "15h", valor: 12 },
    { label: "18h", valor: 38 },
    { label: "19h", valor: 72 },
    { label: "20h", valor: 89 },
    { label: "21h", valor: 65 },
    { label: "22h", valor: 28 },
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
  { palavra: "atendimento", count: 42, sentimento: "positivo" as const },
  { palavra: "comida", count: 38, sentimento: "positivo" as const },
  { palavra: "ambiente", count: 24, sentimento: "positivo" as const },
  { palavra: "experiência", count: 22, sentimento: "positivo" as const },
  { palavra: "ótimo", count: 20, sentimento: "positivo" as const },
  { palavra: "rápido", count: 18, sentimento: "positivo" as const },
  { palavra: "bom", count: 17, sentimento: "positivo" as const },
  { palavra: "excelente", count: 15, sentimento: "positivo" as const },
  { palavra: "espera", count: 14, sentimento: "negativo" as const },
  { palavra: "preço", count: 12, sentimento: "negativo" as const },
  { palavra: "demora", count: 10, sentimento: "negativo" as const },
  { palavra: "cardápio", count: 9, sentimento: "neutro" as const },
  { palavra: "porção", count: 8, sentimento: "neutro" as const },
  { palavra: "sabor", count: 16, sentimento: "positivo" as const },
  { palavra: "qualidade", count: 14, sentimento: "positivo" as const },
  { palavra: "pedido", count: 11, sentimento: "neutro" as const },
  { palavra: "frio", count: 7, sentimento: "negativo" as const },
  { palavra: "maravilhoso", count: 9, sentimento: "positivo" as const },
  { palavra: "recomendo", count: 13, sentimento: "positivo" as const },
  { palavra: "voltarei", count: 11, sentimento: "positivo" as const },
];

export const UNIDADES = [
  { nome: "Cantina Di Napoli - Pinheiros", notaPublica: 4.7, notaPeriodo: 4.8, delta: +0.1, volume: 92 },
  { nome: "Cantina Di Napoli - Vila Madalena", notaPublica: 4.5, notaPeriodo: 4.3, delta: -0.2, volume: 21 },
  { nome: "Cantina Di Napoli - Moema", notaPublica: 4.3, notaPeriodo: 4.5, delta: +0.2, volume: 20 },
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
