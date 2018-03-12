import React, {Component} from 'react'
import Product from '../products/product'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import {user_id} from '../../config/apollo'

class Cart extends Component {
    render(){
        const {loading, user} = this.props.data
        return( !loading && user?
            <section>
                cart items
                {user.cart.products.length === 0? <div>no products in cart!</div>:
                user.cart.products.map(product => <Product cartView={true} product={product} />)}
            </section>
            :
            <div>loading...</div>
        )
    }
}
const USER_CART_QUERY = gql`
    query($id: ID!){
        user(id:$id){
            cart{
                products{
                    id
                }
            }
        }
    }
`

export default graphql(USER_CART_QUERY,{options:(props) => ({variables:{id: user_id}})})(Cart)