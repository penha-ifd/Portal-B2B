import { useNavigate } from 'react-router';
import logoComerFora from '../../assets/logo_comer-fora.png';
import heroIlustracao from '../../assets/hero-ilustracao.png';

export function LpComerFora() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 1314, margin: '0 auto', width: '100%' }}>
      {/* Banner */}
      <section style={{ backgroundColor: 'var(--marca)', borderRadius: 'var(--radius-12)', padding: 48, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', minHeight: 476, margin: 'var(--spacing-24)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48, maxWidth: 352, position: 'relative', zIndex: 1 }}>
          <img src={logoComerFora} alt="Comer Fora" style={{ width: 127, height: 24, objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h1 style={{ fontFamily: 'var(--font-inter)', fontSize: '32px', fontWeight: 'var(--font-weight-bold)', letterSpacing: 'var(--letter-spacing)', color: '#ffffff', lineHeight: '40px', margin: 0 }}>
              Transforme horários vazios no salão em mais mesas ocupadas
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-16)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: '#ffffff', lineHeight: '24px', margin: 0 }}>
              Crie promoções pra atrair clientes sem perder o controle da operação com o Comer Fora
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
            <button type="button" onClick={() => navigate('/modulos')} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-8)', padding: '14px 24px', border: 'none', borderRadius: 'var(--radius-pill)', backgroundColor: '#ffffff', color: 'var(--text-primario)', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-16)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', alignSelf: 'flex-start' }}>
              Ativar Comer Fora
              <i className="ifdl-icon-line ifdl-icon-chevron-right" style={{ fontSize: 16 }} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '0 var(--spacing-8)' }}>
              <i className="ifdl-icon-filled ifdl-icon-fire" style={{ fontSize: 14, color: '#ffffff' }} />
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: '#ffffff' }}>
                <strong>+59 restaurantes</strong> da sua região ativaram
              </span>
            </div>
          </div>
        </div>
        <img src={heroIlustracao} alt="" style={{ position: 'absolute', right: -40, bottom: -40, width: 520, height: 'auto', objectFit: 'contain', zIndex: 0 }} />
      </section>

      {/* Quatro passos */}
      <section style={{ padding: '64px 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-40)' }}>
          <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0 }}>
            Como funciona
          </h2>
          <div style={{ display: 'flex', gap: 4, backgroundColor: 'var(--bg-secundario)', borderRadius: 'var(--radius-pill)', padding: 4 }}>
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: '#ffffff', backgroundColor: 'var(--invertido)', borderRadius: 'var(--radius-pill)', padding: '6px 16px' }}>Para você</span>
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', padding: '6px 16px' }}>Para seu cliente</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { titulo: 'Crie uma promoção pro salão', desc: 'Monte ofertas pra atrair clientes nos períodos de menor movimento' },
            { titulo: 'Seu salão aparece no app', desc: 'O iFood divulga sua oferta pra clientes próximos na sua região' },
            { titulo: 'Receba clientes no salão', desc: 'O cliente vai ao salão e faz o check-in no app para liberar a oferta' },
            { titulo: 'Controle suas promoções', desc: 'Defina horários, público e limites sem afetar sua operação' },
          ].map((step, i) => (
            <div key={i} style={{ width: 306, height: 164, borderRadius: 'var(--radius-12)', backgroundColor: 'var(--bg-secundario)', padding: 'var(--spacing-20)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
              <i className="ifdl-icon-line ifdl-icon-store" style={{ fontSize: 24, color: 'var(--text-primario)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)' }}>{step.titulo}</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', lineHeight: 1.4 }}>{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Vantagens */}
      <section style={{ padding: '64px 48px', display: 'flex', gap: 'var(--spacing-40)', alignItems: 'center' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)' }}>Vantagens</span>
          <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0 }}>Atraia clientes com estratégia e conheça quem entra no salão</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-20)' }}>
            {[
              { titulo: 'Aumentar movimento com estratégia', desc: 'Preencha horários ociosos e promova itens estratégicos' },
              { titulo: 'Conhecer os hábitos de consumo dos seus clientes', desc: 'Tenha acesso a nome, ticket médio, frequência, etc' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--spacing-12)', alignItems: 'flex-start' }}>
                <i className="ifdl-icon-line ifdl-icon-check" style={{ fontSize: 20, color: 'var(--sucesso)', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', display: 'block' }}>{item.titulo}</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)' }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <button type="button" style={{ alignSelf: 'flex-start', padding: '12px 24px', border: 'none', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--invertido)', color: '#ffffff', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)' }}>
            Começar agora
          </button>
        </div>
        <div style={{ width: 480, height: 400, borderRadius: 'var(--radius-12)', backgroundColor: 'var(--bg-secundario)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', color: 'var(--text-desabilitado)' }}>Device mockup</span>
        </div>
      </section>

      {/* CRM e módulos habilitadores */}
      <section style={{ padding: '64px 48px' }}>
        <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', display: 'block', marginBottom: 'var(--spacing-8)' }}>Seus clientes</span>
        <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: '0 0 var(--spacing-24)' }}>Saiba quem entra no seu salão, não só quantos</h2>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'var(--spacing-8)' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-desabilitado)' }}>Dados de demonstração</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-16)', marginBottom: 'var(--spacing-24)' }}>
          {[
            { nome: 'Novato', count: 194, causa: 'Primeira visita nos últimos 90 dias' },
            { nome: 'Fiel', count: 412, causa: '4 ou mais visitas, ativo no último mês' },
            { nome: 'VIP', count: 88, causa: 'Ticket médio acima de R$ 150' },
            { nome: 'Em risco', count: 604, causa: 'Frequência caindo há 3 meses' },
            { nome: 'Perdido', count: 331, causa: 'Sem visita há mais de 90 dias' },
          ].map((seg) => (
            <div key={seg.nome} style={{ backgroundColor: 'var(--bg-secundario)', borderRadius: 'var(--radius-12)', padding: 'var(--spacing-16)', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)' }}>{seg.nome}</span>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)' }}>{seg.count}</span>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)' }}>{seg.causa}</span>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', margin: '0 0 var(--spacing-24)' }}>
          Ative qualquer módulo e o CRM liga junto.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-12)' }}>
          {[
            { nome: 'Cardápio', destrava: 'Cruzamento delivery × salão' },
            { nome: 'Avaliações', destrava: 'Nota do salão no painel' },
            { nome: 'Reservas', destrava: 'Identificação por reserva' },
            { nome: 'PDV', destrava: 'Ticket médio e faturamento' },
            { nome: 'Pagamento na mesa', destrava: 'Identificação sem check-in' },
            { nome: 'Agregador', destrava: 'Pedidos de todos os canais' },
            { nome: 'Fidelidade', destrava: 'Taxa de retorno por cliente' },
          ].map((mod) => (
            <div key={mod.nome} style={{ border: '1px solid var(--borda)', borderRadius: 'var(--radius-12)', padding: 'var(--spacing-16)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <i className="ifdl-icon-line ifdl-icon-store" style={{ fontSize: 20, color: 'var(--text-primario)' }} />
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)' }}>{mod.nome}</span>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)' }}>{mod.destrava}</span>
              <button type="button" style={{ alignSelf: 'flex-start', marginTop: 'auto', border: '1px solid var(--borda)', borderRadius: 'var(--radius-pill)', padding: '4px 12px', background: 'none', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)' }}>
                Ativar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Mecânicas */}
      <section style={{ padding: '64px 48px' }}>
        <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: '0 0 var(--spacing-24)' }}>Mais estratégia pro seu negócio</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-16)', marginBottom: 'var(--spacing-40)' }}>
          {[
            { titulo: 'Compre e ganhe', desc: 'Ofertas com cortesia e peça 2, pague 1' },
            { titulo: 'Desconto no item', desc: 'Promove e destaca pratos específicos' },
            { titulo: 'Desconto em valor', desc: 'R$ off aplicado no total do pedido' },
            { titulo: 'Cashback', desc: 'Acumula saldo pra usar na próxima visita' },
          ].map((mec) => (
            <div key={mec.titulo} style={{ borderRadius: 'var(--radius-12)', border: '1px solid var(--borda)', padding: 'var(--spacing-20)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
              <div style={{ width: '100%', height: 120, borderRadius: 'var(--radius-8)', backgroundColor: 'var(--bg-secundario)' }} />
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)' }}>{mec.titulo}</span>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)' }}>{mec.desc}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-40)' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', display: 'block', marginBottom: 'var(--spacing-16)' }}>Use promoções de forma estratégica para:</span>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
              {['Movimentar horários de menor fluxo', 'Divulgar pratos estratégicos', 'Aumentar o ticket médio', 'Incentivar novas visitas'].map((item) => (
                <li key={item} style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                  <i className="ifdl-icon-filled ifdl-icon-check" style={{ fontSize: 14, color: 'var(--sucesso)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', display: 'block', marginBottom: 'var(--spacing-16)' }}>Você decide:</span>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
              {['Quando suas promoções aparecem', 'Quais clientes podem usar', 'Quanto liberar em descontos e benefícios', 'Ative, pause ou ajuste quando quiser'].map((item) => (
                <li key={item} style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                  <i className="ifdl-icon-filled ifdl-icon-check" style={{ fontSize: 14, color: 'var(--sucesso)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ margin: '0 48px', padding: 'var(--spacing-40)', borderRadius: 'var(--radius-12)', backgroundColor: 'var(--invertido)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-40)' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--marca)', display: 'inline-block', alignSelf: 'flex-start', backgroundColor: 'rgba(235,0,51,0.08)', borderRadius: 'var(--radius-pill)', padding: '4px 12px' }}>Oferta por tempo limitado</span>
          <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-20)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: '#ffffff', margin: 0 }}>Alcance mais de 226 mil clientes que usam o iFood na sua região</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
            {['Ative em poucos minutos sem custos', 'Pause ou ajuste quando quiser'].map((item) => (
              <div key={item} style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                <i className="ifdl-icon-filled ifdl-icon-check" style={{ fontSize: 14, color: 'var(--sucesso)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: '#ffffff' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <button type="button" onClick={() => navigate('/modulos')} style={{ padding: '14px 32px', border: 'none', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--marca)', color: '#ffffff', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-16)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', flexShrink: 0 }}>
          Ativar Comer Fora
        </button>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 48px', display: 'flex', gap: 'var(--spacing-40)' }}>
        <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)' }}>FAQ</span>
          <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0 }}>Perguntas frequentes</h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', margin: 0, lineHeight: 1.5 }}>
            Tudo o que você precisa saber para começar a usar o Comer Fora no seu restaurante.
          </p>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', margin: 'auto 0 0' }}>
            Verifique os <span style={{ color: 'var(--marca)', cursor: 'pointer' }}>termos e condições</span> do Comer Fora
          </p>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
          {[
            'Como o iFood traz clientes pro meu salão?',
            'Preciso investir em promoções para aparecer na vitrine?',
            'Como funciona o Comer Fora na prática?',
            'Preciso pagar para ter acesso aos dados dos clientes?',
            'Preciso ter alguma integração de pagamento específica?',
            'Quais tipos de promoções posso oferecer aos clientes?',
            'Posso pausar ou desativar o Comer Fora quando quiser?',
          ].map((q) => (
            <div key={q} style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--borda)', padding: '0 var(--spacing-8)' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)' }}>{q}</span>
              <i className="ifdl-icon-line ifdl-icon-chevron-down" style={{ fontSize: 20, color: 'var(--text-primario)', flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer style={{ padding: '24px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--borda)' }}>
        <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-desabilitado)' }}>
          © 2026 iFood. Todos os direitos reservados.
        </span>
        <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--marca)' }}>
          iFood
        </span>
      </footer>
    </div>
  );
}
