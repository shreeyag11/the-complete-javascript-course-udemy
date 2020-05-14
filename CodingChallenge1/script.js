var markHeight, markWeight, johnHeight, johnWeight;
markHeight = prompt("Enter Mark's height");
markWeight = prompt("Enter Mark's weight");
johnHeight = prompt("Enter John's height");
johnWeight = prompt("Enter John's weight");

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);
var higher = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's? " + higher);