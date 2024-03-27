import { FC } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"

import cloudImage from "../../assets/cloud.png"

const mainClass = "navbar";

const Navbar: FC = () => {
  return (
    <header className={`${mainClass}`}>
      <div className={`${mainClass}__wrapper`}>
        <div className={`${mainClass}__column`}>
          <img src={cloudImage} alt="logo" className={`${mainClass}__logo`}/>
          <span className={`${mainClass}__title`} >Cloud Storage</span>
        </div>
        <div className={`${mainClass}__column`}>
          <Link 
            to={'/auth/register'}
            className={`${mainClass}__link`}
          >Register</Link>
          <Link 
            to={'/auth/login'}
            className={`${mainClass}__link`}
          >Login</Link>
        </div>
      </div>
    </header>
  )
}

export { Navbar }