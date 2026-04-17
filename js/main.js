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
          field.style.borderColor = '#d946a6';
          field.style.boxShadow = '0 0 0 3px rgba(217, 70, 166, 0.3)';
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
      link.style.color = 'var(--magenta-vibrant)';
    }
  });
});

// ========================
// Cinematic Photo Carousel
// ========================
function initCarousel() {
  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;

  const track = document.getElementById('carouselTrack');
  const slides = Array.from(track.querySelectorAll('.carousel-slide'));
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const indicatorsContainer = document.getElementById('carouselIndicators');
  const progressBar = document.getElementById('carouselProgress');
  const pauseBtn = document.getElementById('carouselPause');
  const liveRegion = document.getElementById('carouselLive');

  if (slides.length === 0) return;

  // --- Config ---
  const AUTOPLAY_INTERVAL = 7000;
  const TRANSITION_DURATION = 1400;
  const KEN_BURNS_DURATION = 8000;
  const kenBurnsVariants = ['kenBurns1', 'kenBurns2', 'kenBurns3', 'kenBurns4', 'kenBurns5'];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let currentSlide = 0;
  let isTransitioning = false;
  let autoplayTimer = null;
  let isPaused = false;
  let lastKenBurns = -1;

  // --- Build indicators ---
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'carousel-indicator' + (i === 0 ? ' active' : '');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    btn.addEventListener('click', () => goToSlide(i));
    indicatorsContainer.appendChild(btn);
  });

  const indicators = Array.from(indicatorsContainer.querySelectorAll('.carousel-indicator'));

  // --- Ken Burns effect ---
  function applyKenBurns(slide) {
    if (prefersReducedMotion) return;
    const img = slide.querySelector('img');
    if (!img) return;
    let idx;
    do {
      idx = Math.floor(Math.random() * kenBurnsVariants.length);
    } while (idx === lastKenBurns && kenBurnsVariants.length > 1);
    lastKenBurns = idx;
    img.style.willChange = 'transform';
    img.style.animation = 'none';
    void img.offsetWidth; // force reflow
    img.style.animation = kenBurnsVariants[idx] + ' ' + KEN_BURNS_DURATION + 'ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
  }

  // --- will-change management ---
  function updateWillChange(index) {
    slides.forEach(function(s, i) {
      var img = s.querySelector('img');
      if (!img) return;
      var isNear = Math.abs(i - index) <= 1 ||
        (index === 0 && i === slides.length - 1) ||
        (index === slides.length - 1 && i === 0);
      img.style.willChange = isNear ? 'transform' : 'auto';
    });
  }

  // --- Slide transition ---
  function goToSlide(index) {
    if (isTransitioning || index === currentSlide) return;
    isTransitioning = true;

    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    applyKenBurns(slides[index]);
    updateWillChange(index);

    indicators[currentSlide].classList.remove('active');
    indicators[currentSlide].setAttribute('aria-selected', 'false');
    indicators[index].classList.add('active');
    indicators[index].setAttribute('aria-selected', 'true');

    currentSlide = index;

    // Announce to screen readers
    if (liveRegion) {
      liveRegion.textContent = 'Slide ' + (index + 1) + ' of ' + slides.length;
    }

    // Preload the next slide's image
    var nextIdx = (index + 1) % slides.length;
    var nextImg = slides[nextIdx].querySelector('img');
    if (nextImg && !nextImg.complete) {
      var preloadNext = new Image();
      preloadNext.src = nextImg.src;
    }

    setTimeout(() => { isTransitioning = false; }, TRANSITION_DURATION);
    resetAutoplay();
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  // --- Autoplay with progress bar ---
  function startProgress() {
    if (!progressBar) return;
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    progressBar.classList.remove('animating');
    void progressBar.offsetWidth;
    progressBar.classList.add('animating');
    progressBar.style.transition = 'width ' + AUTOPLAY_INTERVAL + 'ms linear';
    progressBar.style.width = '100%';
  }

  function stopProgress() {
    if (!progressBar) return;
    const w = getComputedStyle(progressBar).width;
    progressBar.classList.remove('animating');
    progressBar.style.transition = 'none';
    progressBar.style.width = w;
  }

  function resetAutoplay() {
    clearTimeout(autoplayTimer);
    if (!isPaused) {
      startProgress();
      autoplayTimer = setTimeout(nextSlide, AUTOPLAY_INTERVAL);
    }
  }

  function pause() {
    isPaused = true;
    carousel.classList.add('paused');
    clearTimeout(autoplayTimer);
    stopProgress();
  }

  function resume() {
    isPaused = false;
    carousel.classList.remove('paused');
    resetAutoplay();
  }

  // --- Controls ---
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Hover pause/resume
  carousel.addEventListener('mouseenter', pause);
  carousel.addEventListener('mouseleave', function() {
    if (!userPaused) resume();
  });

  // Pause/play button
  var userPaused = false;
  if (pauseBtn) {
    pauseBtn.addEventListener('click', function() {
      userPaused = !userPaused;
      if (userPaused) {
        pause();
        pauseBtn.setAttribute('aria-label', 'Play slideshow');
        pauseBtn.querySelector('.carousel-pause-icon').style.display = 'none';
        pauseBtn.querySelector('.carousel-play-icon').style.display = 'block';
      } else {
        resume();
        pauseBtn.setAttribute('aria-label', 'Pause slideshow');
        pauseBtn.querySelector('.carousel-pause-icon').style.display = 'block';
        pauseBtn.querySelector('.carousel-play-icon').style.display = 'none';
      }
    });
  }

  // Keyboard navigation
  carousel.setAttribute('tabindex', '0');
  carousel.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); nextSlide(); }
  });

  // --- Touch / swipe ---
  let touchStartX = 0;
  let touchStartY = 0;
  let touchDeltaX = 0;
  let isSwiping = false;

  carousel.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchDeltaX = 0;
    isSwiping = false;
  }, { passive: true });

  carousel.addEventListener('touchmove', function(e) {
    const dx = e.touches[0].clientX - touchStartX;
    const dy = e.touches[0].clientY - touchStartY;
    if (!isSwiping && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      isSwiping = true;
    }
    if (isSwiping) {
      touchDeltaX = dx;
      e.preventDefault();
    }
  }, { passive: false });

  carousel.addEventListener('touchend', function() {
    if (isSwiping) {
      if (touchDeltaX > 50) prevSlide();
      else if (touchDeltaX < -50) nextSlide();
    }
    isSwiping = false;
  }, { passive: true });

  // --- Visibility change ---
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) pause();
    else if (!userPaused) resume();
  });

  // --- Preload adjacent images ---
  for (var i = 0; i < Math.min(3, slides.length); i++) {
    var img = slides[i].querySelector('img');
    if (img && !img.complete) {
      var preload = new Image();
      preload.src = img.src;
    }
  }

  // --- Initialize ---
  applyKenBurns(slides[0]);
  updateWillChange(0);
  if (!prefersReducedMotion) {
    resetAutoplay();
  }
}

// ========================
// Initialize All Effects
// ========================
document.addEventListener('DOMContentLoaded', function() {
  setupParallax();
  setupAnimations();
  setupFloatAnimation();
  initCarousel();
});

// Re-run animations on page resize
window.addEventListener('resize', function() {
  setupParallax();
});
