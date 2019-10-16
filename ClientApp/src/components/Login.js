import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import config from './config/fbConfig'

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

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Redirect to google sign out.
        window.location.assign('https://droppinhero.herokuapp.com')
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
            Sign In
          </button>
        </div>

        <div>
          <button onClick={() => signOut()} type="">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
export default Login
