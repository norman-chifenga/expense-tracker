import { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreator } from "../State/actionCreators/index"
import {v1 as UniqueID} from "uuid"

// getting today date as default
function getTodayDate(date = new Date()) {
    return [
      date.getFullYear(),
      (date.getMonth() + 1).toString().padStart(2, '0'),
      (date.getDate()).toString().padStart(2, '0'),
    ].join('-');
  }
  
//initial data for transactions
const initialDate  = {
    id: "",
    description: "",
    trans_type: "expense",
    amount: "",
    date: getTodayDate(),
}

// transaction component
export const Transactions = ()=>{
    const dispatch =  useDispatch()
    const {transactionAdd, transactionDeleteAll}  = bindActionCreators(actionCreator,dispatch)
    const [formsData,setDetails] = useState({...initialDate})
    const [show,setShow] = useState({display:"none"})
    const [validate,setValidate] = useState("")

    const submit = (e)=>{
        e.preventDefault()
        if(formsData.amount< 0){
            setValidate("Amount should be greater that 0")
        }else if(formsData.amount ===""){
             setValidate("Please enter Amount")
        }else if(formsData.description ===""){
            setValidate("Please enter Description")
        }else{
            transactionAdd({...formsData,["id"]:UniqueID()})
            setDetails(initialDate)
            handleShow()
        }
    }

    const handleChange =(e)=>{
        if(validate!=="") setValidate("")
        let {name,value} = e.target
        setDetails((data)=>{
            return{...data, [name]:value}
        })
    }

    const handleShow = ()=>{
        show.display === "none" ? setShow({display:"flex"}) : setShow({display:"none"})
    }


    const handleDeleteAll =(e)=>{
        transactionDeleteAll(transactionDeleteAll())
    }

    return(
        <>
        <div className="transaction">
            <button onClick={handleShow}> Add new transactions</button>
            <button onClick={handleDeleteAll}> Delete all transactions</button>
        </div>

        <form className="form-container" style={show} onSubmit={submit}>
            <h3 id="transaction-title">ADD NEW TRANSACTION</h3>
            <div className="form-input">
                <label>Type</label>
                <select name="trans_type" value={formsData.trans_type} onChange={handleChange}>
                    <option value="expense" >Expense</option>
                    <option value="income">Income</option>
                </select>
            </div>

            <div className="form-input">
                <label>Amount</label>
                <input type="number" min="0" name="amount" value={formsData.amount} id="Amount" onChange={handleChange} placeholder="0.00"/>
            </div>

            <div className="form-input">
                <label> Description </label>
                <input type="text" id="Description" name="description" value={formsData.description} onChange={handleChange} placeholder= "text here"/>
            </div>

            <div className="form-input">
                <label>Date</label>
                <input type="Date" name="date" value={formsData.date} id="Date" onChange={handleChange}/>
            </div>
            <p className="validate">{validate}</p>
            <div className="form-btn-container">
            <button className="form-btn" type="submit" value="Submit">Add</button>
            <button className="form-btn" type="reset" onClick={handleShow} value="Reset">Cancel</button>
            </div>
        </form> 
        </>
    )
}