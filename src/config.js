// =========================================================
// CONFIGURAÇÃO GERAL DA PÁGINA DE VENDAS
// Altere os links e dados abaixo para conectar sua Kiwify/Hotmart!
// =========================================================
export const SITE_CONFIG = {
  // Link de checkout direto da Kiwify ou Hotmart:
  checkoutUrl: "https://pay.kiwify.com.br/",

  // ID do Meta Pixel (só carrega depois do "Aceitar" no banner de cookies):
  metaPixelId: "",

  // Dados de suporte via WhatsApp:
  whatsappNumber: "" // deixe vazio para ocultar o botão; formato: 5511999999999,
  whatsappMessage: "Olá! Tenho dúvidas sobre o curso Professor em Cena com o Vagner Ralph.",

  // Preços e Condições:
  price: {
    original: "R$ 197,00",
    installments: "12x de R$ 4,70",
    cash: "R$ 47,00",
    discountPercent: "76%"
  },

  // Depoimentos REAIS (vazio = seção oculta). Formato: { name, role, avatar, text, tag }
  testimonials: [],

  // E-mail de suporte (aparece no rodapé se preenchido):
  supportEmail: "",

  // Dados do Especialista:
  expert: {
    name: "Vagner Ralph",
    role: "Ator, Educador Teatral & Criador do Método",
    credentials: "Com experiência prática em Institutos Federais (IFs), Secretarias de Educação e Assistência Social (CRAS), prefeituras e estúdios de arte."
  }
};

