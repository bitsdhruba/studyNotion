import { useContext } from "react";
import toast from "react-hot-toast";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { AppContext } from "../context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { addDashboard, removeDashboard } from "../redux/Slice";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { loggedin } = useContext(AppContext);

  const { Liked } = useSelector((state) => state);

  const dispatch = useDispatch();

  function likehandler() {
    if (!loggedin) {
      toast.error("Login to Like");
    } else {
      dispatch(addDashboard(course));
      toast.success("Added to Like");
    }
  }

  function unlikeHandler() {
    dispatch(removeDashboard(course.id));
    toast.error("Removed from Like");
  }

  return (
    <div className="bg-[#457B9D]  w-[356px] rounded-md overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#69acd6] duration-300">
      <div className="relative ">
        <img src={course.image.url} alt="background"></img>
        <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
          {" "}
          {Liked.some((e) => e.id === course.id) ? (
            <button onClick={unlikeHandler}>
              <FcLike className="text-3xl" />
            </button>
          ) : (
            <button onClick={likehandler}>
              <FcLikePlaceholder className="text-3xl" />
            </button>
          )}
        </div>
      </div>
      <div className="p-4">
        <Link to={`/${course.id}`}>
          <p className="text-white text-lg font-semibold leading-6">
            {course.title}
          </p>
        </Link>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? `${course.description.substring(0, 100)}...`
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Course;
