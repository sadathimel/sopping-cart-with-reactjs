import React, { useState } from "react";
import Course from "../Course/Course";
import courseData from "../../fakeData/courseData";
import Cart from "../Cart/Cart";
import './Shop.css'

const Shop = () => {
  const [courses, setCourses] = useState(courseData);
  const [cart, srtCart] = useCart(0);

  return (
    <div className="shop">
      <div className="course-container">
        {courses.map((course) => (
          <Course course={course}></Course>
        ))}
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
