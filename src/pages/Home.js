import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { courseapi } from "../api/api";
import Course from "../Components/Course";
import Loader from "../Components/Loader";
import { AppContext } from "../context/AppContext";

function Home() {
  const { loggedin } = useContext(AppContext);

  const [courses, setCourses] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoad(true);
      const { data } = await axios.get(courseapi());
      const catagory = Object.values(data.data);
      setCourses(catagory);
      setLoad(false);
    };
    fetchCourses();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto p-4 h-fit">
      <div className="my-8">
        <h1 className="text-5xl text-[#1D3557] font-medium text-center py-4 my-4 border-b-2 border-slate-400 shadow-lg">
          Welcome to StudyNotion
        </h1>

        {load ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap gap-4 my-8 justify-center">
            {courses?.map((catagory) => {
              return catagory.map((course) => {
                return (
                  <Course course={course} key={course.id} loggedin={loggedin} />
                );
              });
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
