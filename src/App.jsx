import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Navbar from './components/Navbar';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/*<Route path='/' element={<h1>Hello React Router</h1>}/>*/} 
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contacts />}></Route>
          <Route path='*' element={<h1>Error 404 Page not Found !!</h1>}/>
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
