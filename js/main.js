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

  /* ---------- Product video: embedded, always playing — sound is opt-in ---------- */
  const mainVideo = document.getElementById("mainVideo");
  const soundToggle = document.getElementById("soundToggle");

  soundToggle.addEventListener("click", () => {
    mainVideo.muted = !mainVideo.muted;
    soundToggle.classList.toggle("is-on", !mainVideo.muted);
    soundToggle.setAttribute("aria-label", mainVideo.muted ? "Sesi aç" : "Sesi kapat");
  });

  /* Autoplay both embedded videos only while on screen — saves resources
     and keeps them muted again once they scroll away, since browsers
     block unmuted autoplay outside a user gesture anyway. */
  const autoplayVideos = document.querySelectorAll(".hero-video-wrap video, #mainVideo");
  if ("IntersectionObserver" in window) {
    const videoIo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.play().catch(() => {});
        else entry.target.pause();
      });
    }, { threshold: 0.05 });
    autoplayVideos.forEach((v) => videoIo.observe(v));
  }
})();
