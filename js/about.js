// nav

  function showSideBar() {
    document.getElementById("sidebarOverlay").classList.remove("d-none");
    document.getElementById("sidebar").classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("show");
    setTimeout(() => {
      document.getElementById("sidebarOverlay").classList.add("d-none");
      document.body.style.overflow = "auto";
    }, 300);
  }

  function toggleServices() {
    document.getElementById("serviceMenu").classList.toggle("d-none");
  }

  // nav end

  // loader start
setTimeout(() => {
            document.querySelector(".loader-wrapper").classList.add("hide-loader");
            document.querySelector(".main-content").style.display = "block";
        }, 3000);

        // loader end
  // expertise

function initExpertiseCarousel() {
  const track = document.querySelector('.expertise-track');
  if (!track) return;

  const items = Array.from(track.children);

  // Clone items once for seamless loop
  items.forEach(item => {
    track.appendChild(item.cloneNode(true));
  });

  // Measure half width (original set)
  let width = 0;
  items.forEach(item => {
    width += item.offsetWidth + 40;
  });

  // Set CSS variable for exact movement
  track.style.setProperty('--move-distance', `-${width}px`);

  // Smooth speed control
  const speed = 60; // lower = smoother & slower
  const duration = width / speed;
  track.style.animationDuration = `${duration}s`;

  // Pause on hover
  track.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });

  track.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });
}

window.addEventListener('load', initExpertiseCarousel);

// expertise


// typeography

   const insideSection = document.querySelector('.inside');
    const heading = document.querySelector('.inside-heading');
    const lines = document.querySelectorAll('.line');

    let allChars = [];
    let isAnimating = false;
    let animationTimeouts = [];

    // Wrap heading characters
    function wrapHeadingCharacters(element) {
      const text = element.textContent;
      element.textContent = '';
      
      const chars = [];
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.className = 'heading-char';
        
        if (text[i] === ' ') {
          span.classList.add('space');
          span.textContent = ' ';
        } else {
          span.textContent = text[i];
        }
        
        element.appendChild(span);
        chars.push(span);
      }
      
      return chars;
    }

    // Wrap text by WORDS to prevent word breaking
    function wrapByWords(element) {
      const text = element.textContent.trim();
      element.textContent = '';
      
      const words = text.split(/(\s+)/); // Split but keep spaces
      const chars = [];
      
      words.forEach((word, wordIndex) => {
        if (word.match(/^\s+$/)) {
          // It's whitespace - create a word-space element
          const spaceSpan = document.createElement('span');
          spaceSpan.className = 'word-space';
          spaceSpan.textContent = ' ';
          element.appendChild(spaceSpan);
          chars.push(spaceSpan);
        } else if (word.length > 0) {
          // It's a word - wrap it in a word container
          const wordSpan = document.createElement('span');
          wordSpan.className = 'word';
          
          // Add each character in the word
          for (let i = 0; i < word.length; i++) {
            const charSpan = document.createElement('span');
            charSpan.className = 'char';
            charSpan.textContent = word[i];
            wordSpan.appendChild(charSpan);
            chars.push(charSpan);
          }
          
          element.appendChild(wordSpan);
        }
      });
      
      return chars;
    }

    const headingChars = wrapHeadingCharacters(heading);
    allChars.push(...headingChars);

    lines.forEach(line => {
      const lineChars = wrapByWords(line);
      allChars.push(...lineChars);
    });

    function clearAllTimeouts() {
      animationTimeouts.forEach(timeout => clearTimeout(timeout));
      animationTimeouts = [];
    }

    function animateIn() {
      if (isAnimating) return;
      isAnimating = true;
      
      clearAllTimeouts();

      allChars.forEach((char, index) => {
        const timeout = setTimeout(() => {
          char.classList.add('active');
        }, index * 15);
        animationTimeouts.push(timeout);
      });

      const finalTimeout = setTimeout(() => {
        isAnimating = false;
      }, allChars.length * 15 + 100);
      animationTimeouts.push(finalTimeout);
    }

    let hasAnimated = false;

    function checkScroll() {
      if (hasAnimated) return;
      
      const sectionTop = insideSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.7;
      
      const isInViewport = sectionTop < threshold;
      
      if (isInViewport) {
        hasAnimated = true;
        animateIn();
      }
    }

    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      
      scrollTimeout = window.requestAnimationFrame(() => {
        checkScroll();
      });
    });

    checkScroll();
// end



