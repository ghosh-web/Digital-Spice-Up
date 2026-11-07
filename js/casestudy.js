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


 // carousel




// const caseSubtitles = [
//   "Krafted Tales",
//   "Barsha",
//   "Annoor",
//   "Kanchenjaunga",
//   "Patco",
//   "Banglar Misti",
//   "CSA",
//   "Shilpakala",
//   "Zero to 81"
// ];

// function typeText(el, text, speed = 50) {

//   el.textContent = "";
//   let i = 0;
//   const tick = () => {
//     if (i < text.length) { el.textContent += text[i++]; setTimeout(tick, speed); }
//   };
//   tick();
// }

// class CaseStudyCarousel {
//   constructor() {
//     this.track    = document.getElementById("csCarouselTrack");
//     this.dotsWrap = document.getElementById("csCarouselDots");
//     this.subTitle = document.getElementById("csDynamicSubTitle");

//     this.SLIDE_W  = 570;
//     this.GAP      = 18;
//     this.STEP     = this.SLIDE_W + this.GAP;
//     this.speed    = 0.5;

//     this.paused     = false;
//     this.currentIdx = 0;

//     this._build();
//   }

//   _build() {
//     this.origSlides = Array.from(this.track.children);
//     this.N = this.origSlides.length;

//     const origHTML = this.track.innerHTML;
//     this.track.innerHTML = origHTML + origHTML + origHTML;

//     this.pos = this.N * this.STEP;
//     this._applyPos();

//     for (let i = 0; i < this.N; i++) {
//       const dot = document.createElement("div");
//       dot.className = "dot" + (i === 0 ? " active" : "");
//       dot.addEventListener("click", () => this._jumpTo(i));
//       this.dotsWrap.appendChild(dot);
//     }
//     this.dots = Array.from(this.dotsWrap.children);

//     typeText(this.subTitle, caseSubtitles[0]);

//     const container = this.track.closest(".carousel-track-container");
//     container.addEventListener("mouseenter", () => { this.paused = true; });
//     container.addEventListener("mouseleave", () => { this.paused = false; });

//     this._loop();
//   }

//   _applyPos() {
//     this.track.style.transition = "none";
//     this.track.style.transform = `translateX(-${this.pos}px)`;
//   }

//   _loop() {
//     if (!this.paused) {
//       this.pos += this.speed;
//       const total = this.N * this.STEP;
//       if (this.pos >= total * 2) {
//         this.pos -= total;
//         this._applyPos();
//       }
//       this.track.style.transform = `translateX(-${this.pos}px)`;

//       const rawIdx = Math.round((this.pos % (this.N * this.STEP)) / this.STEP) % this.N;
//       if (rawIdx !== this.currentIdx) {
//         this.currentIdx = rawIdx;
//         this._updateDots();
//         typeText(this.subTitle, caseSubtitles[this.currentIdx] || "");
//       }
//     }
//     requestAnimationFrame(() => this._loop());
//   }

//   _jumpTo(i) {
//     const total = this.N * this.STEP;
//     this.pos = total + i * this.STEP;
//     this._applyPos();
//     this.currentIdx = i;
//     this._updateDots();
//     typeText(this.subTitle, caseSubtitles[i]);
//     this.paused = true;
//     setTimeout(() => { this.paused = false; }, 1200);
//   }

//   _updateDots() {
//     this.dots.forEach((d, i) => d.classList.toggle("active", i === this.currentIdx));
//   }
// }

