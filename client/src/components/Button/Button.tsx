import { FC, ButtonHTMLAttributes } from "react";
import "./Button.scss"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: string;
  styleType?: STYLE_TYPE;
}

const enum STYLE_TYPE {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  NEGATIVE = "negative",
}

const mainClass = "button";

const Button: FC<IProps> = ({
  title,
  icon,
  styleType = STYLE_TYPE.PRIMARY,
  ...props
}: IProps) => {
  return (
    <button className={`${mainClass} ${mainClass}--${styleType}`} {...props}>
      {icon && <img src={icon} alt="" className={`${mainClass}__icon`} />}
      {title}
    </button>
  )
}

export { Button, STYLE_TYPE }