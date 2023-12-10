import { Outlet } from "react-router-dom";
import { DefaultLayoutStyle } from "./styles";

export function DefaultLayout() {
  return (
    <DefaultLayoutStyle>
      <Outlet />
    </DefaultLayoutStyle>
  )
}