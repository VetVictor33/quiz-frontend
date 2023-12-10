import { Button, Input, QuizBox } from "@components/index";
import { GreetingsForm, MainTitle } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuiz } from "@hooks/useQuiz";
import { useNavigate } from "react-router-dom";

const StartFormSchema = z.object({
  name: z.string().min(1)
})

type StartFormType = z.infer<typeof StartFormSchema>

export function Start() {
  const navigateTo = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<StartFormType>({
    resolver: zodResolver(StartFormSchema)
  })
  const { addUserName, addQuestions, nextQuestionId } = useQuiz()

  const onSubmit = async (data: StartFormType) => {
    addUserName(data.name)
    try {
      await addQuestions()
      const id = nextQuestionId(0)
      navigateTo(`/quiz/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <QuizBox>
      <MainTitle>{'Bem vindo(a) ao Quiz!'}</MainTitle>
      <GreetingsForm onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Digite seu nome" {...register('name')}
          className={errors.name ? 'error' : ''}
        />
        <Button type="submit"
          $color="#000" $padding="8px">
          Iniciar
        </Button>
      </GreetingsForm>
    </QuizBox>
  )
}