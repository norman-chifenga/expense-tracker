import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

// reports component
export const Reports = ()=>{
    const state = useSelector(state=>state)
    const [balance,setBalance] = useState(0)

    useEffect(()=>{
        setBalance(state.income-state.expense)        
    },[state.income,state.expense])
    
    return(
        <div className="reports-container">
            <div>
            <p>Income</p>
                <h2 className={"clr-blue"} > ${state.income}</h2>
            </div>
            <div>            
            <p>Expenses</p>
                <h2 className={state.expense > 0 ? "clr-red" : "clr-blue"}>${state.expense}</h2>
            </div>
            <div>
            <p>Balance</p>
                <h2 className={ Math.sign(balance) === -1 ? "clr-red" : "clr-blue" }>
                   { Math.sign(balance) === -1 ? `-$${Math.abs(balance.toFixed(2))}`: `$${balance.toFixed(2)}`}
                    </h2>
            </div>
        </div>
    )
}