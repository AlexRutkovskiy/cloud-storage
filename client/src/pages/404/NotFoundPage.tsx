import { FC } from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss"

const mainClass = "not-found-page";

const NotFoundPage: FC = () => {
  return (
    <div className={mainClass}>
        <div className={`${mainClass}__wrapper`}>
          <h3 className={`${mainClass}__title`}>Oops! <span>Something went wrong</span></h3>
          <span className={`${mainClass}__code`}>404</span>
          <Link to={"/"} className={`${mainClass}__link`} >Go to Dashboard</Link>
        </div>
    </div>
  )
}

export { NotFoundPage }