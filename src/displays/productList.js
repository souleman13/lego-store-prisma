import React, {Component} from 'react'

import {ModalButton} from '../components/buttons'

import AllProductsList from '../components/products/allProductsList'
import ProductForm from '../components/forms/product_create_update'

export default class extends Component {
    render(){
        return(
            <main>

                <ModalButton label={'+Product'} display={<ProductForm id={'new'} />} />

                <AllProductsList />
            </main>
        )
    }
}