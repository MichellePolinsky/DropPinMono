import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import config from './config/fbConfig'
// import Axios from 'axios'

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
  const firebaseAppAuth = firebase.auth()
  const provider = {
    googleProviders: new firebase.auth.GoogleAuthProvider()
  }
  const signInWithPopup = () => {
    firebase
      .auth()
      .signInWithPopup(provider.googleProviders)
      .then(result => {
        console.log(result)
        var token = result.credential.accessToken
      })
  }

  // const saveUser = async result => {
  //   const resp = await Axios.post('/api/', {
  //     // User Model Info?
  //   })
  //   setId(resp.data)
  //   console.log(resp.data)
  // }
  const signout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Redirect to google sign out.
        window.location.assign('https://localhost:5001/')
      })
      .catch(function(error) {
        window.alert('You signed out')
      })
    // })
  }

  return (
    <div>
      <div className="loginButtons">
        <div>
          <button onClick={() => signInWithPopup()} type="">
            Sign in
          </button>
        </div>

        <div>
          <button onClick={() => signout()} type="">
            Signout
          </button>
        </div>
      </div>
    </div>
  )
}
export default Login
