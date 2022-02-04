// Get the modal
var modal = document.getElementById('buId');
function check(form){
	if (form.username.value == "staffmember" && form.password.value == "letmein!123"){
		window.open("w4.html")
	}
	else {
		if (form.username.value == "admin" && form.password.value == "heretohelp!456"){
            window.open("https://www.w3schools.com")
        }
        else {
            alert ("Error Password or Username")
        }
	}
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}