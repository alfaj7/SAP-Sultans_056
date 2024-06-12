
// localStorage


const saveProfileToLocalStorage = (profile) => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
  };
  
  const getProfileFromLocalStorage = () => {
    const profile = localStorage.getItem('userProfile');
    return profile ? JSON.parse(profile) : null;
  };
  
  const removeProfileFromLocalStorage = () => {
    localStorage.removeItem('userProfile');
  };
  
// app.js (continued)

// DOM Elements
const profileDisplay = document.getElementById('profile-display');
const profileFormContainer = document.getElementById('profile-form-container');
const profileForm = document.getElementById('profile-form');
const createProfileButton = document.getElementById('create-profile-button');
const cancelButton = document.getElementById('cancel-button');

// Functions
const showProfileForm = (profile) => {
  if (profile) {
    profileForm.name.value = profile.name;
    profileForm.email.value = profile.email;
  } else {
    profileForm.reset();
  }
  profileDisplay.classList.add('hidden');
  profileFormContainer.classList.remove('hidden');
};

const hideProfileForm = () => {
  profileFormContainer.classList.add('hidden');
  profileDisplay.classList.remove('hidden');
};

const displayProfile = (profile) => {
  if (profile) {
    profileDisplay.innerHTML = `
      <h2>Profile</h2>
      <p>Name: ${profile.name}</p>
      <p>Email: ${profile.email}</p>
      <button id="edit-profile-button">Edit</button>
      <button id="delete-profile-button">Delete</button>
    `;

    document.getElementById('edit-profile-button').addEventListener('click', () => showProfileForm(profile));
    document.getElementById('delete-profile-button').addEventListener('click', () => {
      removeProfileFromLocalStorage();
      loadProfile();
    });
  } else {
    profileDisplay.innerHTML = `
      <p>No profile found. Please create one.</p>
      <button id="create-profile-button">Create Profile</button>
    `;
    document.getElementById('create-profile-button').addEventListener('click', () => showProfileForm());
  }
};

const loadProfile = () => {
  const profile = getProfileFromLocalStorage();
  displayProfile(profile);
};

// Event Listeners
profileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const profile = {
    name: profileForm.name.value,
    email: profileForm.email.value
  };
  saveProfileToLocalStorage(profile);
  loadProfile();
  hideProfileForm();
});

cancelButton.addEventListener('click', hideProfileForm);

// Initial Load
loadProfile();


// localStorage end


