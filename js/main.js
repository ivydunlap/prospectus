// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navMenu && menuToggle && 
        !navMenu.contains(event.target) && 
        !menuToggle.contains(event.target)) {
      navMenu.classList.remove('active');
    }
  });
});

// ========================
// Parallax Scrolling Effect
// ========================
function setupParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length === 0) return;
  
  const handleScroll = () => {
    parallaxElements.forEach(element => {
      const scrollPosition = window.scrollY;
      const elementOffset = element.offsetTop;
      const distance = scrollPosition - elementOffset;
      const speed = element.getAttribute('data-parallax') || 0.5;
      
      if (distance > -element.offsetHeight && distance < window.innerHeight) {
        element.style.transform = `translateY(${distance * speed}px)`;
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
}

// ========================
// Intersection Observer for Animations
// ========================
function setupAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe sections and cards
  document.querySelectorAll('.section, .card, h2, h3').forEach(element => {
    if (!element.classList.contains('animate-fade-in')) {
      observer.observe(element);
    }
  });
}

// ========================
// Soft Float Animation on Hover
// ========================
function setupFloatAnimation() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.animation = 'softFloat 2s ease-in-out infinite';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.animation = 'none';
    });
  });
}

// Form Validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\d{10,}$/;
  return re.test(phone.replace(/\D/g, ''));
}

// Generic form validation
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#d4a5a5';
          field.style.boxShadow = '0 0 0 3px rgba(212, 165, 165, 0.3)';
        } else {
          field.style.borderColor = '';
          field.style.boxShadow = '';
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      }
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active class to current nav link
document.addEventListener('DOMContentLoaded', function() {
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation || 
        (currentLocation === '/' && link.getAttribute('href') === 'index.html')) {
      link.style.color = 'var(--rose-gold)';
    }
  });
});

// ========================
// Initialize All Effects
// ========================
document.addEventListener('DOMContentLoaded', function() {
  setupParallax();
  setupAnimations();
  setupFloatAnimation();
});

// Re-run animations on page resize
window.addEventListener('resize', function() {
  setupParallax();
});
