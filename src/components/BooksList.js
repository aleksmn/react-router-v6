import { Link } from "react-router-dom";

const BooksList = () => {
    return (
        <>
            <h1>Список книг</h1>

            <Link to="/books/1">Первая книга</Link><br/>
            <Link to="/books/2">Вторая книга</Link><br />
            <Link to="/books/new">Добавить книгу...</Link><br />

        </>
    );
}

export default BooksList;