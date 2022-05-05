let attempt = 3; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var password = document.getElementById("password").value;
if ( username == "kush.kundalia" && password == "kushk17"|| username=="dhyan.thakkar"&&password=="animeguy2000"||username == "tirth.khunt" && password == "tirthk92"||username == "vasu.rakholiya" && password=="vasur18"||username=="yuvraj.dadhaniya"&&password=="yuvrajd02"||username=="krish.kotadiya"&&password=="krishk10"||username=="tanya.punjabi"&&password=="tanyap88"||username=="saloni.rawal"&&password=="salonir7"||username=="prisha.popat"&&password=="pp08150"){
alert ("Since the year has ended, This functionality has been ceased. You will be redirected to the home page");
window.location = "index.html"; 
return false;
}
else{
attempt --;
alert("ERROR");


    
 if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
alert ("ERROR");
window.location = "index.html"
return false;
}
}
}
