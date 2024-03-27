import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import { Navbar } from "../NavBar";
import { AuthContainer } from "../AuthContainer";
import { AuthForm } from "../AuthForm";

import { NotFoundPage } from "../../pages/404";

const mainClass = 'app';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className={`${mainClass}`}>
        <Navbar />
        <main className={`${mainClass}__content`}>
          <Routes>
            <Route path="/" element={<>Dashboard</>} />
            <Route path="/auth" element={<AuthContainer />}>
              <Route path="login" element={<AuthForm isLogin />} />
              <Route path="register" element={<AuthForm />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export { App };
