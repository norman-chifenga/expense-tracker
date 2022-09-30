export const reducerExpense = (state=0,action)=>{
    switch (action.type){
    case "changeExpense":
        return action.payload
    default:
        return state
    }   
}