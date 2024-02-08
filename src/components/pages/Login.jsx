import { useLocation } from "react-router-dom"
const Login = () => {
  let location=useLocation();
  console.log(location);
  return (
    <>
      <h1>Login pages</h1>
      <h1>{location.state.st}</h1>
    </>
  )
}

export default Login
