import React, {Component} from 'react'

import {ModalButton} from '../components/buttons'

import AllProductsList from '../components/products/allProductsList'
import CreateProductForm from '../components/forms/createProduct'

export default class extends Component {
    render(){
        return(
            <main>

                <ModalButton  label={'Add Product'} display={<CreateProductForm />} />

                <AllProductsList />
            </main>
        )
    }
}