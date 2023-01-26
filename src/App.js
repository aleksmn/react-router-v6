import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import BooksList from './components/BooksList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/books" element={< BooksList />} />
    </Routes>
  )
}

export default App;