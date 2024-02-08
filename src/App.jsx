import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Navbar from './components/Navbar';
import Post from './components/pages/Post';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Logout from './components/pages/Logout';

function App() {
  let isLogged=true;
  let data={
    'st':'User not logged in'
  }
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/*<Route path='/' element={<h1>Hello React Router</h1>}/>*/} 
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contacts />}/>
          <Route path='/contact' element={<Contacts />}/>
          <Route path='/post/:category' element={<Post />}/>
          <Route path='/post/:category/:id' element={<Post />}/>
          <Route path='*' element={<h1>Error 404 Page not Found !!</h1>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='/dashboard' element={isLogged?<Dashboard/>:<Navigate to="/login" replace state={data}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
