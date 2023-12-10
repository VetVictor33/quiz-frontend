import { QuizOptionsWrapper, QuizTitle, StyledQuizForm } from "@components/Quiz"
import { useQuiz } from "@hooks/useQuiz"
import { QuizQuestion } from "@interfaces/quiz"
import { useEffect, useMemo } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { z } from "zod"

export const StartFormSchema = z.object({
  _optionID: z.string()
})

export type StartFormType = z.infer<typeof StartFormSchema>

interface QuizFormProps {
  children: React.ReactNode
  quiz: QuizQuestion
}

export function QuizForm({ children, quiz }: QuizFormProps) {
  const { control, handleSubmit, setValue } = useFormContext<StartFormType>()
  const { addNewAnswer, answers } = useQuiz()

  const currentAnswer = useMemo(() => {
    return answers.find((answer) => answer._questionID === quiz._id)
  }, [answers, quiz._id])

  const onSubmit = (data: StartFormType) => {
    addNewAnswer({ _questionID: quiz._id, _optionID: data._optionID })
  }

  useEffect(() => {
    setValue('_optionID', currentAnswer?._optionID ?? '')
  }, [answers, quiz._id])

  return (
    <StyledQuizForm>
      <QuizTitle>{quiz?.title}</QuizTitle>
      <QuizOptionsWrapper>
        <Controller name={`_optionID`}
          control={control}
          rules={{
            onChange() {
              handleSubmit(onSubmit)()
            },
          }}
          render={({ field }) => {
            return (
              <>
                {quiz?.options.map((option) => (
                  <label key={`label-${option._id}`}>
                    <input key={`input-${option._id}`}
                      id={option._id}
                      type="radio"
                      name={quiz._id}
                      value={option._id}
                      checked={field.value === option._id}
                      onChange={() => field.onChange(option._id)} />
                    {option.text}
                  </label>
                ))}
              </>)
          }} />
      </QuizOptionsWrapper>
      {children}
    </StyledQuizForm >
  )
}