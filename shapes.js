window.addEventListener("load", attachHandlers, false);

function attachHandlers(){
	//var one = document.getElementById("one");
	//var two = document.getElementById("two");
	var three = document.getElementById("three");
	//var four = document.getElementById("four");
	//var five = document.getElementById("five");
	//var six = document.getElementById("six");

	if(!three){
		return;
	}
	three.onclick = disappear;
}

function disappear(){
	var num = document.getElementById("three");
	if(!num){
		return;
	}
	num.style.display = "none";
}