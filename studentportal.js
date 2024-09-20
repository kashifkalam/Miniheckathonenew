// setting up firebase with our website
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCD4IRBkWwmif1YpLMWzMGCDgpyAwgQ50Q",
  authDomain: "miniheckathonenew.firebaseapp.com",
  projectId: "miniheckathonenew",
  storageBucket: "miniheckathonenew.appspot.com",
  messagingSenderId: "954421113497",
  appId: "1:954421113497:web:924d7eec98f3e2c7073e08"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();


// Define variables
let editProfileForm = document.getElementById('edit-profile-form');
let resultForm = document.getElementById('result-form');
let resultDisplay = document.getElementById('result-display');

// Edit Profile Form Submission
editProfileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let cnic = document.getElementById('cnic').value;
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;

  // Validate form data
  if (!cnic || !firstName || !lastName) {
    alert('Please fill out all fields.');
    return;
  }

  // Update profile
  updateProfile(cnic, firstName, lastName);
});

// Result Form Submission
resultForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let cnic = document.getElementById('cnic-result').value;

  // Validate form data
  if (!cnic) {
    alert('Please enter your CNIC.');
    return;
  }

  // Get result
  getResult(cnic);
});

// Update profile function
function updateProfile(cnic, firstName, lastName) {
  // Simulating server response
  let response = {
    success: true,
    message: 'Profile updated successfully!',
  };

  if (response.success) {
    alert(response.message);
  } else {
    alert('Error updating profile.');
  }
}
