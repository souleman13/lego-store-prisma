import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

import {ModalButton} from './buttons'
import LoginForm from './forms/login'
import UserForm from './forms/user_create_update'

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false }
    }
    toggleDrawer = () => { this.setState({ open: !this.state.open }) }

    redirect = (route) => { window.location.replace(route) }

    render() {
        return (
            <section>
                <div>
                <AppBar title="React-Forms"
                    onLeftIconButtonClick={this.toggleDrawer}
                    iconElementRight={
                    <div>
                        <ModalButton label={'Login'} display={<LoginForm/>} />
                        <ModalButton label={'Sign-up'} display={<UserForm id={'new'}/>} />
                        <ModalButton label={'Edit User'} display={<UserForm id={'new'}/>} />
                    </div>
                        }
                />
                <Drawer docked={false} open={this.state.open} onRequestChange={this.toggleDrawer}>
                    <MenuItem onClick={() => this.redirect('/')}>Product List</MenuItem>
                    <MenuItem onClick={() => this.redirect('/cart')}>Cart</MenuItem>
                </Drawer>
                </div>
                
            </section>
        )
    }
}