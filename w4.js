//var modal = document.getElementById('buId');
//function check(form){

 //       if (form.username.value && form.email.value && form.location.value && form.description.value ){
 //           alert ("The report has been sent, Thank you!")       }
  //      else { alert ("Please fill in all the fields!")} }

function checkInputs(){  
  var username=document.myForm.name.value;  
  var email=document.myForm.email.value;  
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  }
  
  if (username==null || username==""){  
    alert("Name can't be blank");  
        return false;  
  }
  else { 
      return true;
  }
   
      
function validateemail()  {  
      var x=document.myForm.email.value;  
      var atposition=x.indexOf("@");  
      var dotposition=x.lastIndexOf(".");  
      if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
        }  
      }