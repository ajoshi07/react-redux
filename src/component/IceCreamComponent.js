import React from 'react';
import {buyIceCream} from '../redux/icecream/IceCreamAction'
import {connect} from 'react-redux'

function IceCreamComponent (props){
    return(
        <div>
            <h1>number of IceCream :{props.noOfIceCream}</h1>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps=state=>{

    return {
        noOfIceCream:state.icecream.noOfIceCream
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        buyIceCream: ()=> dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamComponent)