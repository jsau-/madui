import { useContext } from 'react';
import { ToastContext } from '../ToastProvider/ToastContext';

export const useToast = () => useContext(ToastContext);
