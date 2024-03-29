import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    
    const { data: blogs, isPending, error } = useFetch('https://cors-anywhere.herokuapp.com/http://localhost:8000/blogs');

    return (
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div> Loading.. </div>}
           {blogs && <Bloglist blogs={blogs} title = "All Blogs"  /> }             
        </div>
    );
}
 
export default Home;