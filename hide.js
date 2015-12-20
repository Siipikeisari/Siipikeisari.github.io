$(document).ready(function(){

var one = parseInt($("#x1").html());

var two = parseInt($("#x2").html());

var three = parseInt($("#x3").html());

var four = parseInt($("#x4").html());

var random= Math.floor((Math.random() * 4) +1);

if(random == 1){
console.log(one)
$("#x1").hide();
;}
else if(random == 2){
console.log(two)
$("#x2").val();
}
else if (random == 3){
console.log(three)	
$("#x3").hide();
}
else if (random == 4){
console.log(four);
$("#x4").hide();
}

});