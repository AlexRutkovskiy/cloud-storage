import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./AuthContainer.scss"

const mainClass = "auth-container";

const AuthContainer: FC = () => {
  return (
    <div className={`${mainClass}`}>
      <Outlet />
    </div>
  )
}

export { AuthContainer }