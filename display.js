$(document).ready(function(){
var x1 = Math.floor((Math.random() * 10) + 1);

var x2 = Math.floor((Math.random() * 10) + 1);

var calculation = Math.floor((Math.random() * 4) +1);

if(calculation == 1){

$("#x1").append(x1);
$("#x2").append("+");
$("#x3").append(x2);

var y = x1 + x2;

$("#x4").append(y);

}
 else if(calculation == 2){
	$("#x1").append(x1);
	$("#x2").append("-");
	$("#x3").append(x2);
	
	var y = x1 - x2;

	$("#x4").append(y);
}
else if(calculation == 3){
	$("#x1").append(x1);
	$("#x2").append("*");
	$("#x3").append(x2);
	
	var y = x1 * x2;

	$("#x4").append(y);
}
 else if(calculation == 4){
	$("#x1").append(x1);
	$("#x2").append("/");
	$("#x3").append(x2);
	
	var y = x1 / x2;

	$("#x4").append(y);
}
});
