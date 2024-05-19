const loginform=document.getElementById("login-form");
const loginButton=document.getElementById("login-form-submit");

loginButton.addEventListener("click",(e) =>{
    e.preventDefault();
    const username=loginform.email.value;
    const password = loginform.password.value;

    console.log("comes in ")
    // if( username === "mohit@gmail.com" && password==="root"){
    //     alert("user logged in success fully")
    //     location.reload()
    // }else{
    //     alert("Invalid credentials")
    //     location.reload()
    // }
    data:{
        email:username
        password:password
    }
    fetch("http://localhost:6000/user",{
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body : JSON.stringify(data)
    }).then(response => response.json()).then
    (data =>{
        if (data.success) {
            alert("User logged in successfully");
            // Perform any additional actions on successful login
        } else {
            alert("Invalid credentials");
        }
    }).catch((error) =>{
        console.error('Error:', error);
        alert("An error occurred during login");
    })
});


