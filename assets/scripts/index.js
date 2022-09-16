// my leads handler
let myLeads = [];
const unorderedList = document.getElementById("unordered-list");

const userInput = document.getElementById("input");

// Save Input button handler
const inputBtn = document.getElementById("input-button");

inputBtn.addEventListener("click", () => {
  myLeads.push(userInput.value);
  renderLeads();
});

function renderLeads() {
  //loop through myLeads array and rendering it to the unordered list
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
  }
  unorderedList.innerHTML = listItems;
}
