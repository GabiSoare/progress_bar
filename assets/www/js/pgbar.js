function drawpgbar(total, item,count){
	if(item>0){
		var szazalek=Math.round((item*100)/total);
		document.getElementById("szliderbar").style.width=szazalek+'%';
		document.getElementById("szazalek").innerHTML=szazalek+'%' + '   Record : ' + item + ' of ' + total;
	}
	if(item==0){
		document.getElementById("szliderbar").style.width=0+'%';
		document.getElementById("szazalek").innerHTML="Downloading...";
	}
}


var i=0;
function testprogress(){
	setTimeout(continueExecution, 1) 
}
function continueExecution()
{
	i=i+1;
	drawpgbar(100, i);
	if(i<100)
	testprogress();
}