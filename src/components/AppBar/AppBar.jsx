import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <header>
            <Navigation />
            <UserMenu />
            {isLoggedIn ? <UserMenu/> : <AuthNav />}
        </header>
    );
}