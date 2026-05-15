export function toggleMenu(): void {
  document.querySelector(".sideMenuBlur")?.classList.toggle("open");
}

export function initMenu(): void {
  const sideMenuBlur = document.querySelector(".sideMenuBlur") as HTMLElement | null;
  const header = document.querySelector(".header") as HTMLElement | null;

  function handleResize(): void {
    if (!sideMenuBlur) return;
    if (window.innerWidth > 900) {
      sideMenuBlur.classList.remove("open");
    }
  }

  function updateSideMenuPosition(): void {
    if (!header || !sideMenuBlur) return;
    const headerHeight = header.offsetHeight;
    sideMenuBlur.style.top = `${headerHeight + 22}px`;
    sideMenuBlur.style.height = `calc(100% - ${headerHeight + 42}px)`;
  }

  window.addEventListener("resize", () => {
    handleResize();
    updateSideMenuPosition();
  });
  updateSideMenuPosition();

  const hamburger = document.querySelector(".menu");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }
}
