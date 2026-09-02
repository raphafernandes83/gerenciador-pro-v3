(() => {
  "use strict";

  const COPY = {
    en: {
      "launch.01": "GERENCIADOR PRO",
      "launch.02": "Operational management and the Partner Program in one ecosystem.",
      "launch.03": "Partner Program <span>→</span>",
      "header.07": "Partners",
      "mobile-menu.04": "Partners",
      "inicio.04": "Explore the product <span>→</span>",
      "simulacao.15": "See the Partner Program <span aria-hidden=\"true\">→</span>",
      "section.01": "Want to participate as a partner?",
      "section.02": "Activate your partnership without buying a PRO subscription.",
      "section.03": "See the Partner Program <span>→</span>",
      "participacao.01": "<i></i> Product and partnership",
      "participacao.02": "Two ways to be part of the Gerenciador PRO ecosystem.",
      "participacao.03": "Use the product for operational management or join the Partner Program to recommend it to other people.",
      "participacao.04": "For product users",
      "participacao.05": "Explore the features, compare methods and see how Gerenciador PRO organises a trading session.",
      "participacao.06": "For partners",
      "participacao.07": "Activate your partnership, receive your exclusive link and track referrals, network and commissions.",
      "participacao.08": "No subscription required",
      "participacao.09": "You do not need to buy a Gerenciador PRO subscription to participate as a partner.",
      "footer.04": "Trading Management System",
      "footer.05": "Partner Program",
      "floating-cta.01": "Become a partner <span aria-hidden=\"true\">→</span>"
    },
    pt: {
      "launch.01": "GERENCIADOR PRO",
      "launch.02": "Gerenciamento operacional e Programa de Parceiros no mesmo ecossistema.",
      "launch.03": "Programa de Parceiros <span>→</span>",
      "header.07": "Parceiros",
      "mobile-menu.04": "Parceiros",
      "inicio.04": "Conhecer o produto <span>→</span>",
      "simulacao.15": "Conhecer o Programa de Parceiros <span aria-hidden=\"true\">→</span>",
      "section.01": "Quer participar como parceiro?",
      "section.02": "Ative sua parceria sem precisar comprar uma assinatura PRO.",
      "section.03": "Conhecer o Programa de Parceiros <span>→</span>",
      "participacao.01": "<i></i> Produto e parceria",
      "participacao.02": "Duas formas de participar do ecossistema Gerenciador PRO.",
      "participacao.03": "Use o produto para sua gestão operacional ou participe do Programa de Parceiros para indicá-lo a outras pessoas.",
      "participacao.04": "Para usar o produto",
      "participacao.05": "Explore os recursos, compare métodos e entenda como o Gerenciador PRO organiza a sessão.",
      "participacao.06": "Para ser parceiro",
      "participacao.07": "Ative sua parceria, receba seu link exclusivo e acompanhe indicações, rede e comissões.",
      "participacao.08": "Sem assinatura obrigatória",
      "participacao.09": "Você não precisa comprar uma assinatura do Gerenciador PRO para participar como parceiro.",
      "footer.04": "Trading Management System",
      "footer.05": "Programa de Parceiros",
      "floating-cta.01": "Quero ser parceiro <span aria-hidden=\"true\">→</span>"
    },
    es: {
      "launch.01": "GERENCIADOR PRO",
      "launch.02": "Gestión operativa y Programa de Socios en un mismo ecosistema.",
      "launch.03": "Programa de Socios <span>→</span>",
      "header.07": "Socios",
      "mobile-menu.04": "Socios",
      "inicio.04": "Conocer el producto <span>→</span>",
      "simulacao.15": "Ver el Programa de Socios <span aria-hidden=\"true\">→</span>",
      "section.01": "¿Quieres participar como socio?",
      "section.02": "Activa tu participación sin comprar una suscripción PRO.",
      "section.03": "Ver el Programa de Socios <span>→</span>",
      "participacao.01": "<i></i> Producto y asociación",
      "participacao.02": "Dos formas de formar parte del ecosistema Gerenciador PRO.",
      "participacao.03": "Usa el producto para tu gestión operativa o participa en el Programa de Socios para recomendarlo a otras personas.",
      "participacao.04": "Para usar el producto",
      "participacao.05": "Explora los recursos, compara métodos y descubre cómo Gerenciador PRO organiza la sesión.",
      "participacao.06": "Para ser socio",
      "participacao.07": "Activa tu participación, recibe tu enlace exclusivo y sigue referidos, red y comisiones.",
      "participacao.08": "Sin suscripción obligatoria",
      "participacao.09": "No necesitas comprar una suscripción de Gerenciador PRO para participar como socio.",
      "footer.04": "Trading Management System",
      "footer.05": "Programa de Socios",
      "floating-cta.01": "Quiero ser socio <span aria-hidden=\"true\">→</span>"
    },
    fr: {
      "launch.01": "GERENCIADOR PRO",
      "launch.02": "Gestion opérationnelle et Programme Partenaires dans un même écosystème.",
      "launch.03": "Programme Partenaires <span>→</span>",
      "header.07": "Partenaires",
      "mobile-menu.04": "Partenaires",
      "inicio.04": "Découvrir le produit <span>→</span>",
      "simulacao.15": "Voir le Programme Partenaires <span aria-hidden=\"true\">→</span>",
      "section.01": "Vous souhaitez devenir partenaire ?",
      "section.02": "Activez votre partenariat sans acheter d’abonnement PRO.",
      "section.03": "Voir le Programme Partenaires <span>→</span>",
      "participacao.01": "<i></i> Produit et partenariat",
      "participacao.02": "Deux façons de participer à l’écosystème Gerenciador PRO.",
      "participacao.03": "Utilisez le produit pour votre gestion opérationnelle ou rejoignez le Programme Partenaires pour le recommander à d’autres personnes.",
      "participacao.04": "Pour utiliser le produit",
      "participacao.05": "Explorez les fonctionnalités, comparez les méthodes et découvrez comment Gerenciador PRO organise la session.",
      "participacao.06": "Pour devenir partenaire",
      "participacao.07": "Activez votre partenariat, recevez votre lien exclusif et suivez les recommandations, le réseau et les commissions.",
      "participacao.08": "Aucun abonnement obligatoire",
      "participacao.09": "Vous n’avez pas besoin d’acheter un abonnement Gerenciador PRO pour devenir partenaire.",
      "footer.04": "Trading Management System",
      "footer.05": "Programme Partenaires",
      "floating-cta.01": "Devenir partenaire <span aria-hidden=\"true\">→</span>"
    },
    de: {
      "launch.01": "GERENCIADOR PRO",
      "launch.02": "Operatives Management und Partnerprogramm in einem Ökosystem.",
      "launch.03": "Partnerprogramm <span>→</span>",
      "header.07": "Partner",
      "mobile-menu.04": "Partner",
      "inicio.04": "Produkt entdecken <span>→</span>",
      "simulacao.15": "Partnerprogramm ansehen <span aria-hidden=\"true\">→</span>",
      "section.01": "Möchten Sie als Partner teilnehmen?",
      "section.02": "Aktivieren Sie Ihre Partnerschaft, ohne ein PRO-Abonnement zu kaufen.",
      "section.03": "Partnerprogramm ansehen <span>→</span>",
      "participacao.01": "<i></i> Produkt und Partnerschaft",
      "participacao.02": "Zwei Wege, Teil des Gerenciador-PRO-Ökosystems zu sein.",
      "participacao.03": "Nutzen Sie das Produkt für Ihr operatives Management oder nehmen Sie am Partnerprogramm teil, um es anderen zu empfehlen.",
      "participacao.04": "Für Produktnutzer",
      "participacao.05": "Entdecken Sie die Funktionen, vergleichen Sie Methoden und sehen Sie, wie Gerenciador PRO eine Sitzung organisiert.",
      "participacao.06": "Für Partner",
      "participacao.07": "Aktivieren Sie Ihre Partnerschaft, erhalten Sie Ihren exklusiven Link und verfolgen Sie Empfehlungen, Netzwerk und Provisionen.",
      "participacao.08": "Kein Abonnement erforderlich",
      "participacao.09": "Sie müssen kein Gerenciador-PRO-Abonnement kaufen, um als Partner teilzunehmen.",
      "footer.04": "Trading Management System",
      "footer.05": "Partnerprogramm",
      "floating-cta.01": "Partner werden <span aria-hidden=\"true\">→</span>"
    },
    bn: {
      "launch.01": "GERENCIADOR PRO",
      "launch.02": "অপারেশনাল ম্যানেজমেন্ট এবং পার্টনার প্রোগ্রাম—একই ইকোসিস্টেমে।",
      "launch.03": "পার্টনার প্রোগ্রাম <span>→</span>",
      "header.07": "পার্টনার",
      "mobile-menu.04": "পার্টনার",
      "inicio.04": "পণ্যটি দেখুন <span>→</span>",
      "simulacao.15": "পার্টনার প্রোগ্রাম দেখুন <span aria-hidden=\"true\">→</span>",
      "section.01": "পার্টনার হিসেবে অংশ নিতে চান?",
      "section.02": "PRO সাবস্ক্রিপশন না কিনেও পার্টনারশিপ সক্রিয় করুন।",
      "section.03": "পার্টনার প্রোগ্রাম দেখুন <span>→</span>",
      "participacao.01": "<i></i> পণ্য ও পার্টনারশিপ",
      "participacao.02": "Gerenciador PRO ইকোসিস্টেমে অংশ নেওয়ার দুটি উপায়।",
      "participacao.03": "অপারেশনাল ব্যবস্থাপনার জন্য পণ্যটি ব্যবহার করুন, অথবা অন্যদের কাছে পরিচয় করিয়ে দিতে পার্টনার প্রোগ্রামে যোগ দিন।",
      "participacao.04": "পণ্য ব্যবহারকারীদের জন্য",
      "participacao.05": "ফিচারগুলো দেখুন, পদ্ধতি তুলনা করুন এবং Gerenciador PRO কীভাবে সেশন সংগঠিত করে তা জানুন।",
      "participacao.06": "পার্টনারদের জন্য",
      "participacao.07": "পার্টনারশিপ সক্রিয় করুন, আপনার এক্সক্লুসিভ লিংক নিন এবং রেফারেল, নেটওয়ার্ক ও কমিশন দেখুন।",
      "participacao.08": "সাবস্ক্রিপশন বাধ্যতামূলক নয়",
      "participacao.09": "পার্টনার হতে Gerenciador PRO-এর সাবস্ক্রিপশন কেনার প্রয়োজন নেই।",
      "footer.04": "Trading Management System",
      "footer.05": "পার্টনার প্রোগ্রাম",
      "floating-cta.01": "পার্টনার হতে চাই <span aria-hidden=\"true\">→</span>"
    },
    zh: {
      "launch.01": "GERENCIADOR PRO",
      "launch.02": "运营管理与合作伙伴计划，同属一个生态系统。",
      "launch.03": "合作伙伴计划 <span>→</span>",
      "header.07": "合作伙伴",
      "mobile-menu.04": "合作伙伴",
      "inicio.04": "了解产品 <span>→</span>",
      "simulacao.15": "查看合作伙伴计划 <span aria-hidden=\"true\">→</span>",
      "section.01": "想成为合作伙伴吗？",
      "section.02": "无需购买 PRO 订阅即可启用合作伙伴身份。",
      "section.03": "查看合作伙伴计划 <span>→</span>",
      "participacao.01": "<i></i> 产品与合作伙伴",
      "participacao.02": "加入 Gerenciador PRO 生态系统的两种方式。",
      "participacao.03": "使用产品进行运营管理，或加入合作伙伴计划并向其他人推荐 Gerenciador PRO。",
      "participacao.04": "使用产品",
      "participacao.05": "了解功能、比较方法，并查看 Gerenciador PRO 如何组织交易会话。",
      "participacao.06": "成为合作伙伴",
      "participacao.07": "启用合作伙伴身份，获取专属链接，并查看推荐、网络和佣金。",
      "participacao.08": "无需订阅",
      "participacao.09": "成为合作伙伴无需购买 Gerenciador PRO 订阅。",
      "footer.04": "Trading Management System",
      "footer.05": "合作伙伴计划",
      "floating-cta.01": "成为合作伙伴 <span aria-hidden=\"true\">→</span>"
    },
    ko: {
      "launch.01": "GERENCIADOR PRO",
      "launch.02": "운영 관리와 파트너 프로그램을 하나의 생태계에서 제공합니다.",
      "launch.03": "파트너 프로그램 <span>→</span>",
      "header.07": "파트너",
      "mobile-menu.04": "파트너",
      "inicio.04": "제품 알아보기 <span>→</span>",
      "simulacao.15": "파트너 프로그램 보기 <span aria-hidden=\"true\">→</span>",
      "section.01": "파트너로 참여하고 싶으신가요?",
      "section.02": "PRO 구독을 구매하지 않아도 파트너십을 활성화할 수 있습니다.",
      "section.03": "파트너 프로그램 보기 <span>→</span>",
      "participacao.01": "<i></i> 제품과 파트너십",
      "participacao.02": "Gerenciador PRO 생태계에 참여하는 두 가지 방법.",
      "participacao.03": "운영 관리를 위해 제품을 사용하거나 파트너 프로그램에 참여해 다른 사람에게 소개할 수 있습니다.",
      "participacao.04": "제품 사용자용",
      "participacao.05": "기능을 살펴보고 방법을 비교하며 Gerenciador PRO가 세션을 어떻게 구성하는지 확인하세요.",
      "participacao.06": "파트너용",
      "participacao.07": "파트너십을 활성화하고 전용 링크를 받아 추천, 네트워크 및 커미션을 확인하세요.",
      "participacao.08": "구독 필수 아님",
      "participacao.09": "파트너가 되기 위해 Gerenciador PRO 구독을 구매할 필요가 없습니다.",
      "footer.04": "Trading Management System",
      "footer.05": "파트너 프로그램",
      "floating-cta.01": "파트너 되기 <span aria-hidden=\"true\">→</span>"
    }
  };

  function languageCode() {
    return (document.documentElement.lang || "en").toLowerCase().split("-")[0];
  }

  function apply(code = languageCode()) {
    const dictionary = COPY[code] || COPY.en;
    Object.entries(dictionary).forEach(([key, value]) => {
      document.querySelectorAll(`[data-i18n="${key}"]`).forEach((element) => {
        element.innerHTML = value;
      });
    });

    const heroCta = document.querySelector('[data-i18n="inicio.04"]');
    if (heroCta) heroCta.setAttribute("href", "#diferenciais");
  }

  document.addEventListener("gp:idioma", (event) => {
    apply(event.detail?.codigo || languageCode());
  });

  document.addEventListener("DOMContentLoaded", () => apply());
})();
