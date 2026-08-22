/* ============================================================
   EFEITO DE DIGITAÇÃO DO TÍTULO DO HERO
   Par do styles-hero-digitacao.css. Digita o inicio.02 no ritmo
   de um digitador humano — velocidade irregular, pausas depois
   da pontuação e dois ou três momentos de "procurando a tecla" —
   e recomeça em ciclos de 30 segundos. A barrinha pisca parada
   antes de começar e depois de terminar; acesa enquanto digita.

   Convivência com o i18n (i18n.js):
   - ele reescreve o innerHTML de cada [data-i18n] a cada troca de
     idioma; um MutationObserver percebe e o efeito recomeça com o
     texto novo;
   - ele memoriza o innerHTML da PRIMEIRA aplicação como "original
     em inglês". Por isso o efeito só monta depois dessa primeira
     aplicação (ou após 4s sem sinal do i18n). E, se ainda assim a
     estrutura do efeito for memorizada (rede lenta), o texto
     verdadeiro é recuperado de dentro da camada fantasma — o
     efeito se cura sozinho em vez de congelar.
   prefers-reduced-motion: a digitação continua (texto aparecendo
   não é o tipo de movimento que a preferência mira); só a barrinha
   deixa de piscar — regra que vive no CSS.
   Leitores de tela leem a frase completa e estável na camada
   fantasma; a camada digitada é aria-hidden.
   ============================================================ */
