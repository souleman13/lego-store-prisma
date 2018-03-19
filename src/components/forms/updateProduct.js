import React, {Component} from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class UpdateProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.product.name,
            imgURL: props.product.imgURL,
            desc: props.product.desc,
            price: props.product.price
        }
    }

    submitForm = async () => {
        await this.props.mutate({
            variables: {
                id: this.props.product.id,
                name: this.state.name,
                imgURL: this.state.imgURL,
                desc: this.state.desc,
                price: this.state.price
            }
        })
        await alert(`Thanks for updating a product!!`)
        window.location.replace('/')
    }

    render() {
        const {loading} = this.props

        return (!loading) ?
            <form onSubmit={e => {
                e.preventDefault() //this stops the page from redireting when you hit submit
                this.submitForm()
            }}>
                <TextField required floatingLabelText={`Name`} value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <TextField required floatingLabelText={`Image URL`} value={this.state.imgURL} onChange={e => this.setState({ imgURL: e.target.value })} />
                <TextField required multiLine={true} floatingLabelText={`Description`} value={this.state.desc} onChange={e => this.setState({ desc: e.target.value })} />
                <TextField required floatingLabelText={`Price`} type='number' value={this.state.price} onChange={e => this.setState({ price: e.target.value })} />
                <RaisedButton label='Submit' type='submit' />
            </form> : <div>loading...</div>
        
    }
}

const UPDATE_PRODUCT_MUTATION = gql`
    mutation($id:ID!, $name: String!, $imgURL:String, $desc:String!, $price:Float!){
        updateProduct(
            id: $id,
            name: $name,
            imgURL: $imgURL,
            desc: $desc,
            price: $price
        ){
            id
        }
    }
`

export default graphql(UPDATE_PRODUCT_MUTATION,{options:(props) => ({variables:{id: props.product.id}})})(UpdateProductForm)