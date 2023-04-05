import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Praylist from './component/Praylist';
import Zaket from './component/Zaket';
import Recipe from './component/Recipe';
import Hadith from './component/Hadith';

function App() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Navbar/>
              <Praylist />
            </React.Fragment>
          }
        />
        <Route
          path="/Zaket"
          element={
            <React.Fragment>
              <Navbar />
              <Zaket />
            </React.Fragment>
          }
        />
       <Route
          path="/hadith"
          element={
            <React.Fragment>
              <Navbar />
              <Hadith/>
            </React.Fragment>
          }
        />
        <Route
          path="/recipe"
          element={
            <React.Fragment>
              <Navbar />
              <Recipe />
            </React.Fragment>
          }
        />
      </Routes>
    );
  }
  
  export default App