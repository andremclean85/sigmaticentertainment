/* ==========================================
   SIGMATIC ENTERTAINMENT
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* Smooth scrolling */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  /* Navbar scroll effect */
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
  });

  /* Promotional banner rotation */
  const promoTitle = document.querySelector(".promo h2");
  const promoText = document.querySelector(".promo p");

  const promos = [
    {
      title: "Now Promoting",
      text: "Summer Dancehall Mixtape — Out Now on YouTube",
    },
    {
      title: "Live Event",
      text: "SIG Thursdays — Premium Live DJ Experience",
    },
    {
      title: "Book Now",
      text: "Available for parties, launches, corporate events, and private bookings",
    },
    {
      title: "New Mixes",
      text: "Fresh dancehall, reggae, soca, afrobeat, hip-hop, and R&B mixes",
    },
  ];

  let promoIndex = 0;

  if (promoTitle && promoText) {
    setInterval(() => {
      promoIndex = (promoIndex + 1) % promos.length;

      promoTitle.style.opacity = "0";
      promoText.style.opacity = "0";

      setTimeout(() => {
        promoTitle.textContent = promos[promoIndex].title;
        promoText.textContent = promos[promoIndex].text;

        promoTitle.style.opacity = "1";
        promoText.style.opacity = "1";
      }, 300);
    }, 4500);
  }

  /* Fade-in animation on scroll */
  const fadeElements = document.querySelectorAll(
    ".section, .promo, .card, .gallery div, iframe"
  );

  const observerOptions = {
    threshold: 0.15,
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, observerOptions);

  fadeElements.forEach((element) => {
    element.classList.add("fade");
    fadeObserver.observe(element);
  });

  /* Booking form */
  const bookingForm = document.querySelector("form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      alert(
        "Thank you for your booking request. Sigmatic Entertainment will contact you soon."
      );

      bookingForm.reset();
    });
  }

  /* Back to top button */
  const backToTop = document.createElement("button");
  backToTop.innerText = "↑";
  backToTop.className = "backToTop";
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  /* Footer current year */
  const footer = document.querySelector("footer");

  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Sigmatic Entertainment. All Rights Reserved.`;
  }
});