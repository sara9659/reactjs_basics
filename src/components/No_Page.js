import { Link } from "react-router-dom";

const No_Page = () => {
    return ( 
        <>
        <div>
              404 - Ooopps, Sorry page not found. please check the URL.
        </div>
        <Link to="/"> Back to home</Link>
        </>
     );
}
 
export default No_Page;