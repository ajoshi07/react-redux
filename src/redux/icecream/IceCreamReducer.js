import { BUY_ICECREAM } from "./IceCreamType";

const initialstate={
    noOfIceCream:20
}

const IceCreamReducer=(state=initialstate,action)=>{
    
    switch(action.type)
    {
        case BUY_ICECREAM: return {
            ...state,
            noOfIceCream:state.noOfIceCream-1
            
        }
        default :return state
    }
}

export default IceCreamReducer