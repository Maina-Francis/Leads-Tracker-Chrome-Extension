// my leads handler
let myLeads = ["http://127.0.0.1:5500/index.html", "vvvvv"];
const unorderedList = document.getElementById("unordered-list");

const userInput = document.getElementById("input");

// Save Input button handler
const inputBtn = document.getElementById("input-button");

inputBtn.addEventListener("click", () => {
  myLeads.push(userInput.value);
  console.log(myLeads);
});

//loop through myLeads array and rendering it to the unordered list
for (let i = 0; i < myLeads.length; i++) {
  unorderedList.innerHTML += "<li>" + myLeads[i] + "</li>";
}
