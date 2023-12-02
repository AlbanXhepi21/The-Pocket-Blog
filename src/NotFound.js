import {Link} from 'react-router-dom';
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be</p>
            <Link to='/'>Back to the homen page ...</Link>
        </div>
     );
}
 
export default NotFound;