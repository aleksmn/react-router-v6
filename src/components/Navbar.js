import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                     style={({ isActive }) => { 
                        return isActive ?  { color: 'cyan' } : {}
                     }}
                     to="/">Главная страница</NavLink>
                </li>
                <li>
                    <NavLink to="/books">Список книг</NavLink>
                </li>
                <li>
                    <NavLink to="/about">О проекте</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Контакты</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;