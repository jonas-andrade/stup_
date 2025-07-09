# Landing Page - Alpha Imobiliária | Metrópole Maracanaú

Uma landing page moderna e responsiva desenvolvida para a Alpha Imobiliária, focada na captura de leads para o empreendimento Metrópole Maracanaú em Maracanaú, CE.

## 🚀 Características

- **Design Responsivo**: Otimizada para desktop, tablet e mobile
- **Formulário de Captura**: Sistema completo de validação e envio de leads
- **Integração WhatsApp**: Redirecionamento automático após envio do formulário
- **Animações Suaves**: Efeitos visuais modernos com CSS e JavaScript
- **SEO Otimizado**: Meta tags e estrutura semântica para melhor posicionamento
- **Rastreamento de Eventos**: Preparado para Google Analytics e Facebook Pixel
- **Performance**: Carregamento rápido com lazy loading e otimizações

## 📋 Estrutura do Projeto

```
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação
```

## 🎨 Seções da Página

### 1. Hero Section
- Título impactante com destaque para "Metrópole Maracanaú"
- Subtítulo explicativo sobre o empreendimento
- Features principais (localização, metrô, segurança)
- CTA principal para scroll ao formulário

### 2. Benefícios
- 6 cards destacando vantagens do empreendimento:
  - Localização Estratégica
  - Conexão com Metrô
  - Comércio e Serviços
  - Valorização Garantida
  - Qualidade de Vida
  - Facilidade de Pagamento

### 3. Formulário de Captura
- Campos: Nome, Email, Telefone, Interesse
- Validação em tempo real
- Máscara automática para telefone
- Integração com WhatsApp
- Banner de urgência (unidades limitadas)

### 4. Localização
- Informações sobre Maracanaú
- Destaque para proximidade com Fortaleza
- Features de tempo de deslocamento

### 5. Depoimentos
- 3 testemunhos de clientes satisfeitos
- Sistema de estrelas (5 estrelas)
- Nomes e descrições dos clientes

### 6. CTA Final
- Chamada para ação urgente
- Dois botões: Formulário e Ligação direta

### 7. Footer
- Informações da empresa
- Contatos e redes sociais
- CRECI e informações legais

## ⚙️ Funcionalidades JavaScript

### Validação de Formulário
- Nome: mínimo 2 caracteres
- Email: formato válido
- Telefone: formato (XX) XXXXX-XXXX
- Interesse: campo obrigatório

### Máscaras e Formatação
- Telefone: aplicação automática da máscara brasileira
- Validação em tempo real

### Animações
- Scroll animations usando Intersection Observer
- Contador dinâmico de unidades disponíveis
- Efeitos hover e transições suaves

### Rastreamento
- Google Analytics 4
- Facebook Pixel
- Eventos personalizados para conversões

## 🛠️ Personalização

### Cores e Identidade Visual
Edite as variáveis CSS em `styles.css`:

```css
:root {
    --primary-blue: #4A90E2;     /* Cor principal */
    --secondary-blue: #357ABD;   /* Cor secundária */
    --accent-green: #27AE60;     /* Cor de destaque */
    --dark-blue: #2C3E50;        /* Azul escuro */
}
```

### Informações de Contato
No arquivo `index.html`, altere:

```html
<!-- Telefone -->
<a href="tel:+5585999999999" class="contact-btn">
    <i class="fas fa-phone"></i>
    (85) 99999-9999
</a>

<!-- WhatsApp -->
<a href="https://wa.me/5585999999999?text=..." 
   class="whatsapp-float">
```

### Conteúdo do Empreendimento
Personalize as seções editando:
- Título e subtítulo na Hero Section
- Benefícios e características
- Depoimentos de clientes
- Informações de localização

## 📱 Integração com Serviços

### Google Analytics
Adicione antes do `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel
Adicione antes do `</head>`:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### Backend para Formulário
Substitua a função `simulateFormSubmission` em `script.js`:

```javascript
async function submitFormData(data) {
    const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Erro ao enviar dados');
    }
    
    return response.json();
}
```

## 🚀 Deploy

### Hospedagem Simples
1. Faça upload dos arquivos para seu servidor
2. Configure SSL para HTTPS
3. Teste todas as funcionalidades

### Netlify (Recomendado)
1. Conecte seu repositório GitHub
2. Deploy automático a cada commit
3. SSL gratuito incluído

### Vercel
1. Importe o projeto do GitHub
2. Deploy automático
3. Domínio personalizado disponível

## 📊 Métricas Importantes

### Conversões a Rastrear
- Preenchimento do formulário
- Cliques nos CTAs
- Tempo na página
- Scroll depth
- Cliques no WhatsApp

### KPIs Sugeridos
- Taxa de conversão (visits → leads)
- Custo por lead (se usando ads)
- Tempo médio na página
- Taxa de rejeição
- Origem do tráfego

## 🔧 Otimizações

### Performance
- Imagens otimizadas (WebP quando possível)
- CSS e JS minificados para produção
- Lazy loading implementado
- Cache browser configurado

### SEO
- Meta description otimizada
- Estrutura semântica HTML5
- Schema markup (opcional)
- URLs amigáveis
- Open Graph tags

## 📞 Suporte

Para personalizações avançadas ou suporte técnico:
- Email: [seu-email@domain.com]
- WhatsApp: [seu-numero]

## 📝 Licença

Este projeto foi desenvolvido para a Alpha Imobiliária e contém elementos de design e conteúdo específicos da empresa.

## 🎯 Próximos Passos

1. **Configurar Analytics**: Implementar Google Analytics e Facebook Pixel
2. **Integrar CRM**: Conectar formulário com sistema de gestão de leads
3. **A/B Testing**: Testar diferentes versões do headline e CTAs
4. **Automação**: Configurar email marketing para nurturing de leads
5. **Chat Online**: Implementar chat ao vivo para suporte instantâneo

---

**Desenvolvido para Alpha Imobiliária** | Metrópole Maracanaú - Seu novo lar te espera! 🏠