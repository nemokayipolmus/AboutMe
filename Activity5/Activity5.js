var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};

function displayResults(){
	var high = 0;
	var average = 0;
	var index=0;
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
	}
	for(var j=0;j<scores.length;j++)
	{
		if(high < scores[j]){
			high = scores[j];
			index = j;
		}  
		
	}
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score = "+ average + "<br \> High score = "+ names[index]+ " with a score of " + high + "<br \> "
}

function displayScores() {
    
	document.getElementById("scores_table").innerHTML = "<h2> Scores </h2><br /><tr><th>Name</th> <th>Score</th></tr>";
    
	for (var i = 0; i < scores.length; i++) {
        var new_row = document.getElementById("scores_table").insertRow(1);
        var cell1 = new_row.insertCell(0);
        var cell2 = new_row.insertCell(1);
        cell1.innerHTML = names[i];
        cell2.innerHTML = scores[i];
    }
}

function addScore() {
    
	var name = $("name").value;
    var score = parseInt($("score").value);
    
	if (name == "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
		} 
		
		else {
        names[names.length] = name;
        scores[scores.length] = score;
        $("name").value = "";
        $("score").value = "";
    }

    $("name").focus();
}
