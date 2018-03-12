import React, {Component} from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            pw: ''
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
                <TextField required floatingLabelText={`Name`} onChange={e => this.setState({ name: e.target.value })} />
                <TextField required floatingLabelText={`Email`} onChange={e => this.setState({ email: e.target.value })} />
                <TextField required floatingLabelText={`Password`} onChange={e => this.setState({ pw: e.target.value })} />
                
                <RaisedButton label='Submit' type='submit' />
            </form>
        )
    }
}
export default UserForm