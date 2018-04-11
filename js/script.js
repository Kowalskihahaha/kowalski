var xhr = new XMLHttpRequest();
xhr.onload = function(){
	if(xhr.status === 200){
		resposeObject = JSON.parse(xhr.responseText);
	
		var newContent = '';

		newContent = '<div>' + resposeObject.events.length + '</div>';
	
		document.getElementById('resText').innerHTML = newContent;
	}
};
xhr.open('GET','data/data.json',true);
xhr.send(null);