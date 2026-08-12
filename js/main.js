(() => {
  "use strict";

  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById("nav");
  const backToTop = document.getElementById("backToTop");

  const onScroll = () => {
    const scrolled = window.scrollY > 40;
    nav.classList.toggle("scrolled", scrolled);
    backToTop.classList.toggle("visible", window.scrollY > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Mobile menu ---------- */
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  navToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.remove("open"));
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Product video: click-to-play with sound ---------- */
  const videoFrame = document.getElementById("videoFrame");
  const mainVideo = document.getElementById("mainVideo");
  const playBtn = document.getElementById("playBtn");

  const playMainVideo = () => {
    videoFrame.classList.add("is-playing");
    mainVideo.muted = false;
    mainVideo.play().catch(() => {
      mainVideo.muted = true;
      mainVideo.play();
    });
  };

  playBtn.addEventListener("click", playMainVideo);
  mainVideo.addEventListener("click", () => {
    if (mainVideo.paused) {
      mainVideo.play();
      videoFrame.classList.add("is-playing");
    } else {
      mainVideo.pause();
      videoFrame.classList.remove("is-playing");
    }
  });
  mainVideo.addEventListener("ended", () => {
    videoFrame.classList.remove("is-playing");
  });

  /* Pause the hero background loop + product video when off-screen to save resources */
  const heroVideo = document.querySelector(".hero-video-wrap video");
  if ("IntersectionObserver" in window && heroVideo) {
    const heroIo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) heroVideo.play().catch(() => {});
        else heroVideo.pause();
      });
    }, { threshold: 0.05 });
    heroIo.observe(heroVideo);
  }
})();
