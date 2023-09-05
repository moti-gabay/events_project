const HomePage: React.FC = () => {
  return (
    <div className="h-[55vh] sm:h-[68vh] md:h-[70vh] lg:h-[74vh] relative">
      <img src="" alt="" />
      <div
        style={{
          backgroundImage: "url(./imghall.jpg)",
          backgroundSize: "cover",
          position: "relative",
        }}
        className="text-center flex items-center justify-center h-[50vh] sm:h-[62vh] md:h-[64vh] lg:h-[68vh]"
      >
        <div className=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // background opacity
          }}
        />

        <div className="absolute text-slate-100">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-1 sm:mb-4 font-semibold">
            Picasso Events
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            find your site
          </h2>
        </div>
      </div>
      <div className="absolute rounded-xl left-[30%] top-[400px] mx-auto w-[400px] border text-center text-white items-center text-xl">
        <h1>Hi Moti</h1>
        <p>Table Number : 0</p>
        <p>your menu :</p>
        <p>more....</p>
      </div>
    </div>
  );
};

export default HomePage;
