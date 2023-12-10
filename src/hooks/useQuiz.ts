import { useStateMachine } from "little-state-machine";
import { addUserName, addQuestions, addNewAnswer } from "@contexts/quizContext";
import { QuizAnswer, QuizQuestion } from "src/interfaces/quiz";
import { api } from "src/lib/axios";
import { AxiosResponse } from "axios";

export function useQuiz() {
  const { actions, state } = useStateMachine({ addUserName, addQuestions, addNewAnswer })

  const addNameActions = (name: string) => actions.addUserName(name)
  const addQuestionsAction = async () => {
    const { data: { data } } = await api.get<AxiosResponse<QuizQuestion[]>>('/quiz')
    console.log(data)
    actions.addQuestions(data)
  }
  const addAnswersAction = (answer: QuizAnswer) => actions.addNewAnswer(answer)
  const game = state.game
  const answers = state.game.answers

  return {
    addUserName: addNameActions,
    addQuestions: addQuestionsAction,
    addNewAnswer: addAnswersAction,
    game,
    answers
  }
}