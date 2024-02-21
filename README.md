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

---

1. Clone the repository
2. Join to the correct path of the clone
3. Execute: `yarn install`
4. Execute: `yarn dev`

## Description

I made a web page that allows you to solve a quiz about me, about Diego Libonati. When you answer a question you will pass to the next one until you get to the last one, once you answered all the questions of the quiz it will show you the final result of how many were correct. For example: 3/5.

## Technologies used

1. Typescript
2. CSS3
3. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/104`](https://www.diegolibonati.com.ar/#/project/104)

## Video

https://user-images.githubusercontent.com/99032604/199618531-aeecc655-9c02-4895-90a7-635df71f9b70.mp4

## Documentation

The `onInit()` function is in charge of loading the complete quiz:

```
const onInit = (): void => {
  console.log("Init Quiz Page");

  quizAsk.textContent = dataQuiz[quizState.currentQuiz].ask;

  labelA.textContent = dataQuiz[quizState.currentQuiz].oA;
  labelB.textContent = dataQuiz[quizState.currentQuiz].oB;
  labelC.textContent = dataQuiz[quizState.currentQuiz].oC;
  labelD.textContent = dataQuiz[quizState.currentQuiz].oD;
};
```

The `checkAnswer()` function is in charge of knowing if the option chosen by the user is correct or false:

```
const checkAnswer = (): void => {
  if (quizState.idOption !== dataQuiz[quizState.currentQuiz].correct) return;

  quizState.score++;
};
```
