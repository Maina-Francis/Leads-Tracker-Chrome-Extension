// my leads handler
let myLeads = [];
const unorderedList = document.getElementById("unordered-list");

const userInput = document.getElementById("input");

// Save Input button handler
const inputBtn = document.getElementById("input-button");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//Renders any leads from localStorage
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", () => {
  myLeads.push(userInput.value);
  //clear input field
  userInput.value = "";

  //Save myLeads array to localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

function renderLeads() {
  //loop through myLeads array and rendering it to the unordered list
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
        <li>
            <a target ='_blank' href= '${myLeads[i]}'> ${myLeads[i]}</a>
        </li>
        `;

    // console.log(listItems);
  }
  unorderedList.innerHTML = listItems;
}

//Local Storage
// localStorage.setItem("myLead", "www.linkedIn.com");
// console.log(localStorage.myLead);
localStorage.clear();
console.log(localStorage.getItem("myLead"));
