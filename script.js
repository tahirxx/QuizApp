// contains all of the questions + answers
const allQuestions = [
  {
    content: "What is the largest mammal on Earth?",
    answers: ["Elephant", "Blue Whale", " Lion", "Giraffe"],
    correctAnswer: 1,
  },
  {
    content: "Which animal is known as the king of the jungle?",
    answers: [
      "Elephant",
      "Tiger",
      "Lion",
      "Gorilla",
    ],
    correctAnswer: 2,
  },
  {
    content: " What is the fastest land animal?",
    answers: [
      "Cheetah",
      "Lion",
      "Elephant",
      "Zebra",
    ],
    correctAnswer: 0,
  },
  {
    content: "Which animal is capable of regenerating lost body parts?",
    answers: [
      "Octopus",
      "Dolphin",
      "Crocodile",
      "Penguin",
    ],
    correctAnswer: 0,
  },
  {
    content:
      "What is the world's largest species of shark?",
    answers: [
      "Bull Shark",
      "Hammerhead Shark",
      "Great White Shark",
      "Whale Shark",
    ],
    correctAnswer: 2,
  },
  {
    content:
      "Which bird is known for its exceptional mimicking abilities?",
    answers: [
      "Parrot",
      "Eagle",
      "Owl",
      "Penguin",
    ],
    correctAnswer: 0,
  },
  {
    content:
      "What is the largest species of penguin?",
    answers: [
      "Emperor Penguin",
      "King Penguin",
      "Adélie Penguin",
      "Rockhopper Penguin",
    ],
    correctAnswer: 0,
  },
  {
    content:
      "What is the only continent where you won't find any native species of ants?",
    answers: [
      "Asia",
      "Antarctica",
      "Africa",
      "South America",
    ],
    correctAnswer: 1,
  },
  {
    content:
      "What is the tallest animal on Earth?",
    answers: [
      "Giraffe",
      "Elephant",
      "Zebra",
      "Kangaroo",
    ],
    correctAnswer: 0,
  },
  {
    content:
      "Which animal is known for its black and white stripes?",
    answers: [
      "Zebra",
      "Cheetah",
      "Tiger",
      "Giraffe",
    ],
    correctAnswer: 0,
  },
  ];

let title = document.getElementById("title");
let context = document.getElementById("context");
let beginBtn = document.getElementById("begin-btn");
let nextBtn = document.getElementById("next-btn");
let retakeBtn = document.getElementById("retake-btn");
let question_element = document.getElementById("question");
let all_answers_element = document.getElementById("answers");
let currentIndex = 0;
let score = 0;
let selectedIndex = null;
let correctIndex = null;

beginBtn.addEventListener("click", () => {
  beginBtn.style.display = "none";
  context.style.display = "none";
  question_element.style.display = "block";
  all_answers_element.style.display = "block";
  displayQuestion(allQuestions[currentIndex]);
});

nextBtn.addEventListener("click", () => {
  if (correctIndex === selectedIndex) {
    score++;
    console.log("Score:", score);
  }
  currentIndex++;
  clearQuestion();
  nextBtn.style.display = "none";
  if (currentIndex === allQuestions.length) {
    endQuiz();
  } else {
    displayQuestion(allQuestions[currentIndex]);
  }
});

retakeBtn.addEventListener("click", () => {
  retakeBtn.style.display = "none";
  currentIndex = 0;
  score = 0;
  title.innerText = "Take a quiz!";
  displayQuestion(allQuestions[currentIndex]);
});

function displayQuestion(question) {
  console.log("Question:", question.content);
  console.log("Correct Answer:", question.correctAnswer);

  correctIndex = question.correctAnswer;
  question_element.innerText = question.content;
  for (let answer of question.answers) {
    let answer_element = document.createElement("div");
    answer_element.innerText = answer;
    answer_element.addEventListener("click", () => {
      clearHighlight();
      answer_element.classList.add("highlight");
      selectedIndex = question.answers.indexOf(answer_element.innerText);
      console.log("Selected Index:", selectedIndex);
      nextBtn.style.display = "block";
    });
    all_answers_element.appendChild(answer_element);
  }
}

function clearQuestion() {
  // remove question text
  question_element.innerText = "";
  while (all_answers_element.firstChild) {
    all_answers_element.removeChild(all_answers_element.lastChild);
  }
}

function clearHighlight() {
  for (let answer of all_answers_element.children) {
    answer.classList.remove("highlight");
  }
}

function endQuiz() {
  title.innerText = "You finished!";
  question_element.innerText = `You scored ${score}/10`;
  retakeBtn.style.display = "block";
}

