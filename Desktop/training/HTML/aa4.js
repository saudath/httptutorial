function formValidation()
{
var uid= document.registration.username;
var first=document.registration.firstname;
var uname = document.registration.details;

var ucountry = document.registration.country;
var uzip = document.registration.phone;
var uemail = document.registration.email
if(firstname_validation(first,3,12))
{
 if(userid_validation(uid,5,12))
{
if(ValidateEmail(uemail))
{
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{

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
alert('Details must have alphabet characters only');
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

return true;}
}


