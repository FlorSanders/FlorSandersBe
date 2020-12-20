import React, {useState, useEffect} from 'react';

export default function Toaster({show, children, color, close}) {
    const [progress, setProgress] = useState(0);
    const speed = 0.75;

    const calculateProgress = () => {
        if(progress >= 100){
            setProgress(0)
            close();
        } else if (show === true) {
            setProgress(progress + speed);
        }
    }

    useEffect(() => {
        var refresh = 10;
        if(show === true){
            setTimeout(() => {
                calculateProgress()
            }, refresh)
        }
    })

    return(
        show ? <div style={{position: 'fixed', left: '15vw', top: '2rem', right:'15vw', filter:'drop-shadow(-1px 1px 2px  hsl(0, 0%, 21%)'}}><div className={`notification is-${color} mb-0`}>
            <button className="delete" aria-label="close" onClick={close} /> 
            {children}
        </div><progress className={`progress is-small is-${color}`} value={100-progress} max='100' style={{marginTop:'-0.75rem', zIndex:3, position:'relative', borderRadius:'0px 0px 4px 4px'}} /></div> : null
    )
}

Toaster.defaultProps = {
    show: false,
    color: 'primary',
    close: () => {},
}