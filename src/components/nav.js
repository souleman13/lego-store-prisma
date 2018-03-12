import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'

import {ModalButton} from './buttons'
import LoginForm from './forms/login'
import UserForm from './forms/user_create_update'

export default class extends Component {
    render() {
        return (
            <section>
                <AppBar title={"Lego Store Prisma"}/>
                <div>
                <ModalButton label={'Login'} display={<LoginForm/>} />
                <ModalButton label={'Sign-up'} display={<UserForm id={'new'}/>} />
                <ModalButton label={'Edit User'} display={<UserForm id={'new'}/>} />
                </div>
            </section>
        )
    }
}