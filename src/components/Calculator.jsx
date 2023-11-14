import React, { useState } from 'react'
import './calculator.css'
function Calculator() {
  const [input,setInput] = useState('')
  const displayBtn = (value)=>{
    if(input.length<6)
    {setInput((prevInput)=> prevInput + value)}
  }
  const clearInput = ()=>{
   setInput("")
  }
  const calculate = ()=>{
    try{
      setInput(eval(input).toString())
    }catch{
      setInput('Error')
    }
  }

  const handlePercentage = ()=>{
    setInput((eval(input)/100).toString())
  }
  const deleteInput = ()=>{
    setInput((prevInput)=>prevInput.slice(0,-1))
  }
  return (
    <div className='container'>
      <input type="text" value={input} readOnly />
      <div className='cal-btn'>
        <button onClick={clearInput} className='clr'>AC</button>
        <button onClick={ deleteInput} className='clr'>DEL</button>
        <button onClick={ handlePercentage} className='clr'>%</button>
        <button onClick={ ()=> displayBtn('/')} className='operation'>/</button>
      </div>
      <div className='cal-btn'>
        <button onClick={()=> displayBtn('7')}>7</button>
        <button onClick={()=> displayBtn('8')}>8</button>
        <button onClick={()=> displayBtn('9')}>9</button>
        <button onClick={()=> displayBtn('*')} className='operation'>x</button>
      </div>

      <div className='cal-btn'>
        <button onClick={()=> displayBtn('4')}>4</button>
        <button onClick={()=> displayBtn('5')}>5</button>
        <button onClick={()=> displayBtn('6')}>6</button>
        <button onClick={()=> displayBtn('-')} className='operation'>-</button>
      </div>

      <div className='cal-btn'>
        <button onClick={()=> displayBtn('1')}>1</button>
        <button onClick={()=> displayBtn('2')}>2</button>
        <button onClick={()=> displayBtn('3')}>3</button>
        <button  onClick={()=> displayBtn('+')}className='operation'>+</button>
      </div>

      <div className='cal-btn'>
        <button onClick={()=> displayBtn('0')} className='zero'>0</button>
        <button onClick={()=> displayBtn('.')}>.</button>
        <button onClick={calculate} className='operation'>=</button>
      </div>
    </div>
  )
}

export default Calculator