const header = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const globalNav = document.getElementById("globalNav");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("is-open");
  globalNav.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
});

globalNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("is-open");
    globalNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});
// ===== Hero Slider =====

const slides = document.querySelectorAll(".hero-slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");

  current++;
  if (current >= slides.length) {
    current = 0;
  }

  slides[current].classList.add("active");
}, 5000);

// ===== Reservation sheet =====
const reserveTrigger = document.getElementById("reserveTrigger");
const reserveDialog = document.getElementById("reserveDialog");

if (reserveTrigger && reserveDialog) {
  const reserveSheet = reserveDialog.querySelector(".reserve-sheet");
  const reserveCloseControls = reserveDialog.querySelectorAll("[data-reserve-close]");

  function openReserveDialog() {
    reserveDialog.classList.add("is-open");
    reserveDialog.setAttribute("aria-hidden", "false");
    reserveTrigger.setAttribute("aria-expanded", "true");
    document.body.classList.add("reserve-open");
    reserveSheet.focus();
  }

  function closeReserveDialog() {
    if (!reserveDialog.classList.contains("is-open")) return;

    reserveDialog.classList.remove("is-open");
    reserveDialog.setAttribute("aria-hidden", "true");
    reserveTrigger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("reserve-open");
    reserveTrigger.focus();
  }

  reserveTrigger.addEventListener("click", openReserveDialog);
  reserveCloseControls.forEach((control) => {
    control.addEventListener("click", closeReserveDialog);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && reserveDialog.classList.contains("is-open")) {
      closeReserveDialog();
    }
  });
}
