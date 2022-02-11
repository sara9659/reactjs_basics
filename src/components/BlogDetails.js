import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const   {data :blog ,error, isPending} = useFetch('http://localhost:3000/blogs_value/'+ id )
const navigate = useNavigate()
    const handleDelete = () =>{
       fetch('http://localhost:3000/blogs_value/'+blog.id,{
           method:'Delete'
       })
       .then(()=>{
            navigate('/');
       }
           
       )
    }

           return (
        <>
           <div>
               {isPending && <div>Loading blogs......</div>}
               {error && <div>{error}</div>}
               { blog && (
                 <div>
                    <h1> {blog.title}</h1>
                   <p>Written by : {blog.author} </p>
                   <div className="blog_body">{blog.body} </div>
                      <button className="delete_btn" onClick={handleDelete}>Delete</button>
                    </div>
                  
               )}
               </div>
        </>

    );
}

export default BlogDetails;