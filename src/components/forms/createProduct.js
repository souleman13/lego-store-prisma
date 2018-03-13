import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

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

    submitForm = async () => {
        await this.props.mutate({
            variables: {
                name: this.state.name,
                imgURL: this.state.imgURL,
                desc: this.state.desc,
                price: this.state.price
            }
        })
        await alert(`Thanks for creating a new product!`)
        window.location.replace('/')
    }

    render() {
        return (
            <form onSubmit={e => {
                e.preventDefault() //this stops the page from redireting when you hit submit
                this.submitForm()
            }}>
                <a target='_blank' rel="noopener noreferrer" href="https://github.com/souleman13/lego-store-react-redux/blob/master/src/figures.js">Json of Products</a>
                <TextField required floatingLabelText={`Name`} onChange={e => this.setState({ name: e.target.value })} />
                <TextField required floatingLabelText={`Image URL`} onChange={e => this.setState({ imgURL: e.target.value })} />
                <TextField required floatingLabelText={`Description`} onChange={e => this.setState({ desc: e.target.value })} />
                <TextField required floatingLabelText={`Price`} onChange={e => this.setState({ price: e.target.value })} />
                <RaisedButton label='Submit' type='submit' />
            </form>
        )
    }
}

const CREATE_PRODUCT_MUTATION = gql`
    mutation($name:String!, $imgURL:String, $desc:String!, $price:Float!){
        createProduct(
            name: $name,
            imgURL: $imgURL,
            desc: $desc,
            price: $price
        ){
            id
        }
    }
`
export default graphql(CREATE_PRODUCT_MUTATION)(ProductForm)