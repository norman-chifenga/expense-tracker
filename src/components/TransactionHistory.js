import { useSelector, useDispatch} from "react-redux"
import { actionCreator } from "../State/actionCreators/index"
import { bindActionCreators } from "redux"
import { useEffect, useState} from "react"
import { ReactComponent as IconBin } from '../assets/icons/bin.svg'


// transaction history component
export const TransactionHistory = () => {
    const [transactionArry,setTransactionArry] = useState([])
    const [blur,setBlur] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    const transaction = useSelector((state)=> state.transaction) 
    const dispatch = useDispatch()
    const actions = bindActionCreators(actionCreator,dispatch)

    useEffect(()=>{
        setTransactionArry(transaction)
    },[transaction,blur])

    useEffect(()=>{
        setSearchInput("")
    },[blur])

    useEffect(()=>{
        let incomeArray = [0]
        let expenseArray = [0]
        transaction.forEach((item)=>{ 
                if(item.trans_type==="income"){ incomeArray.push(item.amount)}
                if(item.trans_type==="expense"){ expenseArray.push(item.amount)} 
        })

        actions.changeIncome(incomeArray.reduce((total,item)=> { return parseFloat(total) + parseFloat(item)}).toFixed(2))
        actions.changeExpense(expenseArray.reduce((total,item)=> { return parseFloat(total) + parseFloat(item)}).toFixed(2))

    },[transaction, actions]
    )

    const handleSearch = (e)=>{
        let value = e.target.value
        e.preventDefault()
        setSearchInput(value)
        var regex = new RegExp(value, "i");
        setTransactionArry(transaction.filter((value)=>regex.test(value.description)))
    }
    

    return(
        <>
        <div className="transaction-header">
        <h4 >Transaction History</h4>
        <input id="trans-search" type="seach" value={searchInput} onChange={handleSearch} onBlur = {()=>{setBlur(!blur)}} placeholder="search"/>
        </div>
        <ul className="transaction-list" >
            {[...transactionArry].reverse().map((item)=>(
            <li key={item.id}>
                <div>
                    <p>{item.date}</p>
                    {/* <p>{item.trans_type}</p> */}
                </div>
                <p>{item.description}</p>
                 <p>${item.amount}</p>
                <div  className="bin-container" key={item.id} style={{backgroudColor: "green"}}  onClick={()=>actions.transactionDelete(item.id)}>
                    <IconBin id="Layer_1" fill = "rgb(96, 96, 96)" >Delete</IconBin>
                </div>
            </li> 
        ))}
        </ul> 
        </>
    )
}