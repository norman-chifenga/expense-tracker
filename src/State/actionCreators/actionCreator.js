export const transactionUpdate = (amount)=>{
    return (dispatch) =>{
        return(
            dispatch({
                type: "transactionUpdate",
            })
        )
    }
}

export const transactionDelete = (id)=>{
    return (dispatch) =>{
        return(
            dispatch({
                type: "transactionDelete",
                payload: id
            }
          )
        )
    }
}
export const transactionAdd = (data)=>{
    return (dispatch) =>{
        return(
            dispatch({
                type: "transactionAdd",
                payload: data
            }
          )
        )
    }
}
export const transactionDeleteAll = ()=>{
    return (dispatch) => {
        return(
            dispatch(
                {
                    type: "transactionDeleteAll"
                }
            )
        )
    }
}
export const changeIncome =(amount)=>{
    return dispatch=>{
        return(
            dispatch({
                type: "changeIncome",
                payload: amount
            })
        )
    }
}

export const changeExpense = (amount)=>{
    return dispatch=>{
        return(
            dispatch({
                type:"changeExpense",
                payload:amount
            })
        )
    }
}