var john = {
    amounts: [124, 48, 268, 180, 42],
    tip: [],
    finalPaid: [],
    tipCalculator: function () {
        var tipAmount;
        for(var i = 0 ; i < this.amounts.length ; i++){
            if(this.amounts[i] < 50)
                tipAmount =  0.2 * this.amounts[i];
            else if(this.amounts[i] <= 200 && this.amounts[i] >= 50 )
                tipAmount = 0.15 * this.amounts[i];
            else  
                tipAmount = 0.1 * this.amounts[i];
            this.tip.push(tipAmount);
            this.finalPaid.push(this.tip[i]+this.amounts[i]);
        }
        
    }
}
john.tipCalculator();
console.log(john);

var mark = {
    amounts: [77, 375, 110, 45],
    tip: [],
    finalPaid: [],
    tipCalculator: function () {
        var tipAmount;
        for(var i = 0 ; i < this.amounts.length ; i++){
            if(this.amounts[i] < 100)
                tipAmount =  0.2 * this.amounts[i];
            else if(this.amounts[i] <= 300 && this.amounts[i] >= 100 )
                tipAmount = 0.1 * this.amounts[i];
            else  
                tipAmount = 0.25 * this.amounts[i];
            this.tip.push(tipAmount);
            this.finalPaid.push(this.tip[i]+this.amounts[i]);
        }
        
    }
}
mark.tipCalculator();
console.log(mark);

function avgTip(amt) {
    var sum=0;
    for(var i = 0 ; i < amt.length ; i++){
        sum += amt[i];
    }
    return sum/amt.length;
}

john.avg = avgTip(john.tip);
mark.avg = avgTip(mark.tip);
if(john.avg > mark.avg)
    console.log("John paid more average tip of "+ avgTip(john.tip));
else if(john.avg < mark.avg)
    console.log("Mark paid more average tip of "+ avgTip(mark.tip));
else
    console.log("John and Mark both paid same average tip");

