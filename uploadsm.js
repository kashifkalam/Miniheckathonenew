// setting up firebase with our website
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCD4IRBkWwmif1YpLMWzMGCDgpyAwgQ50Q",
  authDomain: "miniheckathonenew.firebaseapp.com",
  projectId: "miniheckathonenew",
  storageBucket: "miniheckathonenew.appspot.com",
  messagingSenderId: "954421113497",
  appId: "1:954421113497:web:924d7eec98f3e2c7073e08"
 });
 const database = firebase.database();
 const auth = firebase.auth();


// Function to upload student marks
function uploadStudentMarks(course, studentId, marks, totalMarks) {
    // Calculate grade
    let grade = '';
    if (marks >= 90) {
      grade = 'A';
    } else if (marks >= 80) {
      grade = 'B';
    } else if (marks >= 70) {
      grade = 'C';
    } else if (marks >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    // Save the student marks data to Firebase Realtime Database
    database.ref(`studentMarks/${studentId}/${course}`).set({
      marks,
      totalMarks,
      grade,
    })
    .then(() => {
      console.log('Student marks uploaded successfully!');
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  // Call the uploadStudentMarks function
  const course = document.getElementById('course').value;
  const studentId = document.getElementById('studentId').value;
  const marks = parseInt(document.getElementById('marks').value);
  const totalMarks = parseInt(document.getElementById('totalMarks').value);
  
  uploadStudentMarks(course, studentId, marks, totalMarks);
