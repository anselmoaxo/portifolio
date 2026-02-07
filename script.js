// ========================================
// PORTFOLIO INTERACTIVE ENHANCEMENTS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  
  // Typing Effect
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.remove('typing-text');
      }
    }
    
    type();
  }
  
  // Initialize typing effect if element exists
  const typingElement = document.querySelector('.typing-effect');
  if (typingElement) {
    const originalText = typingElement.textContent;
    typingElement.classList.add('typing-text');
    setTimeout(() => typeWriter(typingElement, originalText, 80), 500);
  }
  
  
  // Animated Counter
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
      start += increment;
      if (start < target) {
        element.textContent = Math.floor(start);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    }
    
    updateCounter();
  }
  
  // Intersection Observer for counters
  const counters = document.querySelectorAll('.stat-number');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateCounter(entry.target, target);
        entry.target.classList.add('counted');
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => counterObserver.observe(counter));
  
  
  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(element => revealObserver.observe(element));
  
  
  // Skill Progress Bar Animation
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width + '%';
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => skillObserver.observe(bar));
  
  
  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed header
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  
  // Add active state to navigation on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-cyan-400');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('text-cyan-400');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavigation);
  
  
  // Parallax Effect on Hero
  const heroSection = document.querySelector('.hero-gradient');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      heroSection.style.transform = `translateY(${parallax}px)`;
    });
  }
  
  
  // Add hover sound effect (optional, commented out by default)
  /*
  const buttons = document.querySelectorAll('.cta-button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      // Add subtle haptic feedback simulation
      if (navigator.vibrate) {
        navigator.vibrate(10);
      }
    });
  });
  */
  
  
  // Copy Email to Clipboard (if email link is present)
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (e.ctrlKey || e.metaKey) { // Ctrl+Click or Cmd+Click
        e.preventDefault();
        const email = this.getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
          showToast('Email copiado para a área de transferência!');
        });
      }
    });
  });
  
  
  // Simple Toast Notification
  function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = 'fixed bottom-8 right-8 bg-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-up';
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
  
  
  // Lazy Loading for Images
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
  
  
  // Add loading animation to external links
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach(link => {
    link.addEventListener('click', function() {
      this.style.opacity = '0.7';
      setTimeout(() => {
        this.style.opacity = '1';
      }, 200);
    });
  });
  
  
  // Performance: Reduce animations on low-end devices
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('scroll-behavior', 'auto');
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('active');
    });
  }
  
  
  // Log page load time (for debugging)
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Portfolio loaded in ${Math.round(loadTime)}ms`);
  });
  
});


// ========================================
// MOBILE MENU TOGGLE (Enhanced)
// ========================================
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
    
    // Prevent body scroll when mobile menu is open
    if (!mobileMenu.classList.contains('hidden')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });
  
  // Close mobile menu on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      menuBtn.classList.remove('open');
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });
}
