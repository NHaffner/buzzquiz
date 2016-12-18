

var score =0;

function ONE (){

 		var firstQ = document.getElementsByClassName("quiz");
 		for (var j = 0; j<firstQ.length; j++){
 			console.log(firstQ[j])
 			firstQ[j].onclick = function(){
 			var points = parseInt(this.value);
 			score=score+points;
 			console.log(score);

 							}

			}
}

function TWO (){

 	var secondQ = document.getElementsByClassName("piccy");
 	for (var j = 0; j<secondQ.length; j++){
 		secondQ[j].onclick= function(){
 			var points = parseInt(this.value);
 			score=score+points;
 			console.log(score);
 			
 		}
 	}
 	

}

function THREE (){

 	var thirdQ = document.getElementsByClassName("midDiv");
 	for (var j = 0; j<thirdQ.length; j++){
 		thirdQ[j].onclick= function(){
 			var points = parseInt(this.value);
 			score=score+points;
 			console.log(score);
 			
 		}
 	}

}

function FOUR (){

 
 	var fourthQ = document.getElementsByClassName("ting");
 	for (var j = 0; j<fourthQ.length; j++){
 		fourthQ[j].onclick= function(){
 			var points = parseInt(this.value);
 			score=score+points;
 			console.log(score);
 			
 		}
 	}

}

function FIVE (){

 	
var answer=document.getElementById("mySelect"); 		
var points = parseInt(answer[answer.selectedIndex].value);
 		
 			score=score+points;
 			console.log(score);
 			
 	}



function getResults(){
	if (score<= 6){
		document.getElementById("result").innerHTML ="<h1> you belong in Towie </h1> "
	}

if (score >= 7 && score <= 10 ){
		document.getElementById("result").innerHTML ="you belong in Keeping up with the Kardashians "
	}
if (score >= 11 && score <= 15 ){
		document.getElementById("result").innerHTML ="you belong in Made in Chelsea "
	}
if (score >= 16 && score <= 20 ){
		document.getElementById("result").innerHTML ="you belong in Made in Geordie Shore "
	}	

}

function lastBit (){
	FIVE();
	getResults();


}



ONE();
TWO();
THREE();
FOUR();

