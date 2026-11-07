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


// Banner background images configuration
const bannerImages = [
  './img/banner6.webp',
  './img/banner8.webp',
  './img/banner7.webp',
  './img/banner5.webp',
  './img/banner4.webp',
  './img/banner11.webp',
  './img/banner12.webp',

];
document.addEventListener('DOMContentLoaded', function () {
  const banners = document.querySelectorAll('.banner');

  banners.forEach((banner, index) => {
    if (bannerImages[index]) {
      banner.style.backgroundImage = `url('${bannerImages[index]}')`;
    }
  });
});

let currentBanner = 0;
const banners = document.querySelectorAll('.banner');

function showNextBanner() {
  banners[currentBanner].classList.remove('active');
  currentBanner = (currentBanner + 1) % banners.length;
  banners[currentBanner].classList.add('active');
}
setInterval(showNextBanner, 6000);

function scrollToSection() {
  const heroSection = document.querySelector('.hero');
  const nextSection = heroSection.nextElementSibling;
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}
// end

// scroll
function scrollToSection() {
  document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' });
}
// end

// about

document.addEventListener("DOMContentLoaded", () => {
  // Selectors — adjust only if your classes are different
  const centerImage = document.querySelector(".center-image");
  const rotatingWrapper = document.querySelector(".rotating-wrapper");
  const rotatingImgs = document.querySelectorAll(".rotating-wrapper .label img");

  if (!centerImage || !rotatingWrapper) {
    console.warn("Rotation pause script: required elements not found.", { centerImage, rotatingWrapper });
    return;
  }

  // Utility to set play state on all relevant elements
  function setPaused(paused) {
    const state = paused ? "paused" : "running";
    rotatingWrapper.style.animationPlayState = state;
    rotatingImgs.forEach(img => img.style.animationPlayState = state);
    // Log to console for debugging
    console.log("rotation play state ->", state);
  }

  // Pause when mouse enters the center image; resume when it leaves
  centerImage.addEventListener("mouseenter", () => setPaused(true));
  centerImage.addEventListener("mouseleave", () => setPaused(false));

  // Optional: also pause when hovering anywhere over the circle container
  const circleContainer = document.querySelector(".circle-container");
  if (circleContainer) {
    circleContainer.addEventListener("mouseenter", () => setPaused(true));
    circleContainer.addEventListener("mouseleave", () => setPaused(false));
  }

  // Touch support: on touchstart toggle pause, on touchend resume
  centerImage.addEventListener("touchstart", (e) => {
    setPaused(true);
    // prevent double triggering of mouse events in some browsers
    e.preventDefault();
  }, { passive: false });
  centerImage.addEventListener("touchend", () => setPaused(false));
});
// opacity low 

const sections = document.querySelectorAll('.service');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  sections.forEach((section, index) => {
    const start = vh * index;
    const end = vh * (index + 1);
    const progress = (scrollY - start) / (end - start);

    if (scrollY >= start && scrollY < end) {
      section.style.transform = `translateY(${progress * -50}px)`;
      section.style.opacity = 1;
    } else if (scrollY < start) {
      section.style.opacity = 0;
    } else {
      section.style.opacity = 1;
      section.style.transform = 'translateY(-50px)';
    }
  });
});

// end

//  why choose us

// document.querySelectorAll('.why-choose-us .feature-btn').forEach(btn => {
//   btn.addEventListener('click', function () {

//     const feature = this.querySelector('span').textContent;
//     console.log('Selected feature:', feature);

//     // Change the left-side heading
//     document.getElementById('featureHead').textContent = this.dataset.head;

//     // Change the left-side tagline
//     document.getElementById('tagline').textContent = this.dataset.tagline;

//     // Button click animation
//     this.style.transform = 'translateX(-15px) scale(0.95)';

//     setTimeout(() => {
//       this.style.transform = '';
//     }, 300);
//   });
// });


// window.addEventListener("load", () => {
//   const wrapper = document.getElementById("swiperWrapper");

//   // First 10 original buttons
//   const original = Array.from(wrapper.children).slice(0, 10);

//   let totalHeight = 0;

//   original.forEach(btn => {
//     totalHeight += btn.offsetHeight + 20; // 20px margin-bottom
//   });

//   wrapper.style.setProperty("--full-height", totalHeight + "px");
//   wrapper.style.setProperty("--scroll-speed", "18s");
// });
// // end


