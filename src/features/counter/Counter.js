import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {koman,baran,reset,incrementAmountBy,decrementAmountBy} from './counterSlice';

function Counter() {
    const count = useSelector((state)=>{return state.counter.count})
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0)
    const addValue = Number(incrementAmount)||0
    const resetAll = ()=>{
      setIncrementAmount(0);
      dispatch(reset())
    }

  return (
    <section> 
        <p>{count}</p>
        <div>
            <button style={{height:40,width:40}} onClick={()=>dispatch(baran())}>+</button>
            <button style={{height:40,width:40}} onClick={()=>dispatch(koman())}>-</button>
            <button style={{height:40,width:40}} onClick={()=>dispatch(resetAll())}>Reset</button>
            <div>
            <input type = "text" value = {incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}/>
            <button onClick={()=>dispatch(incrementAmountBy(addValue))}>Add</button>
            <button onClick={()=>dispatch(decrementAmountBy(addValue))}>Sub</button>
            </div>

        </div>
    </section>
  )
}

export default Counter