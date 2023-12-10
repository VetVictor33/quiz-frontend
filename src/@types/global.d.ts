import 'little-state-machine';
import { QuizGame, QuizQuestion } from 'src/interfaces/quiz';


declare module 'little-state-machine' {
  interface GlobalState {
    game: QuizGame,
    currentQuestionIndex: number,
    questions: QuizQuestion[]
  }
}