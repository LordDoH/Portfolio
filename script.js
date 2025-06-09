const addRecommendation = (e) => {
  e.preventDefault();
  const recommendationForm = document.querySelector(
    ".add-recommendation__form"
  );
  const values = Object.fromEntries(new FormData(recommendationForm));

  if (!values.name) {
    values.name = "Anonymous";
  }

  const newRecommendation = document.createElement("li");
  newRecommendation.classList.add("recommendations__item");
  newRecommendation.innerHTML = `
    <p>${values.recommendation}</p>
    <p class="recommendations__name">${values.name}</p>
  `;

  const recommendationsList = document.querySelector(".recommendations__list");
  recommendationsList.append(newRecommendation);

  const modal = document.querySelector("#modal-informational");

  modal.showModal();

  modal.querySelector(".modal__header h2").textContent = "Recommendation Added";
  modal.querySelector(".modal__body p").textContent =
    "Your recommendation has been added successfully!";
  const modalBody = modal.querySelector(".modal__body");
  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa-solid", "fa-check-circle", "modal__info-icon");
  modalBody.prepend(checkIcon);

  modal.querySelectorAll("button").forEach((button) =>
    button.addEventListener("click", () => {
      modal.close();
    })
  );
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });

  recommendationForm.reset();
};
