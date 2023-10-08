let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function isValidEmail(email){
	let emailError = document.getElementById("email-error-message")
	emailError.style.display = "block";
	if (email){
		if (emailPattern.test(email) === true){
			emailError.style.display = "none";
			return true;
		}
		else{
			emailError.innerText = "Невірний формат пошти";
			return false;
		}
	}
	else {
		emailError.innerText = "Це поле пусте !";
		return false;
	}
	
}

function isEyeOpen (event){
	event.preventDefault();
	let eyeButton = document.getElementById("eye-button").classList;
	let passInput = document.getElementById("sign-in-label-password");
	if (eyeButton.contains("sign-in-button-bi-close-eye")){
		eyeButton.remove("sign-in-button-bi-close-eye");
		eyeButton.add("sign-in-button-bi-open-eye");
		passInput.type = "text";
		return ;
	}
	else{
		eyeButton.remove("sign-in-button-bi-open-eye");
		eyeButton.add("sign-in-button-bi-close-eye");
		passInput.type = "password";
		return ;
	}
}

function isValidPassword (password){
	let passwordError = document.getElementById("password-error-message");
	passwordError.style.display = "block";
	if (password) {
		if (password.length >= 6){
			passwordError.style.display = "none"; 
			return true;
		}
		else{
			passwordError.innerText = "Довжина рядка не повинна бути меньша 6 символів";
			return false;
		}
	}
	else {
		passwordError.innerText = "Це поле пусте !";
	}

}
let passwordError = document.getElementById("password-error-message");

function isDataValid(event){
	event.preventDefault();
	let emailElement = document.getElementById("sign-in-label-email").value;
	let passwordElement = document.getElementById("sign-in-label-password").value;

	let validEmail = isValidEmail(emailElement);
	let validPass = isValidPassword(passwordElement);

	if (validEmail === true && validPass == true){
		alert("Ви ввійшли " + "\n" + `Email: ${emailElement}`  + "\n" + `Password: ${passwordElement}`);
	}
}
