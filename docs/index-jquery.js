var reserv_code=["ability","able","aboard","about","above","accept","accident","according",
  "account","accurate","acres","across","act","action","active","activity",
  "actual","actually","add","addition","additional","adjective","adult","adventure",
  "advice","affect","afraid","after","afternoon","again","against","age",
  "bee","been","before","began","beginning","begun","behavior","behind",
  "being","believed","bell","belong","below","belt","bend","beneath",
  "bent","beside","best","bet","better","between","beyond","bicycle",
  "bigger","biggest","bill","birds","birth","birthday","bit","bite",
  "city","class","classroom","claws","clay","clean","clear","clearly",
  "climate","climb","clock","close","closely","closer","cloth","clothes",
  "clothing","cloud","club","coach","coal","coast","coat","coffee",
  "cold","collect","college","colony","color","column","combination","combine",
  "come","comfortable","coming","command","common","community","company","compare",
  "difference","different","difficult","difficulty","dig","dinner","direct","direction",
  "directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
  "disease","dish","distance","distant","divide","division","do","doctor",
  "does","dog","doing","doll","dollar","done","donkey","door",
  "dot","double","doubt","down","dozen","draw","drawn","dream",
  "dress","drew","dried","drink","drive","driven","driver","driving",
  "drop","dropped","drove","dry","duck","due","dug","dull",
  "during","dust","duty","each","eager","ear","earlier","early",
  "earn","earth","easier","easily","east","easy","eat","eaten",
  "edge","education","effect","effort","egg","eight","either","electric",
  "electricity","element","elephant","eleven","else","empty","end","enemy",
  "energy","engine","engineer","enjoy","enough","enter","entire","entirely",
  "environment","equal","equally","equator","equipment","escape","especially","essential",
  "establish","even","evening","event","eventually","ever","every","everybody",
  "everyone","everything","everywhere","evidence","exact","exactly","examine","example",
  "excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise",
  "exist","expect","experience","experiment","explain","explanation","explore","express",
  "expression","extra","eye","face","facing","fact","factor","factory",
  "failed","fair","fairly","fall","fallen","familiar","family","famous",
  "far","farm","farmer","farther","fast","fastened","faster","fat",
  "father","favorite","fear","feathers","feature","fed","feed","feel",
  "feet","fell","fellow","felt","fence","few","fewer","field",
  "fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
  "film","final","finally","find","fine","finest","finger","finish",
  "former","fort","forth","forty","forward","fought","found","four",
  "fourth","fox","frame","free","freedom","frequently","fresh","friend",
  "friendly","frighten","frog","from","front","frozen","fruit","fuel",
  "full","fully","fun","function","funny","fur","furniture","further",
  "future","gain","game","garage","garden","gas","gasoline","gate",
  "gather","gave","general","generally","gentle","gently","get","getting",];

var used_code=[];
var priority_index= 1;
var max_size = reserv_code.length;
var cur_used=-1;

$(document).ready(function() {
if(localStorage.getItem("cur_used")!=null){
  cur_used = localStorage.getItem("cur_used");
}else{
  localStorage.setItem("cur_used",cur_used);
}


for(var i = 0; i<=cur_used; i++){
  used_code.push(reserv_code[i]);
}

// var config = {
// 	apiKey: "AIzaSyAdYpNug8KNt5ZYMr51cBbV149kmxCl7gQ",
// 	databaseURL: "https://jeonssa-hci.firebaseio.com/"
// };

// firebase.initializeApp(config);

// firebase.database().ref('users').once("value", function(snapshot) {
//     if(snapshot.exists()){
//         var keys= Object.keys(snapshot.val())
//         var lists =snapshot.val()
//     	keys.map(function(key, index) {
//         var list = lists[key]
//           reserv_code.forEach(function(entry){
//               var same = true;
//               while(same){
//                 same = false;
//                 if(list.reservation_code==entry){
//                   same = true;
//                   reserve = reserv_code[Math.floor( Math.random() * reserv_code.length )];
//                  }                
//               }

//           })
//             if(list.reservation_code==reserve){
//             	reserve = reserv_code[Math.floor( Math.random() * reserv_code.length )]
//             }
//         used_code.push(list.phone);
        
//         });

//     }
//     priority_index=used_code.length+1
// });

$("#submit").click(
	function () {
		var date = new Date();
		console.log("submit button clicked");
		var phone = $("#phone").val();
		var persons = $("#persons").val();

		if(!phone && !persons){
			$('#phone_warning').html("");
			$('#phone_warning').html(" * Please fill out both forms.")
			//alert("Please fill out both forms.")
			return false
		}
		else if (!phone){
			$('#phone_warning').html("");
			$('#phone_warning').html(" * Please fill in phone number.")
			//alert("Please fill in phone number")
			return false
		}
		else if(phone.length!=13){
			$('#phone_warning').html("");
			$('#phone_warning').html(" * Phone number not filled completely.");
			//alert("Phone number not filled completely.");
			return false
		}
		else if(!persons){
			$('#persons_warning').html("");
			$('#persons_warning').html(" * Please fill in # of members.")
			//alert("Please fill in # of members.")
			return false
		}
		else{
		//reset

    if(cur_used==max_size){
      used_code = [];
      cur_used = -1;
    }

    reserv = reserv_code[cur_used+1];
    cur_used++;


		phone = phone.replace(/\-/g,'');
		// phone = parseInt(phone);
		persons = parseInt(persons);
		// firebase.database().ref('users/priority : ' + priority_index.toString()).push({
		// 	phone: phone,
		// 	persons: persons,
		// 	reservation_code: reserve,
		// 	time: date.getTime()
		// });

    localStorage.setItem(reserv,phone);
    localStorage.setItem("cur_used",cur_used);

		// priority_index++;
		$('#res_code').html(reserv);
		$('#res_url').attr('href',`kmin93.github.io/jeonssa-HCI/user.html?reserv=${reserv}`);
    $('#res_url').html(`kmin93.github.io/jeonssa-HCI/user.html?reserv=${reserv}`);
		$('#phone').val('');
		$('#phone').attr('placeholder','Phone Number (e.g. 010-1234-5678)').focus().blur();

		$('#persons').val('');
		$('#persons').attr('placeholder','Number of people in your team (e.g. 3)').focus().blur();
		reserv=reserv_code[Math.floor( Math.random() * reserv_code.length )]
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
  $('#phone').attr('placeholder','Phone Number (e.g. 010-1234-5678)').focus().blur();
});

$('#clear_persons').click(function(e) {
  $('#persons').val('');
  $('#persons').attr('placeholder','Number of people in your team (e.g. 3)').focus().blur();
});

$('#phone').focus(function() {
  $('#phone_warning').html("");
});
$('#persons').focus(function() {
  $('#persons_warning').html("");
});
