var wait_team;
var wait_time_sec;
var wait_time_min;
var time_succeed;
var no_show_time;
var max_wait;
var reserv = getParameterByName('reserv');

var config = {
  apiKey: "AIzaSyAdYpNug8KNt5ZYMr51cBbV149kmxCl7gQ",
  databaseURL: "https://jeonssa-hci.firebaseio.com/"
};

firebase.initializeApp(config);
var database = firebase.database();
var lineRef = database.ref("line");
var myRef = database.ref('line/'+reserv);
var pointerRef = database.ref("pointer/pointer");


var alert_msg = [
	"Well, you've got some time!<br><small>How about exploring nearby places?</small>",  // 30min 
	"Your turn is coming!<br><small>You could skim through our menu.</small>",  // 20min
	"<span style='color:orange;'>You are on call soon!<br><small>Standby in restaurant.</small></span>",  // 10min
	"<span style='color:red;'>We don't want to miss you :(<br><small>Your reservation will be canceled soon.</small></span>", // 0min
	// "Your reservation has been canceled", // 0min
];
function team_reduce(){
	
	myRef.once('value').then(function(snapshot){
		if(snapshot.val().remaining!=null){
			wait_team = snapshot.val().remaining;
		}

		// wait_team -= 1;
		calculate_time();

		// if(wait_team ==2){
		// 	// $('#get_ready').modal('show');
		// 	// $('#cancel').modal('show');
		// 	// $('#no_show').modal('show');
		// 	// enable vibration support
		// }
		if (wait_team == 1) {
			$('.slider-handle').hide();
		}
		if(wait_team < 0){
			// alert("no show!! wait one more team");
			no_show();
		}

		display();

		//var value = $('#ex1').slider('getValue');
		// alert(value);
		// For non-getter methods, you can chain together commands
		$('#ex1').slider('setValue', wait_team*10);
	});

	return true;
}

function display(){
	var $remaining_team = document.querySelector('.remaining_team');
	var $wait_time = document.querySelector('.wait_time');
	var $modal_time = document.querySelector('#modal_ready');
	$remaining_team.innerHTML =wait_team;
	$wait_time.innerHTML = wait_time_sec;
	$modal_time.innerHTML = "Time Remaining: " + wait_time_sec + " Minutes";

	var alert;
	if (wait_team == 3 || wait_team <= 0) {
		navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
		if (navigator.vibrate)
			navigator.vibrate(1000);
	}
	if (wait_time_sec >= 30)
		alert = alert_msg[0];
	else if (wait_time_sec < 30 && wait_time_sec >= 20)
		alert = alert_msg[1];
	else if (wait_time_sec < 20 && wait_time_sec >= 1)
		alert = alert_msg[2];
	else
		alert = alert_msg[3];
	$('#alert__info').html(alert);
}

function calculate_time(){
	wait_time_sec = wait_team * 5;
	wait_time_min = wait_time_sec / 60;
}

function get_team(){
	return wait_team();
}

function get_time_sec(){
	return wait_time_sec;
}

function get_time_min(){
	return wait_time_min;
}

function alarm_be_ready(){
	alert("2 Teams Remaining!! Get Ready!!")
}

function no_show(){
	// var $modal_no_show = document.querySelector('#no_show_num');
	// wait_team = 1;
	// no_show_time ++;
	// calculate_time();
	// if(no_show_time==1){
	// 	$modal_no_show.innerHTML = "first";
	// 	$('#get_ready').modal('hide');
	// 	$('#cancel').modal('hide');
	// 	$('#no_show').modal('show');
	// }
	// else if(no_show_time==2){
	// 	$modal_no_show.innerHTML = "second";
	// 	$('#get_ready').modal('hide');
	// 	$('#cancel').modal('hide');
	// 	$('#no_show').modal('show');
	// }
	// else if(no_show_time==3){
	// 	location.href = "./cancelled.html";
	// }
	location.href = "./cancelled.html";
	display();
}

function go_cancel(){
	var phone = $("#phone").val();
	
	if (!phone){
		alert("Please fill in phone number!")
		return false
	}

	else if(phone.length!=4){
		alert("Phone number not filled completely!");
		return false
	}
	// var phone_check = localStorage.getItem(reserv).substring(7,11);
	remove_waiting(phone);

		// location.href = "./cancelled.html";
		// var cur_used = localStorage.getItem("cur_used");
		// cur_used--;
		// localStorage.getItem("cur_used",cur_used);
}

<<<<<<< Updated upstream
function remove_waiting(phone){
	var remaining = 0;
	var num_waiting = -1;
	var last_four = 0;
	var success;
	myRef.once('value').then(function(snapshot){
		last_four = snapshot.val().last_four;
		if(last_four == phone){
			myRef.remove();
			lineRef.once('value').then(function(snapshot){
				snapshot.forEach(function(child_snapshot){
					var key = child_snapshot.key;
					database.ref('line/'+key).update({remaining: remaining});
					remaining++;
				});

				pointerRef.once('value').then(function(snapshot){
				  var obj = snapshot.val();
				    num_waiting = obj.max;
				    num_waiting--;
				    pointerRef.update({max: num_waiting});
				});
			});
			success=true;
		}else{
			alert("You typed wrong number!");
		}
	});
}
// function timer(){
// 	var t = setInterval(team_reduce, 3000);
// }

myRef.on('child_changed',function(snapshot){
	team_reduce();
=======
$('#myMenu').on('show.bs.modal', function () {
    $('.modal-body').css('overflow-y', 'auto'); 
    $('.modal-body').css('max-height', $(window).height() * 0.7);
>>>>>>> Stashed changes
});

$( document ).ready(function() {

	myRef.once('value').then(function(snapshot){
		wait_team = snapshot.val().remaining;
		max_wait = snapshot.val().max_wait;
		$('#ex1').slider({max: max_wait*10});
		$('#ex1').slider('setValue', wait_team*10);
		no_show_time = 0;
		calculate_time();
		display();
		$('#myModal').modal({ show: false})

		// With JQuery
		$('#ex1').slider({
			// tooltip: 'always',
			// formatter: function(value) {
			// 	return 'Remaining Teams:' + value/10;
			// }
		});

		$('#btn-cancel').click(function() {
		  $('#cancel').modal('show');
		});

	})



});