// Half-circle wheel: buttons ride a circle whose centre sits on the right edge,
// so only the left half is visible. It spins slowly; clicking a button brings it to the front.
(function () {
  const wheel = document.getElementById('whyWheel');
  if (!wheel) return;

  const ring = wheel.querySelector('.why-wheel-ring');
  const hub = wheel.querySelector('.why-wheel-hub');
  const buttons = Array.from(wheel.querySelectorAll('.feature-btn'));
  const featureHead = document.getElementById('featureHead');
  const tagline = document.getElementById('tagline');

  const step = (Math.PI * 2) / buttons.length;
  const speed = 0.2; // radians per second
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let rot = 0;
  let cx = 0, cy = 0, radius = 0;
  let hovering = false, visible = true, holdUntil = 0, tween = null;
  let lastTime = performance.now();

  function layout() {
    const w = wheel.clientWidth;
    const h = wheel.clientHeight;
    const maxBtn = Math.max(...buttons.map(b => b.offsetWidth));
    cy = h / 2;
    radius = Math.max(110, Math.min(h / 2 - 30, w - maxBtn / 2 - 10));
    // Centre the visible half (arc + buttons) in the column and clip everything right of the hub centre
    cx = Math.min(w, (w + radius + maxBtn / 2) / 2);
    wheel.style.clipPath = `inset(0 ${w - cx}px 0 0)`;

    ring.style.width = ring.style.height = radius * 2 + 'px';
    ring.style.left = cx - radius + 'px';
    ring.style.top = cy - radius + 'px';
    hub.style.left = cx + 'px';
    hub.style.top = cy + 'px';
    render();
  }

  function render() {
    buttons.forEach((btn, i) => {
      const angle = Math.PI + i * step + rot;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      const front = -Math.cos(angle); // 1 = leftmost point, 0 = top/bottom, <0 = hidden half
      const opacity = Math.min(1, Math.max(0, (front - 0.15) * 2));
      const scale = 0.7 + 0.3 * Math.max(0, front);

      btn.style.transform =
        `translate(${x - btn.offsetWidth / 2}px, ${y - btn.offsetHeight / 2}px) scale(${scale})`;
      btn.style.opacity = opacity;
      btn.style.zIndex = Math.round(100 + front * 100);
      btn.style.pointerEvents = opacity < 0.2 ? 'none' : 'auto';
      btn.tabIndex = opacity < 0.2 ? -1 : 0;
    });
  }

  function tick(now) {
    const dt = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;

    if (tween) {
      const t = Math.min(1, (now - tween.start) / tween.duration);
      const eased = 1 - Math.pow(1 - t, 3);
      rot = tween.from + (tween.to - tween.from) * eased;
      if (t === 1) tween = null;
    } else if (!reduceMotion && !hovering && now > holdUntil) {
      rot += speed * dt;
    }

    if (visible) render();
    requestAnimationFrame(tick);
  }

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', function () {
      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      featureHead.textContent = this.dataset.head;
      tagline.textContent = this.dataset.tagline.replace(/\s+/g, ' ').trim();

      // Rotate the shortest way so this button lands at the front (leftmost point)
      let delta = (-i * step - rot) % (Math.PI * 2);
      if (delta > Math.PI) delta -= Math.PI * 2;
      if (delta < -Math.PI) delta += Math.PI * 2;
      tween = { from: rot, to: rot + delta, start: performance.now(), duration: 700 };
      holdUntil = performance.now() + 5000;
    });
  });

  wheel.addEventListener('mouseenter', () => { hovering = true; });
  wheel.addEventListener('mouseleave', () => { hovering = false; });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
    }).observe(wheel);
  }

  window.addEventListener('resize', layout);
  window.addEventListener('load', layout);
  layout();
  requestAnimationFrame(tick);
})();
// end

//  project  

// Simple and working project tabs
document.addEventListener('DOMContentLoaded', function () {
  // Get all tab buttons and content panes
  const tabButtons = document.querySelectorAll('#nav-tab .nav-link');
  const tabContents = document.querySelectorAll('#nav-tabContent .tab-pane');

  // Function to hide all tabs
  function hideAllTabs() {
    tabContents.forEach(function (content) {
      content.classList.remove('show', 'active');
    });

    tabButtons.forEach(function (button) {
      button.classList.remove('active');
      button.setAttribute('aria-selected', 'false');
    });
  }

  // Function to show specific tab
  function showTab(targetId, clickedButton) {
    // Hide all first
    hideAllTabs();

    // Show clicked tab content
    const targetContent = document.querySelector(targetId);
    if (targetContent) {
      targetContent.classList.add('active', 'show');
    }

    // Mark button as active
    clickedButton.classList.add('active');
    clickedButton.setAttribute('aria-selected', 'true');
  }

  // Add click event to each tab button
  tabButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      showTab(targetId, this);
    });
  });

  // Show first tab by default
  if (tabButtons.length > 0) {
    const firstButton = tabButtons[0];
    const firstTarget = firstButton.getAttribute('href');
    showTab(firstTarget, firstButton);
  }
});


// project-col-three

  // Add hover event listeners to all project cards

    document.addEventListener('DOMContentLoaded', function() {
      const projectCards = document.querySelectorAll('.project-col-three');
      
      projectCards.forEach(card => {
        const img = card.querySelector('img');
        const images = JSON.parse(img.getAttribute('data-images'));
        const originalSrc = img.src;
        
        // Store original image
        img.dataset.originalSrc = originalSrc;
        
        // On mouse enter - show second image
        card.addEventListener('mouseenter', function() {
          if (images.length > 1) {
            img.style.opacity = '0';
            setTimeout(() => {
              img.src = images[1];
              img.style.opacity = '1';
            }, 100);
          }
        });
        
        // On mouse leave - return to original image
        card.addEventListener('mouseleave', function() {
          img.style.opacity = '0';
          setTimeout(() => {
            img.src = images[0];
            img.style.opacity = '1';
          }, 100);
        });
      });
    });
    
// end

       $("#contactForm").on("submit", function(e) {
        e.preventDefault();
    
        $.ajax({
            url: "contact-submit.php",
            type: "POST",
            data: $(this).serialize(),
            beforeSend: function() {
                $("#responseMsg").html("Sending...");
            },
            success: function(response) {
                $("#responseMsg").html(response);
                $("#contactForm")[0].reset();
            },
            error: function() {
                $("#responseMsg").html("Something went wrong!");
            }
        });
    }); 


