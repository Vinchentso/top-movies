import React from 'react';
//Routing
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//components
import Header from "./components/Header";
//styles
import {GlobalStyle} from './GlobalStyle'
import Home from './components/Home';
import Movie from './components/Movie.js';
import NotFound from './components/NotFound';



const App = () => (
  
    <Router>
          
          <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:movieId' element={<Movie />} />
            <Route path='/*' element={<NotFound/>} />
            
        </Routes>
          
          <GlobalStyle /> 
    
    </Router>
  
  
);

export default App;
