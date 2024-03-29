const SingleCourseDetail = ({ filteredCourse }) => {
  return (
    <div className="max-w-[1200px] min-h-[71vh] mx-auto">
      <div className="flex flex-wrap p-5">
        <div className="">
          <img
            src={filteredCourse.image.url}
            alt="background"
            className="bg-cover bg-no-repeat rounded-lg aspect-square"
          />
          <h1 className="text-2xl my-4 text-[#1D3557] font-medium">
            {filteredCourse.title}
          </h1>
          <button className="bg-gradient-to-r from-[#db5661] to-[#d81828] my-4 rounded-lg text-white text-lg p-3 shadow-md">
            Enrol Now
          </button>
        </div>
        <div>
          <p className="text-xl text-[#1D3557] leading-8 ">
            {filteredCourse.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseDetail;
