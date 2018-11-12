//declare varibles
var crystalValues = []
var targetTotal;
var currentTotal;
var wins;
var loses;
//generate a random value for each crystal
function randomTotal() {
    targetTotal = Math.floor(Math.random() * 102) + 19;
    return targetTotal;
} 

function randomValues() {
    for (var i = 0; i < 4; i++) {
        var randomValue = Math.floor(Math.random() * 13);
        crystalValues.push(randomValue);
    }
    return crystalValues;
}

