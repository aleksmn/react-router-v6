import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import BooksList from './components/BooksList';
import About from './components/About';
import Contacts from './components/Contacts';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="content">
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/books" element={< BooksList />} />
        <Route path="/about" element={< About />} />
        <Route path="/contacts" element={< Contacts />} />
      </Routes>
    </div>
  )
}

export default App;