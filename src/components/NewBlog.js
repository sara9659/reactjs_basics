import { useState } from "react"; 
import { useNavigate } from 'react-router';

const NewBlog = () => {

    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('Sara');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog ={title , body, author};
        setIsPending(true);

        fetch('http://localhost:3000/blogs_value/',{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog created');
            setIsPending(false);
            navigate('/')
             
        })
    }
    return (  
        <>
       <div className="create">
        <h2>New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input 
            type="text" 
            required
            value={title}
            onChange = {(e)=>setTitle(e.target.value)}
            />
            <label>Body</label>
            <textarea
            required
            value={body}
            onChange = {(e)=>setBody(e.target.value)}
            ></textarea>
            <label>Author</label>
            <select 
            value={author}  
             onChange = {(e)=>setAuthor(e.target.value)}>
                <option value="sara">Saravana</option>
                <option value="sathish">Sathish</option>
            </select>
            {isPending && <button>Blog Adding...</button>}
           {!isPending && <button>Add Blog</button>}
        </form> 
       </div>
        </>
    );
}
 
export default NewBlog;