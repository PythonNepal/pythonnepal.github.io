/**
 * Python Nepal Website - Main JavaScript
 * Handles navigation, theme switching, search, and interactions
 */

document.addEventListener("DOMContentLoaded", async () => {
  // Load shared components first
  await loadComponents();

  // Initialize all modules
  initNavigation();
  initThemeToggle();
  initBackToTop();
  initSearch();
  initAnimations();
  updateCurrentYear();
});

/**
 * Determine the base path based on current page location
 */
function getBasePath() {
  const path = window.location.pathname;
  // If we're in the pages folder, go up one level
  if (path.includes("/pages/")) {
    return "../";
  }
  return "./";
}

/**
 * Load shared header and footer components
 */
async function loadComponents() {
  const basePath = getBasePath();
  const headerContainer = document.getElementById("header-container");
  const footerContainer = document.getElementById("footer-container");

  try {
    // Load header
    if (headerContainer) {
      const headerResponse = await fetch(`${basePath}components/header.html`);
      if (headerResponse.ok) {
        const headerHtml = await headerResponse.text();
        headerContainer.innerHTML = headerHtml;
        updateHeaderLinks(basePath);
      }
    }

    // Load footer
    if (footerContainer) {
      const footerResponse = await fetch(`${basePath}components/footer.html`);
      if (footerResponse.ok) {
        const footerHtml = await footerResponse.text();
        footerContainer.innerHTML = footerHtml;
        updateFooterLinks(basePath);
      }
    }
  } catch (error) {
    console.error("Error loading components:", error);
  }
}

/**
 * Update header links based on current page location
 */
function updateHeaderLinks(basePath) {
  const isInPages = basePath === "../";
  const pagesPrefix = isInPages ? "" : "pages/";

  // Update logo
  const logoLink = document.getElementById("nav-logo-link");
  const logoImg = document.getElementById("nav-logo-img");
  if (logoLink) logoLink.href = `${basePath}index.html`;
  if (logoImg) logoImg.src = `${basePath}images/logo/python-ugn-white.png`;

  // Update nav links
  const navLinks = document.querySelectorAll(".nav-link[data-page]");
  navLinks.forEach((link) => {
    const page = link.getAttribute("data-page");
    if (page === "index") {
      link.href = `${basePath}index.html`;
    } else {
      link.href = `${basePath}${pagesPrefix}${page}.html`;
    }
  });
}

/**
 * Update footer links based on current page location
 */
function updateFooterLinks(basePath) {
  const isInPages = basePath === "../";
  const pagesPrefix = isInPages ? "" : "pages/";

  // Update footer logo
  const footerLogoLink = document.getElementById("footer-logo-link");
  const footerLogoImg = document.getElementById("footer-logo-img");
  if (footerLogoLink) footerLogoLink.href = `${basePath}index.html`;
  if (footerLogoImg)
    footerLogoImg.src = `${basePath}images/logo/python-ugn-white.png`;

  // Update all links with data-page attribute
  const pageLinks = document.querySelectorAll("footer a[data-page]");
  pageLinks.forEach((link) => {
    const page = link.getAttribute("data-page");
    if (page === "index") {
      link.href = `${basePath}index.html`;
    } else {
      link.href = `${basePath}${pagesPrefix}${page}.html`;
    }
  });
}

/**
 * Navigation functionality
 */
function initNavigation() {
  const navbar = document.querySelector(".navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      document.body.style.overflow = navMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // Navbar scroll effect
  if (navbar) {
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      lastScroll = currentScroll;
    });
  }

  // Set active nav link based on current page
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (
      currentPath.endsWith(href) ||
      (currentPath.endsWith("/") && href === "index.html") ||
      currentPath.includes(href.replace(".html", ""))
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/**
 * Theme toggle (Dark/Light mode)
 */
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
  } else if (systemPrefersDark) {
    html.setAttribute("data-theme", "dark");
    updateThemeIcon("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light";
        html.setAttribute("data-theme", newTheme);
        updateThemeIcon(newTheme);
      }
    });
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const icon = themeToggle.querySelector("i");
    if (icon) {
      icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }
  }
}

/**
 * Back to top button
 */
function initBackToTop() {
  const backToTop = document.getElementById("back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

/**
 * Search functionality
 */
function initSearch() {
  const searchInputs = document.querySelectorAll(".search-box input");

  searchInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      const container = input.closest(".page-content") || document;

      // Determine what type of content to search
      const developerCards = container.querySelectorAll(".developer-card");
      const companyCards = container.querySelectorAll(".company-card");
      const meetupDetails = container.querySelectorAll(".meetup-detail");
      const resourceSections = container.querySelectorAll(".resources-section");
      const videoCards = container.querySelectorAll(".video-card");

      if (developerCards.length > 0) {
        filterCards(developerCards, searchTerm, ["h3"]);
      }

      if (companyCards.length > 0) {
        filterCards(companyCards, searchTerm, ["h3", ".company-info"]);
      }

      if (meetupDetails.length > 0) {
        filterCards(meetupDetails, searchTerm, [
          "h2",
          ".talk-item h4",
          ".talk-item p",
        ]);
      }

      if (resourceSections.length > 0) {
        filterResourceSections(resourceSections, searchTerm);
      }

      if (videoCards.length > 0) {
        filterCards(videoCards, searchTerm, ["h3", "p"]);
      }
    });
  });
}

function filterCards(cards, searchTerm, selectors) {
  cards.forEach((card) => {
    let text = "";
    selectors.forEach((selector) => {
      const elements = card.querySelectorAll(selector);
      elements.forEach((el) => {
        text += " " + el.textContent.toLowerCase();
      });
    });

    if (searchTerm === "" || text.includes(searchTerm)) {
      card.style.display = "";
      card.style.opacity = "1";
    } else {
      card.style.display = "none";
      card.style.opacity = "0";
    }
  });
}

function filterResourceSections(sections, searchTerm) {
  sections.forEach((section) => {
    const items = section.querySelectorAll(".resource-item");
    let hasVisibleItems = false;

    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (searchTerm === "" || text.includes(searchTerm)) {
        item.style.display = "";
        hasVisibleItems = true;
      } else {
        item.style.display = "none";
      }
    });

    // Show/hide entire section based on whether it has visible items
    if (searchTerm === "" || hasVisibleItems) {
      section.style.display = "";
    } else {
      section.style.display = "none";
    }
  });
}

/**
 * Scroll animations using Intersection Observer
 */
function initAnimations() {
  const animatedElements = document.querySelectorAll(
    ".feature-card, .meetup-card, .platform-card, .developer-card, .company-card, .video-card, .meetup-detail, .resources-section"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    animatedElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(el);
    });
  }
}

/**
 * Update copyright year
 */
function updateCurrentYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

/**
 * Lazy loading for images (if needed)
 */
if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  document.body.appendChild(script);
}
