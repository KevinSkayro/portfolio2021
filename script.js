const openPopupBtn = document.querySelectorAll("[data-popup-target]");
const closePopupBtn = document.querySelectorAll("[data-close-popup]");

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

function openPopUp(popup) {
  if (popup == null) return;
  popup.classList.add("active");
}

function closePopUp(popup) {
  if (popup == null) return;
  popup.classList.remove("active");
}
