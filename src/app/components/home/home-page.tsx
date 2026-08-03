import { useState } from 'react';
import { useNavigate } from 'react-router';
import { usePlano } from '../../state/plano-context';
import { CriarPromocaoDrawer } from './CriarPromocaoDrawer';
import { AnalyticsGrid, GeneratedCard } from './analytics-grid';
import { DashboardDesempenho } from './dashboard-desempenho';
import { LpComerFora } from '../../pages/lp-comer-fora';

let cardCounter = 0;

const ACTION_VERBS = /^(abrir|bloquear|criar|cancelar|alterar)\b/i;

function buildCard(text: string): GeneratedCard {
  const q = text.toLowerCase();

  if (ACTION_VERBS.test(text.trim())) {
    return {
      id: String(cardCounter++),
      question: text,
      body: 'Abrir 4 mesas adicionais na sexta, das 20h às 22h.',
      secondAction: '',
      kind: 'action',
      confirmedLabel: 'Feito · 4 mesas abertas na sexta',
    };
  }
  if (q.includes('clientes recorrentes') || q.includes('quem são meus')) {
    return {
      id: String(cardCounter++),
      question: text,
      body: 'Você já atendeu 3.482 pessoas neste salão. Ative a identificação para saber quem são.',
      secondAction: '',
      kind: 'nudge',
    };
  }
  if (q.includes('sexta caiu') || q.includes('por que a sexta')) {
    return {
      id: String(cardCounter++),
      question: text,
      body: 'Queda concentrada no jantar. 14 mesas ficaram vagas entre 20h e 22h, contra 3 na sexta anterior.',
      secondAction: 'Criar campanha',
    };
  }
  if (q.includes('fim de semana') || q.includes('final de semana')) {
    return {
      id: String(cardCounter++),
      question: text,
      body: 'Sábado fechou em R$ 11.200 e domingo em R$ 7.840. Juntos, 39% da semana.',
      secondAction: 'Comparar com o mês',
    };
  }
  return {
    id: String(cardCounter++),
    question: text,
    body: 'Analisando os dados do período.',
    secondAction: 'Ver detalhes',
  };
}

const PLANO_INFO: Record<string, { text: string }> = {
  novo:         { text: 'Novo · nenhum módulo contratado' },
  essencial:    { text: 'Plano Essencial · módulos básicos' },
  profissional: { text: 'Plano Profissional · todos os módulos' },
  premium:      { text: 'Plano Premium · todos os módulos' },
};

export function HomePage() {
  const { planoAtivo } = usePlano();
  const navigate = useNavigate();
  const [generatedCards, setGeneratedCards] = useState<GeneratedCard[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isBase = planoAtivo === 'novo';

  function handleSubmit(text: string) {
    setGeneratedCards((prev) => [buildCard(text), ...prev]);
  }

  function handleConfirm(id: string) {
    setGeneratedCards((prev) => prev.map((c) => c.id === id ? { ...c, confirmed: true } : c));
  }

  function handleRemove(id: string) {
    setGeneratedCards((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div className="relative">
      {!isBase && (
        <div className="flex items-center gap-3 px-6 pt-6 pb-4">
          <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #eb0033)' }}>
            <i className="ifdl-icon-filled ifdl-icon-home text-white" style={{ fontSize: '16px' }} />
          </span>
          <div className="flex flex-col gap-0.5">
            <h1 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-20)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0, lineHeight: 1.3 }}>Início</h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', margin: 0 }}>Visão geral do desempenho e ações recomendadas.</p>
          </div>
        </div>
      )}

      {isBase ? (
        <LpComerFora />
      ) : (
        <div className="flex flex-col gap-10 p-6">
          <DashboardDesempenho onSubmit={handleSubmit} onCriarPromocao={() => setDrawerOpen(true)} />
          <AnalyticsGrid generatedCards={generatedCards} onConfirm={handleConfirm} onRemove={handleRemove} />
          <CriarPromocaoDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </div>
      )}
    </div>
  );
}