(() => {
  'use strict';

  const CICLO_MS = 30000;
  const FALLBACK_MS = 4000;

  const h1 = document.querySelector('.hero h1[data-i18n="inicio.02"]');
  if (!h1) return;

  let fonteHTML = '';     // markup traduzido da vez (fonte da verdade)
  let execucao = null;    // token de cancelamento do ciclo em curso
  let camadas = null;     // {fantasma, vivo} montados por nós — identidade, não classe
  let primeiraVez = true;

  const aleat = (min, max) => min + Math.random() * (max - min);

  /* Se o h1 contém uma camada fantasma (estrutura nossa devolvida pelo
     i18n a partir do "original" memorizado), o texto verdadeiro é o
     que está dentro dela. Senão, é o próprio conteúdo do h1. */
  function lerFonte() {
    const fantasma = h1.querySelector('.digita-fantasma');
    return fantasma ? fantasma.innerHTML : h1.innerHTML;
  }

  /* ---- monta as duas camadas a partir do markup traduzido ---- */
  function montar() {
    const fantasma = document.createElement('span');
    fantasma.className = 'digita-fantasma';
    fantasma.innerHTML = fonteHTML;
    const vivo = document.createElement('span');
    vivo.className = 'digita-vivo';
    vivo.setAttribute('aria-hidden', 'true');
    camadas = { fantasma, vivo };
    h1.classList.add('h1-digitando');
    h1.textContent = '';
    h1.append(fantasma, vivo);
    return vivo;
  }

  const estruturaNossaIntacta = () =>
    !!camadas && camadas.fantasma.parentNode === h1 && camadas.vivo.parentNode === h1;

  /* ---- transforma o markup em uma fila de passos de digitação ---- */
  function planejar(html) {
    const molde = document.createElement('div');
    molde.innerHTML = html;
    const passos = [];
    (function anda(no) {
      for (const filho of no.childNodes) {
        if (filho.nodeType === Node.TEXT_NODE) {
          for (const ch of Array.from(filho.nodeValue)) passos.push({ tipo: 'char', ch });
        } else if (filho.nodeType === Node.ELEMENT_NODE && filho.tagName === 'BR') {
          passos.push({ tipo: 'br' });
        } else if (filho.nodeType === Node.ELEMENT_NODE) {
          passos.push({ tipo: 'abrir', molde: filho });
          anda(filho);
          passos.push({ tipo: 'fechar' });
        }
      }
    })(molde);
    return passos;
  }

  /* ---- ritmo humano: um atraso por passo ---- */
  function ritmo(passos) {
    const idxChars = [];
    passos.forEach((p, i) => { if (p.tipo === 'char') idxChars.push(i); });

    // 2–3 momentos de "cadê a tecla?", longe do começo e do fim
    const cacadas = new Set();
    if (idxChars.length > 10) {
      const alvo = idxChars.length >= 18 ? (Math.random() < .5 ? 3 : 2) : 2;
      let tentativas = 0;
      while (cacadas.size < alvo && tentativas++ < 40) {
        const pos = 4 + Math.floor(Math.random() * (idxChars.length - 8));
        cacadas.add(idxChars[pos]);
      }
    }

    const atrasos = new Map();
    let anterior = '';
    passos.forEach((p, i) => {
      if (p.tipo === 'br') { atrasos.set(i, aleat(560, 880)); anterior = ''; return; }
      if (p.tipo !== 'char') { atrasos.set(i, 0); return; }
      let d = aleat(58, 105);                                   // tecla comum
      if (Math.random() < .16) d = aleat(28, 48);               // rajadinha
      if (anterior === ' ') d += aleat(18, 55);                 // começo de palavra
      if ('.。।!?'.includes(anterior)) d += aleat(320, 560);    // fim de frase
      else if (anterior === ',') d += aleat(140, 260);
      if (cacadas.has(i)) d += aleat(520, 980);                 // procurando a tecla
      atrasos.set(i, d);
      anterior = p.ch;
    });
    return atrasos;
  }

  /* ---- um ciclo: pisca, digita, pisca, agenda o próximo ---- */
  function ciclo() {
    const inicio = Date.now();
    const token = { cancelado: false };
    execucao = token;

    const vivo = montar();
    const passos = planejar(fonteHTML);
    const atrasos = ritmo(passos);

    const cursor = document.createElement('i');
    cursor.className = 'digita-cursor piscando';
    cursor.setAttribute('aria-hidden', 'true');
    vivo.appendChild(cursor);

    const pilha = [vivo];
    let i = 0;

    function passo() {
      if (token.cancelado) return;
      if (i >= passos.length) {
        cursor.classList.add('piscando');                       // terminou: pisca
        const resto = Math.max(2500, CICLO_MS - (Date.now() - inicio));
        setTimeout(() => { if (!token.cancelado) ciclo(); }, resto);
        return;
      }
      const p = passos[i];
      const alvo = pilha[pilha.length - 1];
      if (p.tipo === 'char') {
        alvo.insertBefore(document.createTextNode(p.ch), cursor);
      } else if (p.tipo === 'br') {
        alvo.insertBefore(document.createElement('br'), cursor);
      } else if (p.tipo === 'abrir') {
        const novo = p.molde.cloneNode(false);
        alvo.insertBefore(novo, cursor);
        novo.appendChild(cursor);                               // cursor entra no container
        pilha.push(novo);
      } else { /* fechar */
        pilha.pop();
        pilha[pilha.length - 1].appendChild(cursor);            // cursor volta ao pai
      }
      const d = atrasos.get(i) || 0;
      i += 1;
      setTimeout(passo, d);
    }

    // barrinha piscando parada antes de digitar; na primeira vez é
    // mais curta para o hero não ficar vazio por muito tempo
    const espera = primeiraVez ? 750 : 1500;
    primeiraVez = false;
    setTimeout(() => {
      if (token.cancelado) return;
      cursor.classList.remove('piscando');                      // digitando: acesa
      passo();
    }, espera);
  }

  /* ---- (re)começa a partir do que está no h1 agora ---- */
  function partir() {
    if (execucao) { execucao.cancelado = true; execucao = null; }
    fonteHTML = lerFonte();
    camadas = null;
    h1.classList.remove('h1-digitando');
    ciclo();
  }

  /* ---- alguém mexeu no h1? se não foi a nossa estrutura, recomeça ----
     A decisão é por identidade dos nós, não por classe: se o i18n
     devolver uma cópia da nossa estrutura, os nós são outros. */
  const mo = new MutationObserver(() => {
    if (estruturaNossaIntacta()) return;
    partir();
  });
  mo.observe(h1, { childList: true });

  function armarFallback() {
    setTimeout(() => { if (!execucao && !fonteHTML) partir(); }, FALLBACK_MS);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', armarFallback);
  } else {
    armarFallback();
  }

})();
