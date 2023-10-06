let emailValidation = "/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";


function isValidEmail(email){
	return emailValidation.test(email)
}

function isValidPassword(pass){
	
}

function isDataValdi(){
	let inputElement = document.getElementById("sign-in-label-email").value;
  	let checkEmail = isValidEmail(inputElement)
	let inputPassword = document.getElementById("sign-in-laebl-password").value;
  	let checkPassword = isValidPassword(inputPassword)
	
    if (checkEmail && inputPassword) {
    	return alert("you sign in " + "\n" + `Email: ${inputElement}`  + "\n" + `Password: ${inputPassword}`)
    }
}
