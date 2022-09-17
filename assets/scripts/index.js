// my leads handler
let myLeads = [];
const unorderedList = document.getElementById("unordered-list");
const tabBtn = document.getElementById("tab-btn");
const userInput = document.getElementById("input");

// Save Input button handler
const inputBtn = document.getElementById("input-button");

//Save Tab button
tabBtn.addEventListener("click", () => {
  //using chome tabs API
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // since only one tab should be active and in the current window at once
    //the return variable should only have one entry
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
  });
});

//Local Storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//Renders any leads from localStorage
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads(myLeads);
}

//Delete Dom Content
const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("dblclick", () => {
  myLeads = "";
  localStorage.clear();
  renderLeads(myLeads);
});

//Save Input
inputBtn.addEventListener("click", () => {
  myLeads.push(userInput.value);
  //clear input field
  userInput.value = "";

  //Save myLeads array to localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads(myLeads);
});

function renderLeads(leads) {
  //loop through myLeads array and rendering it to the unordered list
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
            <a target ='_blank' href= '${leads[i]}'> ${leads[i]}</a>
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

function getArr(arr) {
  return arr[0];
}
