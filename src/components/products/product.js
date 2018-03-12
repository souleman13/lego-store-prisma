import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'

import {ModalButton} from '../buttons'
import UpdateProductForm from '../forms/updateProduct'

class Product extends Component {
    render(){
        const {name, imgURL, desc, price} = this.props.product
        return(
            <Paper className='product'>
                <img src={imgURL} alt={'Not Available'}/>
                <section>
                    <h2>{name}</h2>
                    <div>{price}</div>
                    <p>{desc}</p>
                </section>
                
                {this.props.cartView?
                <div>
                    <IconButton iconClassName="material-icons">remove_shopping_cart</IconButton>
                </div>
                :
                <div>
                    <ModalButton label='edit' display={<UpdateProductForm product={this.props.product} />} />
                    <IconButton iconClassName="material-icons">add_shopping_cart</IconButton>
                </div>
                }

                
            </Paper>
        )
    }
} 
export default Product