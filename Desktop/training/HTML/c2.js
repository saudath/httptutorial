function formValidation()
{
var uid= document.registration.username.value;
var first=document.registration.firstname.value;
var last=document.registration.lastname.value;
var dob=document.registration.dob.value;
var uname = document.registration.details;
console.log(uid);
var ucountry = document.registration.country.value;
var uphone = document.registration.phone.value;
var uemail = document.registration.email.value;
var user={"firstname":first,"lastname":last,"username":uid,"email":uemail,"dob":dob,"country":country,"phone":uphone}
console.log(user);
localStorage.setItem("user1", JSON.stringify(user));

if(firstname_validation(first,3,12))
{
 if(userid_validation(uid,5,12))
{
if(ValidateEmail(uemail))
{
if(countryselect(ucountry))
{
if(allnumeric(uphone))
{
localStorage.setItem("user1", JSON.stringify(user));
}
}
}
}
}
return false;
}

function firstname_validation(uid,mx,my)
{
var uid_len = uid.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("Firstname should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function userid_validation(uid,mx,my)
{
var uid_len = uid.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
/*function passid_validation(passid,mx,my)
{
var passid_len = .length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
*/
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.match(letters))
{
alert('Form Successfully Submitted');
return true;
}
else
{
alert('Details must have alphabet characters only');
uname.focus();
return false;
}
}

function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}

function countryselect(ucountry)
{
if(ucountry == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}

function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.match(numbers))
{
alert('Form Successfully Submitted');
return true;

}
else
{
alert('Phone number must have numeric characters only');
uzip.focus();
return false;
}
}


function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.match(mailformat))
{

return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}

function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Successfully Submitted');

return true;}
}


