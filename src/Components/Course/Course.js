import React from "react";
import './Course.css';
import Button from 'react-bootstrap/Button';

const Course = ({ course,handleButton }) => {
  const { name, instructor, price, image} = course;
  return (
    <div className="course">
        <div>
            <img src={image} alt="" />
        </div>
      <div>
        <h1>Course name:{name}</h1>
        <h3>Course Instructor:{instructor}</h3>
        <p>Course price:{price}</p>
        <Button variant="warning" onClick={()=>handleButton(course)}>Enroll</Button>
      </div>
    </div>
  );
};

export default Course;
