$(document).ready(function() {

var config = {
	apiKey: "AIzaSyAdYpNug8KNt5ZYMr51cBbV149kmxCl7gQ",
	databaseURL: "https://jeonssa-hci.firebaseio.com/"
};

firebase.initializeApp(config);

$("#submit").click(
	function () {
		var date = new Date();
		console.log("submit button clicked");
		var phone = $("#phone").val();
		var persons = $("#persons").val();
		phone = phone.replace(/\-/g,'');
		// phone = parseInt(phone);
		persons = parseInt(persons);
		firebase.database().ref('users').push({
			phone: phone,
			persons: persons,
			time: date.getTime()
		});
	}); 
})