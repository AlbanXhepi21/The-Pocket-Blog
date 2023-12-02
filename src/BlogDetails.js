import { useParams, useHistory} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
        const {id} = useParams();
        const {data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
        const history = useHistory();
        const handelClick = () => {
            fetch('http://localhost:8000/blogs/' + id, {
                method:'DELETE'
            }).then(()=>{
                history.push('/');
            })
        }

        return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div>{blog.body}</div>
                    <button onClick={handelClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;