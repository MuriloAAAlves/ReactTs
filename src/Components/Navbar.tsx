import {  Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark vw-100">
            <div className="container-fluid">
                <div className="collapse navbar-collapse d-flex justify-content-between">
                    <li className="nav-item d-flex align-items-center">
                        <h3><Link to="/to-do-list" className='text-decoration-none text-white vw-5'>To do list</Link></h3>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <h3><Link to="/counter-button" className='text-decoration-none text-white'>Counter Button</Link></h3>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default NavBar