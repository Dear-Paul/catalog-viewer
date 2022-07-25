import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ToastContext } from "./ToastContext";
import { generateUUID } from "../../assets/utils";
import Toast from "../../components/Toast";

export const ToastProvider = ({children}) => {
const [toasts, setToasts] = useState([]);
const [toastType, setToastType] = useState('');

const add = (message, type) => {
    setToasts(previous => ([...previous, {id: generateUUID(), message}]));
    setToastType(type);
};

const removeToast = useCallback( (id) => {
    const filteredToast = toasts.filter((toast) => toast.id !== id);
   console.log(toasts, 'before delete');
    setToasts(filteredToast)
    console.log('toast deleted', toasts)
}, [toasts]) 


useEffect(() =>  {
const interval = setTimeout(() => {
    if(toasts.length){
        removeToast(toasts[0].id)
    }
}, 3000)

return () => {
    clearTimeout(interval);
}
}, [toasts, removeToast])

const contextValue = useMemo(() => ({add}), []);
    return <ToastContext.Provider value={contextValue}>
        {children}
        {createPortal (
            <div className="toast-wrapper">
                {toasts.map( toast => (
                    <Toast 
                    key={toast.id}
                    toast={toast}
                    type={toastType}
                    close={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        , document.body)}
    </ToastContext.Provider>
}
