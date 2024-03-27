import { FC, InputHTMLAttributes } from "react";
import "./Input.scss";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMsg?: string;
}

const mainClass = "input";

const Input: FC<IProps> = ({label, errorMsg, ...props}: IProps) => {
  return (
    <>
      <label className={`${mainClass}`}>
        <span className={`${mainClass}__label`}>{label}</span>
        <input className={`${mainClass}__field`} {...props}/>
        {errorMsg && <span className={`${mainClass}__error`}>{errorMsg}</span>}
      </label>
    </>
  )
}

export { Input }