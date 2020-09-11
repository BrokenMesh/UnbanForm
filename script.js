function getFormInfo(){
    var fname = document.getElementById("fname").value;
    var femail = document.getElementById("fmail").value;
    var fmessage = document.getElementById("fmessage").value;

    sendEmail(femail, "Hello " + fname, "After very deep analysis of the experienced moderation team we coude conclude that you are retarded. your message: \n" + fmessage);
}

function sendEmail(to, sub, mes) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "norep585@gmail.com",
	Password : "HelloThere",
	To : to,
	From : "norep585@gmail.com",
	Subject : sub,
	Body : mes,
	}).then(
		message => alert("Form send \nWell done")
	);
}