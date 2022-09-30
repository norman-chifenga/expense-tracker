export const reducer = (state = [], action) => {
    switch (action.type) {
        case "transactionAdd":
            return [...state,action.payload]
        case "transactionUpdate":
            // state.push(getUniqueId())
            return [...state]
        case "transactionDelete":
            return state.filter((item)=>{
                return item.id !== action.payload
            })
        case "transactionDeleteAll":
            return []
        default:
            return state;
    }
};

