function formValidation()
{
var user = {};
var user.username= document.registration.username;

var user.firstname=document.registration.firstname;
var user.details = document.registration.details;

var user.country = document.registration.country;
var user.phone= document.registration.phone;
var user.email = document.registration.email;
if(firstname_validation(user.firstname,3,12))
{
 if(userid_validation(user.username,5,12))
{
if(ValidateEmail(user.email))
{
if(countryselect(user.country ))
{
if(allnumeric(user.phone))
{
if(allLetter(user.details)
{
	
} 
}
}
}
}
}
return false;
}

function firstname_validation(uid,mx,my)
{
var uid_len = uid.value.length;
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
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}

function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
alert('Form Successfully Submitted');
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
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
if(ucountry.value == "Default")
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
if(uzip.value.match(numbers))
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
if(uemail.value.match(mailformat))
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
window.location.reload()
return true;}
}


