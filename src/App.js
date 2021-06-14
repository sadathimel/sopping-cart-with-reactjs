import React from 'react';
import courseData from './fakeData/courseData';
import './App.css';
import Shop from './Components/Shop/Shop';

function App() {
  console.log(courseData);
  return (
    <Shop></Shop>
  );
}

export default App;
