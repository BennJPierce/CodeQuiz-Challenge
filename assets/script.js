var quizData = [
    {
      question: "What is the correct way to declare a JavaScript variable?",
      choices: [
        "var = myVariable;",
        "myVariable = var;",
        "var myVariable;",
        "variable myVariable;"
      ],
      correctAnswer: 2
    },
    {
      question: "Which method is used to add an element to the end of an array?",
      choices: [
        "push()",
        "pop()",
        "shift()",
        "unshift()"
      ],
      correctAnswer: 0
    },
    {
        question: "What is the correct way to check if a variable is an array?",
        choices: [
          "typeof myArray === 'array'",
          "myArray instanceof Array",
          "Array.isArray(myArray)",
          "myArray.isArray()"
        ],
        correctAnswer: 2
      },
      {
        question: "What is the result of the following expression: '1' + 1?",
        choices: [
          "'11'",
          "'2'",
          "2",
          "NaN"
        ],
        correctAnswer: 0
      },
      {
        question: "Which array method is used to remove the last element?",
        choices: [
          "push()",
          "pop()",
          "shift()",
          "unshift()"
        ],
        correctAnswer: 1
      },
      {
        question: "What does the '===' operator in JavaScript check for?",
        choices: [
          "Equality of value",
          "Equality of value and type",
          "Inequality of value",
          "Inequality of value and type"
        ],
        correctAnswer: 1
      },
  ];

  var currentQuestionIndex = 0;
  var score = 0;
  var timeRemaining = 100;
  var timerInterval;

  function startQuiz() {
    // Hide start container and show quiz container
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    // Start the timer
    startTimer();

    // Present the first question
    presentQuestion();
  }

  function presentQuestion() {
    var currentQuestion = quizData[currentQuestionIndex];

    // Update the question and choices on the page
    document.getElementById("question-text").textContent = currentQuestion.question;
    var choicesList = document.getElementById("choices-list");
    choicesList.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, index) {
      var listItem = document.createElement("li");
      listItem.textContent = choice;
      listItem.addEventListener("click", function() {
        answerQuestion(index);
      });
      choicesList.appendChild(listItem);
    });
  }

  function answerQuestion(choiceIndex) {
    var currentQuestion = quizData[currentQuestionIndex];

    if (choiceIndex === currentQuestion.correctAnswer) {
      // Answered correctly, increment the score
      score++;
    } else {
      // Answered incorrectly, subtract time from the clock
      timeRemaining -= 10;
      if (timeRemaining < 0) {
        timeRemaining = 0;
      }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === quizData.length) {
      // Reached the end of the quiz
      endQuiz();
    } else {
      // Present the next question
      presentQuestion();
    }
  }

  function startTimer() {
    // Update the timer display every second
    timerInterval = setInterval(function() {
      timeRemaining--;
      document.getElementById("timer").textContent = timeRemaining;

      if (timeRemaining <= 0) {
        // Time is up, end the quiz
        endQuiz();
      }
    }, 1000);
  }

  function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);

    // Hide quiz container and show game over container
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("game-over-container").style.display = "block";

    // Display the final score
    document.getElementById("score").textContent = score;
  }

  function saveScore() {
    // Get initials from the input field
    var initials = document.getElementById("initials").value;

    // Save the score and initials (Example: Display an alert with the score and initials)
    alert("Score: " + score + ", Initials: " + initials);
  }