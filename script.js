// Quiz App Script
// variables
let score = 0 ;
let currentQuestionIndex = 0 ;


// DOM Elements
let questionArea = document.getElementById("questionsArea");
let optionsContainer = document.getElementById("optionsContainer");
let nextBtn = document.getElementById("nextBtn");
let result = document.getElementById("result");
let feedback = document.getElementById("feedback");


// Function to display question and options
function showQuestion () {

    const currentQuestion = questions[currentQuestionIndex];
    questionArea.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    for (let option of currentQuestion.options) {

        const wrapper = document.createElement("div");    // Creating a div for input and label
        wrapper.className = "options";

        const input = document.createElement("input");    // Creating a input element and gave them attributes
        input.type = "radio";  
        input.name = "answer";
        input.value = option;

        const label = document.createElement("label");    // Creating a label element and gave them attributs
        label.textContent = option;

        wrapper.appendChild(input);     // Appending input and label to div
        wrapper.appendChild(label);
        optionsContainer.appendChild(wrapper);
}
    result.textContent = "";
    feedback.textContent = "";
}


// Function to check answer's
function checkAnswer() {
    const selectedOption = document.querySelector("input[name='answer']:checked");    // Check's if the answer is clicked or not

    // Runs if any option is not selected
    if (!selectedOption) {      
        feedback.textContent = "Please select an option before proceeding.";
        return;
    }

    // Check the answer and update the score
    if (selectedOption.value === questions[currentQuestionIndex].answer) {
        score++;
        result.textContent = "Correct" ;
    } else {
        result.textContent = `Wrong - correct: ${questions[currentQuestionIndex].answer}`;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(showQuestion, 700);
    } else {
        setTimeout(endQuiz, 700);
    }

    // Check if more questions are present or the quiz need to end 
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }

    
}


// Function that ends the quiz
function endQuiz () {
    questionArea.textContent = "Quiz Finished";
    optionsContainer = "";
    nextBtn.disable = true;
    result.textContent = `Quiz Over! Your Score is ${score} out of ${questions.length}`;     // Display's the Score

    //Feedback logic
    if (score === questions.length) {
        feedback.textContent = "Perfect !!" ;
    } else if (score >= questions.length * 0.5) {
        feedback.textContent = "Nice Work " ;
    } else {
        feedback.textContent = "Keep Practising" ;
    }
}

// Wire Button
nextBtn.addEventListener("click", checkAnswer);

// Start
showQuestion();




//Console based logic

/*let score = 0;
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
}*/