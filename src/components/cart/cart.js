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
            total: 0,
            products: []
        }
    }
    async componentWillReceiveProps(nextProps){
        //check loading and data
        if(!nextProps.data.loading && nextProps.data.user.cart.products){
            //combine like id's in products obj
            let products = {}
            nextProps.data.user.cart.products.map(p =>(products[p.product.id] ?
                products[p.product.id].quantity++
                :
                products[p.product.id] = { ...p.product, quantity:1 }
            ))
            //convert obj to array
            products = Object.values(products)

            //calculate totals

            let subtotal = 0
            await products.map(p => subtotal = subtotal + (p.price*p.quantity))
            const tax = await subtotal*.08
            const total = await tax + subtotal
            //set state once with totals and products
            await this.setState({
                subtotal,
                tax,
                total,
                products
            })
        }
    }
    render(){
        const {subtotal,tax,total} = this.state
        const {user, loading} = this.props.data
        return(loading && !user ? <div>loading...</div> :
        <div>
            {user.cart.products === 0 ? <div>no products in cart!</div>:
            <div>
            <section>
                {this.state.products.map(p => {
                    return <Product cartView={true} product={p} key={p.id} />
                    })}
            </section>
            <section>
                <div>subtotal:{subtotal}</div>
                <div>tax:{tax}</div>
                <div>total:{total}</div>
            </section>
            </div>
            }    
        </div>
        )
    }
}
const USER_CART_QUERY = gql`
    query($id: ID!){
        user(id:$id){
            cart{
                products{
                    id
                    product{
                        id
                        name
                        imgURL
                        price
                        desc
                    }
                }}}}`

export default graphql(USER_CART_QUERY,{options:(props) => ({variables:{id: user_id}})})(Cart)