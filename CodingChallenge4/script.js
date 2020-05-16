var john = {
    fullName: 'John Snow',
    mass: 65,
    height: 30,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

var mark = {
    fullName: 'Mark Henry',
    mass: 50,
    height: 60,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

if(john.calcBMI() > mark.calcBMI())
    console.log(`${john.fullName} has the highest BMI of ${john.BMI }`);
else if(john.calcBMI() < mark.calcBMI())
    console.log(`${ mark.fullName } has the highest BMI of  ${ mark.BMI }`);
else
    console.log("Both have the same BMI");

