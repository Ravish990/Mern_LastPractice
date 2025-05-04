import React from 'react'
import Product from './components/products'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './components/signIn'
import SignUp from './components/signUp'

const App = () => {
  return (
    <div>

    <BrowserRouter>
    <Routes>
     <Route path='/' element= {<Product />}>  </Route>
     <Route path='/user/signIn' element ={<SignIn />}>  </Route>
     <Route path='/user/signUp' element ={<SignUp />}> </Route>
     
    
     
    
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App