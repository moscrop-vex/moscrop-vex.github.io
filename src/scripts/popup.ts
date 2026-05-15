interface PopupData {
  name: string;
  role?: string;
  description?: string;
  image: string;
}

export function initPopup(
  popupSelector: string,
  cardSelector: string
): void {
  const popup = document.querySelector(popupSelector) as HTMLElement | null;
  if (!popup) return;

  const titleEl = popup.querySelector(
    '[data-popup="title"]'
  ) as HTMLElement | null;
  const roleEl = popup.querySelector(
    '[data-popup="role"]'
  ) as HTMLElement | null;
  const descEl = popup.querySelector(
    '[data-popup="description"]'
  ) as HTMLElement | null;
  const imgEl = popup.querySelector(
    '[data-popup="image"]'
  ) as HTMLImageElement | null;
  const closeBtn = popup.querySelector(".close") as HTMLElement | null;

  function closePopup(): void {
    popup?.classList.remove("open");
  }

  closeBtn?.addEventListener("click", closePopup);
  window.addEventListener("click", (e: MouseEvent) => {
    if (e.target === popup) closePopup();
  });

  document.querySelectorAll(cardSelector).forEach((card) => {
    card.addEventListener("click", () => {
      const el = card as HTMLElement;
      const name = el.dataset.name ?? "";
      const role = el.dataset.role ?? "";
      const description = el.dataset.description ?? "";
      const image = el.dataset.image ?? "";

      if (titleEl) titleEl.textContent = name;
      if (roleEl) roleEl.textContent = role;
      if (descEl) descEl.textContent = description;
      if (imgEl) {
        imgEl.src = image;
        imgEl.alt = name;
      }
      popup?.classList.add("open");
    });
  });
}
