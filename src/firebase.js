<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAfcmc7jJmLUDBcINgnR3F1vfZu-1Z2HU8",
    authDomain: "clone-4613c.firebaseapp.com",
    projectId: "clone-4613c",
    storageBucket: "clone-4613c.appspot.com",
    messagingSenderId: "252217093118",
    appId: "1:252217093118:web:47468e4de9cc8091be6eaf",
    measurementId: "G-BRL43ECDCL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>