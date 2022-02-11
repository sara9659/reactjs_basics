import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
       <Link to='/'><h1>Skill Lync</h1></Link> 
      <div className="links">
        <Link to='/'> Home</Link>
        <Link to='/create' className="primary_btn"> New Blog</Link>
        <Link to='/contact'>Contact Us</Link>
        
      </div>
    </nav>
        
    );
}
 
export default Navbar;
 