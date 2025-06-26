// WhatsApp configuration
const WHATSAPP_NUMBER = '+5581984733310';
const PROPERTY_PRICE = 'R$ 390.000,00';

// DOM elements
const whatsappButton = document.getElementById('whatsapp-button');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

// WhatsApp functionality
function sendWhatsAppMessage() {
    const message = `Olá! Tenho interesse em comprar o flat anunciado no valor de ${PROPERTY_PRICE}. Gostaria de mais informações e agendar uma visita. Obrigado!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    // Add loading state to button
    const originalText = whatsappButton.innerHTML;
    whatsappButton.innerHTML = '📱 Enviando... <span class="loading"></span>';
    whatsappButton.disabled = true;
    
    // Simulate a brief delay for better UX
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        
        // Reset button after a short delay
        setTimeout(() => {
            whatsappButton.innerHTML = originalText;
            whatsappButton.disabled = false;
        }, 1000);
    }, 500);
}

// Image modal functionality
function openModal(imageSrc) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp button click handler
    whatsappButton.addEventListener('click', sendWhatsAppMessage);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Add smooth scrolling to internal links
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
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add hover effect to image items
    document.querySelectorAll('.image-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
    
    // Add click tracking for analytics (optional)
    function trackEvent(eventName, properties = {}) {
        // This is where you would integrate with analytics services
        console.log(`Event: ${eventName}`, properties);
    }
    
    // Track WhatsApp button clicks
    whatsappButton.addEventListener('click', () => {
        trackEvent('whatsapp_click', {
            property_price: PROPERTY_PRICE,
            timestamp: new Date().toISOString()
        });
    });
    
    // Track image modal opens
    document.querySelectorAll('.image-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            trackEvent('image_view', {
                image_index: index,
                image_src: item.querySelector('img').src
            });
        });
    });
});

// Utility functions
function formatPrice(price) {
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function validatePhoneNumber(phone) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone.replace(/[^0-9+]/g, ''));
}

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const parent = this.closest('.image-item');
            if (parent) {
                parent.style.display = 'none';
            }
        });
    });
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

