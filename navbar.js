let nav_parent = document.getElementById("nav_parent");

function addNavbarToPage() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const currentUser = localStorage.getItem("currentUser");

  let loginSectionHTML = "";

  if (isLoggedIn === "true") {
    loginSectionHTML = `
            <div class="profile-nav-btn flex-div">
                <span>${currentUser}</span>
                <button onclick="logout()" id= "logout">Logout</button>
            </div>
        `;
  } else {
    loginSectionHTML = `
            <a href="login.html" class="login-nav-btn flex-div">
                <i class="fa-solid fa-box-open"></i>
                <span>Login</span>
            </a>
        `;
  }

  nav_parent.innerHTML = `
    <div class="logo"> <a href="/index.html"><img src="assets/logo-home.svg" alt=""></a></div>
    <ul class="nav-menu">
        <a href="/index.html"><i class="fa-solid fa-box-open"></i> Home</a>
        <a href=""><i class="fa-solid fa-music"></i> Songs</a>
        <a href=""><i class="fa-solid fa-info-circle"></i> About</a>
    </ul>
    
    <div class="login-nav-cont">
        <div id="search-data-div"></div>
        ${loginSectionHTML} <!-- Here the loginSectionHTML variable is used -->
        <div class="flex-div">
            <img src="assets/man.png" alt="">
            <span class="Name"></span>
        </div>
        <i class="fa-solid fa-bars close" id="nav-toggle"></i>
    </div>`;
}

function logout() {
  localStorage.setItem("isLoggedIn", "false");
  localStorage.setItem("currentUser", "");
  window.location.reload();
}

addNavbarToPage();
let a = document.getElementById("nav_parent").offsetHeight;
document.querySelector("body").style.marginTop = `${a}px`;

let nav_toggle = document.getElementById("nav-toggle");
let nav_menu = document.querySelector(".nav-menu");
let navbar2 = document.querySelector(".navbar2");

nav_toggle.addEventListener("click", () => {
  console.log(nav_menu.style.right);
  if (nav_menu.style.right == "0px") {
    nav_menu.style.right = "100%";
    console.log("hell");
    if (navbar2) {
      navbar2.style.left = "100%";
    }
  } else {
    nav_menu.style.right = "0px";
    console.log("hell1");

    if (navbar2) {
      navbar2.style.left = "0px";
    }
  }
});
