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
}, 3000);

// loader end


// service
const serviceItems = document.querySelectorAll('.service-item');
const serviceImage = document.querySelector('.service-image img');

// Function to update image
function updateImage(item) {
  serviceImage.style.opacity = 0;

  setTimeout(() => {
    serviceImage.src = item.dataset.image;
    serviceImage.style.opacity = 1;
  }, 200);
}

// Hover on service item -> update text AND image
serviceItems.forEach(item => {
  item.addEventListener('mouseenter', () => {

    // Make active
    serviceItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');

    // Update image
    updateImage(item);

    // Update center text
    const title = document.querySelector('.service-details h2');
    const paragraphs = document.querySelectorAll('.service-details p');

    title.innerHTML = `${item.dataset.title}<span> ${item.dataset.span}</span>`;

    paragraphs[0].textContent = item.dataset.p1;
    paragraphs[1].textContent = item.dataset.p2;
    paragraphs[2].textContent = item.dataset.p3;
  });
});
// portfolio

// Team Carousel - One In, One Out Animation
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!track || !prevBtn || !nextBtn) return;

  const originalCards = Array.from(track.children);
  const totalCards = originalCards.length;

  let currentIndex = totalCards;
  let isAnimating = false;
  let autoPlayInterval;

  // Clone cards for infinite scrolling
  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.classList.add("clone");
    track.appendChild(clone);
  });

  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.classList.add("clone");
    track.insertBefore(clone, track.firstChild);
  });

  const cloneCount = totalCards;

  function getCardWidth() {
    const card = track.children[0];

    if (!card) return 0;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;

    return cardWidth + gap;
  }

  function updateCarousel(instant = false) {
    const cardWidth = getCardWidth();

    track.style.transition = instant
      ? "none"
      : "transform 0.5s ease-in-out";

    track.style.transform =
      `translateX(-${currentIndex * cardWidth}px)`;
  }

  function moveNext() {
    if (isAnimating) return;

    isAnimating = true;
    currentIndex++;

    updateCarousel();

    setTimeout(() => {
      if (currentIndex >= cloneCount + totalCards) {
        currentIndex = cloneCount;
        updateCarousel(true);
      }

      isAnimating = false;
    }, 500);
  }

  function movePrev() {
    if (isAnimating) return;

    isAnimating = true;
    currentIndex--;

    updateCarousel();

    setTimeout(() => {
      if (currentIndex < cloneCount) {
        currentIndex = cloneCount + totalCards - 1;
        updateCarousel(true);
      }

      isAnimating = false;
    }, 500);
  }

  // Normal button direction
  nextBtn.addEventListener("click", () => {
    moveNext();
    resetAutoPlay();
  });

  prevBtn.addEventListener("click", () => {
    movePrev();
    resetAutoPlay();
  });

  // Auto play
  function startAutoPlay() {
    stopAutoPlay();

    autoPlayInterval = setInterval(() => {
      moveNext();
    }, 3000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  track.addEventListener("mouseenter", stopAutoPlay);
  track.addEventListener("mouseleave", startAutoPlay);

  // Touch swipe
  let touchStartX = 0;

  track.addEventListener(
    "touchstart",
    e => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    e => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          moveNext();
        } else {
          movePrev();
        }
      }

      startAutoPlay();
    },
    { passive: true }
  );

  // Mouse drag
  let isDragging = false;
  let startX = 0;

  track.addEventListener("mousedown", e => {
    isDragging = true;
    startX = e.pageX;

    track.style.cursor = "grabbing";
    stopAutoPlay();
  });

  document.addEventListener("mousemove", e => {
    if (!isDragging) return;

    e.preventDefault();
  });

  document.addEventListener("mouseup", e => {
    if (!isDragging) return;

    isDragging = false;

    const diff = startX - e.pageX;

    track.style.cursor = "grab";

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        moveNext();
      } else {
        movePrev();
      }
    }

    startAutoPlay();
  });

  track.addEventListener("dragstart", e => {
    e.preventDefault();
  });

  // Responsive resize
  let resizeTimer;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      updateCarousel(true);
    }, 200);
  });

  // Initial position
  updateCarousel(true);
  startAutoPlay();
});


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