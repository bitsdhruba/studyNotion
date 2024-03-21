import axios from "axios";
import { useEffect, useState } from "react";
import { course } from "../api/api";
import Course from "../Components/Course";

function Home() {
  const [courses, setCourses] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoad(true);
      const { data } = await axios.get(course());
      const catagory = Object.values(data.data);
      setCourses(catagory);
    };
    fetchCourses();
    setLoad(false);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto p-4 h-screen">
      <div className="my-8">
        <h1 className="text-3xl text-[#1D3557] font-medium text-center my-4 border-b-2 border-slate-400 shadow-lg">
          Welcome to StudyNotion
        </h1>
        <div className="flex flex-wrap gap-4 my-8">
          {courses?.map((catagory) => {
            return catagory.map((course) => {
              return <Course course={course} key={course.id} />;
            });
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
