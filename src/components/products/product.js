import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import {ModalButton} from '../buttons'
import ProductForm from '../forms/product_create_update'

export default class extends Component {
    render(){
        return(
            <Paper>
                <div>product info</div>

                <RaisedButton label='+Cart' />
                
                <ModalButton label='edit' display={<ProductForm />} />
            </Paper>
        )
    }
}