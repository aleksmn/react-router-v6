import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import BooksList from './pages/BooksList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/books" element={< BooksList />} />
    </Routes>
  )
}

export default App;