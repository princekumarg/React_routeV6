import { useParams } from "react-router-dom";
const Post = () => {
  let {category}=useParams();
  return (
    <>
      <h1>Post Pages -{category}</h1>
    </>
  )
}

export default Post
