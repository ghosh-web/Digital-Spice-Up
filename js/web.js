
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

// END

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



// client testimonial

const reviewData = [

  {
    text: " We chose Digital Spice Up for our website and software needs—and it was the right choice. Their team provided strategic guidance, flawless design, and ongoing support that helped Krafted Tales scale effortlessly",
    author: "Krafted Tales",
    role: "Krishnendu Dasgupta"
  },

  {
    text: "Digital Spice Up is the best choice for brands that want quality and creativity. They built our website with great care, beautiful visuals, and fast performance. Our saree collections are now perfectly displayed, and customers love the experience.",
    author: "Barsha Shilpayan",
    role: "Rik Ghosh"
  },
  {
    text: "Professional team, smooth communication, and top-quality website development. Thanks to Digital Spice Up, our homestay now has a modern online presence that guests appreciate.",
    author: "Kanchenjunga Homestay",
    role: "Mr. Lepcha"
  },
  {
    text: "Digital Spice Up delivered exactly what we needed—an efficient website and successful SEO optimization. Their team is responsive, knowledgeable, and truly dedicated. We’re very happy with the outcome.",
    author: "Chakraborty Security Agency",
    role: "Arko Chakraborty"
  },
  {
    text: " Amazing work by Digital Spice Up! They handled our website and software development with top-notch quality. The final output is smooth, visually appealing, and works flawlessly. Great value for money and excellent customer service.",
    author: "Annoor",
    role: "A.R Imran"
  },
  {
    text: "Digital Spice Up has been a fantastic partner for zeroto81. They built our entire e-commerce website with modern features, fast loading speed, and a great shopping experience. Their performance marketing campaigns helped us reach the right audience and increase our revenue. Truly a skilled and dedicated team.",
    author: "Zeroto81",
    role: "Susanta Modak"
  },
  {
    text: "Fantastic work by Digital Spice Up! They understood our needs and built a great e-commerce platform for Banglar Misti. Their SEO marketing has boosted our brand reach and helped us grow steadily. We are fully satisfied with their service.",
    author: "Banglar Misti",
    role: "Mr. Kaushik"
  }
];

let activeIndex = 2;

function displayReview(idx) {
  const review = reviewData[idx];
  const quoteEl = document.getElementById('quote-text');
  const nameEl = document.getElementById('author-name');
  const posEl = document.getElementById('author-position');

  quoteEl.classList.remove('content-fade');
  nameEl.classList.remove('content-fade');
  posEl.classList.remove('content-fade');

  setTimeout(() => {
    quoteEl.textContent = review.text;
    nameEl.textContent = review.author;
    posEl.textContent = review.role;

    quoteEl.classList.add('content-fade');
    nameEl.classList.add('content-fade');
    posEl.classList.add('content-fade');
  }, 50);

  document.querySelectorAll('.avatar-img').forEach((img, i) => {
    img.classList.toggle('active-avatar', i === idx);
  });

  activeIndex = idx;
}

function moveToNext() {
  const nextIdx = (activeIndex + 1) % reviewData.length;
  displayReview(nextIdx);
}

function moveToPrev() {
  const prevIdx = (activeIndex - 1 + reviewData.length) % reviewData.length;
  displayReview(prevIdx);
}

document.querySelectorAll('.avatar-img').forEach((img, idx) => {
  img.addEventListener('click', () => {
    displayReview(idx);
  });
});

setInterval(moveToNext, 5000);

// end



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




