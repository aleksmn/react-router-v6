import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Главная страница</Link>
                </li>
                <li>
                    <Link to="/books">Список книг</Link>
                </li>
                <li>
                    <Link to="/about">О проекте</Link>
                </li>
                <li>
                    <Link to="/contacts">Контакты</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;