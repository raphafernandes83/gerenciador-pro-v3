(() => {
  "use strict";

  // O texto público agora vive somente no HTML e nos dicionários i18n.
  // Este arquivo preserva apenas o destino especial do CTA do produto.
  function apply() {
    const heroCta = document.querySelector('[data-i18n="inicio.04"]');
    if (heroCta) heroCta.setAttribute("href", "#diferenciais");
  }

  document.addEventListener("gp:idioma", apply);
  document.addEventListener("DOMContentLoaded", apply);
})();