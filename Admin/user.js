var global_data;
let baseurl = `https://mock-api-fxby.onrender.com`;

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

function show_data(data) {
  // console.log(data);

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

    tr.append(seriel_no, td_name, td_gender, td_email, td_mobile);

    tbody.append(tr);
  });
}
