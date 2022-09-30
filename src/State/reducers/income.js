export const reducerIncome = (state=0,action)=>{
    switch(action.type){
        case "changeIncome":
            return action.payload
        default:
            return state
    }

}