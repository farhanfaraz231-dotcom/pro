let mybaby = () =>{
    let email = document.getElementById("email").value
    let phoneno = document.getElementById("phoneno").value
    let cnic = document.getElementById("cnic").value
    let gender = document.getElementById("gender").value
    if(email == "" || phoneno == "" || cnic == "" || gender == "")
        {
            alert("fill.....")
    }
    let userfulldata = db.collection('user').doc()



    let obj = {
        useremail : email,
        userphone : phoneno,
        usercnic : cnic,
        gender : gender,
        date :  Date()
    }


    userfulldata.set(obj)
    window.alert('user daataa')



}