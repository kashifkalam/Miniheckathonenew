// setting up firebase with our website
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCD4IRBkWwmif1YpLMWzMGCDgpyAwgQ50Q",
  authDomain: "miniheckathonenew.firebaseapp.com",
  projectId: "miniheckathonenew",
  storageBucket: "miniheckathonenew.appspot.com",
  messagingSenderId: "954421113497",
  appId: "1:954421113497:web:924d7eec98f3e2c7073e08"
 });
   // Get references to Firebase Realtime Database and Authentication
const database = firebase.database();
const auth = firebase.auth();

// Function to add student
function addStudent(firstName, lastName, email, password, cnic) {
  // Create a new student object
  const student = {
    firstName,
    lastName,
    email,
    password,
    cnic,
    userType: 'Student',
  };

  // Generate a unique student ID
  const studentId = database.ref().child('students').push().key;

  // Hash the password
  const hashedPassword = firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return userCredential.user.uid;
    })
    .catch((error) => {
      console.error(error);
    });

  // Save the student data to Firebase Realtime Database
  database.ref(`students/${studentId}`).set({
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    password: hashedPassword,
    cnic: student.cnic,
    userType: student.userType,
  })
  .then(() => {
    console.log('Student added successfully!');
  })
  .catch((error) => {
    console.error(error);
  });
}

// Call the addStudent function
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const cnic = document.getElementById('cnic').value;

addStudent(firstName, lastName, email, password, cnic);
