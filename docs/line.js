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

  var config = {
  apiKey: "AIzaSyAdYpNug8KNt5ZYMr51cBbV149kmxCl7gQ",
  databaseURL: "https://jeonssa-hci.firebaseio.com/"
};

firebase.initializeApp(config);
var database = firebase.database();
var lineRef = database.ref("line");
var pointerRef = database.ref("pointer/pointer");



function remove_waiting(){
	var remaining = 0;
	var num_waiting = -1;
	var curr;
	var max;
	var first_entry;


	pointerRef.once('value').then(function(snapshot){
		curr = snapshot.val().curr;
		max = snapshot.val().max;
		first_entry = (parseInt(curr)-parseInt(max)+1);

		var firstRef = database.ref("line/"+reserv_code[first_entry]);

		if(max>0){
			firstRef.remove();

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
					alert("done");
				});
			});
		}

	});
}

