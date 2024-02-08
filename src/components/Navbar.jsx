import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <>
      <ul>
        <li><NavLink to="/" style={({isActive})=>{return {backgroundColor:isActive?'skyblue':''}}}>Home</NavLink></li>
        <li><NavLink to="/about" style={({isActive})=>{return {backgroundColor:isActive?'skyblue':''}}}>About</NavLink></li>
        <li><NavLink to="/contact" style={({isActive})=>{return {backgroundColor:isActive?'skyblue':''}}}>Conatct</NavLink></li>
      </ul>
    </>
  )
}

export default Navbar
