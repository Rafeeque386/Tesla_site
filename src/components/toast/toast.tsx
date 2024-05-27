import React, { useEffect } from 'react';
import { toast, ToastOptions, TypeOptions } from 'react-toastify';

interface ToastProps {
  type: TypeOptions;
  message: string;
  position?: ToastOptions['position'];
  autoClose?: ToastOptions['autoClose'];
  hideProgressBar?: ToastOptions['hideProgressBar'];
  closeOnClick?: ToastOptions['closeOnClick'];
  pauseOnHover?: ToastOptions['pauseOnHover'];
  draggable?: ToastOptions['draggable'];
  progress?: ToastOptions['progress'];
  theme?: ToastOptions['theme'];
}

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  position = 'top-right',
  autoClose = 3000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress,
  theme = 'colored',
}) => {
  const showToast = () => {
    const toastOptions: ToastOptions = {
      position,
      autoClose,
      hideProgressBar,
      closeOnClick,
      pauseOnHover,
      draggable,
      progress,
      theme,
    };

    switch (type) {
      case 'error':
        toast.error(message, toastOptions);
        break;
      case 'success':
        toast.success(message, toastOptions);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    showToast();
  }, []);

  return null;
};

export default Toast;
