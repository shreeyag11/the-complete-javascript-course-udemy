var john1, john2, john3, mike1, mike2, mike3, mary1, mary2, mary3;

john1 = 89;
john2 = 120;
john3 = 103;

mike1 = 116;
mike2 = 94;
mike3 = 123;

mary1 = 97;
mary2 = 134;
mary3 = 105;

var johnAvg = (john1 + john2 + john3)/3;
var mikeAvg = (mike1 + mike2 +mary3)/3;
var maryAvg = (mary1 + mary2 + mary3)/3;

if(johnAvg > mikeAvg && johnAvg > maryAvg)
    console.log("Winner is John's team with an average of "+johnAvg);
else if(mikeAvg > johnAvg && mikeAvg > maryAvg)
    console.log("Winner is Mike's team with an average of "+mikeAvg);
else if(maryAvg > johnAvg && maryAvg > mikeAvg)
    console.log("Winner is Mary's team with an average of "+maryAvg);
else 
    console.log("It's a draw");
