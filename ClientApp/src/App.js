// import React, { Component } from 'react'
// import { Route } from 'react-router'
// import { Layout } from './components/Layout'
// import { Home } from './components/Home'
// import { FetchData } from './components/FetchData'
// import { Counter } from './components/Counter'
// import Testing from './Testing'

// export default class App extends Component {
//   static displayName = App.name

//   render() {
//     return (
//       <Layout>
//         <Route exact path="/" component={Home} />
//         <Route path="/counter" component={Counter} />
//         <Route path="/fetch-data" component={FetchData} />
//         <Route path="/hello" component={Testing} />
//       </Layout>
//     )
//   }
// }

import React, { Component } from 'react'
import Logo from './images/Logo.png'
import Home from './components/Home'
import Header from './components/Header'
import Results from './components/Results'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Results" component={Results}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
