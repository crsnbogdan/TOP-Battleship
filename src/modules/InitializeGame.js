import { clearDOMElement } from "./HelperFunctions.js";
import { updateGamePrompt } from "./HelperFunctions.js";
let playerName = "";

function renderInitialViewContent() {
  let boardviewSection = document.querySelector(".boardviewSection");
  clearDOMElement(boardviewSection);
  updateGamePrompt("Please input your name", document);
  let form = document.createElement("form");
  boardviewSection.appendChild(form);
  let formInput = document.createElement("input");
  form.appendChild(formInput);
  let formSubmit = document.createElement("input");
  formSubmit.setAttribute("id", "submit");
  formSubmit.setAttribute("type", "submit");
  formSubmit.setAttribute("value", "START");
  form.appendChild(formSubmit);
  form.addEventListener("submit", (e) => {
    if (formInput.value === "") return;
    e.preventDefault();
    let cachedPlayerName = formInput.value;
    playerName = cachedPlayerName;
  });
}

export { renderInitialViewContent, playerName };
