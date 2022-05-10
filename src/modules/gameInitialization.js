import { clearDOMElement } from "./DOMMethods.js";
let playerName = "";

function renderInitialViewContent() {
  let mainViewSection = document.querySelector(".mainviewSection");
  clearDOMElement(mainViewSection);
  let form = document.createElement("form");
  mainViewSection.appendChild(form);
  let formInput = document.createElement("input");
  form.appendChild(formInput);
  let formSubmit = document.createElement("input");
  formSubmit.setAttribute("id", "submit");
  formSubmit.setAttribute("type", "submit");
  form.appendChild(formSubmit);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let cachedPlayerName = formInput.value;
    playerName = cachedPlayerName;
  });
}

export { renderInitialViewContent, playerName };
