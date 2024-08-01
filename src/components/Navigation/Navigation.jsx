import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav>
            <NavLink to='/'>
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink to='/contacts'>
                    Contacts
                </NavLink>
            )}
        </nav>
    );
}