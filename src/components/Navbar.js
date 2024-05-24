import { useContext } from 'react';
import { UserContext } from "./UserContext";
import Routing from '../RoutingUtils';
import LinkButton from './LinkButton';
import ApiRequest from '../ApiRequests';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const userCtx = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

    let navbarDynamicContent;
    if (userCtx.isLoggedIn()) {
        navbarDynamicContent = 
        <UserContext.Consumer> 
        {({ user, ap, money }) => (
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <div className="nav-link">AP {ap}</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">Money {money}</div>
                </li>
                <li className="nav-item">
                    <span className="nav-link active">Welcome {user}</span>
                </li>
                <li className="nav-item">
                    <form method="post" onSubmit={handleLogout}>
                        <button type="submit" className="nav-link">Logout</button>
                    </form>
                </li>
            </ul>
        )}
        </UserContext.Consumer>
    }
    else {
        navbarDynamicContent =
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <LinkButton text="Login" displayLink="Login" 
                        route={Routing.ToLogin} classes="nav-link active" />
            </li>
        </ul>
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">Web Page</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <LinkButton text="Home" displayLink="Home" 
                                route={Routing.ToIndex} classes="nav-link active" />
                        </li>
                    </ul>
                    {navbarDynamicContent}
                </div>
            </div>
        </nav>  
    )

    async function handleLogout(e) {
        e.preventDefault();
        
        await ApiRequest.Logout();
        userCtx.logout();
        if (location.pathname === "/") {
            window.location.reload();
        }
        else {
            navigate(Routing.ToIndex);
        }
    }
}