import React,{useState} from "react";
import './../css/Content.css';
import isearch from './imgsss/search_icon.png'
import ikeyboard from './imgsss/keyboard-png.png'
import imicro from './imgsss/google_mic.png'

function Content(){
    const [state, setState] = useState(false)

    const onFocusInput=()=>{
        setState(!state)
    }

    return(
        <div className="contener">
            <h1 className="textlayout">Google</h1>
            <div className={`boxinput ${state ? 'focusInput' : ''}`}>
                <div className="icon-left"><img className="fix-size-h" src={isearch}/></div>
                <input className="inputs" onFocus={onFocusInput} type={"text"}/>
                <div className="flexs">
                    <div className="pad-10 icon-right"><img className="fix-size-h" src={ikeyboard}/></div>
                    <div className="pad-10 icon-right mic"><img className="fix-size-s" src={imicro}/></div> 
                </div>
            </div>
            <div className="button">
                <button className="button-bottom" type="submit">ค้นหาด้วย Google</button>
                <button className="button-bottom" type="submit">ดีใจจัง ค้นแล้วเจอเลย</button>
            </div>
            <div className="text-box">แสดง Google ใน: <a className="ahover">Englisg</a> </div>
        </div>
    )
}

export default Content;