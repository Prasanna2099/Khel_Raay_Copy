const HeroSection = ({ imgSrc, heading, paragraph }) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={imgSrc} className="rounded-lg" />
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="py-6">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
