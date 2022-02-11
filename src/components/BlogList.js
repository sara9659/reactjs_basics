import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
     
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="preview_blogs" key={blog.id}>
                    <Link to={`/blogdetails/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p> {blog.body}</p>
                    <p>Written by: {blog.author}</p>
                    </Link>
                </div>
            ))} 
        </div>
    );
}

export default BlogList;