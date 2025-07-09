// Scroll suave para o formulário
function scrollToForm() {
    document.getElementById('form-section').scrollIntoView({
        behavior: 'smooth'
    });
}

// Formatação de telefone
function formatPhone(value) {
    // Remove todos os caracteres não numéricos
    const cleaned = value.replace(/\D/g, '');
    
    // Aplica a máscara (XX) XXXXX-XXXX
    if (cleaned.length <= 11) {
        return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
}

// Aplicar máscara no campo telefone
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('telefone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            let value = this.value;
            this.value = formatPhone(value);
        });
    }
});

// Validação do formulário
function validateForm(formData) {
    const errors = [];
    
    // Validar nome
    if (!formData.nome || formData.nome.trim().length < 2) {
        errors.push('Nome deve ter pelo menos 2 caracteres');
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.push('Email inválido');
    }
    
    // Validar telefone
    const phoneRegex = /\(\d{2}\)\s\d{5}-\d{4}/;
    if (!formData.telefone || !phoneRegex.test(formData.telefone)) {
        errors.push('Telefone inválido. Use o formato (XX) XXXXX-XXXX');
    }
    
    // Validar interesse
    if (!formData.interesse) {
        errors.push('Selecione seu interesse');
    }
    
    return errors;
}

// Mostrar mensagem de erro ou sucesso
function showMessage(message, type = 'error') {
    // Remove mensagem anterior se existir
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.innerHTML = `
        <div class="message-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Adicionar estilos da mensagem
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27AE60' : '#E74C3C'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(messageEl);
    
    // Remove automaticamente após 5 segundos
    setTimeout(() => {
        messageEl.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, 300);
    }, 5000);
}

// Processar envio do formulário
document.addEventListener('DOMContentLoaded', function() {
    const leadForm = document.getElementById('leadForm');
    
    if (leadForm) {
        leadForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            // Coletar dados do formulário
            const formData = {
                nome: document.getElementById('nome').value.trim(),
                email: document.getElementById('email').value.trim(),
                telefone: document.getElementById('telefone').value.trim(),
                interesse: document.getElementById('interesse').value
            };
            
            // Validar dados
            const errors = validateForm(formData);
            if (errors.length > 0) {
                showMessage(errors.join('<br>'), 'error');
                return;
            }
            
            // Mostrar estado de carregamento
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            
            try {
                // Simular envio (substitua pela integração real)
                await simulateFormSubmission(formData);
                
                // Sucesso
                showMessage('Obrigado! Em breve entraremos em contato com você.', 'success');
                
                // Limpar formulário
                leadForm.reset();
                
                // Redirecionar para WhatsApp
                setTimeout(() => {
                    const whatsappMessage = `Olá! Acabei de preencher o formulário para o Metrópole Maracanaú. Meu nome é ${formData.nome} e gostaria de mais informações.`;
                    const whatsappUrl = `https://wa.me/5585999999999?text=${encodeURIComponent(whatsappMessage)}`;
                    window.open(whatsappUrl, '_blank');
                }, 2000);
                
            } catch (error) {
                console.error('Erro ao enviar formulário:', error);
                showMessage('Erro ao enviar formulário. Tente novamente ou entre em contato por telefone.', 'error');
            } finally {
                // Restaurar botão
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
                submitBtn.innerHTML = originalText;
            }
        });
    }
});

// Simular envio do formulário (substitua pela integração real)
function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        // Simular delay de rede
        setTimeout(() => {
            // Aqui você faria a integração real com seu backend ou serviço
            console.log('Dados do lead:', data);
            
            // Simular sucesso na maioria dos casos
            if (Math.random() > 0.1) {
                resolve({ success: true });
            } else {
                reject(new Error('Erro simulado'));
            }
        }, 2000);
    });
}

// Animações de scroll
function handleScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elementos para animar
    const animatedElements = document.querySelectorAll(`
        .benefit-card,
        .testimonial,
        .location-feature,
        .form-text,
        .lead-form
    `);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Contador de unidades disponíveis (efeito visual)
function startUnitCounter() {
    const urgencyBanner = document.querySelector('.urgency-banner span');
    if (!urgencyBanner) return;
    
    let units = Math.floor(Math.random() * 10) + 5; // Entre 5 e 14 unidades
    
    // Atualizar texto inicial
    urgencyBanner.textContent = `Apenas ${units} unidades disponíveis!`;
    
    // Simular diminuição das unidades a cada 30 segundos
    setInterval(() => {
        if (units > 3) {
            units--;
            urgencyBanner.textContent = `Apenas ${units} unidades disponíveis!`;
            
            // Efeito visual quando diminui
            urgencyBanner.parentElement.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                if (urgencyBanner.parentElement) {
                    urgencyBanner.parentElement.style.animation = '';
                }
            }, 500);
        }
    }, 30000);
}

// Efeito de digitação no título
function typewriterEffect() {
    const titleElement = document.querySelector('.hero-title');
    if (!titleElement) return;
    
    const originalText = titleElement.innerHTML;
    titleElement.innerHTML = '';
    titleElement.style.opacity = '1';
    
    let i = 0;
    const speed = 50;
    
    function typeChar() {
        if (i < originalText.length) {
            titleElement.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        }
    }
    
    // Começar depois de um pequeno delay
    setTimeout(typeChar, 500);
}

// Rastreamento de eventos (Google Analytics, Facebook Pixel, etc.)
function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, parameters);
    }
    
    console.log('Event tracked:', eventName, parameters);
}

// Configurar rastreamento de eventos
function setupEventTracking() {
    // Rastrear cliques nos CTAs
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('cta_click', {
                button_text: button.textContent.trim(),
                section: button.closest('section')?.className || 'unknown'
            });
        });
    });
    
    // Rastrear clique no WhatsApp
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', () => {
            trackEvent('whatsapp_click', {
                source: 'float_button'
            });
        });
    }
    
    // Rastrear tempo na página
    let timeOnPage = 0;
    setInterval(() => {
        timeOnPage += 10;
        if (timeOnPage === 30) {
            trackEvent('time_on_page', { duration: '30_seconds' });
        } else if (timeOnPage === 60) {
            trackEvent('time_on_page', { duration: '1_minute' });
        } else if (timeOnPage === 120) {
            trackEvent('time_on_page', { duration: '2_minutes' });
        }
    }, 10000);
}

// Adicionar estilos CSS dinâmicos
function addDynamicStyles() {
    const styles = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .message-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .form-message.success {
            background: linear-gradient(135deg, #27AE60, #2ECC71) !important;
        }
        
        .form-message.error {
            background: linear-gradient(135deg, #E74C3C, #C0392B) !important;
        }
        
        /* Melhorar a animação de pulse do urgency banner */
        @keyframes urgencyPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

// Inicializar todas as funcionalidades quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar estilos dinâmicos
    addDynamicStyles();
    
    // Inicializar animações de scroll
    handleScrollAnimations();
    
    // Inicializar contador de unidades
    startUnitCounter();
    
    // Configurar rastreamento de eventos
    setupEventTracking();
    
    // Opcional: efeito de digitação (descomente se desejar)
    // typewriterEffect();
    
    console.log('Landing page Alpha Imobiliária carregada com sucesso!');
});

// Função para suavizar o scroll da página
function smoothScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerOffset = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Lazy loading para imagens
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Configurar lazy loading se houver imagens com data-src
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Função para mostrar/ocultar header baseado no scroll
function setupStickyHeader() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Ativar header sticky
document.addEventListener('DOMContentLoaded', setupStickyHeader);