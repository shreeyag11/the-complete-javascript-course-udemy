(function() {
    var Question = function(question, answers, correctAns) {
        this.question = question;
        this.answers = answers;
        this.correctAns = correctAns;
    };

    var questionArr = new Array();
    questionArr.push(new Question('What is my name?',['Shreeya','Hinata','Kageyama'],0));
    questionArr.push(new Question('What do I love the most?',['Makeup','Sleep','Food'],2));
    questionArr.push(new Question('Who is my best friend?',['Yash','Jigisha','Jaimin'],1));
    questionArr.push(new Question('What is the professor\'s name?',['Jonas','Jane','Joe'],0));
    questionArr.push(new Question('Is JavaScript the best language?',['True','False'],0));
    questionArr.push(new Question('Am I the best?',['True','False','Obviously'],2));
    
    Question.prototype.randomNumber = function(quesNo) {
        console.log(this.question);
        for(var i=0;i<this.answers.length;i++){
            console.log(`${i}: ${this.answers[i]}`);
        }
        return prompt("Please select the correct answer (Just select the number):");
    }

    Question.prototype.isCorrect = function(ans) {
        if(ans == this.correctAns){
            console.log('Sahi Jawaab!');
        }
        else {
            console.log(`Oops! Wrong Answer \nThe Correct ans is ${this.correctAns}`);
        }
        console.log('Try solving more Questions!');
    }
    
    var quesNo = (Math.floor(Math.random() * 6));
 
    var ans = questionArr[quesNo].randomNumber(quesNo);
    questionArr[quesNo].isCorrect(ans);
    
})();



