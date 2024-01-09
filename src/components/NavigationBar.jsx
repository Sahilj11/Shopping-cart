import { Link } from "react-router-dom";
export function NavigationBar({totalItem}) {
    const liStyle = {
        display:"flex",
        justifyContent:"space-around",
        height:"2rem",
        fontSize:"1.2rem"
    }
    const navBar = {
        fontSize:"1.1rem",
    }
    return (
        <nav className="bg-blue-300" style={navBar}>
            <li style={liStyle} >
                <ul><Link to="/">Home</Link></ul>
                <ul><Link to="/cart">Cart[{totalItem}]</Link></ul>
            </li>
        </nav>
    );
}
