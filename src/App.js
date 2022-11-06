import './App.css';
import SearchBar from './Componets/SearchBar';
import NotFound from './Componets/NotFound';
import Home from './Componets/HomePage';
import {Link, NavLink,Router, Route, Routes} from "react-router-dom"; 








function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="searchpage" element={<SearchBar/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
     
    </section>
  );
}

export default App;
