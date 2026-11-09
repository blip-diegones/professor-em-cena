# 🎭 Professor em Cena • Landing Page de Vendas

Landing Page de alta conversão desenvolvida em **React 18 + Vite + Tailwind CSS + Framer Motion + Lucide Icons**, seguindo os padrões de design de **UI/UX Pro Max**.

Otimizada especificamente para **Mobile-First** e tráfego pago vindo de anúncios do Instagram (Meta Ads) com conversão para **Kiwify** ou **Hotmart**.

---

## 🚀 Como Rodar o Projeto Localmente

1. No terminal desta pasta, execute o servidor de desenvolvimento:
```bash
npm run dev
```
2. Abra o link informado no terminal (normalmente `http://localhost:3000`).

---

## 🛠️ Como Personalizar os Links de Checkout e WhatsApp

Abra o arquivo `src/config.js`:

```javascript
export const SITE_CONFIG = {
  // Cole o seu link de checkout da Kiwify ou Hotmart aqui:
  checkoutUrl: "https://pay.kiwify.com.br/SEU_LINK_AQUI",

  // Seu número com DDD para o botão flutuante de WhatsApp:
  whatsappNumber: "5511999999999",
  whatsappMessage: "Olá! Tenho dúvidas sobre o curso Professor em Cena.",

  // Valores e condições:
  price: {
    original: "R$ 197,00",
    installments: "12x de R$ 4,70",
    cash: "R$ 47,00",
    discountPercent: "60%"
  }
};
```

---

## 📦 Como Gerar os Arquivos para Hospedar (Build)

Para gerar a versão final pronta para produção:
```bash
npm run build
```
Os arquivos otimizados serão gerados dentro da pasta `dist/`.

### Opções de Hospedagem:
- **Vercel / Netlify:** Basta conectar o repositório no GitHub ou arrastar a pasta `dist/` diretamente na Netlify Drop.
- **Hospedagem Tradicional (cPanel / Hostinger / Apache):** Basta enviar o conteúdo da pasta `dist/` para a pasta `public_html`.

