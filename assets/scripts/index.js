// my leads handler
let myLeads = [];

const userInput = document.getElementById("input");

// Save Input button handler
const inputBtn = document.getElementById("input-button");

inputBtn.addEventListener("click", () => {
  myLeads.push(userInput.value);
  console.log(myLeads);
});
