import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import BooksList from './components/BooksList';
import Book from './components/Book';
import About from './components/About';
import Contacts from './components/Contacts';
import Navbar from "./components/Navbar";
import NewBook from './components/NewBook';
import NotFound from './components/NotFound';
import { BookLayout } from './components/BookLayout';

const App = () => {
  return (
    <div className="content">

      <Routes>
        <Route path="*" element={<h1>Лого!</h1>}></Route>
        <Route path="/books/*" element={<h1>Лого на странице с книгами!</h1>}></Route>
      </Routes>
      
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/contacts" element={< Contacts />} />

        <Route path="/books" element={<BookLayout />}>
          <Route index element={< BooksList />} />
          <Route path=":id" element={< Book />} />
          <Route path="new" element={< NewBook />} />
        </Route>

        {/* <Route path="/books/:id" element={< Book />} />
        <Route path="/books/new" element={< NewBook />} /> */}

        <Route path="*" element={< NotFound />} />
      </Routes>
    </div>
  )
}

export default App;