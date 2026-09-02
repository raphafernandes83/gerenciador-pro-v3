window.GP_FORM_CONFIG={endpoint:"https://script.google.com/macros/s/AKfycbyiGH-5FRXZteXMgog2bhaSEA1_UMOe78irya7DinWGfkmqDft6ELDJrcj12eHjMU2ZFQ/exec",requestTimeoutMs:15000};

(() => {
  const styleLink = document.createElement('link');
  styleLink.rel = 'stylesheet';
  styleLink.href = 'partner-v3.css?v=20260902-3';
  document.head.appendChild(styleLink);

  const prehide = document.createElement('style');
  prehide.id = 'partner-prehide';
  prehide.textContent = '#cadastro{visibility:hidden}';
  document.head.appendChild(prehide);

  const formatBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  function initPartnerSimulation() {
    const price = 79;
    const networkRate = 0.05;
    const directRate = 0.30;
    const rows = [
      ['partner-level-1', 'partner-level-1-total'],
      ['partner-level-2', 'partner-level-2-total'],
      ['partner-level-3', 'partner-level-3-total']
    ];

    const update = () => {
      let networkTotal = 0;
      rows.forEach(([inputId, outputId]) => {
        const input = document.getElementById(inputId);
        const output = document.getElementById(outputId);
        if (!input || !output) return;
        const people = Math.max(0, Number(input.value) || 0);
        const value = people * price * networkRate;
        networkTotal += value;
        output.textContent = formatBRL.format(value);
      });

      const total = document.getElementById('partner-network-total');
      if (total) total.textContent = formatBRL.format(networkTotal);

      const direct = document.getElementById('partner-direct-value');
      if (direct) direct.textContent = formatBRL.format(price * directRate);
    };

    rows.forEach(([inputId]) => {
      const input = document.getElementById(inputId);
      if (input) input.addEventListener('input', update);
    });
    update();
  }

  function replaceRegistrationBlock() {
    const original = document.getElementById('cadastro');
    if (!original) {
      prehide.remove();
      return;
    }

    const template = document.createElement('template');
    template.innerHTML = `
      <section class="form-section partner-conversion-section" id="cadastro" lang="pt-BR">
        <div class="partner-topic-hero">
          <span class="partner-topic-kicker">UMA NOVA FORMA DE PARTICIPAR</span>
          <h2><span>Programa de Parceiros Gerenciador PRO:</span> indique o produto, construa sua rede e receba comissões.</h2>
          <p>Daqui em diante, o assunto é parceria. Você pode apresentar o Gerenciador PRO para outras pessoas, usar seu link exclusivo e acompanhar sua rede e suas comissões pela Central de Parceiros.</p>

          <div class="partner-no-subscription" role="note" aria-label="Assinatura não obrigatória para parceiros">
            <span class="partner-no-subscription-icon" aria-hidden="true">✓</span>
            <div>
              <strong>Você não precisa comprar uma assinatura do Gerenciador PRO para se tornar parceiro.</strong>
              <p>Parceria e assinatura são independentes. Você pode criar sua conta, ativar o Programa de Parceiros, receber seu link e começar a divulgar sem adquirir o acesso PRO.</p>
            </div>
          </div>
        </div>

        <div class="form-intro partner-intro">
          <span class="eyebrow"><i></i> Vantagens para o parceiro</span>
          <h3>Divulgue com estrutura, acompanhe sua rede e tenha comissões em mais de uma camada.</h3>
          <p>O programa foi pensado para quem tem audiência, comunidade, grupo, canal ou simplesmente quer indicar o Gerenciador PRO para outras pessoas.</p>

          <div class="form-assurances partner-assurances">
            <article><span>30%</span><div><strong>Comissão direta</strong><small>Sobre assinaturas elegíveis feitas pelo seu link direto</small></div></article>
            <article><span>5%</span><div><strong>Rede em 3 níveis</strong><small>5% no 1º, 5% no 2º e 5% no 3º nível</small></div></article>
            <article><span>↗</span><div><strong>Link exclusivo</strong><small>Divulgue pelo fluxo oficial e acompanhe a sua estrutura</small></div></article>
          </div>

          <div class="partner-flow-card">
            <span class="mini-label">COMO FUNCIONA</span>
            <ol>
              <li><b>1</b><div><strong>Crie ou acesse sua conta</strong><small>Entre pelo fluxo oficial do Gerenciador PRO.</small></div></li>
              <li><b>2</b><div><strong>Ative a parceria</strong><small>Ative o Programa de Parceiros sem precisar comprar uma assinatura PRO.</small></div></li>
              <li><b>3</b><div><strong>Receba seu link</strong><small>Use o link exclusivo para apresentar o produto.</small></div></li>
              <li><b>4</b><div><strong>Acompanhe pela Central</strong><small>Visualize sua rede e as comissões registradas no programa.</small></div></li>
            </ol>
          </div>

          <div class="form-company-note partner-company-note">
            <span class="brand-mark small" aria-hidden="true"><img src="assets/brand/gp-mark-96.webp" srcset="assets/brand/gp-mark-192.webp 2x" width="96" height="96" alt=""></span>
            <p><strong>Gerenciador PRO</strong><br>Produto e Programa de Parceiros no mesmo ecossistema, com acessos independentes.</p>
          </div>
        </div>

        <div class="form-shell partner-shell">
          <div class="form-shell-header partner-shell-header">
            <div>
              <span class="mini-label">SIMULAÇÃO DE REDE</span>
              <h3>Visualize um cenário mensal.</h3>
            </div>
            <span class="secure-badge partner-independent-badge">PARCEIRO NÃO PRECISA SER ASSINANTE</span>
          </div>

          <div class="partner-direct-card">
            <div>
              <span>VENDA DIRETA</span>
              <strong>30%</strong>
              <small>por assinatura elegível feita diretamente pelo seu link</small>
            </div>
            <div>
              <span>EXEMPLO POR ASSINATURA</span>
              <strong id="partner-direct-value">R$ 23,70</strong>
              <small>30% de R$ 79,00</small>
            </div>
          </div>

          <div class="partner-sim-intro">
            <strong>Cenário de rede em três níveis</strong>
            <p>A simulação abaixo usa a assinatura mensal de R$ 79,00 apenas como referência de cálculo e aplica 5% em cada nível da rede.</p>
          </div>

          <div class="partner-sim-grid" aria-live="polite">
            <label>
              <span><b>1º nível</b><small>100 pessoas</small></span>
              <input id="partner-level-1" type="number" min="0" inputmode="numeric" value="100" aria-label="Pessoas no primeiro nível">
              <strong id="partner-level-1-total">R$ 395,00</strong>
            </label>
            <label>
              <span><b>2º nível</b><small>1.000 pessoas</small></span>
              <input id="partner-level-2" type="number" min="0" inputmode="numeric" value="1000" aria-label="Pessoas no segundo nível">
              <strong id="partner-level-2-total">R$ 3.950,00</strong>
            </label>
            <label>
              <span><b>3º nível</b><small>10.000 pessoas</small></span>
              <input id="partner-level-3" type="number" min="0" inputmode="numeric" value="10000" aria-label="Pessoas no terceiro nível">
              <strong id="partner-level-3-total">R$ 39.500,00</strong>
            </label>
          </div>

          <div class="partner-total-card">
            <span>COMISSÃO DE REDE ILUSTRATIVA / MÊS</span>
            <strong id="partner-network-total">R$ 43.845,00</strong>
            <small>Soma dos três níveis da simulação. A venda direta de 30% é apresentada separadamente.</small>
          </div>

          <p class="partner-sim-note">Esta é uma demonstração matemática do cenário informado, não uma promessa de ganhos.</p>

          <div class="partner-action-row">
            <a class="button button-primary" href="https://gerenciador-pro-commercial-production-production.up.railway.app/">Quero me tornar parceiro <span>→</span></a>
            <small><strong>Sem assinatura obrigatória:</strong> sua parceria pode ser ativada independentemente da compra do plano PRO.</small>
          </div>
        </div>
      </section>`;

    original.replaceWith(template.content.firstElementChild);
    initPartnerSimulation();
    prehide.remove();
  }

  window.addEventListener('load', replaceRegistrationBlock, { once: true });
  window.setTimeout(() => {
    const hidden = document.getElementById('partner-prehide');
    if (hidden && document.readyState === 'complete') hidden.remove();
  }, 5000);
})();
