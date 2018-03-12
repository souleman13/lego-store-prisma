import gql from 'graphql-tag'
import {apollo} from './apollo'
import * as Storage from './localstorage'

export const login = (username,pw) => {
    alert('no login mutation sotored in graphql')
    apollo.mutate({
        mutation: gql`mutation(

        ){
            login(

        ){
            id
        }`,
        variables: {
            username,
            pw
        }})
        .then((r) => {
            Storage.save('token', r.data.signinUser.token)
            alert('login successful')
            // window.location.replace('/')
        })
        .catch(err => console.log(err))
}

//logout clears localstorage and apollo's redux obj
export const logout = () => {
    Storage.reset()
        .then(() => {
            apollo.resetStore()
            Storage.reset()
            alert('logged out')
            // window.location.replace('/')
        })
        .catch(err => console.error('Logout failed', err))
}

//returns boolean based on wether a login token is present in local storage
export const isAuthenticated = () => {
    try {
        if (!Storage.itemByKey('token')) return false
        return true
    } catch (err) {
        console.error(err)
        return false
    }
}