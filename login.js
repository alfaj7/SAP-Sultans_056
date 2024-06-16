const wrapper = document.querySelector(".wrapper");
const signUpLink = document.querySelector(".signUp-link");
const signInLink = document.querySelector(".signIn-link");
const signupForm = document.querySelector(".form-wrapper.sign-up form");
const signinForm = document.querySelector(".form-wrapper.sign-in form");

signUpLink.addEventListener("click", () => {
  wrapper.classList.add("animate-signIn");
  wrapper.classList.remove("animate-signUp");
});

signInLink.addEventListener("click", () => {
  wrapper.classList.add("animate-signUp");
  wrapper.classList.remove("animate-signIn");
});

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = signupForm.elements["username"].value;
  const email = signupForm.elements["email"].value;
  const password = signupForm.elements["password"].value;
  const gender = signupForm.elements["gender"].value;
  const mobile = "9" + Math.floor(Math.random() * 900000000 + 100000000);

  try {
    const response = await fetch("https://mock-api-fxby.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, gender, mobile }),
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to create user: ${errorMessage}`);
    }
    alert("Successfully created account. You can now log in.");
    signupForm.reset();
    signInLink.click();
  } catch (error) {
    console.error("Error creating user:", error);
    alert(`Failed to create account: ${error.message}`);
  }
});

signinForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = signinForm.querySelector(".user").value;
  const password = signinForm.querySelector(".password").value;

  try {
    if (username === "admin" && password === "admin") {
      // Redirect to admin page
      window.location.href = "admin/admin.html";
    } else {
      const response = await fetch(`https://mock-api-fxby.onrender.com/users`);
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const users = await response.json();
      const user = users.find((user) => user.username === username);

      if (!user) {
        throw new Error("User does not exist");
      }

      if (password === user.password) {
        // Successful login for regular user
        window.location.href = "index.html";
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("currentUser", user.username);
      } else {
        alert("Invalid password.");
      }
    }
  } catch (error) {
    console.error("Error signing in:", error);
    alert("User does not exist. Please sign up.");
    signinForm.reset();
    signUpLink.click();
  }
});

function togglePassword(passwordInputId) {
  var passwordInput = document.getElementById(passwordInputId);
  var type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
}
