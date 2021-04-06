import { GET_CUSTOMER_LIST } from '../actionTypes/CustomerType'

let initialState = {
    customers: []
}

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CUSTOMER_LIST:
            return {
                ...state,
                customers: action.payload
            }
        default:
            return state
    }
}

export default customerReducer