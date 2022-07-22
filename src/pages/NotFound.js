import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div style={{ background: '#888', color: '#fff' }}>
            <h1>Page not found</h1>
            <Link to="/">Go back home</Link>
        </div>
    )
}

export default NotFound