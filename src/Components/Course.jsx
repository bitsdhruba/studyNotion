import { useState } from "react";
import toast from "react-hot-toast";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const Course = ({ course }) => {
  const [like, setLike] = useState([]);

  const likeHandler = () => {
    if (like.length === 0) {
      setLike([course.id]);
      toast.success("Added to Like");
    } else {
      if (like.includes(course.id)) {
        setLike((prev) => prev.filter((e) => e !== course.id));
        toast.error("Removed");
      } else {
        setLike([...like, course.id]);
        toast.success("Added to Like");
      }
    }
  };

  return (
    <div className="bg-[#457B9D]  w-[356px] rounded-md overflow-hidden shadow-lg">
      <div className="relative ">
        <img src={course.image.url} alt="Kuch toh hai..."></img>
        <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={likeHandler}>
            {" "}
            {like.includes(course.id) ? <FcLike /> : <FcLikePlaceholder />}
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

export default Course;
