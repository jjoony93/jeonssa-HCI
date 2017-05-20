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

var modal = document.getElementById('helpModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
document.getElementById('l4').onclick = function(){
    modal.style.display = "block";
    modalImg.src = "help-.png";
    console.log(modalImg.width)
    modalImg.width = 100%
    console.log(modalImg.width)
    // captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

})

