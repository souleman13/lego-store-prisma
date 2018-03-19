import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class CheckoutButton extends Component {
    render(){
        return(
            <RaisedButton label='checkout' onClick={() => alert('Thanks for your purchase!')} />
        )
    }
}
export default CheckoutButton

//need to clear cart on checkout and redirect to products