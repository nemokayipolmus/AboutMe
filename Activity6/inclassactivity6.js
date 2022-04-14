var timeout = 500;
var level = 1;
var count = 0;

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("myButton").onmouseover = myHover;
	$("start").onclick = myStart;
	$("myButton").onclick = myCount;
};

function myStart() {
	document.getElementById("start").style.visibility = "hidden";
	document.getElementById("myButton").style.visibility = "visible";
}

function myHover() {
	setTimeout(changePos, timeout);
}

function changePos() {
	document.getElementById("myButton").style.marginLeft = Math.random()*1000+"px";
	document.getElementById("myButton").style.marginTop = Math.random()*800+"px";
}

function myCount() {
	count++;

	if (count == 3) {
		alert("You are the winner!\nGo Next Level: " + (++level));
		count = 0;
		timeout = timeout - 100;
	}
	
	if(timeout<0){
	alert("YOU CATCH ME! GAME IS OVER...");
		timeout = 500;
		level = 1;
		cnt = 0;
	}

}
