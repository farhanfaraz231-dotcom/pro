let myday = () =>{
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if(email === "" || password === ""){
            Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please fill the form!"
        });
    }
    else{
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href = "homee.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode + errorMessage)
  });
    }
}