// src/utils/toast.ts
import { toast } from 'react-toastify';

export const showSuccess = (message: string, status: boolean) => {
  toast.success(message, {hideProgressBar : status});
};

export const showError = (message: string, status: boolean) => {
  toast.error(message, {hideProgressBar: status});
};

export const showInfo = (message: string) => {
  toast.info(message);
};

export const showWarning = (message: string) => {
  toast.warning(message);
};
