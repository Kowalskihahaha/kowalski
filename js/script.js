$('#btn').click(function(){
	xhr.onload();
})
var xhr = new XMLHttpRequest();
xhr.open('GET','../data/test.json',true);
xhr.send(null);

xhr.onload = function(){
	if(xhr.status === 200){
		var jsonObject;
		jsonObject = JSON.parse(xhr.responseType);
	}
	document.getElementById('jsonText').innerHTML(jsonObject.project[0].time);
}

