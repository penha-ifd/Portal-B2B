import { useState } from 'react';
import { useNavigate } from 'react-router';
import { usePlano } from '../state/plano-context';

// ── tipos de card gerado ────────────────────────────────────────────────────

interface GenCard {
  id: string;
  kind: 'answer' | 'action';
  question: string;
  body: string;
  confirmed?: boolean;
  confirmedLabel?: string;
}

let counter = 0;
const ACTION_RE = /^(abrir|bloquear|criar|cancelar|alterar)\b/i;

function buildCard(text: string): GenCard {
  const q = text.toLowerCase();
  const id = String(counter++);
  if (ACTION_RE.test(text.trim())) {
    if (q.includes('bloquear')) {
      return { id, kind: 'action', question: text, body: 'Bloquear mesa 12 hoje a partir das 19h até o fechamento.', confirmedLabel: 'Feito · mesa 12 bloqueada hoje' };
    }
    return { id, kind: 'action', question: text, body: 'Abrir 2 mesas adicionais às 21h de hoje.', confirmedLabel: 'Feito · 2 mesas abertas às 21h' };
  }
  if (q.includes('no-show') || q.includes('no show')) {
    return { id, kind: 'answer', question: text, body: '3 no-shows registrados esta semana: terça (1), quinta (1) e sexta (1). Taxa de 8%, dentro da média do mês.' };
  }
  return { id, kind: 'answer', question: text, body: 'Analisando os dados de reservas do período.' };
}

// ── dados da tabela ─────────────────────────────────────────────────────────

const RESERVAS = [
  { hora: '19h00', nome: 'Camila Nunes',     pessoas: 2, mesa: 'Mesa 4',  status: 'Confirmada', tags: '4ª visita · gosta de mesa no salão' },
  { hora: '19h30', nome: 'Rodrigo Marques',  pessoas: 4, mesa: 'Mesa 7',  status: 'Confirmada', tags: 'VIP · ticket médio R$ 180' },
  { hora: '19h45', nome: 'Patrícia Salles',  pessoas: 2, mesa: 'Mesa 2',  status: 'No-show',    tags: '2 no-shows anteriores' },
  { hora: '20h00', nome: 'Ana Beatriz',      pessoas: 2, mesa: 'Mesa 12', status: 'Confirmada', tags: '1ª visita · veio do delivery' },
  { hora: '20h15', nome: 'Eduardo Tanaka',   pessoas: 6, mesa: 'Mesa 9',  status: 'Aguardando', tags: 'alérgico a frutos do mar' },
  { hora: '20h30', nome: 'Juliana Prado',    pessoas: 3, mesa: 'Mesa 5',  status: 'Confirmada', tags: '3ª visita este mês' },
  { hora: '21h00', nome: 'Marcos Vinícius',  pessoas: 2, mesa: 'Mesa 3',  status: 'Aguardando', tags: '1ª visita' },
  { hora: '21h30', nome: 'Helena Duarte',    pessoas: 4, mesa: 'Mesa 8',  status: 'Confirmada', tags: 'VIP · aniversário na semana' },
];

const STATUS_STYLE: Record<string, { color: string; bg: string }> = {
  'Confirmada': { color: 'var(--sucesso)',        bg: 'rgba(31,173,104,0.10)' },
  'Aguardando': { color: 'var(--atencao)',        bg: 'rgba(255,195,71,0.15)' },
  'No-show':    { color: 'var(--text-secundario)', bg: 'var(--bg-secundario)' },
};

// ── estilos compartilhados ──────────────────────────────────────────────────

const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

const cell14: React.CSSProperties = {
  ...fontBase,
  fontSize: 'var(--font-size-14)',
  fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'],
  color: 'var(--text-primario)',
  padding: '12px 16px',
};

const headCell: React.CSSProperties = {
  ...fontBase,
  fontSize: 'var(--font-size-12)',
  fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'],
  color: 'var(--text-secundario)',
  padding: '12px 16px',
  textAlign: 'left' as const,
};

