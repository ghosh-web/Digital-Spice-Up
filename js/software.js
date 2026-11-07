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

// technology start

// Get all tab items and tab panes
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

// end

// faq start

 document.addEventListener("DOMContentLoaded", () => {
  const faqImage = document.querySelector("#faqImage");
  const faqImages = {
        1: "./img/faq.webp",
    2: "./img/faq2.webp",
    3: "./img/faq3.webp",
    4: "./img/faq4.webp",
    5: "./img/faq5.webp",
    6: "./img/faq6.webp",
  };

  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item, index) => {
    const collapse = item.querySelector(".accordion-collapse");

    collapse.addEventListener("shown.bs.collapse", () => {
      const faqNumber = index + 1;
      faqImage.style.opacity = "0";
      setTimeout(() => {
        faqImage.src = faqImages[faqNumber] || "./img/faq.jpg";
        faqImage.style.opacity = "1";
      }, 200);
    });
  });
});



