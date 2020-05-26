import React from 'react';
import {buyCake} from '../redux/cake/cakeAction'
import {connect} from 'react-redux'

function CakeComponent (props){
    return(
        <div>
            <h1>number of cake:{props.numberOfCake}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps=state=>{

    return {
        numberOfCake:state.numberOfCake
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        buyCake: ()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent)