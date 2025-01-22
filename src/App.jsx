import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Receitas from './Pages/Receitac'
import SobreNos from './Pages/SobreNos'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/receitas' element={<Receitas/>}></Route>
            <Route path='/sobre-nos' element={<SobreNos/>}></Route>
        </Routes>
      </Router>
     
    </>
  )
}

export default App
