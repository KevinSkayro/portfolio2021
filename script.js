//open project's popups start
const openPopupBtn = document.querySelectorAll("[data-popup-target]");
const closePopupBtn = document.querySelectorAll("[data-close-popup]");
const popupOverlay = document.querySelector("[data-popup-overlay]");

openPopupBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.popupTarget);
    openPopUp(popup);
  });
});
closePopupBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopUp(popup);
  });
});

popupOverlay.addEventListener("click", () => {
  const popups = document.querySelectorAll(".popup.active");
  popups.forEach((popup) => {
    closePopUp(popup);
  });
});

function openPopUp(popup) {
  if (popup == null) return;
  popup.classList.add("active");
  popupOverlay.classList.add("active");
}

function closePopUp(popup) {
  if (popup == null) return;
  popup.classList.remove("active");
  popupOverlay.classList.remove("active");
}
//open project's popups end

//alternative to hover effect on touch devices
const projectCard = document.querySelectorAll("[data-card-hover]");

projectCard.forEach((card) => {
  card.addEventListener("touchend", () => {
    card.classList.toggle("touch-card");
  });
});
projectCard.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.classList.remove("touch-card");
  });
});
