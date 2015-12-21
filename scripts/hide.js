$(document).ready(function(){

var one = parseInt($("#x1").html());

var two = parseInt($("#x2").html());

var three = parseInt($("#x3").html());

var four = parseInt($("#x4").html());

var random= Math.floor((Math.random() * 4) +1);

if(random == 1){
$("#x1").hide();
}
else if(random == 2){
$("#x2").hide();
}
else if (random == 3){
$("#x3").hide();
}
else if (random == 4){
$("#x4").hide();
}
});
