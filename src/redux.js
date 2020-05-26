import redux from 'redux';

const createstore=redux.createstore;

const SAVE_STR='SAVE_STR';

export function saveString()
{
    return(
        {
            type:'SAVE_STR'
        }
    )
}

 const intialValue={
    intialValue:5
}

export const reducer=(state=intialValue,action)=>{
    switch(action.type)
    {
        case SAVE_STR: return{
            intialValue:5  }
        default :return state;    
    }
    
}

const store=createstore(reducer);

 export function getState()
{
    Console.log(store.getState());
}