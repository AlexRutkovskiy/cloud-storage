import React, { FC } from "react";
import "./AuthForm.scss";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { userRegister } from "../../services/userService";
import { setToast } from "../../store/features/toastSlice/toastSlice";
import { TYPE_TOAST } from "../../utils/types/toast";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const mainClass = "auth-form";

interface IProps {
  isLogin?: boolean
}

const FORM_TITLE = {
  LOGIN: "Login",
  REGISTER: "Register"
}

const enum INPUT_TYPE {
  EMAIL = "email",
  PASSWORD = "password"
}

interface IFormData {
  [INPUT_TYPE.EMAIL]?: string;
  [INPUT_TYPE.PASSWORD]?: string;
}


const AuthForm: FC<IProps> = ({isLogin}: IProps) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = React.useState<IFormData>({})
  const title = React.useMemo(() => {
    return isLogin ? FORM_TITLE.LOGIN : FORM_TITLE.REGISTER;
  }, [isLogin])


  const handleSubmit = React.useCallback((e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLogin 
      ? (() => {})() 
      : userRegister(
          formData as Record<string, string>,
          () => setFormData({}),
          () => {},
          (msg: string, isError: boolean) => {
            msg && dispatch(setToast({message: msg, type: isError ? TYPE_TOAST.NEGATIVE : TYPE_TOAST.SUCCESS}));
          }
        );  
  }, [formData, isLogin, dispatch])


  const handleOnChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setFormData((prevState: IFormData) => ({...prevState, [name]: e.target.value}))
  }, [])


  return (
    <>
      <form onSubmit={handleSubmit} className={`${mainClass}`}>
        <div className={`${mainClass}__wrapper`}>
          <h2 className={`${mainClass}__title`}>{title}</h2>
          <div className={`${mainClass}__row`}>
            <Input 
              type={INPUT_TYPE.EMAIL}
              value={formData[INPUT_TYPE.EMAIL] || ''}
              name={INPUT_TYPE.EMAIL}
              onChange={handleOnChange}
              label="Enter email"
              required
            />
          </div>
          <div className={`${mainClass}__row`}>
            <Input 
              type={INPUT_TYPE.PASSWORD}
              value={formData[INPUT_TYPE.PASSWORD] || ''}
              name={INPUT_TYPE.PASSWORD}
              onChange={handleOnChange}
              label="Enter password"
              required
            />
          </div>
          <div className={`${mainClass}__btn-wrapper`}>
            <Button 
              title={title} 
              type="submit"
              disabled={!formData[INPUT_TYPE.EMAIL] || !formData[INPUT_TYPE.PASSWORD]}
            />
          </div>
        </div>      
      </form>  
    </>
  )
}

export { AuthForm }