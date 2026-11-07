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

// technology

const tabItems = document.querySelectorAll('.tab-item');
const tabPanes = document.querySelectorAll('.tab-pane');

// Add click event to each tab item
tabItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Remove active class from all tabs and panes
        tabItems.forEach(tab => tab.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding pane
        item.classList.add('active');
        tabPanes[index].classList.add('active');
    });
});


  // logo carousel

 document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".logo-track");

  if (!track) return;

  let animationRunning = true;

  function pauseAnimation() {
    track.style.animationPlayState = "paused";
    animationRunning = false;
  }

  function resumeAnimation() {
    track.style.animationPlayState = "running";
    animationRunning = true;
  }

  track.addEventListener("mouseenter", pauseAnimation);
  track.addEventListener("mouseleave", resumeAnimation);

  // Touch support (mobile pause)
  track.addEventListener("touchstart", pauseAnimation, { passive: true });
  track.addEventListener("touchend", resumeAnimation, { passive: true });
});




// service

document.addEventListener('DOMContentLoaded', function() {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!track || !prevBtn || !nextBtn) return;

  const cards = Array.from(track.children);
  const totalCards = cards.length;
  let currentIndex = 0;
  let isAnimating = false;
  let autoPlayInterval;

  function setupInfiniteCarousel() {
    const cloneCount = 5;
    for (let i = 0; i < cloneCount; i++) {
      const clone = cards[i].cloneNode(true);
      clone.classList.add('clone');
      track.appendChild(clone);
    }

    for (let i = totalCards - 1; i >= totalCards - cloneCount; i--) {
      const clone = cards[i].cloneNode(true);
      clone.classList.add('clone');
      track.insertBefore(clone, track.firstChild);
    }
  }

  function getCardWidth() {
    const allCards = track.children;
    if (allCards.length === 0) return 0;
    const cardWidth = allCards[0].offsetWidth;
    const gap = parseInt(window.getComputedStyle(track).gap) || 20;
    return cardWidth + gap;
  }

  function updateCarousel(instant = false) {
    const cardWidth = getCardWidth();
    const cloneCount = 5;
    const offset = -(currentIndex + cloneCount) * cardWidth;

    if (instant) {
      track.style.transition = 'none';
    } else {
      track.style.transition = 'transform 0.5s ease-in-out';
    }

    track.style.transform = `translateX(${offset}px)`;
  }

  function handleInfiniteLoop() {
    if (currentIndex >= totalCards) {
      setTimeout(() => {
        currentIndex = 0;
        updateCarousel(true);
      }, 500);
    }

    if (currentIndex < 0) {
      setTimeout(() => {
        currentIndex = totalCards - 1;
        updateCarousel(true);
      }, 500);
    }
  }

  function moveNext() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex++;
    updateCarousel();
    handleInfiniteLoop();
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  function movePrev() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex--;
    updateCarousel();
    handleInfiniteLoop();
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  // 🔄 Reversed direction: left side autoplay
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      movePrev(); // ⬅️ move left
    }, 3000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // 🔄 Reversed button direction for left slide
  nextBtn.addEventListener('click', function() {
    movePrev(); // move left
    resetAutoPlay();
  });

  prevBtn.addEventListener('click', function() {
    moveNext(); // move right
    resetAutoPlay();
  });

  track.addEventListener('mouseenter', stopAutoPlay);
  track.addEventListener('mouseleave', startAutoPlay);

  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      updateCarousel(true);
    }, 250);
  });

  // Touch and drag support
  let touchStartX = 0;
  let touchEndX = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
  }, { passive: true });

  track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    const swipeThreshold = 50;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) movePrev();
      else moveNext();
    }
    startAutoPlay();
  }, { passive: true });

  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  track.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.pageX;
    track.style.cursor = 'grabbing';
    stopAutoPlay();
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    e.preventDefault();
    currentX = e.pageX;
  });

  document.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    track.style.cursor = 'grab';
    const diff = startX - currentX;
    const dragThreshold = 50;
    if (Math.abs(diff) > dragThreshold) {
      if (diff > 0) movePrev();
      else moveNext();
    }
    startAutoPlay();
  });

  track.addEventListener('dragstart', e => e.preventDefault());

  // Initialize
  setupInfiniteCarousel();
  updateCarousel(true);
  startAutoPlay();
});


  // portfolio

  // Team Carousel - One In, One Out Animation


// faq start

  const accordionButtons = document.querySelectorAll(".accordion-button");
  const faqImage = document.querySelector(".image-container img");

  // Define your image paths for each FAQ
  const faqImages = {
   1: "./img/faq.webp",
    2: "./img/faq2.webp",
    3: "./img/faq3.webp",
    4: "./img/faq4.webp",
    5: "./img/faq5.webp",
    6: "./img/faq6.webp",
  };

  accordionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const faqNumber = index + 1; // get current FAQ index (1 to 6)

      // Change the right-side image
      faqImage.style.opacity = "0"; // fade out
      setTimeout(() => {
        faqImage.src = faqImages[faqNumber] || "./img/faq.png";
        faqImage.style.opacity = "1"; // fade in
      }, 300);
    });
  });
  
// end

// logo carousel 
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