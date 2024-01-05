import { Link } from "react-router-dom";
export function NavigationBar() {
    const liStyle = {
        display:"flex",
        justifyContent:"space-around",
        height:"2rem",
        padding:"10px",
        fontSize:"1.2rem"
    }
    const navBar = {
        fontSize:"1.1rem",
    }
    return (
        <nav style={navBar}>
            <li style={liStyle}>
                <ul><Link to="/">Home</Link></ul>
                <ul><Link to="/cart">Cart</Link></ul>
                <ul>Cart</ul>
            </li>
        </nav>
    );
}
