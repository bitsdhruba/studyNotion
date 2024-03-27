import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Course from "../Components/Course";

function Dashboard() {
  const { Liked } = useSelector((state) => state);

  return (
    <div className="max-w-[1200px] min-h-[72vh] mx-auto">
      <h1 className="text-3xl text-[#1D3557] text-center my-8">
        Your Liked Courses
      </h1>
      <div className="flex flex-wrap gap-4 my-8 justify-center">
        {Liked.length > 0 ? (
          Liked.map((course) => {
            return <Course course={course} key={course.id} />;
          })
        ) : (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl text-center m-4 ">No Liked courses yet</h1>

            <button className="p-3 m-2 bg-[#E63946] text-white text-xl rounded-lg shadow-lg hover:bg-[#ff5866]">
              <Link to="/">Explore Now</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
