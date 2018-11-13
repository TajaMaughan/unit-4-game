//declare varibles
var gemValues = []
var targetTotal;
var currentTotal = 0;
var wins = 0;
var loses = 0;
//generate random target value
function randomTotal() {
    targetTotal = Math.floor(Math.random() * 102) + 19;
    $("#targetNumber").text(targetTotal);
    return targetTotal;
} 
//generate a random value for each gem
function randomValues() {
    for (var i = 0; i < 4; i++) {
        var randomValue = Math.floor(Math.random() * 12) + 1;
        gemValues.push(randomValue);
//assign values to gem       
        $("#img" + i).attr("data-gemvalue", gemValues[i]);
    }
    return gemValues;
}
//reset function
function reset() {
    currentTotal = 0;
    $("#userNumber").html(currentTotal);
    gemValues = [];
    randomTotal();
    randomValues();
}
//initial functions load on page ready.
$(document).ready(function() {
    randomTotal();
    randomValues();
//onclick add gem value to user total
    $(".gemImg").on("click", function() {
        var gemValue = ($(this).attr("data-gemvalue"));
        gemValue = parseInt(gemValue);
        currentTotal += gemValue;
        $("#userNumber").html(currentTotal);
//determine if user total is equal to or greater than target value
//if values are equal, player wins.
        if (currentTotal === targetTotal) {
            wins++;
            $("#wins").html(" " + wins);
            $(".result").html("You won! Try again.");
            reset();
        } 
        else if (currentTotal > targetTotal) {
            loses++;
            $("#loses").html(" " + loses);
            $(".result").html("You lost. Try again.")
            reset();
        }
    })
})




//if user value it greater than target value, player loses.

