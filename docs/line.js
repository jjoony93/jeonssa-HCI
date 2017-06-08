lineRef.on('child_removed',function(snapshot){
	remaining=0;
	snapshot.forEach(function(child_snapshot){
		child_snapshot.val().set({remaining: remaining});
		remaining++;
	});
	pointerRef.set({max: remaining});
});

function remove_waiting(key, phone){
	if(database.ref('line/'+key).last_four == phone){
		database.ref('line/'+key).remove();
		return true;
	}
	else{
		return false;
	}
}