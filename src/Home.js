import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ])

    // const [name, setName] = useState('mario');

    // const handelDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // };

    // useEffect(()=>{
    //     setTimeout( () => {
    //         fetch('http://localhost:8000/blogs')
    //         .then(res => {
    //             console.log(res);
    //             if(!res.ok){
    //                 throw Error('could not fetch the data fo that resource');
    //             }
    //             return res.json();
    //         })
    //         .then((data)=> {
    //             setBlogs(data);
    //             setPending(false);
    //             setError(null);
    //         })
    //         .catch(err=>{
    //             setError(err.message);
    //             setPending(false);
    //         })
    //     },  1000)
        
    // }, []);

    // useEffect(()=>{
    //     console.log('use effect ran');
    //     console.log(name);
    // }, [name]);
    // let name = 'Mario';
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    
    // const handleClick = () => {
    //     // name = 'Pocket';
    //     // console.log('hello pocket');
    //     // console.log(name);
    //     setName('Pocket');
    //     setAge(30)

    // } 

    // const handleClickAgain = (name) => {
    //     console.log('hello '+ name);
    // } 

    return (  
        <div className="home">
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
            {/* <button onClick={() => setName('luigi')}>change evet</button>
            <p>{name}</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/> */}
        



            {/* <h2>Homepage</h2>
            <p>{name} is {age}</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={() => {
                handleClickAgain('mario')
            }}>Click me again</button> */}

        </div>
    );
}
 
export default Home;