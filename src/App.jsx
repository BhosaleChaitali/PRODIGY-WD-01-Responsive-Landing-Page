import React from 'react'
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import {Navbar , Firstsection, Service, Exploree, Testmonials, Team, Newsleter  } from './components'

// ReactDOM.render(
//   <Router>
//      <Switch>
//         <Route exact path="/Firstsection" component={Firstsection}/>
//       <Route exact path="/service" component={Service }/>
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// );


const App = () => {
  return (
    
    
    <div>
      <Navbar />
      <Firstsection />
      <Service />
      <Exploree/>
      <Testmonials/>
      <Team/>
      <Newsleter/>

    </div>
      
  )
}

export default App