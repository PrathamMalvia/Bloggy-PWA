import axios from "axios";
import React, { useState } from "react";
import BlogCard from "../component/BlogCard";
import LatestBlog from "../component/LatestBlog";

function BlogList() {

  const [blog,setBlog] = useState("")
  const [latestBlog,setLatestBlog] = useState("")


  // blog.pop() or blog.shift()
  const BASE_URL = "https://floran-blog-api.herokuapp.com/"
  React.useEffect(() => {
    axios.get(BASE_URL).then(
      (res) => {
        setBlog(res.data.reverse())
        setLatestBlog(res.data.shift())
      }
    ).catch(
      err => console.log(err)
    )
  },[])

  if(blog){
    return (
      <div className="container mx-auto mt-5">
        <LatestBlog blogid={latestBlog.id} title={latestBlog.title} content={latestBlog.description} image={latestBlog.image} />
        <div className="row">
         {
           blog.map((value,index) => (
             <BlogCard blogid={value.id} title={value.title} content={value.description} img={value.image}/>
           ))
         }
        </div>
      </div>)
  } else {
    return "Loading"
  }
}


export default BlogList;
