import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <Link to="/">Главная</Link>
            <Link to="/chats">Чаты</Link>
            <Link to="/profile">Профиль</Link>
        </nav>
    );
}