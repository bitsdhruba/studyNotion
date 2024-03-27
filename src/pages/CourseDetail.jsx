import { useLocation } from "react-router-dom";

const CourseDetail = () => {
  const location = useLocation();

  console.log(location);

  return <div>this the course detail page.</div>;
};

export default CourseDetail;
