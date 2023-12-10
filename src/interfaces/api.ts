import { QuizQuestion } from "./quiz";

export interface QuizRequest {
  quiz: QuizQuestion[]
}

export interface QuizResponse {
  name: string
  correctAnswers: number
}