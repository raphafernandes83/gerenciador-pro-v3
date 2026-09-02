(() => {
  "use strict";

  const COPY = {
    en: {
      header: "Partner Program",
      controlTitle: "Choose your control style",
      controlDesc: "Four control styles let you adapt the interface to the way you prefer to operate.",
      controlBadge: "4 control styles available",
      globalKicker: "GLOBAL REACH",
      globalTitle: "Your market does not end at your country's border.",
      globalP1: "Gerenciador PRO can be promoted and sold worldwide. The app currently supports 5 languages, with 8 more planned as the international expansion grows.",
      globalP2: "Imagine using your referral link to contact trading channels, communities and creators in other countries, build connections across different markets and grow an international partner network.",
      globalNow: "5 languages today",
      globalFuture: "+ 8 more planned"
    },
    pt: {
      header: "Programa de Parceiros",
      controlTitle: "Escolha seu estilo de controle",
      controlDesc: "São 4 estilos de controle para adaptar a interface à forma como você prefere operar.",
      controlBadge: "4 estilos de controle disponíveis",
      globalKicker: "ALCANCE GLOBAL",
      globalTitle: "Seu mercado não termina no seu país.",
      globalP1: "O Gerenciador PRO pode ser divulgado e vendido no mundo todo. Hoje o app oferece suporte a 5 idiomas e a expansão internacional prevê mais 8 idiomas.",
      globalP2: "Imagine usar seu link para entrar em contato com canais de trading, comunidades e criadores de outros países, criar conexões em diferentes mercados e construir uma rede internacional de parceiros.",
      globalNow: "5 idiomas hoje",
      globalFuture: "+ 8 idiomas planejados"
    },
    es: {
      header: "Programa de Socios",
      controlTitle: "Elige tu estilo de control",
      controlDesc: "Hay 4 estilos de control para adaptar la interfaz a la forma en que prefieres operar.",
      controlBadge: "4 estilos de control disponibles",
      globalKicker: "ALCANCE GLOBAL",
      globalTitle: "Tu mercado no termina en tu país.",
      globalP1: "Gerenciador PRO puede promocionarse y venderse en todo el mundo. Hoy la aplicación admite 5 idiomas y la expansión internacional prevé 8 idiomas más.",
      globalP2: "Imagina usar tu enlace para contactar canales de trading, comunidades y creadores de otros países, crear conexiones en distintos mercados y construir una red internacional de socios.",
      globalNow: "5 idiomas hoy",
      globalFuture: "+ 8 idiomas previstos"
    },
    fr: {
      header: "Programme Partenaires",
      controlTitle: "Choisissez votre style de contrôle",
      controlDesc: "Quatre styles de contrôle permettent d'adapter l'interface à votre façon d'opérer.",
      controlBadge: "4 styles de contrôle disponibles",
      globalKicker: "PORTÉE MONDIALE",
      globalTitle: "Votre marché ne s'arrête pas à votre pays.",
      globalP1: "Gerenciador PRO peut être promu et vendu dans le monde entier. L'application prend actuellement en charge 5 langues et 8 langues supplémentaires sont prévues.",
      globalP2: "Imaginez utiliser votre lien pour contacter des chaînes de trading, des communautés et des créateurs dans d'autres pays, créer des connexions sur différents marchés et développer un réseau international de partenaires.",
      globalNow: "5 langues aujourd'hui",
      globalFuture: "+ 8 langues prévues"
    },
    de: {
      header: "Partnerprogramm",
      controlTitle: "Wähle deinen Steuerungsstil",
      controlDesc: "Vier Steuerungsstile passen die Oberfläche an deine bevorzugte Arbeitsweise an.",
      controlBadge: "4 Steuerungsstile verfügbar",
      globalKicker: "GLOBALE REICHWEITE",
      globalTitle: "Dein Markt endet nicht an der Landesgrenze.",
      globalP1: "Gerenciador PRO kann weltweit beworben und verkauft werden. Die App unterstützt heute 5 Sprachen; 8 weitere Sprachen sind für die internationale Expansion geplant.",
      globalP2: "Stell dir vor, du nutzt deinen Empfehlungslink, um Trading-Kanäle, Communities und Creator in anderen Ländern anzusprechen, Kontakte in verschiedenen Märkten aufzubauen und ein internationales Partnernetzwerk zu entwickeln.",
      globalNow: "5 Sprachen heute",
      globalFuture: "+ 8 weitere geplant"
    },
    bn: {
      header: "পার্টনার প্রোগ্রাম",
      controlTitle: "আপনার কন্ট্রোল স্টাইল বেছে নিন",
      controlDesc: "আপনার পছন্দের অপারেটিং পদ্ধতির সঙ্গে ইন্টারফেস মানিয়ে নিতে ৪টি কন্ট্রোল স্টাইল রয়েছে।",
      controlBadge: "৪টি কন্ট্রোল স্টাইল উপলভ্য",
      globalKicker: "বিশ্বব্যাপী সুযোগ",
      globalTitle: "আপনার বাজার শুধু আপনার দেশেই সীমাবদ্ধ নয়।",
      globalP1: "Gerenciador PRO সারা বিশ্বে প্রচার ও বিক্রি করা যেতে পারে। অ্যাপটি বর্তমানে ৫টি ভাষা সমর্থন করে এবং আন্তর্জাতিক সম্প্রসারণে আরও ৮টি ভাষা যোগ করার পরিকল্পনা রয়েছে।",
      globalP2: "ভাবুন, আপনার রেফারেল লিঙ্ক ব্যবহার করে অন্য দেশের ট্রেডিং চ্যানেল, কমিউনিটি ও ক্রিয়েটরদের সঙ্গে যোগাযোগ করছেন, বিভিন্ন বাজারে সংযোগ তৈরি করছেন এবং একটি আন্তর্জাতিক পার্টনার নেটওয়ার্ক গড়ে তুলছেন।",
      globalNow: "এখন ৫টি ভাষা",
      globalFuture: "+ আরও ৮টি পরিকল্পিত"
    },
    zh: {
      header: "合作伙伴计划",
      controlTitle: "选择您的控制样式",
      controlDesc: "提供 4 种控制样式，让界面适应您偏好的操作方式。",
      controlBadge: "提供 4 种控制样式",
      globalKicker: "全球市场",
      globalTitle: "您的市场不止于本国。",
      globalP1: "Gerenciador PRO 可以在全球推广和销售。目前应用支持 5 种语言，国际扩展计划再增加 8 种语言。",
      globalP2: "想象一下：使用您的推荐链接联系其他国家的交易频道、社区和内容创作者，在不同市场建立联系，并发展国际合作伙伴网络。",
      globalNow: "目前 5 种语言",
      globalFuture: "+ 计划增加 8 种"
    },
    ko: {
      header: "파트너 프로그램",
      controlTitle: "컨트롤 스타일을 선택하세요",
      controlDesc: "선호하는 운영 방식에 맞게 인터페이스를 조정할 수 있는 4가지 컨트롤 스타일을 제공합니다.",
      controlBadge: "4가지 컨트롤 스타일 제공",
      globalKicker: "글로벌 시장",
      globalTitle: "당신의 시장은 한 국가에만 머물지 않습니다.",
      globalP1: "Gerenciador PRO는 전 세계에서 홍보하고 판매할 수 있습니다. 현재 앱은 5개 언어를 지원하며 국제 확장을 위해 8개 언어를 추가할 계획입니다.",
      globalP2: "추천 링크를 활용해 다른 나라의 트레이딩 채널, 커뮤니티, 크리에이터에게 연락하고 여러 시장에서 연결을 만들며 국제 파트너 네트워크를 구축하는 모습을 상상해 보세요.",
      globalNow: "현재 5개 언어",
      globalFuture: "+ 8개 언어 예정"
    }
  };

  function language() {
    const code = String(document.documentElement.lang || "en").toLowerCase().split("-")[0];
    return COPY[code] ? code : "en";
  }

  function ensureControlCount(copy) {
    const label = document.querySelector('[data-i18n="global.07"]');
    const number = label?.closest("article")?.querySelector("b");
    if (number) number.textContent = "4";

    const title = document.querySelector('[data-i18n="operations.10"]');
    if (title) title.textContent = copy.controlTitle;
    const desc = document.querySelector('[data-i18n="operations.11"]');
    if (desc) desc.textContent = copy.controlDesc;

    const switcher = document.querySelector(".control-showcase .style-switch");
    if (switcher) {
      let badge = document.getElementById("control-style-count");
      if (!badge) {
        badge = document.createElement("span");
        badge.id = "control-style-count";
        badge.className = "control-style-count";
        switcher.insertAdjacentElement("afterend", badge);
      }
      badge.textContent = copy.controlBadge;
    }
  }

  function ensurePartnerGlobalCard(copy) {
    const intro = document.querySelector("#cadastro .partner-intro");
    if (!intro) return;

    let card = document.getElementById("partner-global-reach");
    if (!card) {
      card = document.createElement("section");
      card.id = "partner-global-reach";
      card.className = "partner-global-reach";
      card.setAttribute("aria-label", "International partner opportunity");
      card.innerHTML = `
        <div class="partner-global-icon" aria-hidden="true">◎</div>
        <div class="partner-global-copy">
          <span class="mini-label" data-global="kicker"></span>
          <h3 data-global="title"></h3>
          <p data-global="p1"></p>
          <p data-global="p2"></p>
          <div class="partner-global-stats" aria-label="Language expansion">
            <strong data-global="now"></strong>
            <span aria-hidden="true">→</span>
            <strong data-global="future"></strong>
          </div>
        </div>`;
      const flow = intro.querySelector(".partner-flow-card");
      if (flow) flow.insertAdjacentElement("beforebegin", card);
      else intro.appendChild(card);
    }

    const set = (name, value) => {
      const node = card.querySelector(`[data-global="${name}"]`);
      if (node) node.textContent = value;
    };
    set("kicker", copy.globalKicker);
    set("title", copy.globalTitle);
    set("p1", copy.globalP1);
    set("p2", copy.globalP2);
    set("now", copy.globalNow);
    set("future", copy.globalFuture);
  }

  function apply() {
    const copy = COPY[language()];
    document.querySelectorAll('[data-i18n="header.07"], [data-i18n="mobile-menu.04"]').forEach((node) => {
      node.textContent = copy.header;
    });
    ensureControlCount(copy);
    ensurePartnerGlobalCard(copy);
  }

  document.addEventListener("DOMContentLoaded", apply);
  document.addEventListener("gp:idioma", () => window.setTimeout(apply, 0));
  window.addEventListener("load", () => {
    apply();
    window.setTimeout(apply, 120);
  }, { once: true });
})();
