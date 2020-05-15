var tip = new Array();
var finalPaid = new Array();

function tipCalculator(amount) {
    if(amount < 50)
        return 0.2 * amount;
    else if(amount <= 200 && amount >= 50 )
        return 0.15 * amount;
    else  
        return 0.1 * amount;
}

var amounts = [124, 48, 268];

for(var i=0;i<3;i++){
    tip.push(tipCalculator(amounts[i]));
    finalPaid.push(tip[i]+amounts[i])
}

