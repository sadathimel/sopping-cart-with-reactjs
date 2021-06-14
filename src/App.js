import React from 'react';
import courseData from './fakeData/courseData';
import './App.css';
import Shop from './Components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';


function App() {
  console.log(courseData);
  return (
    <div>
      <Header></Header>
       <Shop></Shop>
    </div>
  );
}

export default App;
