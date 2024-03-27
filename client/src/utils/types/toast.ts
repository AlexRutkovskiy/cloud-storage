export const enum TYPE_TOAST {
  SUCCESS = "primary",
  WARNING = "warning",
  NEGATIVE = "negative",
}

export interface IToast {
  message: string;
  type: TYPE_TOAST;
}