// team start
document.addEventListener('DOMContentLoaded', () => {

  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let cards = Array.from(track.children);
  const originalCount = cards.length;
  let currentIndex = 0;
  let autoPlay;
  let isDragging = false;
  let startX = 0;
  let cloneCount = 0;

  // ---------- HELPERS ----------
  function getCardWidth() {
    return cards[0].offsetWidth + 20;
  }

  function getVisibleCards() {
    const container = document.querySelector('.carousel-container').offsetWidth;
    return Math.ceil(container / getCardWidth());
  }

  // ---------- CLONE ----------
  function setupInfinite() {
    cloneCount = getVisibleCards();

    for (let i = 0; i < cloneCount; i++) {
      track.appendChild(cards[i].cloneNode(true));
      track.insertBefore(
        cards[originalCount - 1 - i].cloneNode(true),
        track.firstChild
      );
    }
  }

  // ---------- MOVE ----------
  function updateCarousel(instant = false) {
    track.style.transition = instant ? 'none' : 'transform .5s ease';
    track.style.transform =
      `translateX(${-(currentIndex + cloneCount) * getCardWidth()}px)`;
  }

  function next() {
    currentIndex++;
    updateCarousel();

    if (currentIndex >= originalCount) {
      setTimeout(() => {
        currentIndex = 0;
        updateCarousel(true);
      }, 500);
    }
  }

  function prev() {
    currentIndex--;
    updateCarousel();

    if (currentIndex < 0) {
      setTimeout(() => {
        currentIndex = originalCount - 1;
        updateCarousel(true);
      }, 500);
    }
  }

  // ---------- AUTOPLAY ----------
  function startAutoPlay() {
    stopAutoPlay();
    autoPlay = setInterval(next, 3000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlay);
  }

  // ---------- EVENTS ----------
  nextBtn.onclick = next;
  prevBtn.onclick = prev;

  track.addEventListener('click', e => {
    const card = e.target.closest('.single-team');
    if (!card) return;

    const active = card.classList.contains('active');
    track.querySelectorAll('.single-team').forEach(c => c.classList.remove('active'));

    if (!active) {
      card.classList.add('active');
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  track.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.pageX;
    stopAutoPlay();
  });

  document.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - e.pageX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    startAutoPlay();
  });

  window.addEventListener('resize', () => {
    updateCarousel(true);
  });

  // ---------- INIT ----------
  setupInfinite();
  updateCarousel(true);
  startAutoPlay();
});


    // end team

    // service


const contents = document.querySelectorAll('.content');
const images = document.querySelectorAll('.img');
const dots = document.querySelectorAll('.dot');

let index = 0;

function changeSlide() {
  contents.forEach(c => c.classList.remove('active'));
  images.forEach(i => i.classList.remove('active'));

  dots.forEach(d => {
    d.classList.remove('active');
    d.style.background = '#444';
  });

  contents[index].classList.add('active');
  images[index].classList.add('active');
  dots[index].classList.add('active');

  const color = contents[index].dataset.color;

  dots[index].style.background = color;

  // Your HTML has h2, not h3
  contents[index].querySelector('h2').style.color = color;

  index = (index + 1) % contents.length;
}

changeSlide();
setInterval(changeSlide, 3000);
    // service end
    // logo start

     document.addEventListener("DOMContentLoaded", function () {
      const wrapper = document.querySelector(".logo-wrapper");
      const track = document.querySelector(".logo-track");

      if (!track) return;

      // Clone the track content for seamless loop
      const clone = track.cloneNode(true);
      wrapper.appendChild(clone);

      let scrollPosition = 0;
      let isPaused = false;
      const scrollSpeed = 1; // pixels per frame

      function animate() {
        if (!isPaused) {
          scrollPosition += scrollSpeed;
          
          const trackWidth = track.offsetWidth;
          
          if (scrollPosition >= trackWidth) {
            scrollPosition = 0;
          }
          
          wrapper.style.transform = `translateX(-${scrollPosition}px)`;
        }
        
        requestAnimationFrame(animate);
      }

      animate();

      // Pause on hover
      wrapper.addEventListener("mouseenter", () => {
        isPaused = true;
      });

      wrapper.addEventListener("mouseleave", () => {
        isPaused = false;
      });

      // Touch support
      wrapper.addEventListener("touchstart", () => {
        isPaused = true;
      }, { passive: true });

      wrapper.addEventListener("touchend", () => {
        isPaused = false;
      }, { passive: true });
    });



