
// Utility to handle scroll animations
export const setupScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const reveal = () => {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active');
      } else {
        // Uncomment if you want elements to hide again when scrolled away
        // element.classList.remove("active");
      }
    });
  };

  window.addEventListener('scroll', reveal);
  
  // Initial check on load
  reveal();
  
  return () => {
    window.removeEventListener('scroll', reveal);
  };
};

export const addHoverAnimations = () => {
  // Add hover effects to elements with specific classes
  const animateElements = (selector: string, className: string) => {
    document.querySelectorAll(selector).forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.classList.add(className);
      });
      
      element.addEventListener('mouseleave', () => {
        element.classList.remove(className);
      });
    });
  };
  
  // Example usage
  animateElements('.service-card', 'card-animated');
  animateElements('.cta-button', 'btn-animated');
};
