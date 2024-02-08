import { useNavigate } from "react-router-dom"
const Dashboard = () => {
  let navigate=useNavigate()
  return (
    <>
      <h1>Dashboard Pages</h1>
      <button onClick={()=>{navigate("/logout")}}>logout</button>
    </>
  )
}

export default Dashboard
