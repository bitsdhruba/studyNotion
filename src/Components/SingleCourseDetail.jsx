const SingleCourseDetail = ({ filteredCourse }) => {
  return (
    <div className="max-w-[1200px] min-h-[74vh] mx-auto md:flex md:items-center">
      <div className="md:flex md:justify-evenly p-5 md:bg-[#F1FAEE] md:rounded-lg">
        <div className="md:w-[45%]">
          <img
            src={filteredCourse.image.url}
            alt="background"
            className="bg-cover bg-no-repeat rounded-lg aspect-square md:w-[70%]"
          />
        </div>
        <div className="md:w-[45%]  md:shadow-lg md:p-4 md:rounded-lg">
          <h1 className="text-2xl my-4 text-[#1D3557] font-medium">
            {filteredCourse.title}
          </h1>
          <button className="bg-gradient-to-r from-[#db5661] to-[#d81828] my-4 rounded-lg text-white text-lg p-3 shadow-md">
            Enrol Now
          </button>

          <p className="text-xl text-[#1D3557] leading-8 ">
            {filteredCourse.description}. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Totam quis, enim sint praesentium esse aperiam,
            cupiditate impedit, nobis deserunt accusantium labore. Quod, error
            ipsam. Hic vero repellat repellendus ipsam laboriosam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseDetail;
