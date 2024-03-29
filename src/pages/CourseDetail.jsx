import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SingleCourseDetail from "../Components/SingleCourseDetail";
import { useLocation } from "react-router-dom";

const CourseDetail = () => {
  const { courses } = useContext(AppContext);

  const location = useLocation();
  const courseId = location.pathname.split("/").slice(1);

  const coursearray = [];

  function singleId() {
    courses?.forEach((category) => {
      category.forEach((course) => {
        coursearray.push(course);
      });
    });
    return coursearray;
  }
  singleId();

  const filteredCourse = coursearray.filter(
    (course) => course.id === courseId[0]
  );

  return (
    <div>
      <SingleCourseDetail filteredCourse={filteredCourse[0]} />
    </div>
  );
};

export default CourseDetail;
