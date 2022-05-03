

 
active="false"
function getPassword(){
  
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeghijklmnopqrstuvwxyz!@#$%^&*()+=_-{}|[]";
    var passwordLength = 16;
    var password= "";

    for (var i=0; i<passwordLength;  i++){
        var randomNumber = Math.floor(Math.random()  *  chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }
    Swal.fire({        
      icon: 'success',        
       title: 'Success',       
         text: 'Successfully generated a password!',        
          footer: 'Now copy this password by clicking the copy button :)',
          confirmButtonText:
 '<i class="fa fa-thumbs-up"></i> Ok!',

         });
         active="true"

    document.getElementById("password").value =  password;
    localStorage.setItem("password:  ",  password)
  sessionStorage.setItem("session password:" , password)
    console.log("pass:   "+password);
  
    
        
  

 }

 function getCopy() {
if (active=="true"){
    var copyText = document.getElementById("password");
    copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  Swal.fire({        
    icon: 'success',        
     title: 'Copied',       
       text: 'Successfully copied the password to clipboard!',        
        footer: 'Now paste this password where you want to :)',
        confirmButtonText:
'<i class="fa fa-thumbs-up"></i>  Great!',
    });
}
if (active=="false"){

    Swal.fire({        
        icon: 'warning',        
         title: 'Cant Copy',       
           text: 'Error!  There Is Nothing To Copy',        
            footer: 'First Generate A Password Then Copy',

})
    
   
}

  

}