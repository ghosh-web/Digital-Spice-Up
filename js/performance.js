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

// tab start

function showTab(index) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-buttons button');

  tabs.forEach((tab, i) => {
    tab.classList.remove('active');
    buttons[i].classList.remove('active');
  });

  tabs[index].classList.add('active');
  buttons[index].classList.add('active');
}

// catagory start

const subHeadings = [
  "Fashion & Apparel",
  "Jewellery & Luxury Goods",
  "Beauty & Personal Care",
  "Health and Wellness",
  "Home Decor",
  "Electronics & Home Appliances"
];

function typeText(element, text, speed = 60) {
  element.textContent = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

class InfiniteCarousel {
  constructor() {
    this.track = document.getElementById("carouselTrack");
    this.slides = Array.from(this.track.children);
    this.dotsContainer = document.getElementById("dotsContainer");
    this.subTitle = document.getElementById("dynamicSubTitle");

    this.slideWidth = this.slides[0].offsetWidth + 20;
    this.currentIndex = 0;
    this.position = 0;  // 🔥 MOVED TO CLASS

    this.track.innerHTML += this.track.innerHTML;

    this.init();
  }

  init() {
    this.createDots();
    typeText(this.subTitle, subHeadings[this.currentIndex]);
    this.startScroll();
  }

  createDots() {
    this.dotsContainer.innerHTML = "";
    for (let i = 0; i < subHeadings.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");

      dot.addEventListener("click", () => this.jumpToSlide(i));

      this.dotsContainer.appendChild(dot);
    }
    this.dots = Array.from(this.dotsContainer.children);
  }

  jumpToSlide(i) {
    this.currentIndex = i;

    // 🔥 Force scroll position to clicked slide
    this.position = this.currentIndex * this.slideWidth;

    this.track.style.transition = "none";
    this.track.style.transform = `translateX(-${this.position}px)`;

    typeText(this.subTitle, subHeadings[this.currentIndex]);
    this.updateDots();
  }

  startScroll() {
    const speed = 1.1;

    const animate = () => {
      this.position += speed;
      this.track.style.transform = `translateX(-${this.position}px)`;

      if (this.position >= this.slideWidth * this.slides.length) {
        this.position = 0;
      }

      const index =
        Math.floor(this.position / this.slideWidth) % subHeadings.length;

      if (index !== this.currentIndex) {
        this.currentIndex = index;
        typeText(this.subTitle, subHeadings[index]);
        this.updateDots();
      }

      requestAnimationFrame(animate);
    };

    animate();
  }

  updateDots() {
    this.dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === this.currentIndex)
    );
  }
}

document.addEventListener("DOMContentLoaded", () => new InfiniteCarousel());

//  circle start

 const circles = document.querySelectorAll(".circle");
 const contentItems = document.querySelectorAll(".content-item");
 let index = 0;

 function activateStep(i) {
   circles.forEach(c => c.classList.remove("active"));
   contentItems.forEach(c => c.classList.remove("active"));

   circles[i].classList.add("active");
   contentItems[i].classList.add("active");
 }

 activateStep(0);

 setInterval(() => {
   index = (index + 1) % circles.length;
   activateStep(index);
 }, 2000); 


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

// faq


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
    6: "./img/faq6.webp"
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