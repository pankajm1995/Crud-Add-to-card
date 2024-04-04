// 2. Action me function add karne k bad reducer me work 
const INIT_STATE={
    carts:[]
}

export const cartreducer=(state=INIT_STATE,action)=>{
    switch(action.type)
    {
        case  "ADD_CART" :
        return{
            ...state,
            carts :[...state.carts,action.payload]

        }
        default : 
        return state
    }
}