// document.addEventListener("DOMContentLoaded", () => new CaseStudyCarousel());


  const cards = [
    { number:"No. 11", title:"ZERO TO 81",   subtitle:"", img:"./img/zeroto81.webp", link:"zeroto81.html" },
    { number:"No. 12", title:"CHAKRABORTY SECURITY AGENCY",    subtitle:"",       img:"./img/csa-security1 (1).webp", link:"csa.html" },
    { number:"No. 01", title:"BANGLAR MISTI",    subtitle:"",     img:"./img/banglarmisti1.webp", link:"banglarmisti.html" },
    { number:"No. 02", title:"SHILPAKALA CRAFT",   subtitle:"",    img:"./img/shilpakala1.webp", link:"shilpakala.html" },
    { number:"No. 03", title:"WARDDROBE",  subtitle:"",     img:"./img/warddrobe1.webp", link:"wardrrobe.html" },
    { number:"No. 04", title:"KRAFTED TALES",     subtitle:"",    img:"./img/kraftedtales1.webp", link:"kraftedtales.html" },
    { number:"No. 05", title:"SUCCESS MANTRA",   subtitle:"",     img:"./img/success-mantra.webp", link:"success.html" },
    { number:"No. 06", title:"KANCHENJUNGA HOMESTAY",  subtitle:"",   img:"./img/kanchenjaunga1.webp", link:"kanchenjaunga.html" },
    { number:"No. 07", title:"ANNOOR",    subtitle:"",    img:"./img/annoor1.webp", link:"annoor.html" },
    { number:"No. 08", title:"PATCO TECH",     subtitle:"",      img:"./img/patco1.webp", link:"patco.html" },
        { number:"No. 09", title:"SREEBANGI AUTOMATION",     subtitle:"",      img:"./img/sautomation.webp", link:"sreebangi.html" },
             { number:"No. 10", title:"GO SERVICE",     subtitle:"",      img:"./img/GO-SERVICE-B2B.webp", link:"goservice.html" },
  ];

  let current = 2;
  const total = cards.length;
  const stage = document.getElementById('stage');
  const dotsEl = document.getElementById('dots');

 
  const cardEls = cards.map((c, i) => {
    const div = document.createElement('div');
    div.className = 'card-item';
    div.innerHTML = `
      <div class="card-bg" style="background-image:url('${c.img}')"></div>
      <div class="card-overlay"></div>
      <div class="card-content">
        <span class="card-number">${c.number}</span>
        <h2 class="card-title">${c.title}</h2>
        <p class="card-subtitle">${c.subtitle}</p>
        <a class="card-link-btn" href="${c.link}" target="_blank" rel="noopener">Visit &rarr;</a>
      </div>`;
    div.addEventListener('click', () => {
      if (!div.classList.contains('active')) {
        const diff = ((i - current) % total + total) % total;
        go(diff > total / 2 ? -1 : 1);
      }
    });

    if (stage) {
     stage.appendChild(div); 
    }
    return div;
  });

 
  const dotEls = cards.map((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot';
    d.setAttribute('aria-label', `Go to card ${i + 1}`);
    d.addEventListener('click', () => goTo(i));
    dotsEl?.appendChild(d);
    return d;
  });

  
  function render() {
    cardEls.forEach((el, i) => {
      const diff = ((i - current) % total + total) % total;
      const signed = diff > total / 2 ? diff - total : diff;
      el.className = 'card-item';
      if      (signed ===  0) el.classList.add('active');
      else if (signed ===  1) el.classList.add('pos-1');
      else if (signed === -1) el.classList.add('neg-1');
      else if (signed ===  2) el.classList.add('pos-2');
      else if (signed === -2) el.classList.add('neg-2');
      else if (signed ===  3) el.classList.add('pos-3');
      else if (signed === -3) el.classList.add('neg-3');
      else if (signed  >  3)  el.classList.add('pos-4');
      else                    el.classList.add('neg-4');
    });
    dotEls.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function go(dir) {
    current = ((current + dir) % total + total) % total;
    render();
  }
  function goTo(i) { current = i; render(); }

  document.getElementById('nextBtn')?.addEventListener('click', () => go(1));
  document.getElementById('prevBtn')?.addEventListener('click', () => go(-1));

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft')  go(-1);
  });

  let touchX = 0;
  stage?.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  stage?.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  }, { passive: true });

  render();

// end

// circle start

const scircles = document.querySelectorAll(".scircle");
const contentItems = document.querySelectorAll(".content");
console.log(scircles.length);

let index = 0;

function activateStep(i) {
  scircles.forEach(c => c.classList.remove("active"));
  contentItems.forEach(c => c.classList.remove("active"));
// console.log(scircles[i])
  scircles?.[i]?.classList.add("active");
  contentItems[i]?.classList.add("active");
}

activateStep(0);

setInterval(() => {
  index = (index + 1) % scircles.length;
    activateStep(index);
}, 2000);
//  circle end


// logo start
  
// logo carousel
 document.addEventListener("DOMContentLoaded", function () {
      const wrapper = document.querySelector(".logo-wrapper");
      const track = document.querySelector(".logo-track");

      if (!track) return;

      
      const clone = track.cloneNode(true);
      wrapper.appendChild(clone);

      let scrollPosition = 0;
      let isPaused = false;
      const scrollSpeed = 1;

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


// annor impact

const items = document.querySelectorAll(".aimpact-left, .aimpact-right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {

      if (entry.isIntersecting) {
        // ADD animation
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 300);

      } else {
        // REMOVE animation (so it can replay)
        entry.target.classList.remove("show");
      }

    });
  },
  {
    threshold: 0.3
  }
);

items.forEach(item => observer.observe(item));


// annoor impact end

// patco tab start

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

// annoor impact end

// annoor software start

// service
const serviceItems = document.querySelectorAll('.service-item');
const serviceImage = document.querySelector('.service-image img');


function updateImage(item) {
  serviceImage.style.opacity = 0;

  setTimeout(() => {
    serviceImage.src = item.dataset.image;
    serviceImage.style.opacity = 1;
  }, 200);
}


serviceItems.forEach(item => {
  item.addEventListener('mouseenter', () => {

  
    serviceItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');

    
    updateImage(item);

   
    const title = document.querySelector('.service-details h2');
    const paragraphs = document.querySelectorAll('.service-details p');

    title.innerHTML = `${item.dataset.title}<span> ${item.dataset.span}</span>`;

    paragraphs[0].textContent = item.dataset.p1;
    paragraphs[1].textContent = item.dataset.p2;
    paragraphs[2].textContent = item.dataset.p3;
  });
});


// annoor software end

// Floating back to top button
document.addEventListener("DOMContentLoaded", function () {
  // If dedicated back-to-top.js is loaded, it manages the floating button logic
  if (window.DSU_BACK_TO_TOP_LOADED) return;

  let backToTopBtn = document.getElementById("floatingBackToTop");
  if (!backToTopBtn) {
    backToTopBtn = document.createElement("a");
    backToTopBtn.href = "#";
    backToTopBtn.id = "floatingBackToTop";
    backToTopBtn.className = "floating-back-to-top";
    backToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
  }

  window.addEventListener("scroll", () => {
    const isMobile = window.innerWidth <= 991;
    const threshold = isMobile ? 120 : 250;
    if (window.scrollY > threshold) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});