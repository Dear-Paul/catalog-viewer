

const Toast = ({toast, close, type}) => {

    
    return (<div className={`toast ${type}`}
    >
    {toast.message}

    <div className="btn-wrapper">

    <button
    className="no-border-btn"
    onClick={close}>X</button>
    </div>

    
    </div>)
} 

export default Toast;