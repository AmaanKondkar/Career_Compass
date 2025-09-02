// =================== Mobile Menu Toggle ===================
let isMenuOpen = false;

window.toggleMobileMenu = function() {
  const menu = document.getElementById("mobileMenu");
  const btn = document.getElementById("hamburgerBtn");
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    menu.classList.add("show");
    btn.textContent = "✖";
  } else {
    menu.classList.remove("show");
    btn.textContent = "☰";
  }
};

// ✅ Optional: Sticky navbar shadow on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

// =================== User Dropdown ===================
const userIcon = document.getElementById("userIcon");
const userPopup = document.getElementById("userPopup");
const userIconMobile = document.getElementById("userIconMobile");
const userPopupMobile = document.getElementById("userPopupMobile");

function closeAllPopups() {
  userPopup?.classList.remove("show");
  userPopupMobile?.classList.remove("show");
}

userIcon?.addEventListener("click", (e) => {
  e.stopPropagation();
  userPopup.classList.toggle("show");
});

userIconMobile?.addEventListener("click", (e) => {
  e.stopPropagation();
  userPopupMobile.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", () => {
  closeAllPopups();
});

// Prevent closing when clicking inside popup
userPopup?.addEventListener("click", (e) => e.stopPropagation());
userPopupMobile?.addEventListener("click", (e) => e.stopPropagation());
