/**
 * Script para animar elementos cuando aparecen en el viewport
 * 
 * Uso:
 * - Añadir la clase "animate-on-scroll" a los elementos que quieres animar
 * - Opcionalmente añadir data-delay="X" para retrasar la animación (en ms)
 * - Opcionalmente añadir data-animation="fade-up|fade-in|slide-in" para diferentes animaciones
 * - Opcionalmente añadir data-stagger="X" para elementos secundarios con clase "staggered-item"
 */

// Objeto para mantener registro de elementos ya animados
const animatedElements = new WeakSet();

export function setupScrollAnimations() {
  // Configuración del observer
  const observerOptions = {
    root: null, // viewport
    rootMargin: '10px',
    threshold: 0.15 // Aumentado ligeramente para que la animación comience un poco antes
  };

  // Crear IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Verificar si el elemento ya fue animado antes
        if (animatedElements.has(element)) return;
        
        const delay = parseInt(element.dataset.delay || '0');
        const staggerDelay = parseInt(element.dataset.stagger || '30'); // Reducido de 50 a 30
        
        // Aplicar animación al elemento principal
        setTimeout(() => {
          element.classList.add('animate');
          
          // Registrar que este elemento ya fue animado
          animatedElements.add(element);
        }, delay);
        
        // Animar elementos secundarios con efecto escalonado
        const staggeredItems = element.querySelectorAll('.staggered-item');
        staggeredItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate');
            
            // Registrar que este elemento ya fue animado
            animatedElements.add(item);
          }, delay + (staggerDelay * index));
        });
        
        // Dejar de observar después de animar
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Observar todos los elementos con la clase animate-on-scroll
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => {
    // No observar elementos que ya fueron animados
    if (!animatedElements.has(element)) {
      observer.observe(element);
    }
  });

  return observer;
}

// Añadir estilos CSS necesarios
export function addAnimationStyles() {
  if (document.getElementById('animation-styles')) return;
  
  const styleElement = document.createElement('style');
  styleElement.id = 'animation-styles';
  styleElement.textContent = `
    .animate-on-scroll {
      opacity: 0;
      transition: all 0.4s ease-out; // Más rápido (0.5s -> 0.4s)
      will-change: opacity, transform;
    }
    
    .animate-on-scroll.animate {
      opacity: 1;
    }
    
    .animate-on-scroll[data-animation="fade-up"] {
      transform: translateY(8px); // Reducido de 15px a 8px
    }
    
    .animate-on-scroll[data-animation="fade-up"].animate {
      transform: translateY(0);
    }
    
    .animate-on-scroll[data-animation="fade-in"] {
      transform: scale(0.99); // Más sutil (0.98 -> 0.99)
    }
    
    .animate-on-scroll[data-animation="fade-in"].animate {
      transform: scale(1);
    }
    
    .animate-on-scroll[data-animation="slide-in"] {
      transform: translateX(-8px); // Reducido de -15px a -8px
    }
    
    .animate-on-scroll[data-animation="slide-in"].animate {
      transform: translateX(0);
    }
    
    .staggered-item {
      opacity: 0;
      transform: translateY(5px); // Reducido de 10px a 5px
      transition: all 0.35s ease-out; // Más rápido (0.4s -> 0.35s)
      will-change: opacity, transform;
    }
    
    .staggered-item.animate {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  
  document.head.appendChild(styleElement);
}

// Inicialización
export function initAnimations() {
  addAnimationStyles();
  const observer = setupScrollAnimations();
  
  // Gestionar eventos de navegación de Astro
  document.addEventListener('astro:page-load', () => {
    // Añadir estilos si es necesario
    addAnimationStyles();
    
    // Reiniciar animaciones solo para elementos que no han sido animados
    setupScrollAnimations();
  });
  
  // Al cambiar de página, asegurarnos de no reiniciar las animaciones
  document.addEventListener('astro:before-swap', () => {
    // No hacemos nada, para preservar el estado de los elementos animados
  });
  
  return observer;
} 