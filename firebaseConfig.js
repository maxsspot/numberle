// Import the Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { firebase, getDatabase, ref, set, get, onValue, update} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJccFM9q7mmNWaSnwbJTRhFxW468UHa2Y",
  authDomain: "numerale-af566.firebaseapp.com",
  databaseURL: "https://numerale-af566-default-rtdb.firebaseio.com",
  projectId: "numerale-af566",
  storageBucket: "numerale-af566.appspot.com",
  messagingSenderId: "892091001667",
  appId: "1:892091001667:web:3f9868308db65f8ce75df6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export the database instance
export { database };
