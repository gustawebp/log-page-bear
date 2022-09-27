function submit(){

    const username = document.getElementById('uslog').value
    const password = document.getElementById('passlog').value
    

    if(username.length < 1 || password.length < 1) 
        alert("username or passowrd empty")
    
    else {
        alert("ACCESS GARANTED")
        location.href = 'index.html'
    }   
    


    

}

function create() {

    alert("YOU HAVE SIGNED UP. Thanks")
    window.location.href = 'index.html'
}

console.log(user)