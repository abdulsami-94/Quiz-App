let questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    }

];

let score = 0;
let currentAnswer ;

//Displaying Questions 
for ( i=0 ; i < questions.length ; i++) {
    console.log(questions[i].question);
    console.log(questions[i].options);
    currentAnswer = prompt("Enter your answer: ");

    //Checking answers
    if (currentAnswer == questions[i].answer) {
        score++;
    } else {
        console.log("Wrong answer! The correct answer is: " + questions[i].answer);
    }

}


//Score
console.log(`your score is ${score}`);

//Feedback
if (score >= 3) {
    console.log("Perfect!!");
} else {
    console.log("Keep practising ");
}