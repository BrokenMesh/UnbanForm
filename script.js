function getFormInfo(){
    var fname = document.getElementById("fname").value;
    var femail = document.getElementById("fmail").value;
    var fmessage = document.getElementById("fmessage").value;

	if(fname.length == 0 || femail.length == 0 || fmessage.length == 0) {
		alert("Fill in all fields");
		return;
	}

    sendEmail(femail, "Unban von " + fname, "Dein unban versuch wurde entfangen. deine message: \n" + fmessage);
	let s = sendEmail("mezivunban@outlook.com", "Unban für " + fname, "User '" + fname + "' (" + femail + ") verlangt einen unban. die message: " + fmessage);

	if(s){
		document.getElementById("wassent").style.fontSize = 11;
	}
}

function sendEmail(to, sub, mes) {
	let state = false;

	Email.send({
	Host: "smtp.gmail.com",
	Username : "norep585@gmail.com",
	Password : "HelloThere",
	To : to,
	From : "norep585@gmail.com",
	Subject : sub,
	Body : mes,
	}).then(
		state = true
	);
	return state;
}
