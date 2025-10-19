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
        // alert("working")
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
     window.location.href = "homee.html"
            Swal.fire({
        title: "successful!",
        icon: "success",
        draggable: true
        });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // alert(errorCode + errorMessage)

            Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorCode + errorMessage
        });
  });

    }
}