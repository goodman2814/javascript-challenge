// Get references to the tbody element, input fields and button
let tbody = document.querySelector("tbody");
let dateInput = document.querySelector("#datetime");
let cityInput = document.querySelector("#city")
let stateInput = document.querySelector("#state")
let countryInput = document.querySelector("#country")
let shapeInput = document.querySelector("#shape")
let filterBtn = document.querySelector("#filter-btn");


// from data.js
let tableData = data;

// YOUR CODE HERE!
// Build table with non-filtered data
function renderTable() {
    tbody.innerHTML = "";
    for (let i = 0; i < tableData.length; i++) {
      // Get current address object and fields
      let date_data = tableData[i];
      console.log(date_data)
      let fields = Object.keys(date_data);
      // Create new row in tbody, set index to be i + startingIndex
      let row = tbody.insertRow(i);
      for (let j = 0; j < fields.length; j++) {
        // For each field in address object, create new cell and set inner text to be current value at current address field
        let field = fields[j];
        let cell = row.insertCell(j);
        cell.innerText = date_data[field];
      }
    }
  }

// // Add an event listener to the searchButton, call handleSearchButtonClick when clicked
filterBtn.addEventListener("click", handleFilterButtonClick);


  // Build search table for filtered data
function handleFilterButtonClick() {
    let filterDate = dateInput.value;
    let filterCity = cityInput.value;
    let filterState = stateInput.value;
    let filterCountry = countryInput.value;
    let filterShape = shapeInput.value;
    // Filter on date
    if (filterDate != "") {
      tableData = data.filter(function (date_data) {
        let dateDate = date_data.datetime;
        return dateDate === filterDate;
      });
    }
    if (filterCity != "") {
      tableData = data.filter(function (city_data) {
        let cityCity = city_data.city;
        return cityCity === filterCity;
        });
    }
    if (filterState != "") {
      tableData = data.filter(function (state_data) {
        let stateState = state_data.state;
        return stateState === filterState;
        });
    }
    if (filterCountry != "") {
      tableData = data.filter(function (country_data) {
        let countryCountry = country_data.country;
        return countryCountry === filterCountry;
      });
    }
    if (filterShape != "") {
      tableData = data.filter(function (shape_data) {
        let shapeShape = shape_data.shape;
        return shapeShape === filterShape;
      });
    }
    else { tableData };
  
    renderTable();
  }
  
  
  // Render the table for the first time on page load
  renderTable();