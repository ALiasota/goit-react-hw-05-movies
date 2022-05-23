
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

const HomeView = lazy(()=>{  
  return import('../views/HomeView.js')});

const MoviesView = lazy(()=>import('../views/MoviesView.js'))


const App = () => {
  return (
    <>
    <Navigation />
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<HomeView />} />        
        <Route path="/movies" element={<MoviesView />} />
               
      </Routes>
    </Suspense>
    </>
  );
};

export default App;