// ── composer local ──────────────────────────────────────────────────────────

const CHIPS = [
  'Bloquear mesa 12 hoje',
  'Quantos no-shows esta semana',
  'Abrir mais duas mesas às 21h',
];

function ReservasComposer({ onSubmit }: { onSubmit: (t: string) => void }) {
  const [value, setValue] = useState('');

  function submit() {
    const t = value.trim();
    if (!t) return;
    onSubmit(t);
    setValue('');
  }

  return (
    <div style={{ marginBottom: 'var(--spacing-24)' }}>
      <div className="flex items-center" style={{ height: 56, backgroundColor: 'var(--bg-primario)', border: '1px solid var(--borda)', borderRadius: 'var(--radius-12)', paddingLeft: 'var(--spacing-16)', paddingRight: 'var(--spacing-16)', gap: 'var(--spacing-8)' }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
          placeholder="Peça algo sobre suas reservas"
          style={{ flex: 1, ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', color: 'var(--text-primario)', background: 'none', border: 'none', outline: 'none' }}
        />
        <i className="ifdl-icon-line ifdl-icon-microphone" style={{ fontSize: 20, color: 'var(--text-secundario)' }} />
        <button type="button" onClick={submit} className="flex items-center justify-center shrink-0" style={{ width: 40, height: 40, borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--marca)', border: 'none', cursor: 'pointer' }}>
          <i className="ifdl-icon-line ifdl-icon-arrow-up" style={{ fontSize: 18, color: '#ffffff' }} />
        </button>
      </div>
      <div className="flex flex-wrap gap-2" style={{ marginTop: 'var(--spacing-12)' }}>
        {CHIPS.map((chip) => (
          <button key={chip} type="button" onClick={() => { onSubmit(chip); setValue(''); }}
            style={{ border: '1px solid var(--borda)', borderRadius: 'var(--radius-pill)', padding: '6px 12px', ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', color: 'var(--text-secundario)', backgroundColor: 'transparent', cursor: 'pointer' }}>
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── cards gerados ───────────────────────────────────────────────────────────

function GenCards({ cards, onConfirm, onRemove }: { cards: GenCard[]; onConfirm: (id: string) => void; onRemove: (id: string) => void }) {
  if (!cards.length) return null;
  const bodyTxt: React.CSSProperties = { ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)', lineHeight: 1.5, margin: 0 };
  const labelSm: React.CSSProperties = { ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' };
  const base: React.CSSProperties = { backgroundColor: 'var(--bg-primario)', border: '1px solid var(--marca)', borderRadius: 'var(--radius-12)' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)', marginBottom: 'var(--spacing-24)' }}>
      {cards.map((card) => {
        if (card.kind === 'action' && card.confirmed) {
          return (
            <div key={card.id} style={{ ...base, display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)', height: 40, padding: '0 var(--spacing-16)' }}>
              <i className="ifdl-icon-filled ifdl-icon-check" style={{ fontSize: 16, color: 'var(--sucesso)' }} />
              <span style={{ ...bodyTxt, lineHeight: 1 }}>{card.confirmedLabel}</span>
            </div>
          );
        }
        if (card.kind === 'action') {
          return (
            <div key={card.id} style={{ ...base, padding: 'var(--spacing-16)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <span style={labelSm}>Confirmar ação</span>
              <p style={bodyTxt}>{card.body}</p>
              <div className="flex items-center gap-2" style={{ marginTop: 'var(--spacing-4)' }}>
                <button type="button" onClick={() => onConfirm(card.id)} style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], backgroundColor: 'var(--invertido)', color: '#ffffff', border: 'none', borderRadius: 'var(--radius-pill)', padding: '8px 16px', cursor: 'pointer' }}>Confirmar</button>
                <button type="button" onClick={() => onRemove(card.id)} style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], background: 'none', border: 'none', color: 'var(--text-secundario)', cursor: 'pointer', padding: '8px 4px' }}>Cancelar</button>
              </div>
            </div>
          );
        }
        return (
          <div key={card.id} style={{ ...base, padding: 'var(--spacing-16)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
            <span style={{ ...labelSm, color: 'var(--marca)' }}>Gerado agora · «{card.question}»</span>
            <p style={bodyTxt}>{card.body}</p>
          </div>
        );
      })}
    </div>
  );
}

// ── página ──────────────────────────────────────────────────────────────────

const PLANO_INFO: Record<string, string> = {
  base:      'Plano Base · nenhum módulo ativo',
  essencial: 'Plano Essencial · Cardápio, Reservas, PDV',
  avancado:  'Plano Avançado · todos os módulos',
};

export function ReservasPage() {
  const { planoAtivo } = usePlano();
  const navigate = useNavigate();
  const [cards, setCards] = useState<GenCard[]>([]);
  const isBase = planoAtivo === 'base';

  function handleSubmit(text: string) {
    setCards((prev) => [buildCard(text), ...prev]);
  }
  function handleConfirm(id: string) {
    setCards((prev) => prev.map((c) => c.id === id ? { ...c, confirmed: true } : c));
  }
  function handleRemove(id: string) {
    setCards((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div className="relative">
      {/* Sub-header */}
      <div
        className="sticky top-0 z-20 flex items-center gap-1 h-14 px-6 py-3 border-b border-[#ebebeb] transition-colors duration-200"
        style={{ backgroundColor: isBase ? 'var(--atencao)' : '#ffffff' }}
      >
        <span className="flex items-center justify-center size-5 rounded-[6px] shrink-0" style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #eb0033)' }}>
          <i className="ifdl-icon-filled ifdl-icon-calendar text-white" style={{ fontSize: '12px' }} />
        </span>
        <span className="paragraph-p2-14-medium ml-1" style={{ color: isBase ? 'var(--text-primario)' : '#141414' }}>Reservas</span>
        <div className="flex items-center gap-3 ml-auto">
          <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: isBase ? 'var(--text-primario)' : 'var(--text-secundario)' }}>
            {isBase ? 'Ative um módulo para liberar inteligência e CRM' : PLANO_INFO[planoAtivo]}
          </span>
          <span onClick={() => navigate('/modulos')} style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: isBase ? 'var(--text-primario)' : 'var(--marca)', cursor: 'pointer' }}>
            Mudar assinatura
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col p-6" style={{ gap: 'var(--spacing-24)' }}>
        <ReservasComposer onSubmit={handleSubmit} />
        <GenCards cards={cards} onConfirm={handleConfirm} onRemove={handleRemove} />

        {/* Tabela */}
        <div style={{ border: '1px solid var(--borda)', borderRadius: 'var(--radius-12)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--borda)' }}>
                {['Hora', 'Nome', 'Pessoas', 'Mesa', 'Status'].map((h) => (
                  <th key={h} style={headCell}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RESERVAS.map((r, i) => (
                <tr key={i} style={{ borderBottom: i < RESERVAS.length - 1 ? '1px solid var(--borda)' : 'none' }}>
                  <td style={cell14}>{r.hora}</td>
                  <td style={cell14}>
                    <div>{r.nome}</div>
                    <div style={{ ...fontBase, fontSize: "11px", fontWeight: "var(--font-weight-regular)", color: r.tags.includes("veio do delivery") ? "var(--marca)" : "var(--text-secundario)", marginTop: 2 }}>
                      {r.tags}
                    </div>
                  </td>
                  <td style={cell14}>{r.pessoas}</td>
                  <td style={cell14}>{r.mesa}</td>
                  <td style={cell14}>
                    <span style={{
                      ...fontBase,
                      fontSize: 'var(--font-size-12)',
                      fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'],
                      color: STATUS_STYLE[r.status].color,
                      backgroundColor: STATUS_STYLE[r.status].bg,
                      borderRadius: 'var(--radius-pill)',
                      padding: '3px 10px',
                      display: 'inline-block',
                    }}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
