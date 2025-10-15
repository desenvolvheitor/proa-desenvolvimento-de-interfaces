import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './componentes/Header'
import Home from './componentes/Home'
import Escocia from './componentes/Escocia'
import Aruba from './componentes/Aruba'
import Grand from './componentes/Grand'
import Muralha from './componentes/Muralha'
import Footer from './componentes/Footer'
  
function App() {
  return (
    <>
      <main>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Escocia' element={<Escocia/>}/>
            <Route path='/Aruba' element={<Aruba/>}/>
            <Route path='/Grand' element={<Grand/>}/>
            <Route path='/Muralha' element={<Muralha/>}/>
          </Routes>
          <Footer/>
        </Router>
      </main>
    </>
  )
}

export default App
