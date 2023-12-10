import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { Start, Quiz, Result } from "@pages/index";

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Start />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path='/resultado' element={<Result />} />
      </Route>
    </Routes>
  )
}