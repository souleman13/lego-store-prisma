import React, {Component} from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imgURL: '',
            desc: '',
            price: 0
        }
    }

    submitForm = () => {
        console.log(this.state)
        alert(`Thanks for creating an account!`)
        //uncomment the next line to redirect to login post submit
        // window.location.replace('/login')
    }

    render() {
        return (
            <form onSubmit={e => {
                e.preventDefault() //this stops the page from redireting when you hit submit
                this.submitForm()
            }}>
                <TextField required floatingLabelText={`Name`} onChange={e => this.setState({ Firstname: e.target.value })} />
                <TextField required floatingLabelText={`Image URL`} onChange={e => this.setState({ imgURL: e.target.value })} />
                <TextField required floatingLabelText={`Description`} onChange={e => this.setState({ desc: e.target.value })} />
                <TextField required floatingLabelText={`Price`} onChange={e => this.setState({ price: parseInt(10, e.target.value) })} />
                <RaisedButton label='Submit' type='submit' />
            </form>
        )
    }
}
export default ProductForm