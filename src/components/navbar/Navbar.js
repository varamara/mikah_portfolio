import './navbar.scss';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Navbar</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">about</a>
                <a href="/projects">projects</a>
            </div>
        </div>
     );
}
 
export default Navbar;