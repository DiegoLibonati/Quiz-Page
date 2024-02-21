/// <reference types="vite/client" />
export type Ask = {
  ask: string;
  oA: string;
  oB: string;
  oC: string;
  oD: string;
  correct: string;
};

export type QuizState = {
  idOption: string;
  score: number;
  currentQuiz: number;
};
