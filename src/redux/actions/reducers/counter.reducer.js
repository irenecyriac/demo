import { INCREMENT_COUNTER,DECREMENT_COUNTER, RESET_COUNTER, FETCH_RECIPE } from "./actionType";

const initialState = {
    counter:0,
    appName:"redux",
    recipe: []
}

export const counterReducer = (state=initialState,action)=>{
    switch(action.type){
        case INCREMENT_COUNTER:
            return{
                ...state,
                counter:state.counter+1,
                appName:action.payload
            }
            case DECREMENT_COUNTER:
                return{
                    ...state,
                    counter:state.counter-1,
                    appName:action.payload
                }
                case RESET_COUNTER:
                    return{
                        ...state,
                        counter:0
                    }
                    case FETCH_RECIPE:
                        return{
                            ...state,
                            recipe:action.payload
                        }
                    default:
                        return state
    }
}