import toast from "react-hot-toast";
import { FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { removeDashboard } from "../redux/Slice";

const LikedCourses = ({ course }) => {
  const dispatch = useDispatch();

  function likehandler() {
    dispatch(removeDashboard(course.id));
    toast.error("Removed from Like");
  }

  return (
    <div className="bg-[#457B9D]  w-[356px] rounded-md overflow-hidden shadow-lg">
      <div className="relative ">
        <img src={course.image.url} alt="Kuch toh hai..."></img>
        <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
          {" "}
          <button onClick={likehandler}>
            <FcLike className="text-3xl" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white text-lg font-semibold leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? `${course.description.substring(0, 100)}...`
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default LikedCourses;
