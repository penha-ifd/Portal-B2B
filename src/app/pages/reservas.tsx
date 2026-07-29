import { useState } from 'react';
import { useNavigate } from 'react-router';
import { usePlano } from '../state/plano-context';

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
  'Aguardando': { color: 'var(--text-secundario)', bg: 'var(--bg-secundario)' },
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



// ── página ──────────────────────────────────────────────────────────────────

const PLANO_INFO: Record<string, string> = {
  base:      'Plano Base · nenhum módulo ativo',
  essencial: 'Plano Essencial · Cardápio, Reservas, PDV',
  avancado:  'Plano Avançado · todos os módulos',
};

export function ReservasPage() {
  const { planoAtivo } = usePlano();
  const navigate = useNavigate();
  const isBase = planoAtivo === 'base';
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const toggleSort = (col: string) => {
    if (sortCol === col) { setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); }
    else { setSortCol(col); setSortDir('asc'); }
  };

  return (
    <div className="relative">
      {/* Sub-header */}
      <div
        className="sticky top-0 z-20 flex items-center gap-1 h-14 px-6 py-3 border-b border-[#ebebeb] transition-colors duration-200"
        style={{ backgroundColor: '#ffffff' }}
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

        {/* Calendário de ocupação semanal */}
        <div style={{ backgroundColor: 'var(--bg-secundario)', borderRadius: 'var(--radius-12)', padding: 'var(--spacing-16)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-12)' }}>
            <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>Ocupação da semana</span>
            <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>12 mesas disponíveis por turno</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
            {[
              { dia: 'Seg', data: '28', alm: 4, jan: 7 },
              { dia: 'Ter', data: '29', alm: 3, jan: 8 },
              { dia: 'Qua', data: '30', alm: 5, jan: 6 },
              { dia: 'Qui', data: '31', alm: 6, jan: 9 },
              { dia: 'Sex', data: '01', alm: 8, jan: 12 },
              { dia: 'Sáb', data: '02', alm: 10, jan: 12 },
              { dia: 'Dom', data: '03', alm: 9, jan: 5 },
            ].map((d) => {
              const getColor = (n: number) => n >= 10 ? 'var(--marca)' : n >= 7 ? 'var(--text-secundario)' : 'var(--sucesso)';
              const getLabel = (n: number) => n >= 10 ? 'Lotado' : n >= 7 ? 'Alta' : 'Normal';
              return (
                <div key={d.dia} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '8px 0', borderRadius: 'var(--radius-8)', backgroundColor: 'var(--bg-primario)' }}>
                  <span style={{ ...fontBase, fontSize: '11px', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>{d.dia}</span>
                  <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>{d.data}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', marginTop: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: getColor(d.alm) }} />
                      <span style={{ ...fontBase, fontSize: '10px', color: 'var(--text-secundario)' }}>Alm</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: getColor(d.jan) }} />
                      <span style={{ ...fontBase, fontSize: '10px', color: 'var(--text-secundario)' }}>Jan</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 'var(--spacing-16)', marginTop: 'var(--spacing-12)', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--sucesso)' }} />
              <span style={{ ...fontBase, fontSize: '11px', color: 'var(--text-secundario)' }}>Normal</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--text-secundario)' }} />
              <span style={{ ...fontBase, fontSize: '11px', color: 'var(--text-secundario)' }}>Alta</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--marca)' }} />
              <span style={{ ...fontBase, fontSize: '11px', color: 'var(--text-secundario)' }}>Lotado</span>
            </div>
            <span style={{ ...fontBase, fontSize: '11px', color: 'var(--text-secundario)', marginLeft: 'auto' }}>Quarta almoço com baixa ocupação — bom momento para campanha</span>
          </div>
        </div>

        {/* Tabela */}
        <div style={{ border: '1px solid var(--borda)', borderRadius: 'var(--radius-12)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--borda)' }}>
                {['Hora', 'Nome', 'Pessoas', 'Mesa', 'Status'].map((h) => (
                  <th key={h} style={{ ...headCell, cursor: 'pointer', userSelect: 'none' }} onClick={() => toggleSort(h)}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      {h}
                      <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 0 }}>
                        <span style={{ fontSize: 10, color: sortCol === h && sortDir === 'asc' ? 'var(--text-primario)' : 'var(--text-desabilitado)' }}>&#9650;</span>
                        <span style={{ fontSize: 10, color: sortCol === h && sortDir === 'desc' ? 'var(--text-primario)' : 'var(--text-desabilitado)', marginTop: -2 }}>&#9660;</span>
                      </span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RESERVAS.map((r, i) => (
                <tr key={i} style={{ borderBottom: i < RESERVAS.length - 1 ? '1px solid var(--borda)' : 'none' }}>
                  <td style={cell14}>{r.hora}</td>
                  <td style={cell14}>
                    <div>{r.nome}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 4 }}>
                      {r.tags.split(" · ").map((tag) => (
                        <span key={tag} style={{ ...fontBase, fontSize: "11px", fontWeight: "var(--font-weight-regular)", color: tag === "veio do delivery" ? "var(--marca)" : "var(--text-secundario)", backgroundColor: tag === "veio do delivery" ? "rgba(235,0,51,0.08)" : "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "1px 6px" }}>{tag}</span>
                      ))}
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
