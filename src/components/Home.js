
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:3000/blogs_value');

    return (
        <>
            <div className="home">
                {error && <div>{error}</div>}
                {isPending && <div>Data Loading...</div>}
                {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

                {/* {blogs && <BlogList blogs={blogs.filter((blogs) => blogs.author === 'Sara')} title="Sara Blogs listed below" />}          */}
            </div>

        </>
    );
}

export default Home;