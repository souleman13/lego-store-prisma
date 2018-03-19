import React, {Component} from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'

import {ModalButton} from '../buttons'
import UpdateProductForm from '../forms/updateProduct'

import {user_id} from '../../config/auth'

class Product extends Component {
    render(){
        //props deconstruction
        const {addToCart, removeFromCart, product} = this.props

        //cart functions
        const AddToCart = async () => {
            await addToCart({variables:{product_id:product.id}}).then(r => console.log(r))
            alert('product added to cart')
        }
        const RemoveFromCart = async () => {
            await removeFromCart({variables:{product_id:product.id}}).then(r => console.log(r))
            alert('product removed from cart')
        }
        return(
            <Paper className='product'>
                <img src={product.imgURL} alt={'Not Available'}/>
                <section>
                    <h2>{product.name}</h2>
                    <div>{product.price}</div>
                    <p>{product.desc}</p>
                </section>
                
                {this.props.cartView?
                <div>
                    <IconButton iconClassName="material-icons"  onClick={() => RemoveFromCart()}>remove_shopping_cart</IconButton>
                    <div>Quantity: {product.quantity}</div>
                </div>
                :
                <div>
                    <ModalButton label='edit' display={<UpdateProductForm product={product} />} />
                    <IconButton iconClassName="material-icons" onClick={() => AddToCart()} >add_shopping_cart</IconButton>
                </div>
                }

                
            </Paper>
        )
    }
} 
const ADD_TO_CART = gql`
mutation($user_id:ID!, $product_id:ID!){
    addProductToCart(
      user_id: $user_id
      product_id: $product_id
    ){
      cart{
        id
        products{
          id
          name
        }
      }
    }
  }
`
const REMOVE_FROM_CART = gql`
mutation($user_id:ID!, $product_id:ID!){
    removeProductFromCart(
      user_id: $user_id
      product_id: $product_id
    ){
      cart{
        id
        products{
          id
          name
        }
      }
    }
  }`

export default compose(
    graphql(ADD_TO_CART,{name:'addToCart', options: () => ({variables:{user_id}})}),
    graphql(REMOVE_FROM_CART,{name:'removeFromCart', options: () => ({variables:{user_id}})})
)(Product)