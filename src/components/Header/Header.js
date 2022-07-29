import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-lg-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/posts">Posts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add-post">Add post</NavLink>
                        </li>
                    </ul>
                    <div className="col-md-3 text-lg-end">
                        <NavLink to="/login" className="btn mt-2 d-block d-md-inline-block btn-outline-primary me-2">Login</NavLink>
                        <NavLink to="/sign-up" className="btn mt-2 d-block d-md-inline-block btn-outline-success">Sign-up</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header