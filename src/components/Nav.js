import { NavLink } from 'react-router-dom';

const Nav = () => {
  return ( 
    <nav className="main-nav">
        <ul>
          <li><NavLink to="/search/tech" style={{textDecoration: 'none'}}>Tech</NavLink></li>
          <li><NavLink to="/search/mobile" style={{textDecoration: 'none'}}>Mobile</NavLink></li>
          <li><NavLink to="/search/fitness" style={{textDecoration: 'none'}}>Fitness</NavLink></li>
          <li><NavLink to="/search/music" style={{textDecoration: 'none'}}>Music</NavLink></li>
        </ul>
      </nav>
   );
}
 
export default Nav;