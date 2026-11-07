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

  // ui card start

const cards = document.querySelectorAll('.uiux-card');
const middleImage = document.getElementById('middleImage');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const newImg = card.getAttribute('data-img');
    if(newImg) {
      middleImage.src = newImg; 
    }
  });
});

// ui card end



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

