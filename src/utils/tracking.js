// Utilitário para preservar parâmetros de rastreamento (UTMs)
// Essencial para saber exatamente qual anúncio do Instagram gerou a venda na Kiwify ou Hotmart!

export function appendTrackingParams(baseUrl) {
  if (typeof window === 'undefined') return baseUrl;

  try {
    const currentParams = new URLSearchParams(window.location.search);
    if (!currentParams.toString()) return baseUrl;

    const targetUrl = new URL(baseUrl);
    
    // Lista de parâmetros padrão de tráfego pago (Meta Ads, Google, etc)
    const trackedKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
      'src',
      'sck',
      'fbclid'
    ];

    trackedKeys.forEach(key => {
      if (currentParams.has(key)) {
        targetUrl.searchParams.set(key, currentParams.get(key));
      }
    });

    return targetUrl.toString();
  } catch {
    return baseUrl;
  }
}

