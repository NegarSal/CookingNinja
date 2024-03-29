import { BrowserRouter, Routes, Route } from 'react-router-dom';

// page components
import Navbar from './components/Navbar';
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'

// styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Navbar />
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
