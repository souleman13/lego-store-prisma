import React, {Component} from 'react'
import Product from '../products/product'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import {user_id} from '../../config/auth'

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            cart: {},
            subtotal: 0,
            tax: 0,
            total: 0
        }
    }
    async componenetWillReveiveProps(nextProps){
        if(!nextProps.data.loading && nextProps.data.user.cart.products.length > 0){
            const subtotal = await nextProps.data.user.cart.products.reduce(product => product.price)
            const tax = await subtotal*.08
            const total =  await tax + subtotal
            this.setState = {
                subtotal,
                tax,
                total
            }
        }
    }
    render(){
        const {subtotal,tax,total} = this.state
        const {user, loading} = this.props.data
        return(!loading && user ?
        <div>
            {user.cart.products === 0? <div>no products in cart!</div>:
            <div>
            <section>
                {user.cart.products.map(product => <Product cartView={true} product={product} />)}
            </section>
            <section>
                <div>subtotal:{subtotal}</div>
                <div>tax:{tax}</div>
                <div>total:{total}</div>
            </section>
            </div>
            }    
        </div>
            :<div>loading...</div>
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