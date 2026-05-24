export const HOME_SECTIONS = [
  "welcome",
  "teachers",
  "studios",
  "enrolment",
  "attire",
];

const NAV_OFFSET_RATIO = 0.1;
const SNAP_DEBOUNCE_MS = 280;
const SNAP_COOLDOWN_MS = 900;

let skipSnapUntil = 0;
let snapScrollTimeout = null;
let snapScrollListener = null;

function getNavOffset() {
  return window.innerHeight * NAV_OFFSET_RATIO;
}

function getVisibleRatio(el) {
  if (!el) {
    return 0;
  }

  const navOffset = getNavOffset();
  const rect = el.getBoundingClientRect();
  const visibleTop = Math.max(rect.top, navOffset);
  const visibleBottom = Math.min(rect.bottom, window.innerHeight);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
  const viewportHeight = window.innerHeight - navOffset;

  return viewportHeight > 0 ? visibleHeight / viewportHeight : 0;
}

export function getMostVisibleSection() {
  let bestSection = HOME_SECTIONS[0];
  let bestRatio = 0;

  HOME_SECTIONS.forEach((sectionId) => {
    const ratio = getVisibleRatio(document.getElementById(sectionId));
    if (ratio > bestRatio) {
      bestRatio = ratio;
      bestSection = sectionId;
    }
  });

  return bestSection;
}

function isBetweenSections() {
  let visibleSections = 0;

  HOME_SECTIONS.forEach((sectionId) => {
    if (getVisibleRatio(document.getElementById(sectionId)) > 0.12) {
      visibleSections += 1;
    }
  });

  return visibleSections >= 2;
}

function isFooterInView() {
  const footer = document.querySelector("footer");
  if (!footer) {
    return false;
  }

  const rect = footer.getBoundingClientRect();
  return rect.top < window.innerHeight;
}

function shouldSnapToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) {
    return false;
  }

  if (isBetweenSections()) {
    return true;
  }

  const navOffset = getNavOffset();
  const rect = el.getBoundingClientRect();
  const topDiff = Math.abs(rect.top - navOffset);
  const visibleRatio = getVisibleRatio(el);

  if (topDiff > 50 && visibleRatio < 0.75) {
    return true;
  }

  const sectionIndex = HOME_SECTIONS.indexOf(sectionId);
  const nextSectionId = HOME_SECTIONS[sectionIndex + 1];

  if (nextSectionId) {
    const nextRatio = getVisibleRatio(document.getElementById(nextSectionId));
    if (nextRatio > 0.12 && topDiff > 50) {
      return true;
    }
  }

  return false;
}

export function scrollToSection(hash) {
  const id = hash.startsWith("#") ? hash : `#${hash}`;
  const el = document.querySelector(id);
  if (el) {
    skipSnapUntil = Date.now() + SNAP_COOLDOWN_MS;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function snapToMostVisibleSection() {
  if (Date.now() < skipSnapUntil) {
    return;
  }

  if (isFooterInView()) {
    return;
  }

  const sectionId = getMostVisibleSection();

  if (!shouldSnapToSection(sectionId)) {
    return;
  }

  const el = document.getElementById(sectionId);
  if (!el) {
    return;
  }

  skipSnapUntil = Date.now() + SNAP_COOLDOWN_MS;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function enableSmoothSectionSnap() {
  disableSmoothSectionSnap();
  document.documentElement.classList.add("home-scroll-snap");

  snapScrollListener = () => {
    if (Date.now() < skipSnapUntil) {
      return;
    }

    window.clearTimeout(snapScrollTimeout);
    snapScrollTimeout = window.setTimeout(() => {
      snapToMostVisibleSection();
    }, SNAP_DEBOUNCE_MS);
  };

  window.addEventListener("scroll", snapScrollListener, { passive: true });
}

export function disableSmoothSectionSnap() {
  document.documentElement.classList.remove("home-scroll-snap");

  if (snapScrollListener) {
    window.removeEventListener("scroll", snapScrollListener);
    snapScrollListener = null;
  }

  if (snapScrollTimeout) {
    window.clearTimeout(snapScrollTimeout);
    snapScrollTimeout = null;
  }
}

export function navigateToHomeSection(router, section) {
  const hash = `#${section}`;
  if (router.currentRoute.value.path === "/welcome") {
    router.replace({ path: "/welcome", hash }).then(() => {
      scrollToSection(hash);
    });
  } else {
    router.push({ path: "/welcome", hash });
  }
}
