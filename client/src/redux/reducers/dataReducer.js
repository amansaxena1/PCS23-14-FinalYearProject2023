import { ActionTypes } from "../constants/action-types"

const initialStates = {
    data : []
}

export const dataReducer = (state = initialStates, {type,payload}) =>{
    switch(type){
        case ActionTypes.SET_DATA:
            return {...state , data : payload};
        default:
            return state;
    }
}