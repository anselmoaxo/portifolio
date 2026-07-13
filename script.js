// ========================================
// PORTFOLIO INTERACTIVE ENHANCEMENTS
// ========================================

document.addEventListener('DOMContentLoaded', function() {

  // Init AOS (Animate on Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, easing: 'ease-out', once: true, offset: 80 });
  } else {
    document.querySelectorAll('[data-aos]').forEach(element => {
      element.removeAttribute('data-aos');
    });
  }

  // Animated Counter
  function animateCounter(element, target, duration = 2000) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      element.textContent = target;
      return;
    }
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
    
    element.textContent = '0';
    updateCounter();
  }
  
  // Intersection Observer for counters
  const counters = document.querySelectorAll('.stat-number');
  
  if ('IntersectionObserver' in window) {
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
  }
  
  
  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
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
  } else {
    revealElements.forEach(element => element.classList.add('active'));
  }
  
  
  // Skill Progress Bar Animation
  const skillBars = document.querySelectorAll('.skill-progress');
  
  if ('IntersectionObserver' in window) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width');
          entry.target.style.width = width + '%';
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));
  } else {
    skillBars.forEach(bar => {
      bar.style.width = bar.getAttribute('data-width') + '%';
    });
  }
  
  
  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  
  // Active nav + header scroll state
  const siteHeader = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function onScroll() {
    const scrollY = window.pageYOffset;

    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', scrollY > 20);
    }

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });

    // Back to top button visibility
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 400);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  
  
  // Copy Email to Clipboard (if email link is present)
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (e.ctrlKey || e.metaKey) {
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
  
  if ('IntersectionObserver' in window) {
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
  } else {
    images.forEach(img => {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    });
  }
  
  
  // Enhanced Button Interactions
  const ctaButtons = document.querySelectorAll('.cta-button, .btn-primary, .btn-secondary');
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });

    // Click ripple effect
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.width = '4px';
      ripple.style.height = '4px';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255, 255, 255, 0.4)';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.pointerEvents = 'none';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Skill chip interaction
  const skillChips = document.querySelectorAll('.skill-chip');
  skillChips.forEach(chip => {
    chip.addEventListener('click', function() {
      this.classList.toggle('skill-chip-active');
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

  // Back to Top button
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
    });
  }
  
});


// ========================================
// MOBILE MENU TOGGLE (Enhanced + Accessible)
// ========================================
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  const toggleMenu = (forceClose) => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    const shouldClose = forceClose || isOpen;

    if (shouldClose) {
      menuBtn.classList.remove('open');
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Abrir menu de navegação');
      document.body.style.overflow = '';
    } else {
      menuBtn.classList.add('open');
      mobileMenu.classList.remove('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
      menuBtn.setAttribute('aria-label', 'Fechar menu de navegação');
      document.body.style.overflow = 'hidden';
    }
  };

  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    toggleMenu(isOpen);
  });
  
  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(true);
    });
  });
  
  // Close mobile menu on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      toggleMenu(true);
    }
  });

  // Close mobile menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      toggleMenu(true);
      menuBtn.focus();
    }
  });
}
