let attempt = 3; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var password = document.getElementById("password").value;
if ( username == "sidharth.parmar" && password == "sidparmar8"||username == "kush.kundalia" && password == "rockeeee1"|| username=="dhyan.thakkar"&&password=="animeguy20000"||username == "tirth.khunt" && password == "tirthk01"||username == "vasu.rakholiya" && password=="vasur18"||username=="yuvraj.dadhaniya"&&password=="yuvrajd02"||username=="krish.kotadiya"&&password=="krishk10"){
alert ("You have logged in successfully");
window.location = "addition-grade8-gibbonware-maintrue.html"; 
return false;
}
else{
attempt --;
alert("Please Re-Check Your Credentials");


    
 if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
alert ("Your login rights have been suspended");

return false;
}
}
}