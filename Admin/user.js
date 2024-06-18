var global_data;
let baseurl = `https://mock-api-fxby.onrender.com`;



// search function


let input_value = document.getElementById("");

// search_form and search song input

let search_form = document.getElementById("search_form");

let user_value = document.getElementById("user_value");

// fetchig the search result and applying debouncing

let timeOut;

async function fetch_data(search) {
  try {
    let res = await fetch(
      `https://mock-api-fxby.onrender.com/users?username_like=${search}`
    );

    let search_data = await res.json();

    return search_data;
  } catch (error) {
    console.log(error);
  }
}

// validting the search result and applying condition

async function validation() {
  let value = user_value.value;
  if (value.length < 3) {
    alert("plaese enter atleast three character");
    return;
  }

  let validated_data = await fetch_data(value);
  show_data(validated_data);
  console.log(validated_data);
}

// applying Debouncing

function Debouncing(operation, delay) {
  if (timeOut) {
    clearTimeout(timeOut);
  }
  timeOut = setTimeout(() => {
    operation();
  }, delay);
}

// applying event listner on searvh input

user_value.addEventListener("input", function () {


  Debouncing(validation, 2000);
});







console.log(global_data);

// Getting Number of Products
fetch(`${baseurl}/users`)
  .then((res) => res.json())
  .then((data) => {
    global_data = data;
    show_data(data);

    // console.log(data);
    // Totaluser.innerText = data.length;
  });

  const API_URL = "https://mock-api-fxby.onrender.com/users";

async function fetchData() {
  try {
    let response = await fetch(API_URL);
    let data = await response.json();
    show_data(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function show_data(data) {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = null;

  data.forEach((ele, i) => {
    let tr = document.createElement("tr");

    let seriel_no = document.createElement("td");
    seriel_no.innerText = i + 1;

    let td_name = document.createElement("td");
    td_name.innerText = ele.username;

    let td_gender = document.createElement("td");
    td_gender.innerText = ele.gender;

    let td_email = document.createElement("td");
    td_email.innerText = ele.email;

    let td_mobile = document.createElement("td");
    td_mobile.innerText = "+91" + " " + ele.mobile;

    let td_actions = document.createElement("td");

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash";
    deleteIcon.style.cursor = "pointer";
    deleteIcon.onclick = function() {
      deleteRow(ele.id);
    };

    let updateIcon = document.createElement("i");
    updateIcon.className = "fas fa-edit";
    updateIcon.style.cursor = "pointer";
    updateIcon.style.marginLeft = "10px"; // Add some space between the icons
    updateIcon.onclick = function() {
      updateRow(ele.id);
    };

    td_actions.append(deleteIcon, updateIcon);

    tr.append(seriel_no, td_name, td_gender, td_email, td_mobile, td_actions);

    tbody.append(tr);
  });
}

async function deleteRow(id) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    fetchData(); // Refresh the table data
    console.log("Deleted row:", id);
  } catch (error) {
    console.error("Error deleting row:", error);
  }
}

async function updateRow(id) {
  try {
    // Prompt the user for new data
    let newUsername = prompt("Enter new username:");
    let newGender = prompt("Enter new gender:");
    let newEmail = prompt("Enter new email:");
    let newMobile = prompt("Enter new mobile:");

    let updatedUser = {
      username: newUsername,
      gender: newGender,
      email: newEmail,
      mobile: newMobile,
    };

    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    fetchData(); // Refresh the table data
    console.log("Updated row:", id);
  } catch (error) {
    console.error("Error updating row:", error);
  }
}

// Initial fetching of the data
fetchData();

  
  
