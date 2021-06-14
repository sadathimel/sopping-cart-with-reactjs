import React from "react";
import './Course.css';

const Course = ({ course }) => {
  const { name, instructor, price, image } = course;
  return (
    <div className="course">
        <div>
            <img src={image} alt="" />
        </div>
      <div>
        <h1>Course name:{name}</h1>
        <h3>Course Instructor:{instructor}</h3>
        <p>Course price:{price}</p>
        <button>Enroll</button>
      </div>
    </div>
  );
};

export default Course;