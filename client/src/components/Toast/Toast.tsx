import React, { FC } from "react";
import "./Toast.scss";

import { useAppStore } from "../../hooks/useAppStore";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { clearToast } from "../../store/features/toastSlice/toastSlice";

const mainClass = "toast"

const Toast: FC = () => {
  const { message, type } = useAppStore(state => state.toast);
  const dispatch = useAppDispatch();
  const handleCloseBtn = React.useCallback(() => dispatch(clearToast()), [dispatch]);

  React.useEffect(() => {
    if (!message) return;
    const timer = setInterval(handleCloseBtn, 5000);

    return () => clearTimeout(timer)
  }, [message, handleCloseBtn])

  if (!message) {
    return null;
  }

  return (
    <>
      <div className={`${mainClass} ${mainClass}--${type}`}>
        <div className={`${mainClass}__wrapper`}>
          <div>{message}</div>
          <button onClick={handleCloseBtn} className={`${mainClass}__close`}>X</button>
        </div>
      </div>
    </>
  )
} 

export { Toast }