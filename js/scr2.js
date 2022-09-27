function create() {

    const usernamecreate = document.getElementById('usercreate').value
    const emailcreate = document.getElementById('emailcreate').value
    const passwordcreate = document.getElementById('passwordcreate').value
    const passwordcreate2 = document.getElementById('passwordcreate2').value

    if(
        usernamecreate.length > 0 
        // emailcreate.length < 1 ||
        //  passowrdcreate.length <1 ||
        //  passwordcreate2.length < 1
        ) 
        {


            alert("PLEASE ENTER ALL DATA")
        }
        else {
            alert("YOU HAVE SIGNED UP. Thanks")
            window.location.href = 'index.html'
        }

 
}