/**
 * Digital Spice Up - Back to Top Functionality
 * Handles smooth scrolling and back-to-top button behaviors.
 */
(function () {
  'use strict';

  function initBackToTop() {
    const floatingBtn = document.getElementById('floatingBackToTop');
    const footer = document.querySelector('footer');
    const footerBottomBar = document.querySelector('.footer-bottom-bar');

    window.DSU_BACK_TO_TOP_LOADED = true;

    // Smooth scroll for all back-to-top triggers
    const triggers = document.querySelectorAll('.footer-back-to-top, .floating-back-to-top');
    triggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });

    // Handle floating button state
    if (floatingBtn) {
      let isFooterBottomVisible = false;

      // On desktop (> 991px), observe the footer bottom bar to seamlessly hide the floating button
      // when the static footer back-to-top arrow is in view.
      // On mobile/tablet (<= 991px), keep the floating button active because the footer is huge
      // and mobile users need quick access to scroll up from anywhere.
      const targetToObserve = footerBottomBar || footer;
      if (targetToObserve && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            isFooterBottomVisible = entry.isIntersecting;
            updateFloatingBtnState();
          });
        }, {
          root: null,
          threshold: 0.1
        });
        observer.observe(targetToObserve);
      }

      function updateFloatingBtnState() {
        const scrollDistance = window.pageYOffset || document.documentElement.scrollTop || 0;
        const isMobile = window.innerWidth <= 991;
        // On mobile frame sizes, show after 120px; on desktop show after 250px
        const threshold = isMobile ? 120 : 250;

        // On mobile, never hide due to footer so users always have a way back up
        const shouldHide = !isMobile && isFooterBottomVisible;

        if (scrollDistance > threshold && !shouldHide) {
          floatingBtn.classList.add('show');
        } else {
          floatingBtn.classList.remove('show');
        }
      }

      window.addEventListener('scroll', updateFloatingBtnState, { passive: true });
      window.addEventListener('resize', updateFloatingBtnState, { passive: true });
      updateFloatingBtnState();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackToTop);
  } else {
    initBackToTop();
  }
})();
