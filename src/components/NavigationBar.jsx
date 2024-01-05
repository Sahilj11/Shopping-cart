import { Link } from "react-router-dom";
export function NavigationBar() {
    const liStyle = {
        display:"flex",
        justifyContent:"space-around",
    }
    const navBar = {
        backgroundColor:"#fdfcdc",
        fontSize:"1.1rem",
        padding:"10px"
    }
    return (
        <nav style={navBar}>
            <li style={liStyle}>
                <ul><Link to="/">Home</Link></ul>
                <ul><Link to="/cart">Cart</Link></ul>
                <ul>Profile</ul>
            </li>
        </nav>
    );
}
