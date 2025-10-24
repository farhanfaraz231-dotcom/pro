  const firebaseConfig = {
    apiKey: "AIzaSyCuRdQ2g6abWzCIt7rvO8vC2eaN97sXAeU",
    authDomain: "myday-a272a.firebaseapp.com",
    projectId: "myday-a272a",
    storageBucket: "myday-a272a.firebasestorage.app",
    messagingSenderId: "1024645580889",
    appId: "1:1024645580889:web:35008a529aefa2bcfc8948"
  };

  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   let db = firebase.firestore()