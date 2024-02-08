import { useParams ,useSearchParams} from "react-router-dom";
const Post = () => {
  let {category,id}=useParams();
  let [searchParams,setSearchParams]=useSearchParams();
  console.log(searchParams);
  return (
    <>
      <h1>Post Pages -{category}</h1>
      <h1>Post Pages -{id}</h1>
    </>
  )
}

export default Post
