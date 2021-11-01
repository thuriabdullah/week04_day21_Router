import { Link, Route, useParams, useHistory } from "react-router-dom";

function Navbar() {
    return (
      <div className="nav">
          <div className="container">

      
        <ul>
        <li> <Link to="/">Home </Link></li>
        <li> <Link to="/Contact">Contact</Link></li>
        <li><Link to="/Aboutus">Aboutus</Link></li>
         </ul>
       
      </div>
      </div>
    );
  }
  export default Navbar;