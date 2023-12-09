# Quiz-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

## Description

I made a web page that allows you to solve a quiz about me, about Diego Libonati. When you answer a question you will pass to the next one until you get to the last one, once you answered all the questions of the quiz it will show you the final result of how many were correct. For example: 3/5.

## Technologies used

1. Javascript
2. CSS3
3. HTML5

## Video

https://user-images.githubusercontent.com/99032604/199618531-aeecc655-9c02-4895-90a7-635df71f9b70.mp4

## Documentation

The `loadQuiz()` function is in charge of loading the complete quiz:

```
function loadQuiz() {
  quizAsk.textContent = dataQuiz[currentQuiz].ask;

  optionA.textContent = dataQuiz[currentQuiz].oA;
  optionB.textContent = dataQuiz[currentQuiz].oB;
  optionC.textContent = dataQuiz[currentQuiz].oC;
  optionD.textContent = dataQuiz[currentQuiz].oD;
}
```

The `checkIfTrueOrFalse()` function is in charge of knowing if the option chosen by the user is correct or false:

```
function checkIfTrueOrFalse() {
  if (checkSelection[0] == dataQuiz[currentQuiz].correct) {
    score++;
  } else {
    console.log(score);
  }
}
```
