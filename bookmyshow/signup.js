var username=document.getElementById("username").value
var password=document.getElementById("pass").value
function signup(){
    alert("put the username and password")
   if(username===" " && password===" "){
    return false;
   }
   else{
    alert("Username and password is incorrect")
    return false;
   }
}