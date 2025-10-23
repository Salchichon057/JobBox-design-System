/**
 * Design System - Main JavaScript
 * @version 1.0.0
 */

class DesignSystem {
    constructor() {
        this.init();
    }

    init() {
        this.setupColorCopy();
        this.setupNavigation();
        this.setupSmoothScroll();
        this.setupMobileMenu();
        console.log('Design System initialized');
    }

    /**
     * Configurar funcionalidad de copiar colores
     */
    setupColorCopy() {
        // Copiar al hacer click en items de color
        document.querySelectorAll('.color-item, .gray-item').forEach(item => {
            item.addEventListener('click', (e) => {
                // Si el click es en el botón de copiar, no hacer nada (se maneja por separado)
                if (e.target.closest('.copy-btn')) return;

                const colorValue = this.extractColorFromElement(item);
                if (colorValue) {
                    this.copyToClipboard(colorValue);
                }
            });
        });

        // Botones de copiar específicos
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const colorValue = btn.previousElementSibling?.textContent;
                if (colorValue) {
                    this.copyToClipboard(colorValue);
                }
            });
        });
    }

    /**
     * Extraer valor de color de un elemento
     */
    extractColorFromElement(element) {
        // Intentar obtener del color swatch
        const swatch = element.querySelector('.color-swatch, .gray-swatch');
        if (swatch) {
            const bgColor = window.getComputedStyle(swatch).backgroundColor;
            return this.rgbToHex(bgColor);
        }

        // Intentar obtener del valor del color
        const colorValue = element.querySelector('.color-value, .gray-hex');
        return colorValue?.textContent;
    }

    /**
     * Convertir RGB a HEX
     */
    rgbToHex(rgb) {
        const result = rgb.match(/\d+/g);
        if (!result) return null;

        const r = parseInt(result[0]);
        const g = parseInt(result[1]);
        const b = parseInt(result[2]);

        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    /**
     * Copiar texto al portapapeles
     */
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showToast(`Color ${text} copiado al portapapeles`);
        } catch (err) {
            // Fallback para navegadores antiguos
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();

            try {
                document.execCommand('copy');
                this.showToast(`Color ${text} copiado al portapapeles`);
            } catch (e) {
                this.showToast('Error al copiar el color', 'error');
            }

            document.body.removeChild(textarea);
        }
    }

    /**
     * Mostrar notificación toast
     */
    showToast(message, type = 'success') {
        let toast = document.querySelector('.toast');

        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    /**
     * Configurar navegación activa
     */
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Remover active de todos los links
                navLinks.forEach(l => l.classList.remove('active'));
                // Añadir active al link clickeado
                link.classList.add('active');
            });
        });

        // Detectar sección visible y actualizar navegación
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) {
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section[id]').forEach(section => {
            observer.observe(section);
        });
    }

    /**
     * Configurar scroll suave
     */
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Configurar menú móvil
     */
    setupMobileMenu() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const sidebar = document.querySelector('.sidebar');

        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });

            // Cerrar al hacer click fuera
            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                    sidebar.classList.remove('open');
                }
            });
        }
    }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new DesignSystem();
    });
} else {
    new DesignSystem();
}

// Exportar para uso global
window.DesignSystem = DesignSystem;
