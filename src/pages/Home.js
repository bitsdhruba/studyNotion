import { useContext, useEffect } from "react";
import Course from "../Components/Course";
import Loader from "../Components/Loader";
import { AppContext } from "../context/AppContext";

function Home() {
  const { loggedin, courses, load, fetchCourses } = useContext(AppContext);

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto p-4 h-fit">
      <div className="my-8 min-h-[74vh]">
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
