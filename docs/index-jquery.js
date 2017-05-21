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

		if(!phone && !persons){
			alert("Please fill out both forms.")
			return false
		}
		else if (!phone){
			alert("Please fill in phone number")
			return false
		}
		else if(phone.length!=13){
			alert("Phone number not filled completely.");
			return false
		}

		else if(!persons){
			alert("Please fill in # of members.")
			return false
		}

		else{
		phone = phone.replace(/\-/g,'');
		// phone = parseInt(phone);
		persons = parseInt(persons);
		firebase.database().ref('users').push({
			phone: phone,
			persons: persons,
			time: date.getTime()
		});
		$('#phone').val('');
		$('#phone').attr('placeholder','Phone Number (e.g. 010-1234-5678)').focus().blur();

		$('#persons').val('');
		$('#persons').attr('placeholder','Number of people in your team (e.g. 3)').focus().blur();
		}
	}); 

var modal = document.getElementById('helpModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
document.getElementById('l4').onclick = function(){
    modal.style.display = "block";
    modalImg.src = "help-.png";
    // captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

})

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    	alert("Please input a numeric value.")
    	if(evt.target.id=='persons'){
    		$('#persons').val('');
    	//var textVal = $('#persons').val();
   		//$('#persons').val(textVal.substring(0,textVal.length - 1));
   		}
        return false;
    }
    return true;
}


$('input[name="phone"]').mask('000-0000-0000');

$('#clear_phone').click(function(e) {
  $('#phone').val('');
});

$('#clear_persons').click(function(e) {
  $('#persons').val('');
});

