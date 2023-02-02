import { Link, Outlet } from 'react-router-dom';

export function BookLayout() {
    return (
        <>
            <Link to="/books/1">Первая книга</Link><br />
            <Link to="/books/2">Вторая книга</Link><br />
            <Link to="/books/new">Добавить книгу...</Link><br />

            <Outlet />
        </>

    )
}