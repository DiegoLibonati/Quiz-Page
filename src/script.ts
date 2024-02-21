import { dataQuiz } from "./constants/asks";
import {
  btnSubmit,
  labelA,
  labelB,
  labelC,
  labelD,
  optionBtns,
  quizAsk,
  quizDown,
  quizUP,
} from "./constants/elements";
import { quizState } from "./states/quizState";

btnSubmit.addEventListener("click", (e): void => {
  e.preventDefault();

  optionBtns.forEach((option) => {
    const input = option as HTMLInputElement;
    input.checked = false;
  });

  checkAnswer();

  if (quizState.currentQuiz === dataQuiz.length - 1) {
    quizUP.innerHTML = `<h2>TU RESULTADO FUE: ${quizState.score}/5</h2>`;
    quizDown.innerHTML = `<button type="button" class="resetBtn">RESET</button>`;

    document.querySelector(".resetBtn")!.addEventListener("click", () => {
      location.reload();
    });

    return;
  }

  quizState.idOption = "";
  quizState.currentQuiz++;
  onInit();
  return;
});

optionBtns.forEach(function (option) {
  option.addEventListener("click", () => {
    const input = option as HTMLInputElement;

    optionBtns.forEach((option) => {
      const inputCheck = option as HTMLInputElement;
      if (inputCheck.checked) inputCheck.checked = false;

      if (inputCheck.id === input.id) inputCheck.checked = true;
    });

    quizState.idOption = input.id;
  });
});

const checkAnswer = (): void => {
  if (quizState.idOption !== dataQuiz[quizState.currentQuiz].correct) return;

  quizState.score++;
};

const onInit = (): void => {
  console.log("Init Quiz Page");

  quizAsk.textContent = dataQuiz[quizState.currentQuiz].ask;

  labelA.textContent = dataQuiz[quizState.currentQuiz].oA;
  labelB.textContent = dataQuiz[quizState.currentQuiz].oB;
  labelC.textContent = dataQuiz[quizState.currentQuiz].oC;
  labelD.textContent = dataQuiz[quizState.currentQuiz].oD;
};

onInit();
