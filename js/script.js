function	 Ajax(){
	
}
var xmlHttpReq = null;
xmlHttpReq = new XMLHttpRequest();
xmlHttpReq.open('GET','test.php',true);
xmlHttpReq.onreadystatechange = RequestCallBack;
xmlHttpReq.send(null);
function RequestCallBack(){
	if(xmlHttpReq.readyState === 4){
		if(xmlHttpReq.status === 200){
			document.getElementById('resText').innerHTML = xmlHttpReq.responseText;
		}
	}
}
