import React,{useState} from "react";
function Calculator(){

  
    const [value,setValue]=useState("");


    return(
        <div className="main-cal">
            <div className="cal">CALCULATOR</div>
            <div className="diplay-cal">{value}</div>
            <div className="btn-cal">
            <div className="button-1"> 
                <span><button  onClick={e=>setValue('')}>AC</button></span>
                <span><button onClick={e=>setValue(value.slice(0,-1))}>⌫</button></span>
                <span><button onClick={e => setValue(value+e.target.value)} value={"+/-"}>+/-</button></span>
                <span><button onClick={e => setValue(value+e.target.value)} value={"/"}>÷</button></span>
                </div>

                <div className="button-2"> 
                <span><button onClick={e => setValue(value+e.target.value)} value={"7"}>7</button></span>
                <span><button onClick={e => setValue(value+e.target.value)} value={"8"}>8</button></span>
                <span><button onClick={e => setValue(value+e.target.value)} value={"9"}>9</button></span>
                <span><button onClick={e => setValue(value+e.target.value)} value={"*"}>X</button></span>
                </div>

                <div className="button-3"> 
                <span><button onClick={e => setValue(value+e.target.value)} value={"4"}>4</button></span>
                <span><button onClick={e => setValue(value+e.target.value)} value={"5"}>5</button></span>
                <span><button onClick={e => setValue(value+e.target.value)} value={"6"}>6</button></span>
                <span><button onClick={e => setValue(value+e.target.value)} value={"-"}>-</button></span>
                </div>

                <div className="button-4"> 
                <span><button  onClick={e => setValue(value+e.target.value)} value={1}>1</button></span>
                <span><button  onClick={e => setValue(value+e.target.value)} value={2}>2</button></span>
                <span><button onClick={e => setValue(value+e.target.value)} value={3}>3</button></span>
                <span><button  onClick={e => setValue(value+e.target.value)} value={"+"}>+</button></span>
                </div>

                <div className="button-5"> 
                <span><button onClick={e => setValue(value+e.target.value)} value={"%"}>%</button></span>
                <span><button onClick={e => setValue(value+e.target.value)} value={"0"}>0</button></span>
                <span><button onClick={e => setValue(value+e.target.value)} value={"."}>.</button></span>
                <span><button onClick={e => setValue(eval(value))} value={"="}>=</button></span>
                
                </div>
                
                
            </div>
        </div>
    );

}

export default Calculator