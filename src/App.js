import Header from './components/Header';
import ImageList from './components/ImageList';
import NotFound from './components/NotFound';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App({ searchInput }) {
  const [ setSearchTag] = useState('');


  return (
    <div className="container">
    
      <BrowserRouter>
          <Header setSearchTag={setSearchTag} />
          <Routes>
            <Route exact path='/' element={ <ImageList/> } />
            <Route path="/search/:id" element={ <ImageList/> } />
            <Route path="*" element={ <NotFound/> } />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
