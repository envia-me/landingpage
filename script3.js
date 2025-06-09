// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect with pastoral touch
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 248, 220, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(139, 69, 19, 0.15)';
    } else {
        header.style.background = 'rgba(255, 248, 220, 0.95)';
        header.style.boxShadow = '0 4px 6px rgba(139, 69, 19, 0.1)';
    }
});

// Pastoral form submission with blessing
document.querySelector('.pastoral-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const church = this.querySelectorAll('input[type="text"]')[1].value;
    const size = this.querySelector('select').value;
    
    if (name && email && church && size) {
        // Show blessing animation
        const button = this.querySelector('.form-submit');
        const originalContent = button.innerHTML;
        
        // Loading state
        button.innerHTML = '<span class="submit-icon">🙏</span> Preparando sua bênção...';
        button.style.background = 'linear-gradient(135deg, #228B22, #32CD32)';
        
        setTimeout(() => {
            // Success state
            button.innerHTML = '<span class="submit-icon">✨</span> Período de Graça Ativado!';
            
            setTimeout(() => {
                // Show personalized message
                const blessingMessages = [
                    `Que Deus abençoe o ministério de ${name} na ${church}!`,
                    `Seja bem-vindo(a) à família Envia-me, ${name}!`,
                    `Que esta ferramenta fortaleça os laços pastorais da ${church}!`,
                    `Deus tem grandes planos para o ministério de ${name}!`
                ];
                
                const randomBlessing = blessingMessages[Math.floor(Math.random() * blessingMessages.length)];
                
                alert(`🙏 ${randomBlessing}\n\n✨ Seu período de graça de 30 dias foi ativado!\n📧 Instruções enviadas para ${email}\n💝 Nossa equipe entrará em contato em breve para o treinamento personalizado.`);
                
                // Reset form
                button.innerHTML = originalContent;
                button.style.background = '';
                this.reset();
                
                // Add small blessing animation
                createBlessingAnimation();
            }, 2000);
        }, 1500);
    }
});

// Create floating hearts animation for blessing
function createBlessingAnimation() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💝';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.fontSize = '2rem';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.animation = 'floatUp 3s ease-out forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 200);
    }
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .scroll-fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .scroll-fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .feature-card-hover {
        transition: all 0.3s ease;
    }
    
    .feature-card-hover:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 15px 35px rgba(139, 69, 19, 0.2);
    }
`;
document.head.appendChild(style);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.value, .feature, .step, .testimonial-card').forEach(el => {
    el.classList.add('scroll-fade-in');
    observer.observe(el);
});

// Add hover effects to cards
document.querySelectorAll('.value, .testimonial-card').forEach(card => {
    card.classList.add('feature-card-hover');
});

// Testimonial cards special hover effect
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(139, 69, 19, 0.25)';
    });
    
    card.addEventListener('mouseleave', function() {
        if (this.classList.contains('featured')) {
            this.style.transform = 'scale(1.02)';
        } else {
            this.style.transform = 'translateY(0) scale(1)';
        }
        this.style.boxShadow = '0 8px 25px rgba(139, 69, 19, 0.15)';
    });
});

// Enhanced animations for pastoral scene
const pastoralScene = document.querySelector('.pastoral-scene');
if (pastoralScene) {
    // Add gentle rotation on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.05;
        pastoralScene.style.transform = `rotate(${rate}deg)`;
    });
    
    // Add pulse effect on hover
    pastoralScene.addEventListener('mouseenter', function() {
        this.style.animation = 'gentlePulse 2s ease-in-out infinite';
    });
    
    pastoralScene.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
}

// Add gentle pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes gentlePulse {
        0%, 100% { 
            transform: scale(1) rotate(0deg); 
            box-shadow: 0 15px 35px rgba(139, 69, 19, 0.2);
        }
        50% { 
            transform: scale(1.03) rotate(1deg); 
            box-shadow: 0 20px 40px rgba(139, 69, 19, 0.25);
        }
    }
`;
document.head.appendChild(pulseStyle);

// Add typing effect to hero title
function typeEffect(element, text, speed = 100) {
    element.innerHTML = '';
    let i = 0;
    
    function typeChar() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        }
    }
    
    typeChar();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.style.opacity = '1';
        setTimeout(() => {
            typeEffect(heroTitle, originalText, 50);
        }, 500);
    }
});

// Add gentle parallax effect to floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hearts span, .members span');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Add random gentle movements to pastoral elements
function addGentleMovements() {
    const members = document.querySelectorAll('.members span');
    const hearts = document.querySelectorAll('.hearts span');
    
    [...members, ...hearts].forEach((element, index) => {
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 4;
            const randomY = (Math.random() - 0.5) * 4;
            element.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + (index * 500));
    });
}

// Initialize gentle movements after page load
setTimeout(addGentleMovements, 2000);

// Enhanced form validation with pastoral messages
function validateFormField(field, fieldName) {
    if (!field.value.trim()) {
        field.style.borderColor = '#ff6b6b';
        field.placeholder = `${fieldName} é importante para conhecermos você melhor 🙏`;
        return false;
    } else {
        field.style.borderColor = '#228B22';
        return true;
    }
}

// Add real-time validation
document.querySelectorAll('.pastoral-form input, .pastoral-form select').forEach(field => {
    field.addEventListener('blur', function() {
        const fieldName = this.previousElementSibling.textContent;
        validateFormField(this, fieldName);
    });
    
    field.addEventListener('focus', function() {
        this.style.borderColor = '#DAA520';
    });
});

// Add blessing quotes that appear randomly
const blessingQuotes = [
    '"Conheço as minhas ovelhas, e elas me conhecem" - João 10:14',
    '"Apascenta as minhas ovelhas" - João 21:17',
    '"O bom pastor dá a sua vida pelas ovelhas" - João 10:11',
    '"Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles" - Mateus 18:20'
];

function showRandomBlessing() {
    const quote = blessingQuotes[Math.floor(Math.random() * blessingQuotes.length)];
    
    const blessingDiv = document.createElement('div');
    blessingDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #8B4513, #DAA520);
            color: white;
            padding: 1rem;
            border-radius: 15px;
            max-width: 300px;
            box-shadow: 0 8px 25px rgba(139, 69, 19, 0.3);
            z-index: 9999;
            font-style: italic;
            animation: slideInRight 0.5s ease-out;
        ">
            <div style="margin-bottom: 0.5rem;">🙏</div>
            ${quote}
        </div>
    `;
    
    document.body.appendChild(blessingDiv);
    
    setTimeout(() => {
        blessingDiv.style.animation = 'slideOutRight 0.5s ease-in forwards';
        setTimeout(() => blessingDiv.remove(), 500);
    }, 5000);
}

// Add slide animations
const slideStyle = document.createElement('style');
slideStyle.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(slideStyle);

// Show blessing quotes periodically
setTimeout(() => {
    showRandomBlessing();
    setInterval(showRandomBlessing, 45000); // Every 45 seconds
}, 10000); // First one after 10 seconds